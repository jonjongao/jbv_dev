<template>
  <div class="col-12 my-3 footer">
    <div class="row b6 rounded-top">
      <div class="col-8 py-1 q4">{{ this.$store.state.dateLabel }}</div>
      <div class="col-4 py-1 q11">[牡羊時]</div>
    </div>
    <div class="row b7 rounded-bottom">
      <div class="col-12 py-1">
        <span class="q8">線上</span>
        <span class="q9">89879</span>
        <span class="q8">人, 我是</span>
        <span class="q9">{{ this.$store.state.accountLabel }}</span>
      </div>
    </div>
  </div>
</template>