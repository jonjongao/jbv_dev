<template>
<div id="mainContainer"><span type="bbsrow" srow="0"><div><span class="" data-type="bbsline" data-row="0"><span><span class="q15 b4">【分類看板】                    </span><span class="q11 b4">金鸞BBS佈告欄</span><span class="q15 b4">                                  </span><span class="q7 b0"> </span></span></span><div></div></div></span><span type="bbsrow" srow="1"><div><span class="" data-type="bbsline" data-row="1"><span><span class="q7 b0">                                                              ◣  ╭—</span><span class="q3 b0">●</span><span class="q7 b0">        </span></span></span><div></div></div></span><span type="bbsrow" srow="2"><div><span class="" data-type="bbsline" data-row="2"><span><span class="q3 b0">                                                    ╬—   </span><span class="q7 b0">◢█</span><span class="q7 b7">⊙</span><span class="q7 b0">██◣╤       </span></span></span><div></div></div></span><span type="bbsrow" srow="3"><div><span class="" data-type="bbsline" data-row="3"><span><span class="q7 b0">  </span><span class="q7 b4">   ︿︿︿︿︿︿︿︿                               </span><span class="q3 b4">║</span><span class="q7 b4"> ◣◢███▼▼▼║ </span><span class="q7 b0">      </span></span></span><div></div></div></span><span type="bbsrow" srow="4"><div><span class="" data-type="bbsline" data-row="4"><span><span class="q7 b0">  </span><span class="q7 b4">                                                  </span><span class="q3 b4">  </span><span class="q7 b4"> ◤◥███▲▲▲ ║</span><span class="q7 b0">      </span></span></span><div></div></div></span><span type="bbsrow" srow="5"><div><span class="" data-type="bbsline" data-row="5"><span><span class="q7 b0">                                  ︿︿︿︿︿︿︿︿    </span><span class="q3 b0">│</span><span class="q7 b0">   ◥████◤ ║      </span></span></span><div></div></div></span><span type="bbsrow" srow="6"><div><span class="" data-type="bbsline" data-row="6"><span><span class="q7 b0">                                                      </span><span class="q3 b0">╫——  </span><span class="q7 b0">◤      —＋      </span></span></span><div></div></div></span><span type="bbsrow" srow="7"><div><span class="" data-type="bbsline" data-row="7"><span><span class="q7 b0">{{ this.$store.state.rowIndex == 0 ? '          ●    ' : '                ' }}</span><span class="q7 b0">1   市民廣場     報告站長 金鸞咬我                               </span></span></span><div></div></div></span><span type="bbsrow" srow="8"><div><span class="" data-type="bbsline" data-row="8"><span><span class="q7 b0">{{ this.$store.state.rowIndex == 1 ? '          ●    ' : '                ' }}</span><span class="q7 b0">2   臺灣大學     臺大, 臺大, 臺大            </span></span></span><div></div></div></span><span type="bbsrow" srow="9"><div><span class="" data-type="bbsline" data-row="9"><span><span class="q7 b0">{{ this.$store.state.rowIndex == 2 ? '          ●    ' : '                ' }}</span><span class="q7 b0">3   政治大學     政大, 政大, 政大            </span></span></span><div></div></div></span><span type="bbsrow" srow="10"><div><span class="" data-type="bbsline" data-row="10"><span><span class="q7 b0">{{ this.$store.state.rowIndex == 3 ? '          ●    ' : '                ' }}</span><span class="q7 b0">4   青蘋果樹     校園, 班板, 社團            </span></span></span><div></div></div></span><span type="bbsrow" srow="11"><div><span class="" data-type="bbsline" data-row="11"><span><span class="q7 b0">{{ this.$store.state.rowIndex == 4 ? '          ●    ' : '                ' }}</span><span class="q7 b0">5   活動中心     社團, 聚會, 團體            </span></span></span><div></div></div></span><span type="bbsrow" srow="12"><div><span class="" data-type="bbsline" data-row="12"><span><span class="q7 b0">{{ this.$store.state.rowIndex == 5 ? '          ●    ' : '                ' }}</span><span class="q7 b0">6   視聽劇場     偶像, 音樂, 廣電            </span></span></span><div></div></div></span><span type="bbsrow" srow="13"><div><span class="" data-type="bbsline" data-row="13"><span><span class="q7 b0">{{ this.$store.state.rowIndex == 6 ? '          ●    ' : '                ' }}</span><span class="q7 b0">7   戰略高手     遊戲, 數位, 程設            </span></span></span><div></div></div></span><span type="bbsrow" srow="14"><div><span class="" data-type="bbsline" data-row="14"><span><span class="q7 b0">{{ this.$store.state.rowIndex == 7 ? '          ●    ' : '                ' }}</span><span class="q7 b0">8   卡漫夢工廠   卡通, 漫畫, 動畫            </span></span></span><div></div></div></span><span type="bbsrow" srow="15"><div><span class="" data-type="bbsline" data-row="15"><span><span class="q7 b0">{{ this.$store.state.rowIndex == 8 ? '          ●    ' : '                ' }}</span><span class="q7 b0">9   生活娛樂館   生活, 娛樂, 心情            </span></span></span><div></div></div></span><span type="bbsrow" srow="16"><div><span class="" data-type="bbsline" data-row="16"><span><span class="q7 b0">{{ this.$store.state.rowIndex == 9 ? '         ●    ' : '               ' }}</span><span class="q7 b0">10   國家研究院   政治, 文學, 學術            </span></span></span><div></div></div></span><span type="bbsrow" srow="17"><div><span class="" data-type="bbsline" data-row="17"><span><span class="q7 b0">{{ this.$store.state.rowIndex == 10 ? '         ●    ' : '               ' }}</span><span class="q7 b0">11   國家體育場   汗水, 鬥志, 膽識            </span></span></span><div></div></div></span><span type="bbsrow" srow="18"><div><span class="" data-type="bbsline" data-row="18"><span><span class="q7 b0">{{ this.$store.state.rowIndex == 11 ? '         ●    ' : '               ' }}</span><span class="q7 b0">12 </span><span class="q9 b0">ˇ</span><span class="q7 b0">第三十二屆小天使招生10/05~10/12          </span></span></span><div></div></div></span><span type="bbsrow" srow="19"><div><span class="" data-type="bbsline" data-row="19"><span><span class="q7 b0">{{ this.$store.state.rowIndex == 12 ? '         ●    ' : '               ' }}</span><span class="q7 b0">13 </span><span class="q9 b0">ˇ</span><span class="q7 b0">[武漢肺炎] 八大場所戴口罩                </span></span></span><div></div></div></span><span type="bbsrow" srow="20"><div><span class="" data-type="bbsline" data-row="20"><span><span class="q7 b0">{{ this.$store.state.rowIndex == 13 ? '         ●    ' : '               ' }}</span><span class="q7 b0">14       --&gt; 即時熱門看板 &lt;--                                    </span></span></span><div></div></div></span><span type="bbsrow" srow="21"><div><span class="" data-type="bbsline" data-row="21"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="22"><div><span class="" data-type="bbsline" data-row="22"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span><span type="bbsrow" srow="23"><div><span class="" data-type="bbsline" data-row="23"><span><span class="q7 b0">                                                                                </span></span></span><div></div></div></span></div>
</template>

<script>
export default {
    name: "PCClass",
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
                case 37: // ! left
                    // this.$router.push({ name: "MainMenu" });
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
                        case 6: // ! 戰略高手
                            this.$router.push({ name: "Class2" });
                            break;
                    }
                    break;
            }
        }
    }
}
</script>