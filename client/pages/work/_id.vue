<template>
  <div>
    <h1>{{ work.title }}</h1>
    <nuxt-link to="/">Index</nuxt-link>

    <ul class="">
      <li
        v-for="user in work.users"
        :key="`work-${work.id}-user-${user.id}`"
        class=""
      >
        <nuxt-link
          :to="{ name: 'user-id', params: { id: user.id } }"
          class="rounded-t py-2 px-4 block whitespace-no-wrap"
          >{{ user.name }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.work.title,
    };
  },
  async asyncData(context) {
    const id = context.params.id;
    const work = await context.$axios.$get("/api/work/" + id);
    return { work };
  },
};
</script>

