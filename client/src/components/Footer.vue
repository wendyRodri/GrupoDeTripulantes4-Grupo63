<template>
  <div class="container-footer">
    <div class="row text-center text-muted">
      <div class="col-lg-4 color">
        <h4>¿Nuestra motivación?</h4>
        <p class="justify-content-between">
          Ofrecer un servicio de alta calidad que cumpla con las expectativas de
          nuestros potenciales clientes, aquellos amantes de la tecnología que
          disfrutan con los nuevos avances de la ciencia tanto como nosotros.
        </p>
        <a
          href="https://github.com/wendyRodri/GrupoDeTripulantes4-Grupo63"
          class="color"
          >Nuestro Proyecto</a
        >
      </div>

      <div class="col-lg-4 image"></div>

      <div class="col-lg-4 color">
        <h4>Contactanos</h4>
        <ul class="list-style color">
          <li>
            <a href="mailto:geyder81@gmail.com">geyder81@gmail.com</a> - Product
            owner
          </li>
          <li>
            <a href="mailto:1danielarmando.1999@gmail.com"
              >1danielarmando.1999@gmail.com</a
            >
            - Scrum Master
          </li>
          <li>
            <a href="mailto:julian-jah@hotmail.com">julian-jah@hotmail.com</a
            >
            - Developer
          </li>
          <li>
            <a href="mailto:pmanjarres1961@hotmail.com"
              ></a
            >
          
          </li>
          <li>
            <a href="mailto:julian-jah@hotmail.com"></a>
          </li>
        </ul>
      </div>
    </div>

    <p class="text-center color">
      &copy; 2021 Tecnoware Project, All rights reserved
    </p>
  </div>
</template>

<script>
    export default{
        name: "Footer",
    }
</script>

<style scoped>
    .container-footer {
        width: 100%;
        padding-right: 100px;
        padding-left: 0px;
        margin-right: 0px;
        margin-left: 0px;
        float: left;
        background: url(../assets/logo.jpg);
        background-position: center;
    }

    .color {
        color: rgb(235, 235, 235);
    }


</style>
