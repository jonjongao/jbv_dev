<template>
  <div id="mainContainer">
    <pre><span type="bbsrow" srow="0"><div><span class="" data-type="bbsline" data-row="0"><span><span class="q15 b4">【板主:蘇婕妤/劉芸香】      </span><span class="q11 b4">[翠華] 校慶園遊會主題投票囉</span><span class="q15 b4">       看板《Detention》</span><span class="q7 b0"> </span></span></span><div></div></div></span></pre>
    <pre><span type="bbsrow" srow="1"><div><span class="" data-type="bbsline" data-row="1"><span><span class="q7 b0">[←]離開 [→]閱讀 [Ctrl-P]發表文章 [d]刪除 [z]精華區 [i]看板資訊/設定 [h]說明   </span></span></span><div></div></div></span></pre>
    <pre><span type="bbsrow" srow="2"><div><span class="" data-type="bbsline" data-row="2"><span><span class="q0 b7">   編號    日 期 作  者       文  章  標  題                       人氣:13802  </span><span class="q7 b0"> </span></span></span><div></div></div></span></pre>
    <pre v-for="p in 20" :key="p">
    <span v-if="p-1 < getMETA.length"><span type="bbsrow" srow="6"><div><span class="" data-type="bbsline" data-row="6"><span><span class="q7 b0"><span class="pointer">{{ isSelect(p-1) }}</span><span class="id2">{{ getMETA[p-1].id }}</span><span class="reply2">{{ getMETA[p-1].ext1 }}{{ getMETA[p-1].ext2 }}</span><span class="date">{{ getMETA[p-1].date }}</span><span class="author2">{{ getMETA[p-1].author }}</span><span class="caption2">{{ getMETA[p-1].caption }}</span></span></span></span><div></div></div></span></span>
    <span v-else class="empty"></span>
</pre>
    <pre><span type="bbsrow" srow="23"><div><span class="" data-type="bbsline" data-row="23"><span><span class="q4 b6"> 文章選讀 </span><span class="q0 b7"> </span><span class="q1 b7">(y)</span><span class="q0 b7">回應</span><span class="q1 b7">(X)</span><span class="q0 b7">推文</span><span class="q1 b7">(^X)</span><span class="q0 b7">轉錄 </span><span class="q1 b7">(=[]&lt;&gt;)</span><span class="q0 b7">相關主題</span><span class="q1 b7">(/?a)</span><span class="q0 b7">找標題/作者 </span><span class="q1 b7">(b)</span><span class="q0 b7">進板畫面  </span><span class="q7 b0"> </span></span></span><div></div></div></span></pre>
  </div>
</template>

<script>
import u from "../assets/util";
export default {
  name: "PCForum2",
  props: ["bbsrow"],
  computed: {
    getHEAD: function () {
      return this.$store.state.forumPosts["fmeta"];
    },
    getMETA: function () {
      return this.$store.state.forumPosts["fpost"];
    },
    managerLabel: function () {
      // Original = 【板主:macauboy】
      // space in total = 34
      var f = this.$store.state.forumPosts;
      var s = f.fmeta.manager;
      var a = u.getSpaceCount(f.fmeta.manager);
      var b = u.getSpaceCount(f.fmeta.pin);
      var c = u.getSpaceCount(f.fmeta.name);

      var length = Math.floor((80 - a - b - c) / 2);
      s = s.padEnd(f.fmeta.manager.length + length);
      return s;
    },
    pinLabel: function () {
      // Original = 魔法風雲會
      var f = this.$store.state.forumPosts;
      var s = f.fmeta.pin;
      return s;
    },
    nameLabel: function () {
      // Original =                       看板《Magic》
      // space in total = 36
      var f = this.$store.state.forumPosts;
      var s = f.fmeta.name;
      var a = u.getSpaceCount(f.fmeta.manager);
      var b = u.getSpaceCount(f.fmeta.pin);
      var c = u.getSpaceCount(f.fmeta.name);
      var length = Math.ceil((80 - a - b - c) / 2);
      s = s.padStart(f.fmeta.name.length + length);
      return s;
    },
    viewsLabel: function () {
      var f = this.$store.state.forumPosts;
      var s = "人氣:" + f.fmeta.views;
      s = s.padEnd(10);
      return s;
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
        //posts[i].title=posts[i].title.padEnd(40);
      }

      return posts;
      /*
      return f.fpost.filter(function (fpost) {
        return fpost !== null;
      });
      */
    },
  },
  data: function () {
    return {
      rowIndex: 0,
    };
  },
  created() {
    console.log("create");
  },
  mounted() {
    // this.onChange();
    this.$store.commit("setRowCount", this.getMETA.length);
    this.$bus.$on("on-keyup", this.onKeyup);
    console.log("mounted");
  },
  beforeDestroy() {
    this.$bus.$off("on-keyup", this.onKeyup);
    console.log("destroy");
  },
  watch: {
    // call again the method if the route changes
    // '$route': 'onChange'
  },
  methods: {
    isSelect: function (index) {
      if (index == this.$store.state.rowIndex) return "●";
      else return "";
    },
    // onChange() {
    //   console.log("reset rowIndex=0");
    //   this.rowIndex = 0;
    // },
    onKeyup(e) {
      switch (e.which) {
        case 37: // ! left
          this.$router.push({ name: "Class3" });
          break;
        case 38: // ! up
          break;
        case 40: // ! down
          break;
        case 13: // ! enter
        case 39: // ! right
          break;
      }
    },
  },
};
</script>