<template>
<div id="mainContainer"><span type="bbsrow" srow="0"><div><span class="" data-type="bbsline" data-row="0"><span><span class="q15 b4">【主功能表】                    </span><span class="q11 b4">金鸞BBS佈告欄</span><span class="q15 b4">                                  </span><span class="q7 b0"> </span></span></span><div></div></div></span>
<div class="row text-center">
      <div class="col-12">
        <img
          src="../assets/banner.gif"
          class="img-fluid"
          alt="Logo"
        />
      </div>
    </div>
<span type="bbsrow" srow="12"><div><span class="" data-type="bbsline" data-row="12"><span><span class="q7 b0">───────── 上方為使用者心情點播留言區，不代表本站立場 ────────  </span></span></span><div></div></div></span><span type="bbsrow" srow="13"><div><span class="" data-type="bbsline" data-row="13"><span><span class="q7 b0"><span class="q7 b0">{{ getPointer(0) }}</span></span><span class="q14 b0">A</span><span class="q7 b0">)nnounce     【 精華公佈欄 】                           </span></span></span><div></div></div></span><span type="bbsrow" srow="14"><div><span class="" data-type="bbsline" data-row="14"><span><span class="q7 b0"><span class="q7 b0">{{ getPointer(1) }}</span></span><span class="q14 b0">F</span><span class="q7 b0">)avorite     【 我 的 最愛 】                           </span></span></span><div></div></div></span><span type="bbsrow" srow="15"><div><span class="" data-type="bbsline" data-row="15"><span><span class="q7 b0">{{ getPointer(2) }}</span><span class="q14 b0">C</span><span class="q7 b0">)lass        【 分組討論區 】                           </span></span></span><div></div></div></span><span type="bbsrow" srow="16"><div><span class="" data-type="bbsline" data-row="16"><span><span class="q7 b0"><span class="q7 b0">{{ getPointer(3) }}</span></span><span class="q14 b0">M</span><span class="q7 b0">)ail         【 私人信件區 】                           </span></span></span><div></div></div></span><span type="bbsrow" srow="17"><div><span class="" data-type="bbsline" data-row="17"><span><span class="q7 b0"><span class="q7 b0">{{ getPointer(4) }}</span></span><span class="q14 b0">T</span><span class="q7 b0">)alk         【 休閒聊天區 】                           </span></span></span><div></div></div></span><span type="bbsrow" srow="18"><div><span class="" data-type="bbsline" data-row="18"><span><span class="q7 b0"><span class="q7 b0">{{ getPointer(5) }}</span></span><span class="q14 b0">U</span><span class="q7 b0">)ser         【 個人設定區 】                           </span></span></span><div></div></div></span><span type="bbsrow" srow="19"><div><span class="" data-type="bbsline" data-row="19"><span><span class="q7 b0"><span class="q7 b0">{{ getPointer(6) }}</span></span><span class="q14 b0">X</span><span class="q7 b0">)yz          【 系統資訊區 】                           </span></span></span><div></div></div></span><span type="bbsrow" srow="20"><div><span class="" data-type="bbsline" data-row="20"><span><span class="q7 b0"><span class="q7 b0">{{ getPointer(7) }}</span></span><span class="q14 b0">P</span><span class="q7 b0">)lay         【 娛樂與休閒 】                           </span></span></span><div></div></div></span><span type="bbsrow" srow="21"><div><span class="" data-type="bbsline" data-row="21"><span><span class="q7 b0"><span class="q7 b0">{{ getPointer(8) }}</span></span><span class="q14 b0">N</span><span class="q7 b0">)amelist     【 編特別名單 】                           </span></span></span><div></div></div></span><span type="bbsrow" srow="22"><div><span class="" data-type="bbsline" data-row="22"><span><span class="q7 b0"><span class="q7 b0">{{ getPointer(9) }}</span></span><span class="q14 b0">G</span><span class="q7 b0">)oodbye         離開，再見…                            </span></span></span><div></div></div></span><span type="bbsrow" srow="23"><div><span class="" data-type="bbsline" data-row="23"><span><span class="q4 b6">{{ this.$store.state.dateLabel }}</span><span class="q11 b5"> [ 牡羊時 ]   </span><span class="q8 b7"> 線上</span><span class="q9 b7">89879</span><span class="q8 b7">人, 我是</span><span class="q9 b7">{{ this.$store.state.accountLabel }}</span><span class="q8 b7">[呼叫器]</span><span class="q9 b7">打開 </span><span class="q7 b0"> </span></span></span><div></div></div></span></div>
</template>

<script>
export default {
    name: "PCMenu",
    computed:{
    },
    mounted(){
        this.$bus.$on('on-keyup', this.onKeyup);
    },
    beforeDestroy(){
        this.$bus.$off('on-keyup', this.onKeyup);
    },
    data:function(){
        return{
            select: '                    ●(',
            deselect: '                      ('
        }
    },
    methods:{
        getPointer:function(index){
            if(index == this.$store.state.rowIndex)
                return this.select;
            else
                return this.deselect;
        },
        onKeyup(e){
            switch(e.which){
                case 38: // ! up
                    break;
                case 40: // ! down
                    break;
                case 13: // ! enter
                case 39: // ! right
                    switch(this.$store.state.rowIndex)
                    {
                        case 1: // ! 我的最愛
                            this.$router.push({ name: "Favorite" });
                            break;
                        case 2: // ! 分組討論
                            this.$router.push({ name: "Class" });
                            break;
                        case 3: // ! 私人信件區
                            this.$router.push({ name: "Mail1" });
                            break;
                        case 9: // ! 離開
                            this.$router.push({ name: "Goodbye" });
                            break;
                    }
                    break;
            }
        }
    }
}
</script>