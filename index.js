const app = Vue.createApp({
  data: () => ({
    hello: "thePrimeagen",
    sucess: false,
    fail: false,
    mesure: [],
    ingre: [],
    all: {},
  }),
  methods: {
    async getMeal() {
      this.mesure = [];
      this.all = {};
      this.ingre = [];
      try {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        this.all = data.meals[0];

        for (let kk in data.meals[0]) {
          if (kk.startsWith("strIngredient")) {
            if (data.meals[0][kk]) {
              this.mesure.push(data.meals[0][kk])
            }
          }
        }
        for (let kk in data.meals[0]) {
          if (kk.startsWith("strMeasure")) {
            if(data.meals[0][kk]){
    this.ingre.push(data.meals[0][kk])
            }
          }
        }
        // console.log(this.all);
      } catch (err) {
        console.log(err);
      }
    },
  },
});

app.mount("#app");
