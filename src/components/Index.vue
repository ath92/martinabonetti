<template>
  <div>
    <div id="intro-page">
      <h2>This is just a placeholder for now.</h2>
    </div>

    <div id="portfolio-container">
        <portfolio-item v-for="portfolioItem in portfolioItems" :key="portfolioItem.title"></portfolio-item>
    </div>

    <side-nav></side-nav>
  </div>
</template>

<script>
/*
index page (i.e. landing page of the website)

This is where we list a bunch of portfolio items, show the intro page, etc.

Should reference some global data about the whole portfolio
*/

import PortfolioItem from './PortfolioItem.vue'
import SideNav from './SideNav.vue'
import { mapState } from 'vuex'
import {store} from '../store'

export default {
  name: 'index',
  data () {
    return {
      msg:"test"
    };
  },
  computed: mapState([
    'portfolioItems'
  ]),
  components: {
    PortfolioItem,
    SideNav
  },
  mounted () {
    store.commit('snappingElements', document.querySelectorAll('.portfolio-item'));
  }
}
</script>

<style scoped>
  #portfolio-container{
    width: 100%;
  }
</style>
