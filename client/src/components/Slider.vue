<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="imagen computador" width="100%" height="400px"
                    src="http://techsecsrl.com/images/ARTES/MISION.jpg">
                <div class="container">
                    <div class="carousel-caption text-start">
                        <h1></h1>
                        <p></p>
                        
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="imagen programacion" width="100%" height="400px"
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80">
                <div class="container">

                    <div class="carousel-caption">
                        <h1></h1>
                        <p></p>
                        
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="imagen drone" width="100%" height="400px"
                    src="https://skylinesas.com/entrenamiento/pluginfile.php/1/theme_enlightlite/slide1image/1605371907/inner-banner1-1920x600.jpg">

                <div class="container">
                    <div class="carousel-caption text-end">
                        <h1></h1>
                        <p></p>
                        
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Slider',
}
</script>

<style>

</style>