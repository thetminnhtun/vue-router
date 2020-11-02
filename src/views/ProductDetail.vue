<template>
  <div class="container">
    <h1 v-if="loading">Loading...</h1>
    <div v-else class="row">
      <div class="col-md-4">
        <img :src="product.image" class="img-fluid" alt="Product Image" />
      </div>
      <div class="col-md-8 p-5">
        <h1 class="display-4">{{ product.title }}</h1>
        <div class="h3 text-muted mt-5">$ {{ product.price }}</div>
        <div class="mt-5">{{ product.description }}</div>
        <div class="mt-5">
          <router-link to="/product" class="btn btn-outline-secondary"
            >Go Back</router-link
          >
          <button class="btn btn-primary float-right">Add To Card</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductDetial",
  data() {
    return {
      loading: false,
      product: {},
    };
  },
  created() {
    this.loading = true;
    axios
      .get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
      .then((response) => {
        this.product = response.data;
        this.loading = false;
      })
      .catch((e) => {
        this.loading = false;
      });
  },
};
</script>

<style></style>
