<template>
  <PopupRouterView :label="product.name">
    <PopupOverlay slot="backdrop" />
    <PopupLightbox>
      <h1 class="text-white">{{ this.work.title }}</h1>
      <img
        v-if="product.img"
        :src="product.img.src"
        :alt="product.img.description"
      />
      <img
        v-if="product.img"
        :src="product.img.src"
        :alt="product.img.description"
      />
    </PopupLightbox>
  </PopupRouterView>
</template>

<script>
import PopupLightbox from "./PopupLightbox.vue";
import PopupOverlay from "./PopupOverlay.vue";
import PopupRouterView from "./PopupRouterView.vue";

export default {
  name: "ProductImagePopup",
  components: {
    PopupLightbox,
    PopupOverlay,
    PopupRouterView,
  },
  head() {
    return {
      title: this.work.title,
    };
  },

  data() {
    return {
      product: {},
      work: [],
    };
  },
  async fetch() {
    const id = this.$nuxt.context.params.id;
    // console.log(id);
    this.work = await this.$axios.$get("/api/work/" + id);
    console.log(this.work);
    // return { work };
  },
  created() {
    // Usually you would fetch the product from an API.
    this.product = {
      name: "Fancy Product",
      img: {
        src:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2789&q=80",
        description: "Simple white watch on white background.",
      },
    };
  },
};
</script>
