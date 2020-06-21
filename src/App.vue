<template>
  <v-app app>
    <v-navigation-drawer v-model="sideNav" fixed>
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon left>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="primary" dark app>
      <v-app-bar-nav-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    sideNav: false,
    menuItems: [
      {
        icon: "mdi-account-supervisor",
        title: "View Meetups",
        link: "/meetups"
      },
      {
        icon: "mdi-map-marker",
        title: "Organize Meetup",
        link: "/meetup/new"
      },
      {
        icon: "mdi-account",
        title: "Profile",
        link: "/profile"
      },
      {
        icon: "mdi-account-circle-outline",
        title: "Sign up",
        link: "/signup"
      },
      {
        icon: "mdi-lock-open-outline",
        title: "Sign in",
        link: "/signin"
      }
    ]
  })
};
</script>
<style scoped>
main {
  margin-top: 88px;
}
</style>