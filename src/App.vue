<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="layout">
    <div class="layout__sidebar">
      <div class="flex flex__col">
        <div class="button" @click="$router.push('/inbox')">
          Inbox ({{ inboxCount }})
        </div>
        <div class="button" @click="$router.push('/archiev')">
          Archiev ({{ archievCount }})
        </div>
      </div>
      <div class="button button__logout">Logout</div>
    </div>
    <div class="layout__main">
      <RouterView />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    inboxCount() {
      const lists = this.$store.state.lists.filter(
        (item) => item.archiev == false
      );
      return lists.length;
    },
    archievCount() {
      const lists = this.$store.state.lists.filter((item) => item.archiev);
      return lists.length;
    },
  },
};
</script>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
