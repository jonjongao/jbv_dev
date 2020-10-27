<template>
  <div id="mainContainer">
    <pre><span class="q15 b4 h_manager">{{ getHEAD.manager }}</span><span class="q11 b4 h_pin">{{ getHEAD.pin }}</span><span class="q15 b4 h_name">{{ getHEAD.name }}</span></pre>
    <pre><span class="q7 b0" v-if="deletingStep == 0"><span class="q7 b0">[←]離開 [→]閱讀 [Ctrl-P]發表文章 [d]刪除 [z]精華區 [i]看板資訊/設定 [h]說明   </span></span>
    <span v-else><span class="q7 b0">請確定刪除(Y/N)?[N]</span><input class="col-1" type="text" ref="del" v-on:keyup.enter="onDeleteField(inDelete)" v-model="inDelete" :placeholder="''"></span></pre>
    <pre><span class="q0 b7">   編號    日 期 作  者       文  章  標  題                       人氣:</span><span class="q0 b7 h_pop">{{ getHEAD.views }}</span><span class="q7 b0"> </span></pre>
    <pre v-for="p in 20" :key="p">
    <span v-if="(p+startIndex)-1 < getMETA.length"><span type="bbsrow" srow="6"><div><span class="" data-type="bbsline" data-row="6"><span><span class="q7 b0"><span class="pointer">{{ isSelect((p+startIndex)-1) }}</span><span class="id2">{{ getMETA[(p+startIndex)-1].id }}</span><span class="reply2">{{ getMETA[(p+startIndex)-1].ext1 }}{{ getMETA[(p+startIndex)-1].ext2 }}</span><span class="date">{{ getMETA[(p+startIndex)-1].date }}</span><span class="author2">{{ getMETA[(p+startIndex)-1].author }}</span><span class="caption2">{{ getMETA[(p+startIndex)-1].caption }}</span></span></span></span><div></div></div></span></span>
    <span v-else class="empty"></span>
</pre>
    <pre><span type="bbsrow" srow="23"><div><span class="" data-type="bbsline" data-row="23"><span><span class="q4 b6"> 文章選讀 </span><span class="q0 b7"> </span><span class="q1 b7">(y)</span><span class="q0 b7">回應</span><span class="q1 b7">(X)</span><span class="q0 b7">推文</span><span class="q1 b7">(^X)</span><span class="q0 b7">轉錄 </span><span class="q1 b7">(=[]&lt;&gt;)</span><span class="q0 b7">相關主題</span><span class="q1 b7">(/?a)</span><span class="q0 b7">找標題/作者 </span><span class="q1 b7">(b)</span><span class="q0 b7">進板畫面  </span><span class="q7 b0"> </span></span></span><div></div></div></span></pre>
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
import head from "../assets/forum_head.json";

import forum from "../assets/forum.json";
import tsueihua from "../assets/tsuei-hua.json";
import eil_guest from "../assets/eil_guest.json";
import eil_ziqi from "../assets/eil_ziqi.json";

export default {
  name: "PCForum2",
  props: ["id"],
  computed: {
    getHEAD: function () {
      var i = parseInt(this.id);
      switch (i) {
        case 0:
          return head.detention;
        case 1:
          return head.tsueihua;
        case 2:
        case 3:
          return head.eil;
        default:
          return {};
      }
      // return this.$store.state.forumPosts["fmeta"];
    },
    getMETA: function () {
      var i = parseInt(this.id);
      switch (i) {
        case 0:
          return forum;
        case 1:
          return tsueihua;
        case 2:
          if(this.$store.state.account == "Chi")
            return eil_ziqi;
          else
            return eil_guest;
        default:
          return [];
      }
      // return this.$store.state.forumPosts["fpost"];
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
      startIndex: 0,
      inDelete: "",
      isDeleting: false,
      deletingStep: 0,
      newLength: 0,
    };
  },
  created() {
    console.log("create");
    this.newLength = this.getMETA.length;
    console.log(this.newLength);
  },
  mounted() {
    this.onChange();
    this.$bus.$on("on-keyup", this.onKeyup);
    console.log("mounted");
  },
  beforeDestroy() {
    this.$bus.$off("on-keyup", this.onKeyup);
    console.log("destroy");
    this.$store.commit("setFreeze", false);
  },
  watch: {
    // call again the method if the route changes
    $route: "onChange",
  },
  methods: {
    onDeleteField(value) {
      if (value == null || value == "") return;
      if (value.toLowerCase() == "y") {
        console.log("yes");
        this.deletingStep = 2;
      } else if (value.toLowerCase() == "n") {
        console.log("no");
        this.deletingStep = 0;
        this.$store.commit("setFreeze", false);
      }
      this.inDelete = "";
    },
    isSelect: function (index) {
      if (index == this.$store.state.rowIndex) return "●";
      else return "";
    },
    onChange() {
      console.log("reset rowIndex=0");
      this.rowIndex = 0;
      this.$store.commit("setRowCount", this.getMETA.length);
    },
    onKeyup(e) {
      if (this.deletingStep == 2) {
        console.log("confirm at step 2");
        var name = this.$store.state.account;
        this.getMETA[this.$store.state.rowIndex].caption =
          "□ (本文已被刪除) [" + name + "]";
        this.deletingStep = 0;
        this.$store.commit("setFreeze", false);
        this.newLength--;

        if (this.$store.state.rowIndex == 61) {
          this.$bus.$emit("on-mail-popup",true);
        }
        return;
      }

      switch (e.which) {
        case 37: // ! left
          // this.$router.push({ name: "Class3" });
          this.$router.go(-1);
          break;
        case 38: // ! up
          var c = this.$store.state.rowIndex % 20;
          if (c == 19) {
            // ! 檢查是否有上一頁
            if (this.startIndex >= 20) this.startIndex -= 20;
            else
              this.startIndex =
                this.getMETA.length - 20 - (this.getMETA.length % 20);
          }
          break;
        case 40: // ! down
          var c = this.$store.state.rowIndex % 20;
          if (c == 0) {
            // ! 檢查是否有下一頁
            if (this.getMETA.length > this.startIndex + 20)
              this.startIndex += 20;
            else this.startIndex = 0;
          }
          break;
        case 13: // ! enter
        case 39: // ! right
          var to = this.getMETA[this.$store.state.rowIndex].to;
          if (to == null || to == "") {
            console.log("can't find target");
          } else {
            // ! 嘗試進入文章
            this.$router.push({
              name: "Post",
              params: { type: "post", id: to },
            });
          }
          break;
        case 68: // ! d
          var name = this.$store.state.account;
          if(name != "Chi")
          {
            console.log("not authorized");
            return;
          }
          // var to = this.getMETA[this.$store.state.rowIndex].to;
          console.log("try delete:" + this.$store.state.rowIndex);
          this.deletingStep = 1;
          this.$nextTick(function () {
            this.$refs.del.focus();
            this.$store.commit("setFreeze", true);
          });
          break;
      }
    },
  },
};
</script>