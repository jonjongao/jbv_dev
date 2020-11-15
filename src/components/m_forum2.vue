<template>
  <div id="mobileContainer" class="container">
    <Header :p1="getHEAD.manager" :p2="getHEAD.pin" :p3="getHEAD.name" />
    <div class="row my-5"></div>
    <div class="row">
      <div class="col-12 p-0">
        <better-slider
          class="row m-0"
          v-for="(p, index) in getMETA"
          :key="index"
          :right="sliderRight"
          :trigger="trigger"
          @touchStartEvent="touchStartEventHandle"
          @clickFrontEvent="clickFrontEventHandle"
          @clickBackEvent="clickBackEventHandle"
        >
          <div slot="front" class="front bg-dark-0">
            <div class="content">
              <router-link :to="getURL(index)" class="row m-0">
                <div class="col-2 p-0 pl-2">
                  <div class="col-12 p-0">
                    <span class="q8 b0 mr-1">{{ p.ext1 }}</span
                    ><span :class="getPop[index]">{{ getExt2[index] }}</span>
                  </div>
                  <div class="col-12 p-0">
                    <span class="badge badge-dark">{{ p.date }}</span>
                  </div>
                </div>
                <div class="col-10 p-0 pr-2">
                  <div class="col-12 p-0 q15 line">
                    <span>{{ p.caption }}</span>
                  </div>
                  <div class="col-12 p-0 q8">
                    <span>{{ p.author }}</span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div slot="back" class="back">
            <div class="delete" :id="index">刪除</div>
          </div>
        </better-slider>
      </div>
    </div>
    <Footer />
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
          if (this.$store.state.account == "wakeupsoon")
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
        var val = "mr-1";
        if (num > 0) val = "q10 b0 mr-1";
        if (num > 9) val = "q11 b0 mr-1";
        if (num > 99 || this.getMETA[i].ext2 == "爆") val = "q9 b0 mr-1";
        if (num < -99 || this.getMETA[i].ext2 == "XX") val = "q8 b0 mr-1";
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
      if (this.$store.state.account == "wakeupsoon") return true;
      else return false;
    },
    sliderRight: function () {
      if (this.isChi) return 60;
      else return 0;
    },
  },
  data: function () {
    return {
      startIndex: 0,
      inDelete: "",
      isDeleting: false,
      deletingStep: 0,
      trigger: false,
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
    touchStartEventHandle() {
      this.trigger = !this.trigger;
    },
    clickFrontEventHandle({ event, component }) {},
    clickBackEventHandle({ event, component }) {
      if (event.target.className.indexOf("delete") > -1) {
        component.close();
        // ! 當點擊刪除
        if (this.isChi == false) {
          return;
        }

        var i = event.target.getAttribute("id");
        if (i == 61) {
          this.$bus.$emit("on-mail-popup", true);
          console.log(i);
        } else {
          this.$bus.$emit("on-warning-popup", true);
          this.$router.push({
            name: "Goodbye",
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// .front {
//   height: 60px;
//   padding: 0 0 0 0px;
//   // background-image: url('../static/logo.png');
//   background-size: 40px;
//   background-repeat: no-repeat;
//   background-position: 10px;
//   // background-color: #fff;
//   .content {
//     position: relative;
//     box-sizing: border-box;
//     height: 100%;
//     &:after {
//       content: "";
//       pointer-events: none;
//       box-sizing: border-box;
//       position: absolute;
//       width: 100%;
//       height: 1px;
//       left: 0;
//       bottom: 0;
//       background: #999;
//       transform: scaleY(0.5);
//       transform-origin: 0 0;
//     }
//     .title {
//       padding: 10px 0 0 0;
//       font-size: 16px;
//       line-height: 16px;
//     }
//     .description {
//       padding: 10px 0 0 0;
//       font-size: 13px;
//       line-height: 13px;
//       color: #aaa;
//     }
//   }
// }
// .back {
//   height: 60px;
//   position: relative;
//   .read {
//     position: absolute;
//     left: 0;
//     width: 60px;
//     text-align: center;
//     font-size: 16px;
//     line-height: 60px;
//     color: #fff;
//     background-color: #ccc;
//   }
//   .delete {
//     position: absolute;
//     right: 0;
//     width: 60px;
//     text-align: center;
//     font-size: 16px;
//     line-height: 60px;
//     color: #fff;
//   }
// }
</style>
