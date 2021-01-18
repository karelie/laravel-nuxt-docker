<template>
  <div>
    <h1>{{ user.name }}</h1>
    <nuxt-link to="/">Index</nuxt-link>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.user.name,
    };
  },
  async asyncData(context) {
    const id = context.params.id;
    const user = await context.$axios.$get("/api/user/" + id);
    return { user };
  },
};
</script>