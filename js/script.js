var app = new Vue ({

  el: '#root',

  data: {


    message: "Ciao classe 27",

    coverImg: "https://miro.medium.com/max/3840/1*U-R58ahr5dtAvtSLGK2wXg.png",
  },

  methods: {

    myFunction: function() {

      if ( this.coverImg == "https://miro.medium.com/max/3840/1*U-R58ahr5dtAvtSLGK2wXg.png" ){

        return this.coverImg = "https://miro.medium.com/max/2400/1*iNw33pBEYZIAoE9oHdhLLw.jpeg";

      } else{
        return this.coverImg = "https://miro.medium.com/max/3840/1*U-R58ahr5dtAvtSLGK2wXg.png";
      }

    }

  }


});
