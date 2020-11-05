<template>
  <div id="mobileContainer" class="container">
    <Header :p1="getHEAD.manager" :p2="getHEAD.pin" :p3="getHEAD.name" />
    <div class="row my-5"></div>
    <div class="row">
      <div class="col-12 p-0">
        <!-- <div class="nav flex-column nav-pills"> -->
        <div class="row m-0" v-for="(p, index) in getMETA" :key="index">
          <div :class="isChi ? 'col-10' : 'col-12'">
            <router-link class="my-1 nav-link line bg-dark" :to="getURL(index)"
              ><span>{{ p.ext1 }}</span
              ><span>{{ getExt2[index] }}</span
              ><span>{{ p.date }}</span
              ><span>{{ p.author }}</span
              ><span>{{ p.caption }}</span></router-link
            >
          </div>
          <button v-if="isChi" type="button" class="my-2 btn btn-del">刪除</button>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <Footer />

    <div class="del_popup" v-if="deletingStep == 2">
      <span class="empty"></span>
      <pre><span class="q7 b0">正在刪除文章: {{ getMETA[this.$store.state.rowIndex].caption }}</span></pre>
      <pre><span class="q7 b0">您的文章減為 {{ newLength-1 }} 篇，支付清潔費 28 Ptt幣</span></pre>
      <span class="q14 b4 col-12 text-center">請按任意鍵繼續</span>
    </div>
  </div>
</template>

<script>
import u from "../assets/util";
import Header from "@/components/m_header.vue";
import Footer from "@/components/m_footer.vue";
export default {
  name: "MForum2",
  components: {
    Header,
    Footer,
  },
  props: ["id"],
  computed: {
    getHEAD: function () {
      var i = parseInt(this.id);
      switch (i) {
        case 0:
          return this.$store.state.forumHeader.detention;
        case 1:
          return this.$store.state.forumHeader.tsueihua;
        case 2:
        case 3:
          return this.$store.state.forumHeader.eil;
        default:
          return {};
      }
      // return this.$store.state.forumPosts["fmeta"];
    },
    getMETA: function () {
      var i = parseInt(this.id);
      switch (i) {
        case 0:
          return this.$store.state.truthForumList;
        case 1:
          return this.$store.state.tsueihuaForumList;
        case 2:
          if (this.$store.state.account == "Chi")
            return this.$store.state.eilZiqiVerForumList;
          else return this.$store.state.eilGuestVerForumList;
        default:
          return [];
      }
      // return this.$store.state.forumPosts["fpost"];
    },
    getExt2: function () {
      var e = [];
      for (var i = 0; i < this.getMETA.length; i++) {
        var num = parseInt(this.getMETA[i].ext2);
        if (num > 99) e.push("爆");
        else if (num < -99) e.push("XX");
        else e.push(this.getMETA[i].ext2);
      }
      return e;
    },
    getPop: function () {
      var p = [];
      for (var i = 0; i < this.getMETA.length; i++) {
        var num = parseInt(this.getMETA[i].ext2);
        var val = "reply2";
        if (num > 0) val = "q10 b0 reply2";
        if (num > 9) val = "q11 b0 reply2";
        if (num > 99 || this.getMETA[i].ext2 == "爆") val = "q9 b0 reply2";
        if (num < -99 || this.getMETA[i].ext2 == "XX") val = "q8 b0 reply2";
        p.push(val);
      }
      return p;
    },
    getId: function () {
      var p = [];
      for (var i = 0; i < this.getMETA.length; i++) {
        if (this.getMETA[i].id == "★") p.push("q11 b0 id2");
        else p.push("id2");
      }
      return p;
    },
    fpost: function () {
      var f = this.$store.state.forumPosts;
      var posts = [];
      var lastId;
      // Filled array
      for (var i = 0; i < 20; i++) {
        if (f.fpost[i] != null) {
          posts.push(f.fpost[i]);
          lastId = f.fpost[i].id;
        } else {
          lastId = lastId += 1;
          posts.push({
            id: lastId,
            ext1: "",
            ext2: "",
            data: "",
            author: "",
            type: "",
            title: "",
          });
        }
      }

      for (var i = 0; i < posts.length; i++) {
        posts[i].author = posts[i].author.padEnd(9);
      }

      return posts;
    },
    isChi: function () {
      if (this.$store.state.account == "Chi") return true;
      else return false;
    },
  },
  data: function () {
    return {
      startIndex: 0,
      inDelete: "",
      isDeleting: false,
      deletingStep: 0,
    };
  },
  created() {},
  mounted() {},
  beforeDestroy() {
    this.$store.commit("setFreeze", false);
  },
  watch: {},
  methods: {
    onDeleteField(value) {
      if (value == null || value == "") return;
      if (value.toLowerCase() == "y") {
        this.deletingStep = 2;
      } else if (value.toLowerCase() == "n") {
        this.deletingStep = 0;
        this.$store.commit("setFreeze", false);
      }
      this.inDelete = "";
    },
    getURL: function (index) {
      var to = this.getMETA[index].to;
      if (to == null || to == "") {
        return "/f/" + this.id;
      } else {
        return {
          name: "Post",
          params: { type: "post", id: to },
        };
      }
    },
  },
};
</script>