<template>
  <Menu/>
  <br><br>
        <h1 class="nuestro_equipo">NUESTRO EQUIPO</h1>
        <br><br><br>
        <div class="Equipo">
            <div class="nombre">
                <img class="team-info__imagen" src="@/assets/Daniel.jpeg" alt="Ecomerce">
                <br>
                <h2>DANIEL ZUÑIGA</h2>
                <p class="texto_miembro_equipo">Estudiante de Ingeniería de Sistemas y Computación, Universidad Nacional de Colombia.
                Desarrollador web en proceso.
                Programador Java en proceso.
                Me gusta retocar imagenes y darle algo de color a la vida.
                El mundo le pertenece a quienes buscan las soluciones frente a la adversidad, encantado de escucharte.
                </p>
            </div>

            <div class="nombre">
                <img class="team-info__imagen" src="@/assets/Geider.jpg" alt="Ecomerce">
                <br>
                <h2>GEIDER MERIÑO</h2>
                <p class="texto_miembro_equipo">Consultor de experiencia de usuario UX/UI, 
                    Analista de datos NPM (Network Promoted Services).
                    Mi trabajo es hacer que tengas la mejor experiencia en nuestro sitio.  
                 </p>
            </div>
            <!--
        <div class="col-lg-4">
          <img class="news-info__imagen"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.DYVcuLinlHBq8UNUeoLOTAHaHa%26pid%3DApi&f=1"
            alt="">
          <h2>ANDRES FELIPE CHARRY MORENO</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero similique ullam deleniti nisi et
            doloremque, omnis, ratione inventore aliquid veritatis placeat cum? Tenetur, cumque necessitatibus ab
            cupiditate qui soluta.</p>
        </div>
        
        <div class="col-lg-4">
          <img class="news-info__imagen"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jOt-AtLvj6y2XpzzLjohXAHaHa%26pid%3DApi&f=1"
            alt="">
          <h2>PEDRO RAFAEL MANJARRES</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero similique ullam deleniti nisi et
            doloremque, omnis, ratione inventore aliquid veritatis placeat cum? Tenetur, cumque necessitatibus ab
            cupiditate qui soluta.</p>
        </div>
        -->
            <div class="nombre">
                <img class="team-info__imagen"
                    src="@/assets/Julian.jpeg"
                    alt="">
                    <br>
                <h2>JULIAN MOLANO</h2>
                <p class="texto_miembro_equipo">Apasionado por el aprendizaje y la técnologia, conocimientos básicos en programación</p>
            </div>
        </div>
        <br><br>
  <Footer/>
</template>

<script>
import Menu from '../components/Menu.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Equipo',
    components: {
        Menu,
        Footer,
    }
}
</script>

<style>
.Equipo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.nuestro_equipo {
  text-align: center;
}

.team-info__imagen {
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 250px;
  border-radius: 50%;
}

.texto_miembro_equipo {
  text-align:justify;
  column-width: 100%;
  padding: 10%;
}

.nombre {
  text-align: center;
}

</style>