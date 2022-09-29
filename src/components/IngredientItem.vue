<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'IngredientItem',
  props: {
    name: String,
    img: String
  },
  methods: {
    test: () => {
      const url = 'https://world.openfoodfacts.org/api/v0/product/737628064502.json'
      fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
          })
          .catch((error) => {
            console.log(error)
          })
    }
  },
  mounted() {
    this.test()
  }
}
</script>