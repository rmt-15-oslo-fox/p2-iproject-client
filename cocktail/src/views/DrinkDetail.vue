<template>
<!-- <div class="container-fluid"> -->
    <!-- <div class="row">
        <div class="col-3 px-1 bg-dark position-fixed" id="sticky-sidebar">
            <div class="nav flex-column flex-nowrap vh-100 overflow-auto text-white p-2">
                <a href="./" class="nav-link">Link</a>
                <a href="./" class="nav-link">Link</a>
                <a href="./" class="nav-link">Link</a>
                <a href="./" class="nav-link">Link</a>
                <a href="./" class="nav-link">Link</a>
                <a href="./" class="nav-link">Link ...</a>
            </div>
        </div>
        <div class="col-9 offset-3" id="main">
            <h1>Main Area</h1> ... 
            <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>
            <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>
            
            <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
            <p>End of content...</p>
        </div>
    </div>
</div> -->
    <div class="d-flex parent">
      <div class="d-flex flex-column sidebar-green h-100 parent position-fixed">
          <div>
              logo
          </div>
          <div>
              content
          </div>
      </div>
      <div class="d-flex flex-column content-page h-100 m-5 position-relative">
          <div>
              Navbar
          </div>
          <div class="container">
              <div class="row">
                  <div class="col">
                        <div class="mb-3 text-left">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="@/assets/margarita.jpg" class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-3">
                        <ingredient-card></ingredient-card>
                    </div>
                    <div class="col-3">
                        <ingredient-card></ingredient-card>
                    </div>
                    <div class="col-3">
                        <ingredient-card></ingredient-card>
                    </div>
                    <div class="col-3">
                        <ingredient-card></ingredient-card>
                    </div>
              </div>
              <div class="row">
                  <div class="col">
                      Instruction
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                      Embed
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import IngredientCard from '../components/IngredientCard.vue'
export default {
    components : { IngredientCard }
}
</script>

<style scoped>
.parent {
    height: 100vh;
}

.sidebar-green {
    background-color:#0F430E;
    width: 20%;
    color: white;
}

.content-page {
    width: 80%
}
</style>