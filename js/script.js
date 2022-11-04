const {createApp} = Vue;

createApp({
  data(){
    return{
      immagini:[
        {
          nome: "Argentina",
          descrizione: " Il Paese del tango è capace di offrire ai viaggiatori paesaggi straordinari",
          pic: "./img/argentina.jpg"
        },
        {
          nome: "Chile",
          descrizione: "Preparati per un'avventura senza precedenti da nord, con il deserto più secco del mondo, al sud australe con il ghiaccio eterno e cascate invertite",
          pic: "./img/chile.jpg"
        },
        {
          nome: "Colombia",
          descrizione: "La maggior parte del paese, è coperta di montagne come le Ande",
          pic: "./img/colombia.jpg"
        },
        {
          nome: "Perù",
          descrizione: "Il Perù è un paese megadiverso con habitat che variano dalle pianure aride della costa del Pacifico, alle vette delle Ande che si estendono da nord a sud-est",
          pic: "./img/peru.jpg"
        },
        {
          nome: "Svezia",
          descrizione: " per i suoi paesaggi mozzafiato, i pittoreschi villaggi di pescatori, la terra delle renne e il sole estivo senza fine",
          pic: "./img/svezia.jpg"
        }
      ],
      activeImage: 0,
      isOver: false,
      myPlay: undefined
    }
  },
  methods:{
    changeImage(index){
      this.activeImage = index;
    },
    nextPrev(isNext){
      isNext ? this.activeImage++ : this.activeImage--;

      if(this.activeImage === this.immagini.length){
        this.activeImage = 0;
      }else if(this.activeImage < 0){
        this.activeImage = this.immagini.length - 1;
      }
    },
    autoPlay(isNext,isOver){
      this.stopAutoPlay(isOver)
      this.myPlay =setInterval(() =>{
       this.nextPrev(!isNext)
      },3000)
    },
    stopAutoPlay(isOver){
      if(isOver=true) clearInterval(this.myPlay);
    }
  },
  mounted(){
    this.autoPlay();
  }
}).mount('#app');