<template>
  <div v-if="this.$store.state.isMobile">
    <MForum2 :id="this.id" />
  </div>
  <div v-else>
    <PCForum2 :id="this.id" />
  </div>
</template>

<script>
import PCForum2 from "@/components/pc_forum2.vue";
import MForum2 from "@/components/m_forum2.vue";
export default {
  name: "Forum2",
  props: ["id"],
  components: {
    PCForum2,
    MForum2,
  },
  mounted() {
    this.onChange();
  },
  watch: {
    $route: "onChange",
  },
  // beforeRouteUpdate(to, from, next) {
  //   console.log("--->From:"+from.name);
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   if (from.name == "Post") {
  //   } else {
  //     this.$store.commit("setRowIndex", 0);
  //   }
  //   next();
  // },
  methods: {
    onChange() {
      // this.$store.commit("setRowIndex", 0);
    },
  },
};
</script>