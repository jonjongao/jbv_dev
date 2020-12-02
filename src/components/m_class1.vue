<template>
  <div id="mobileContainer" class="container" v-if="this.$store.state.isMobile">
    <Header />
    <div class="row my-5"></div>
    <ul class="nav flex-column bg-dark">
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">市民廣場     報告站長 金鸞咬我</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">臺灣大學     臺大, 臺大, 臺大</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">政治大學     政大, 政大, 政大</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">青蘋果樹     校園, 班板, 社團</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">活動中心     社團, 聚會, 團體</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">視聽劇場     偶像, 音樂, 廣電</a>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-left" to="/class2">戰略高手     遊戲, 數位, 程設</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">卡漫夢工廠   卡通, 漫畫, 動畫</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">生活娛樂館   生活, 娛樂, 心情</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">國家研究院   政治, 文學, 學術</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">國家體育場   汗水, 鬥志, 膽識</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">第三十二屆小天使招生10/05~10/12</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">[武漢肺炎] 八大場所戴口罩</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="javascript:void(0)">--&gt; 即時熱門看板 &lt;--</a>
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/m_header.vue";
import Footer from "@/components/m_footer.vue";
export default {
  name: "MClass",
    components: {
    Header,
    Footer,
  },
  computed: {},
  data: function () {
    return {};
  },
  methods: {},
};
</script>
