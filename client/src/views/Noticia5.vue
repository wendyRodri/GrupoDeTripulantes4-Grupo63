<template>
    <Menu/>
    <div class="containerText">
      <br><br>
  <h1 class="news_tittle">Los mejores auriculares true wireless de 2021</h1>
<br><br>
  <img class="news-info__imagen" 
  src="https://i1.wp.com/micasafit.club/wp-content/uploads/2021/09/ue-fits-roundup.jpg?resize=696%2C464&ssl=1" alt="">


  

  <p class ="paragraph">La tremenda proliferación de auriculares true wireless ha resultado positiva para el consumidor, que además de poder encontrar estos dispositivos por precios que van desde los $50 dólares, disfruta de un sonido decente y una buena batería. 
      <br><br> Por supuesto, la desventaja de poder elegir es, precisamente, tener que elegir. Para ayudarte a decidir entre una infinidad de modelos, te presentamos una lista de los mejores.

      <br><br>
      </p>
      <img class="news-info__imagen" 
  src="https://i1.wp.com/icdn.dtcn.com/image/digitaltrends_es/2bose-quietcomfort-earbuds-black-720x480.jpg?fit=696%2C696&ssl=1" alt="">
     <p class ="paragraph"> 
      <br><br>
      ¿Por qué deberías comprarlos? Son el estándar de oro para la cancelación de ruido y la calidad de las llamadas, además, suenan estupendo.

      <br><br>
      ¿Para quién son? Para quienes busquen silenciar el mundo que les rodea mientras disfrutan de una calidad de sonido superior.
      <br><br>
      Si has escuchado sobre Bose antes, sabes que la cancelación de ruido es una especie de tarjeta de presentación de esta empresa. Bose fue el primero en presentar esta tecnología en un conjunto de auriculares de tipo cascos, y desde ese momento, hemos estado esperando pacientemente lo que sabíamos que llegaría algún día: un conjunto de auriculares Bose true wireless capaces de realizar la misma magia.
      <br><br>
      
      Al instalar el controlador, usa la opción de instalación personalizada de AMD que desinstala el paquete de software actual e instala la versión actual, o la opción de instalación limpia de Nvidia. También puedes considerar usar primero un desinstalador de controladores de pantalla, ya que hace un gran trabajo al eliminar los controladores antiguos, pero no es estrictamente necesario.
      <br><br>

      Si tienes instalado el cliente de escritorio GeForce Experience de Nvidia, generalmente envía una notificación cuando hay un nuevo controlador disponible. Si no está instalado, haz clic en el enlace proporcionado anteriormente para descargarlo y actualizarlo manualmente.
      <br><br>
      </p>
      <img class="news-info__imagen" 
  src="https://i1.wp.com/icdn.dtcn.com/image/digitaltrends_es/apple-airpods-pro-press-release-1080-720x720.jpg?fit=696%2C696&ssl=1" alt="">
<p class ="paragraph">
  <br><br>

  Los AirPods se convirtieron en el buque insignia de la revolución de auriculares inalámbricos gracias a su diseño, facilidad de uso y excelente integración tanto con el iPhone como con otros dispositivos con iOS. Pero están lejos de ser perfectos: tanto la calidad de audio como la falta de resistencia al agua han sido las mayores críticas.
      <br><br>
  
  Por eso mismo es que los AirPods Pro destacan tanto, ya que atacan justamente esos dos problemas e incluso llegan más lejos, agregando cancelación de ruido activa, un diseño más seguro y cómodo y también un sistema de ecualización automática. A muchos nos sorprendieron estas mejoras, sobre todo lo relacionado a la ecualización y a la cancelación de ruido. <br><br>
  
  <br><br>
  </p>
      <img class="news-info__imagen" 
  src="https://i1.wp.com/icdn.dtcn.com/image/digitaltrends_es/43-samsung-galaxy-buds2-768x512.jpg?resize=696%2C464&ssl=1" alt="">
<p class ="paragraph">
  <br><br>

  Tal como mencionamos antes, un programa como MSI Afterburner puede hacer que la GPU llegue a su velocidad máxima estable de overclock de forma automática. Y eso implica jugar con los límites de potencia y el voltaje: es posible aumentar el rendimiento de la tarjeta de video con algo tan simple como aumentar el límite de potencia. 
  <br><br> Las tarjetas de AMD y NVIDIA tienen dos velocidades, una base y otra para overclock. Y cuando ciertas condiciones se cumplen –potencia, temperatura, etcétera–, la GPU subirá automáticamente su velocidad de reloj.
 
  <br><br>
  </p>
      <img class="news-info__imagen" 
  src="https://i2.wp.com/icdn.dtcn.com/image/digitaltrends_es/klipsch-t5-ii-720x480.jpg?fit=696%2C696&ssl=1" alt="">
<p class ="paragraph">
  <br><br>

  Los Galaxy Buds 2 representan un equilibrio casi perfecto de funciones y precio. 
  <br> A pesar de que cuestan menos de $200 dólares, te ofrecen un atractivo conjunto de funciones con carga inalámbrica, cancelación activa de ruido y transparencia, buena duración de la batería y un sonido muy satisfactorio.
  <br><br>

  <br><br>
  </p>
      <img class="news-info__imagen" 
  src="https://i1.wp.com/icdn.dtcn.com/image/digitaltrends_es/master-and-dynamic-mw08-00007-720x720.jpg?fit=696%2C696&ssl=1" alt="">
<p class ="paragraph">
  <br><br>

  Los MW08 son unos de los mejores auriculares que hemos encontrado con relación a la calidad de las llamadas. Evitan la compresión de tu voz normalmente asociada con las llamadas desde auriculares y hacen un trabajo admirable al cancelar los sonidos de fondo.
  <br><br>

Ciertamente, $299 dólares es un precio alto a pagar, pero si buscas unos auriculares true wireless que no ponga en riesgo la calidad del sonido, el estilo o la duración de la batería, no te equivocarás con los Master & Dynamic MW08.

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
    name:"Noticia5",
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