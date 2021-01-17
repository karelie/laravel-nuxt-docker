<template>
  <div class="p-4">
    <div class="my-12 mx-auto px-4 md:px-12">
      <ul
        class="flex flex-wrap content-start -mx-1 lg:-mx-4 infinite-container"
      >
        <li
          v-for="work in works"
          :key="`work-${work.id}`"
          class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 xl:w-1/4"
        >
          <article class="rounded-lg shadow-lg">
            <nuxt-link to="/user/" class="block w-full relative">
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
                        class="z-10 absolute hidden bg-white text-gray-700 pt-1 group-hover:block"
                      >
                        <li
                          v-for="user in work.users"
                          :key="`work-${work.id}-user-${user.id}`"
                          class=""
                        >
                          <a
                            class="rounded-t py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            {{ user.name }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <li v-for="user in work.users" :key="user.id">
                    {{ user.name }}
                  </li>
                </template>
              </p>
            </footer>
          </article>
        </li>
      </ul>
    </div>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>


<script>
import InfiniteLoading from "vue-infinite-loading";
import axios from "axios";
export default {
  data() {
    return {
      page: 1,
      works: [],
    };
  },
  components: {
    InfiniteLoading,
  },
  methods: {
    infiniteHandler($state) {
      //web.phpで設定したルーティング
      axios
        .get("/api/works?page=" + this.page, {
          params: {
            page: this.page,
            per_page: 1,
          },
        })
        .then(({ data }) => {
          if (this.page <= data.last_page) {
            // console.log("this.page" + this.page);
            // console.log("data.last_page" + data.last_page);
            this.page = data.current_page + 1;
            this.works.push(...data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
          $state.complete();
        });
    },
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
