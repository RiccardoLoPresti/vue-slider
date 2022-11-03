/*Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
- al click su una thumb, visualizzare in grande l’immagine corrispondente
- aggiungere la classe active alla thumb attiva
Bonus:
1- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
Consigli del giorno:
- regola d’oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell’esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l’esercizio si riduce a poche righe ;)*/

const {createApp} = Vue;

createApp({
  data(){
    return{
      immagini:[
        {
          nome: "Argentina",
          descrizione: " Il Paese del tango è capace di offrire ai viaggiatori paesaggi straordinari",
          pic: "argentina.jpg"
        },
        {
          nome: "Chile",
          descrizione: "Preparati per un'avventura senza precedenti da nord, con il deserto più secco del mondo, al sud australe con il ghiaccio eterno e cascate invertite",
          pic: "chile.jpg"
        },
        {
          nome: "Colombia",
          descrizione: "La maggior parte del paese, è coperta di montagne come le Ande",
          pic: "colombia.jpg"
        },
        {
          nome: "Perù",
          descrizione: "Il Perù è un paese megadiverso con habitat che variano dalle pianure aride della costa del Pacifico, alle vette delle Ande che si estendono da nord a sud-est",
          pic: "peru.jpg"
        },
        {
          nome: "Svezia",
          descrizione: " per i suoi paesaggi mozzafiato, i pittoreschi villaggi di pescatori, la terra delle renne e il sole estivo senza fine",
          pic: "svezia.jpg"
        }
      ],
      activeImage: 0
    }
  },
  methods:{

  }
}).mount('#app');