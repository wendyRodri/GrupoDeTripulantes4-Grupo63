<template>
    <Menu/>
    <div class="containerText">
<br><br>
  <h1 class="news_tittle">Steam Deck: esta es la nueva consola portátil <br> de Valve</h1>
<br><br>
  <img class="news-info__imagen" 
  src="https://i1.wp.com/micasafit.club/wp-content/uploads/2021/07/steam-deck-01.jpg?resize=696%2C436&ssl=1" alt="">



  <p class ="paragraph">Valve, la compañía detrás de la popular tienda de videojuegos Steam, ha anunciado una nueva consola/plataforma. Se trata de Steam Deck, un dispositivo portátil dedicado exclusivamente a videojuegos y con soporte para toda la biblioteca de juegos de Steam.

      La Steam Deck es una consola portátil pero con tecnología actual. De acuerdo a Valve, se trata de un chip basado en las arquitecturas Zen 2 (para CPU) y RDNA+ (GPU) de AMD, que es básicamente la misma detrás de las nuevas Xbox Series X y PlayStation 5. Eso sí, los números son algo más modestos, pero Valve asegura que este aparato podrá con los juegos más modernos sin mayores complicaciones, al menos en el papel.
      
      Y por supuesto, al encender la consola e iniciar sesión en Steam, toda la librería de la cuenta estará disponible para descargar y jugar.

      <br><br>
      
      Steam Deck
      Ahora, por tratarse de una portátil, lo importante son sus características externas. La pantalla es tecnología LCD, de 7 pulgadas a 1280 x 800 pixeles y tasa de refresco de 60 Hz, además de contar con un panel táctil y un sensor de luz ambiental para ajustar el brillo según el ambiente.
      
      Y quizás el detalle más importante está en los controles. La Steam Deck incluye los botones y palancas que ya son estándar, pero en el caso de los sticks direccionales, estos tienen el mismo tamaño que el de los controles de consolas o PC, para mayor comodidad (uno de los problemas eternos de las portátiles es siempre el tamaño de los controles). También se le puede conectar un teclado o un mouse y utilizarla como una computadora tradicional.
      
      Además, en la parte frontal hay dos paneles táctiles tipo trackpad, junto a un par de parlantes estéreo. Valve también dice que los controles tendrán respuesta háptica, de forma similar a lo que hace el control de la PlayStation 5. Y respecto a la vida de la batería, esta debería entregar una autonomía de entre dos y ocho horas de juego, según el sitio oficial de la consola.

      <br><br>
      </p>
      <img class="news-info__imagen" 
  src="https://i1.wp.com/icdn.dtcn.com/image/digitaltrends_es/steam-deck-02-720x720.jpg?fit=696%2C696&ssl=1" alt="">
      <p class ="paragraph">
      <br><br>
      La Steam Deck tendrá también un dock para conectarlo al televisor (similar a la Nintendo Switch), pero esta se venderá por separado. La portátil se pondrá a la venta en tres versiones a diferentes precios, según el almacenamiento interno disponible:
      <br><br>
      
      64 GB: $399 dólares
      256 GB (NVMe): $549 dólares
      512 GB (NVMe): $ 649 dólares
      Cabe mencionar también que la consola tendrá una ranura de memoria microSD en la que se podrán instalar los juegos y lanzarlos directamente desde ahí.
      <br><br>
      </p>
      <img class="news-info__imagen" 
  src="https://i2.wp.com/icdn.dtcn.com/image/digitaltrends_es/steam-deck-03-720x720.jpg?fit=696%2C696&ssl=1" alt="">
<p class ="paragraph">
  <br><br>

      Steam Deck
      La Steam Deck se venderá primero en Estados Unidos, Canadá, Reino Unido y Europa hacia finales de 2021, en una fecha aún por especificar. Luego, en 2022, se expandirá a otros países del mundo, aunque Valve todavía no entrega más detalles al respecto.
      
      Sin embargo, y ya solo por especificaciones y librería, la Steam Deck tiene potencial para convertirse en una interesante opción portátil que fabricantes como Microsoft o Sony parecen haber olvidado.
      
      </p>
</div>




<div class="ui internally celled grid">
  <News />
</div>
<Footer/>
</template>

<script>
import Menu from "../components/Menu.vue";
import Footer from "../components/Footer.vue";
import News from "../components/News.vue";
export default {
    name:"Noticia3",
    components:{
        Menu,
        Footer,
        News,
    }
}
</script>

<style>
.containerText{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
}

.paragraph{
  width: 44%;
}

.news_tittle {
    color: blue;
}

.paragraph{

font-family: 'Roboto', sans-serif;

}

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');
</style>