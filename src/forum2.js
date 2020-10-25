import f from "./assets/forum-posts.json";
import u from "./assets/util";

export default {
  name: "Forum2",
  props: ['bbsrow'],
  computed: {
    managerLabel: function () {
      // Original = 【板主:macauboy】
      // space in total = 34
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
      var s = f.fmeta.pin;
      return s;
    },
    nameLabel: function () {
      // Original =                       看板《Magic》
      // space in total = 36
      var s = f.fmeta.name;
      var a = u.getSpaceCount(f.fmeta.manager);
      var b = u.getSpaceCount(f.fmeta.pin);
      var c = u.getSpaceCount(f.fmeta.name);
      var length = Math.ceil((80 - a - b - c) / 2);
      s = s.padStart(f.fmeta.name.length + length);
      return s;
    },
    viewsLabel: function () {
      var s = '人氣:' + f.fmeta.views;
      s = s.padEnd(10);
      return s;
    },
    fpost: function () {
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
            ext1: '',
            ext2: '',
            data: '',
            author: '',
            type: '',
            title: ''
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
    }
  },
  data: function () {
    return {
      rowIndex: 0
    }
  },
  created() {
    console.log("create");
  },
  mounted() {
    this.onChange();
    this.$bus.$on('on-keyup', this.onKeyup);
    console.log("mounted");
  },
  beforeDestroy() {
    this.$bus.$off('on-keyup', this.onKeyup);
    console.log("destroy");
  },
  watch: {
    // call again the method if the route changes
    '$route': 'onChange'
  },
  methods: {
    onChange() {
      console.log("reset rowIndex=0");
      this.rowIndex = 0;
    },
    onKeyup: function (e) {
      switch (e.which) {
        case 38:
          this.rowIndex--;
          if (this.rowIndex < 0) this.rowIndex = this.bbsrow - 1;
          break;
        case 40:
          this.rowIndex++;
          if (this.rowIndex > this.bbsrow - 1) this.rowIndex = 0;
          break;
        case 13:
          console.log("enter index:" + this.rowIndex);
          console.log(this.$route.name);
          break;
      }
      console.log("rowIndex=" + this.rowIndex);
    }
  }
};
