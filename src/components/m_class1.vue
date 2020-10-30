<template>
  <div id="mobileContainer" class="container" v-if="this.$store.state.isMobile">
    <div class="row">
      <div class="col-12 q15 b4">
        <span>【主功能表】</span><span>批踢踢實業坊</span>
      </div>
    </div>
    <ul class="nav flex-column bg-dark">
      <li class="nav-item">
        <a class="nav-link text-left" href="#">市民廣場     報告站長 PTT咬我</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">臺灣大學     臺大, 臺大, 臺大            [paullai/s75</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">政治大學     政大, 政大, 政大            [steve1121/s</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">青蘋果樹     校園, 班板, 社團            [dreamwave/f</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">活動中心     社團, 聚會, 團體            [dreamwave/s</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">視聽劇場     偶像, 音樂, 廣電            [skydreaming</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">戰略高手     遊戲, 數位, 程設            [a3225737]</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">卡漫夢工廠   卡通, 漫畫, 動畫            [sitos]</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">生活娛樂館   生活, 娛樂, 心情            [GeminiMan]</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">國家研究院   政治, 文學, 學術            [JosephChen/</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">國家體育場   汗水, 鬥志, 膽識            [RJJ]</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">第三十二屆小天使招生10/05~10/12          chuo/</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">[武漢肺炎] 八大場所戴口罩                swattw/flyin</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-left" href="#">--&gt; 即時熱門看板 &lt;--</a>
      </li>
    </ul>
    <div class="row">
      <div class="col-12 q8 b7">
        <span>{{ this.$store.state.dateLabel }}</span
        ><span>[牡羊時]</span><span>線上</span><span>89879</span
        ><span>人, 我是</span><span>{{ this.$store.state.accountLabel }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MClass",
  computed: {},
  data: function () {
    return {};
  },
  methods: {},
};
</script>
