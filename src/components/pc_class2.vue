<template>
<div id="mainContainer"><span type="bbsrow" srow="0"><div><span class="" data-type="bbsline" data-row="0"><span><span class="q15 b4">【看板列表】                     </span><span class="q11 b4">批踢踢實業坊</span><span class="q15 b4">                                  </span><span class="q7 b0"> </span></span></span><div></div></div></span><span type="bbsrow" srow="1"><div><span class="" data-type="bbsline" data-row="1"><span><span class="q7 b0">[←][q]回上層 [→][r]閱讀 [↑↓]選擇 [PgUp][PgDn]翻頁 [c]新文章 [/]搜尋 [h]求助 </span></span></span><div></div></div></span><span type="bbsrow" srow="2"><div><span class="" data-type="bbsline" data-row="2"><span><span class="q0 b7">   編號   看  板       類別   中   文   敘   述               人氣 板   主     </span><span class="q7 b0"> </span></span></span><div></div></div></span><span type="bbsrow" srow="3"><div><span class="" data-type="bbsline" data-row="3"><span><span class="q7 b0">{{ getPointer(0) }}</span><span class="q7 b0">1   DigitalLife  </span><span class="q11 b0">生活 </span><span class="q7 b0">Σ數位 生活 電腦                    10 st900278     </span></span></span><div></div></div></span><span type="bbsrow" srow="4"><div><span class="" data-type="bbsline" data-row="4"><span><span class="q7 b0">{{ getPointer(1) }}</span><span class="q7 b0">2   System       </span><span class="q12 b0">系統 </span><span class="q7 b0">Σ系統 架站 教學                                    </span></span></span><div></div></div></span><span type="bbsrow" srow="5"><div><span class="" data-type="bbsline" data-row="5"><span><span class="q7 b0">{{ getPointer(2) }}</span><span class="q7 b0">3   Z_Archived   </span><span class="q10 b0">封存 </span><span class="q7 b0">Σ看板資料封存區                                    </span></span></span><div></div></div></span><span type="bbsrow" srow="6"><div><span class="" data-type="bbsline" data-row="6"><span><span class="q7 b0">{{ getPointer(3) }}</span><span class="q7 b0">4   DigitalTech  </span><span class="q15 b0">科技 </span><span class="q7 b0">Σ生活 科技 家電                       [Honorguard0 </span></span></span><div></div></div></span><span type="bbsrow" srow="7"><div><span class="" data-type="bbsline" data-row="7"><span><span class="q7 b0">{{ getPointer(4) }}</span><span class="q7 b0">5   ComGame-Serv </span><span class="q11 b0">組務 </span><span class="q7 b0">Σ戰略高手服務中心                     [a3225737]   </span></span></span><div></div></div></span><span type="bbsrow" srow="8"><div><span class="" data-type="bbsline" data-row="8"><span><span class="q7 b0">{{ getPointer(5) }}</span><span class="q7 b0">6   DigitalWare  </span><span class="q11 b0">軟體 </span><span class="q7 b0">Σ軟體 應用 技巧                       [potatofat]  </span></span></span><div></div></div></span><span type="bbsrow" srow="9"><div><span class="" data-type="bbsline" data-row="9"><span><span class="q7 b0">{{ getPointer(6) }}</span><span class="q7 b0">7   CompScience  </span><span class="q11 b0">程式 </span><span class="q7 b0">Σ程設 資科 資工                     1 [st900278]   </span></span></span><div></div></div></span><span type="bbsrow" srow="10"><div><span class="" data-type="bbsline" data-row="10"><span><span class="q7 b0">{{ getPointer(7) }}</span><span class="q7 b0">8   PlayingGame  </span><span class="q12 b0">遊戲 </span><span class="q7 b0">Σ遊戲 棋藝 橋牌                       [ufotime]    </span></span></span><div></div></div></span><span type="bbsrow" srow="11"><div><span class="" data-type="bbsline" data-row="11"><span><span class="q7 b0">{{ getPointer(8) }}</span><span class="q7 b0">9   G_Console    </span><span class="q15 b0">電玩 </span><span class="q7 b0">Σ主機 平台 模擬                     2 [myfancy]    </span></span></span><div></div></div></span><span type="bbsrow" srow="12"><div><span class="" data-type="bbsline" data-row="12"><span><span class="q7 b0">{{ getPointer(9) }}</span><span class="q7 b0">10   G_Mobile     </span><span class="q15 b0">電玩 </span><span class="q7 b0">Σ手遊 滑機 低頭                     4 [elmocc01/ma </span></span></span><div></div></div></span><span type="bbsrow" srow="13"><div><span class="" data-type="bbsline" data-row="13"><span><span class="q7 b0">{{ getPointer(10) }}</span><span class="q7 b0">11   G_Online     </span><span class="q15 b0">電玩 </span><span class="q7 b0">Σ虛擬 線上 遨遊                     2 [BaRanKa]    </span></span></span><div></div></div></span><span type="bbsrow" srow="14"><div><span class="" data-type="bbsline" data-row="14"><span><span class="q7 b0">{{ getPointer(11) }}</span><span class="q7 b0">12   G_RolePlay   </span><span class="q15 b0">電玩 </span><span class="q7 b0">Σ傳說 史詩 扮演                       [a3225737]   </span></span></span><div></div></div></span><span type="bbsrow" srow="15"><div><span class="" data-type="bbsline" data-row="15"><span><span class="q7 b0">{{ getPointer(12) }}</span><span class="q7 b0">13   G_SportAct   </span><span class="q15 b0">電玩 </span><span class="q7 b0">Σ運動 動作 射擊                       [a3225737]   </span></span></span><div></div></div></span><span type="bbsrow" srow="16"><div><span class="" data-type="bbsline" data-row="16"><span><span class="q7 b0">{{ getPointer(13) }}</span><span class="q7 b0">14   G_Strategy   </span><span class="q15 b0">電玩 </span><span class="q7 b0">Σ軍事 戰略 即時                       [InnGee]     </span></span></span><div></div></div></span><span type="bbsrow" srow="17"><div><span class="" data-type="bbsline" data-row="17"><span><span class="q7 b0">{{ getPointer(14) }}</span><span class="q7 b0">15   GameTopics   </span><span class="q10 b0">綜合 </span><span class="q7 b0">Σ綜合 主題 人文                     2 [potatofat]  </span></span></span><div></div></div></span><span type="bbsrow" srow="18"><div><span class="" data-type="bbsline" data-row="18"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="19"><div><span class="" data-type="bbsline" data-row="19"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="20"><div><span class="" data-type="bbsline" data-row="20"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="21"><div><span class="" data-type="bbsline" data-row="21"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="22"><div><span class="" data-type="bbsline" data-row="22"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="23"><div><span class="" data-type="bbsline" data-row="23"><span><span class="q4 b6">  選擇看板  </span><span class="q0 b7">  </span><span class="q1 b7">(m)</span><span class="q0 b7">加入/移出最愛 </span><span class="q1 b7">(s)</span><span class="q0 b7">進入已知板名 </span><span class="q1 b7">(v/V)</span><span class="q0 b7">已讀/未讀                  </span><span class="q7 b0"> </span></span></span><div></div></div></span></div>
</template>

<script>
export default {
    name: "PCClass2",
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
            select: '●   ',
            deselect: '     '
        }
    },
    methods:{
        getPointer: function (index) {
            if (index == this.$store.state.rowIndex) {
                if (index > 8) return this.select;
                else return this.select+' ';
            } else {
                if (index > 8) return this.deselect;
                else return ' '+this.deselect;
            }
        },
        onKeyup(e){
            switch(e.which){
                case 37: // ! left
                    // this.$router.push({ name: "Class" });
                    this.$router.go(-1);
                    break;
                case 38: // ! up
                    break;
                case 40: // ! down
                    break;
                case 13: // ! enter
                case 39: // ! right
                    switch(this.$store.state.rowIndex)
                    {
                        case 10: // ! G_Online
                            this.$router.push({ name: "Class3" });
                            break;
                    }
                    break;
            }
        }
    }
}
</script>