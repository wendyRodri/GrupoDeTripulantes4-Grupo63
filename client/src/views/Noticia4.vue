<template>
    <Menu/>
    <div class="containerText">
      <br><br>
  <h1 class="news_tittle">Cómo acelerar tarjeta gráfica y mejorar el <br> rendimiento de tu PC</h1>
<br><br>
  <img class="news-info__imagen" 
  src="https://i2.wp.com/micasafit.club/wp-content/uploads/2021/07/amd-radeon-rx-5700-rx-5700-xt-review-04267-2.jpg?resize=696%2C464&ssl=1" alt="">



  <p class ="paragraph">Cuando utilizas tu PC para jugar, es la tarjeta de video (también conocida como GPU) la que está a cargo de “dibujar” todo aquello que ves, desde la interfaz de usuario hasta el paisaje, el cielo y las montañas a lo lejos. Desafortunadamente, varios factores pueden hacer que esta no opere a su máximo potencial. En esta guía te compartimos algunas recomendaciones para acelerar la tarjeta gráfica y tener la mejor experiencia posible al jugar.

      <br><br>
      
      Este debería ser tu primer paso para acelerar el rendimiento de la GPU, ya sea que tu computadora tenga gráficos integrados o una GPU discreta. Dado que este chip maneja la mayor parte de la carga visual, la instalación de los controladores más recientes debe ser una prioridad.

      <br><br>
      </p>
      <img class="news-info__imagen" 
  src="https://i2.wp.com/icdn.dtcn.com/image/digitaltrends_es/geforce-experience-update-driver-720x480.jpg?fit=696%2C696&ssl=1" alt="">
      <p class ="paragraph">
      <br><br>
      Nota: esta guía se aplica para los equipos con Windows 10, aunque algunas sugerencias también sirven para macOS. Además, nos enfocaremos estrictamente en optimizar las tarjetas de video, que son el componente principal a la hora de mover un videojuego, aunque no el único.
      <br><br>
      
      Al instalar el controlador, usa la opción de instalación personalizada de AMD que desinstala el paquete de software actual e instala la versión actual, o la opción de instalación limpia de Nvidia. También puedes considerar usar primero un desinstalador de controladores de pantalla, ya que hace un gran trabajo al eliminar los controladores antiguos, pero no es estrictamente necesario.

Si tienes instalado el cliente de escritorio GeForce Experience de Nvidia, generalmente envía una notificación cuando hay un nuevo controlador disponible. Si no está instalado, haz clic en el enlace proporcionado anteriormente para descargarlo y actualizarlo manualmente.
      <br><br>
      </p>
      <img class="news-info__imagen" 
  src="https://i0.wp.com/icdn.dtcn.com/image/digitaltrends_es/nvidia-chip-2-720x480.jpg?fit=696%2C696&ssl=1" alt="">
<p class ="paragraph">
  <br><br>

  Una forma de mejorar el rendimiento de la GPU es overclockear el chip. Esto se hace al ajustar la frecuencia y el voltaje para obtener algo de potencia adicional por parte de la tarjeta de video (o el procesador mismo). <br><br>

  Sin embargo, si no tienes experiencia en hacer overclocking, procede con precaución y lee detenidamente antes de comenzar. Una configuración incorrecta podría dañar el chip. Aún más, un enfriador inadecuado hará que la GPU con overclock se sobrecaliente y se dañe. <br><br>
  
  Al igual que los procesadores, puedes overclockear una GPU al usar un software de escritorio. Una solución es el Afterburner de MSI que escanea tu GPU y encuentra la configuración de overclock más estable y alta. Otra es la Precision X1 de EVGA, aunque solo es compatible con las GPU GTX 10, GTX 16 y RTX 20 Series. <br><br>
  
  <br><br>
  </p>
      <img class="news-info__imagen" 
  src="https://i0.wp.com/icdn.dtcn.com/image/digitaltrends_es/msi-afterburner-aumentar-potencia-720x482.jpg?fit=696%2C696&ssl=1" alt="">
<p class ="paragraph">
  <br><br>

  Tal como mencionamos antes, un programa como MSI Afterburner puede hacer que la GPU llegue a su velocidad máxima estable de overclock de forma automática. Y eso implica jugar con los límites de potencia y el voltaje: es posible aumentar el rendimiento de la tarjeta de video con algo tan simple como aumentar el límite de potencia. 
  <br><br> Las tarjetas de AMD y NVIDIA tienen dos velocidades, una base y otra para overclock. Y cuando ciertas condiciones se cumplen –potencia, temperatura, etcétera–, la GPU subirá automáticamente su velocidad de reloj.
 
  <br><br>
  </p>
      <img class="news-info__imagen" 
  src="https://i2.wp.com/icdn.dtcn.com/image/digitaltrends_es/msi-curva-ventilador-720x480.jpg?fit=696%2C696&ssl=1" alt="">
<p class ="paragraph">
  <br><br>

  Si tu tarjeta gráfica se calienta demasiado, se alentará para evitar dañar sus delicados componentes. Si los ventiladores de admisión y los filtros están cubiertos de polvo, el flujo de aire no está siendo suficiente y no está alejando el calor de los componentes, incluida la GPU, lo que puede provocar una acumulación excesiva de calor.
  <br><br>

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
    name:"Noticia4",
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