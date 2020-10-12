<template>
<div id="mainContainer"><span type="bbsrow" srow="0"><div><span class="" data-type="bbsline" data-row="0"><span><span class="q15 b4">{{ managerLabel }}</span><span class="q11 b4">{{ pinLabel }}</span><span class="q15 b4">{{ nameLabel }}</span><span class="q7 b0"> </span></span></span><div></div></div></span><span type="bbsrow" srow="1"><div><span class="" data-type="bbsline" data-row="1"><span><span class="q7 b0">[←]離開 [→]閱讀 [Ctrl-P]發表文章 [d]刪除 [z]精華區 [i]看板資訊/設定 [h]說明   </span></span></span><div></div></div></span><span type="bbsrow" srow="2"><div><span class="" data-type="bbsline" data-row="2"><span><span class="q0 b7">   編號    日 期 作  者       文  章  標  題                       {{ viewsLabel }}</span><span class="q7 b0"> </span></span></span><div></div></div></span>
<div v-for="i in fpost" :key="i.id">
    <span type="bbsrow" srow="3"><div><span class="" data-type="bbsline" data-row="3"><span><span class="q7 b0">  {{ i.id }} +</span><span class="q8 b0">  </span><span class="q7 b0">9/30 {{ i.author }} □ {{ i.title }}</span></span></span><div></div></div></span>
</div>
<span type="bbsrow" srow="23"><div><span class="" data-type="bbsline" data-row="23"><span><span class="q4 b6"> 文章選讀 </span><span class="q0 b7"> </span><span class="q1 b7">(y)</span><span class="q0 b7">回應</span><span class="q1 b7">(X)</span><span class="q0 b7">推文</span><span class="q1 b7">(^X)</span><span class="q0 b7">轉錄 </span><span class="q1 b7">(=[]&lt;&gt;)</span><span class="q0 b7">相關主題</span><span class="q1 b7">(/?a)</span><span class="q0 b7">找標題/作者 </span><span class="q1 b7">(b)</span><span class="q0 b7">進板畫面  </span><span class="q7 b0"> </span></span></span><div></div></div></span></div>
</template>

<script>
import js from "../forum2";
export default js;
</script>