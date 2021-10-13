<template>
  
  <BasicLayouts>
    <br><br>
    <h1 class="titulo_destacados">PRODUCTOS DESTACADOS</h1>
    <br><br>
    <div class="ui grid">
      <div
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product.id"
      >
        <Product :product="product" />
      </div>
    </div>
    <br><br><br><br>

    <div class="ui internally celled grid">
      <News />
    </div>



  </BasicLayouts> 
  
</template>

<script>
import { ref, onMounted } from 'vue';
import BasicLayouts from '../layouts/BasicLayouts.vue';
import { getProducts } from '../api/product';
import Product from '../components/Product.vue';
import News from '../components/News.vue';


export default {
  name: 'Home',
  components: {
    BasicLayouts,
    Product,
    News,
  },
  setup() {
    let products = ref(null);

    onMounted(async () => {
      const response = await getProducts(20);
      products.value = response;
    });

    return {
      products,
    };
  },
};
</script>

<style>

.titulo_destacados {
  text-align: center;

  color: #0891cc;

  font-weight: bold;
}

.news-info__title {

  text-align: justify;
}



.header_noticias {
  text-align: center;
}

.texto_columna {
  
  text-align: center;
  
}

.img_noticias {



}


</style>
