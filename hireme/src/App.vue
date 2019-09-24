<template>
<v-app>
    <v-navigation-drawer temporary v-model="sideNav" class="red lighten-5">
      
      <!-- Add list into side navigation bar -->
      <v-list>

        <!-- button click events in ths side drawer-->
        <v-list-tile class="red lighten-5"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>

      <!-- navigation bar -->
    <!-- using "DARK" keyworld will automaticallly change text colour in to white-->

    </v-navigation-drawer>

    <v-toolbar dark class="red lighten-2">

      <!-- opnes the drawer -->
      <!--"hidden-sm-and-up" will hide the menue from small screens -->

      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>


      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">HireMe</router-link>
      </v-toolbar-title>

       <!-- v-spacer tag will apply some space between titile and other elements -->
      <v-spacer></v-spacer>

            <!-- "hidden-xs-only" class will hide tool bar from very small devices -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">

                    <!-- add icon from vutify -->
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

          <!-- main tab raps the entire application -->
      <!-- Adding routing -->

    <main >
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          {icon: 'supervisor_account', title: 'Our Staff', link: '/jobs'},
          {icon: 'room', title: 'Get service', link: '/jobs/NewJob'},
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}

        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
