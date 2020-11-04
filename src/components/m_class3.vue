<template>
  <div id="mobileContainer" class="container">
    <Header />
    <div class="row my-5"></div>

    <ul class="nav flex-column bg-dark">
      <li class="nav-item" v-for="p in getMETA" :key="p.id">
        <router-link class="nav-link text-left" :to="getURL(p)"
          >{{ p.name }} {{ p.caption }}</router-link
        >
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import post from "../assets/class3.json";
import Header from "@/components/m_header.vue";
import Footer from "@/components/m_footer.vue";
export default {
  name: "MClass3",
  components: {
    Header,
    Footer,
  },
  computed: {
    getMETA: function () {
      return post;
    },
  },
  data: function () {
    return {};
  },
  methods: {
    getURL: function (item) {
      if (item.id.includes("55"))
      {
        return {
          name: "Forum",
          params: { id: 0 },
        };
      }
      else
        return "/class3";
    },
  },
};
</script>
