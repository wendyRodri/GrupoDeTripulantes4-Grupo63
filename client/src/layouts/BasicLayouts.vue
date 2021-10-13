<template>
  <div class="basic-layaout">
    <Menu />
    <Slider v-if="path == '/'"/>
    <div class="ui container">
      <slot />
    </div>
  </div>

  <Cart />
  <Footer />
</template>

<script>
import Menu from '../components/Menu.vue';
import Cart from '../components/Cart/Cart.vue';
import Footer from '../components/Footer.vue';
import Slider from '../components/Slider.vue';
import router from '../router';
import {useRoute} from 'vue-router';
import {computed} from 'vue';

export default {

  setup(){
    const route = useRoute();
    const path = computed(() => route.path);
    return{
      path
    }


  },
  name: 'BasicLayouts',

  components: {
    Menu,
    Cart,
    Footer,
    Slider,
  },
};
</script>

<style></style>
