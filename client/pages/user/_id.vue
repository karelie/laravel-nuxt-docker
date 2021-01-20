<template>
  <div>
    <h1>{{ user.name }}</h1>
    <nuxt-link to="/">Index</nuxt-link>
    <div id="works-list-first" class="mx-auto px-4 md:px-12 fixed">
      <ul
        class="flex flex-wrap content-start -mx-1 lg:-mx-4 infinite-container"
      >
        <li
          v-for="work in user.works"
          :key="`work-${work.id}`"
          class="my-3 px-3 w-full lg:my-4 lg:px-2 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/4 3xl:w-1/5"
        >
          <article class="rounded-lg shadow-lg">
            <nuxt-link
              :to="{ name: 'index-work-id', params: { id: work.id } }"
              class="block w-full relative"
            >
              <img
                alt="Placeholder"
                class="block h-auto w-full"
                src="https://picsum.photos/600/400/?random"
              />
              <header
                class="w-full flex items-center justify-between leading-tight p-2 md:p-4 absolute bottom-0 left-0"
              >
                <h3 class="text-lg text-white">
                  {{ work.id }} - {{ work.title }}
                </h3>
              </header>
            </nuxt-link>
            <footer class="flex items-center leading-none p-2 md:p-4">
              <img
                alt="Placeholder"
                class="block rounded-full"
                src="https://picsum.photos/32/32/?random"
              />
              <p class="ml-2 text-sm">
                <template v-if="work.users.length > 1">
                  <div class="flex sm:items-center text-sm">
                    <div class="group inline-block relative">
                      <button
                        class="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
                      >
                        <span class="mr-1">合同作品</span>
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          />
                        </svg>
                      </button>
                      <ul
                        class="z-10 absolute hidden bg-white text-gray-700 rounded-md pt-1 shadow-lg group-hover:block"
                      >
                        <li
                          v-for="user in user.works.users"
                          :key="`work-${work.id}-user-${user.id}`"
                          class="border-b last:border-b-0"
                        >
                          <nuxt-link
                            :to="{ name: 'user-id', params: { id: user.id } }"
                            class="rounded-t py-2 px-4 block whitespace-no-wrap"
                            >{{ user.name }}</nuxt-link
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <li v-for="user in user.works.users" :key="user.id">
                    <nuxt-link
                      :to="{ name: 'user-id', params: { id: user.id } }"
                      class="rounded-t py-2 px-4 block whitespace-no-wrap"
                      >{{ user.name }}</nuxt-link
                    >
                  </li>
                </template>
              </p>
            </footer>
          </article>
        </li>
      </ul>
    </div>
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