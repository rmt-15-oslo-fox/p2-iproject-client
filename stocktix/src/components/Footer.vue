<template>
<div>
  <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 item text">
                        <h3>Stocktix</h3>
                        <p>
                          This website is developed for exexcise purpose,
                          using Vuex, Bootstrap, and some other plugin for
                          the client side.
                          Any feedback is really appreciated,
                          hit me up on twkoza@gmail.com.
                        </p>
                    </div>
                </div>
                <p class="copyright">StockTix © 2021</p>
            </div>
        </footer>
    </div>
    <HFooter style="border-color:black"/>
</div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
export default {
    components: {
        HFooter
    }
}
</script>

<style>
@import '../assets/footer.css'
</style>