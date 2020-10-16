<template>
<section id="portfolio">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 col-xs-6 col-xs-offset-3">
                <h1>Portfolio</h1>
            </div>
        </div>
        <br>
        <br>
        <!--Pills portfolio-->
        <div class="row">
            <div class="col-md-12 text-center">
                <ul class="nav nav-pills center-pills">
                    <li class="active">
                        <a data-toggle="pill" href="#city">City</a>
                    </li>
                    <li>
                        <a data-toggle="pill" href="#events">Events</a>
                    </li>
                    <li>
                        <a data-toggle="pill" href="#press">Press</a>
                    </li>
                </ul>
                <hr class="hr_homepage">
            </div>
        </div>


        <!-- The Modal -->
        <div id="myModal" class="modal">
            <span class="close">x</span>
            <img class="modal-content" id="img01">

        </div>
        <!--style 1 project1-->
        <div id=photos class="tab-content">
            <!--city-->
            <div id="city" class="tab-pane fade in active">
                <div class="row">
                    <div id="project1" class="col-md-12 col-sm-12 col-lg-12 col-xs-12 margin_article">
                        <h3 id="project1_ancre">Paris under the snow </h3>
                    </div>
                </div>
                <div class="row">
                    <div class="container">
                        <div class="row-gal row_param">
                            <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 col_param">
                                <img v-img:groupe1 src="../assets/images/city/city_1.jpg" class="_img img-gal img_portfolio1" alt="TF3">
                                <img v-img:groupe1 src="../assets/images/city/city_6.jpg" class="_img img-gal img_portfolio2" alt="TF">
                                <img v-img:groupe1 src="../assets/images/city/city_2.jpg" class="_img img-gal img_portfolio3" alt="TF2">
                                <img v-img:groupe1 src="../assets/images/city/city_5.jpg" class="_img img-gal img_portfolio4" alt="TF6">
                                <img v-img:groupe1 src="../assets/images/city/city_3.jpg" class="_img img-gal img_portfolio5" alt="TF5">
                                <img v-img:groupe1 src="../assets/images/city/city_9.jpg" class="_img img-gal img_portfolio6" alt="TF3">
                                <img v-img:groupe1 src="../assets/images/city/city_4.jpg" class="_img img-gal img_portfolio7" alt="TF4">
                                <img v-img:groupe1 src="../assets/images/city/city_8.jpg" class="_img img-gal img_portfolio8" alt="TF3">
                                <img v-img:groupe1 src="../assets/images/city/city_7.jpg" class="_img img-gal img_portfolio9" alt="TF3">
                                <img v-img:groupe1 src="../assets/images/city/city_10.jpg" class="_img img-gal img_portfolio10" alt="TF3">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div id="project2" class="col-md-12 col-sm-12 col-lg-12 col-xs-12 margin_article">
                        <h3 id="project2_ancre">Parisians monuments</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="container">
                        <div class="row-gal row_param">
                            <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 col_param">
                                <img src="../assets/images/city/city_11.jpg" class="_img img-gal img_portfolio11"
                                     alt="Pyramide du louvre">
                                <img v-img:groupe1 src="../assets/images/city/city_16.jpg" class="_img img-gal img_portfolio12" alt="TF16">
                                <img v-img:groupe1 src="../assets/images/city/city_13.jpg" class="_img img-gal img_portfolio13" alt="TF3">
                                <img v-img:groupe1 src="../assets/images/city/city_19.jpg" class="_img img-gal img_portfolio14" alt="TF18">
                                <img v-img:groupe1 src="../assets/images/city/city_12.jpg" class="_img img-gal img_portfolio15" alt="TF12">
                                <img v-img:groupe1 src="../assets/images/city/city_14.jpg" class="_img img-gal img_portfolio16" alt="TF6">
                                <img v-img:groupe1 src="../assets/images/city/city_15.jpg" class="_img img-gal img_portfolio17" alt="TF">
                                <img v-img:groupe1 src="../assets/images/city/city_20.jpg" class="_img img-gal img_portfolio18" alt="TF3">
                                <img v-img:groupe1 src="../assets/images/city/city_18.jpg" class="_img img-gal img_portfolio19" alt="TF12">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--PHOTOS EVENTS -->

            <div id="events" class="tab-pane fade in active">
                <div class="row">
                    <div id="project3" class="col-md-12 col-sm-12 col-lg-12 col-xs-12 margin_article">
                        <h3 id="project3_ancre">Parisians concerts and festivals</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="container">
                        <div class="row-gal row_param">
                            <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 col_param">
                                <img v-img:groupe2 src="../assets/images/events/events_4.jpg" class="_img img-gal img_portfolio20" alt="TF3">
                                <img v-img:groupe2 src="../assets/images/events/events_1.jpg" class="_img img-gal img_portfolio21" alt="TF3">
                                <img v-img:groupe2 src="../assets/images/events/events_2.jpg" class="_img img-gal img_portfolio22" alt="TF3">
                                <img v-img:groupe2 src="../assets/images/events/events_3.jpg" class="_img img-gal img_portfolio23" alt="TF3">
                                <img v-img:groupe2 src="../assets/images/events/events_5.jpg" class="_img img-gal img_portfolio24" alt="TF3">
                                <img v-img:groupe2 src="../assets/images/events/events_6.jpg" class="_img img-gal img_portfolio25" alt="TF3">
                                <img v-img:groupe2 src="../assets/images/events/events_7.jpg" class="_img img-gal img_portfolio26" alt="TF3">
                                <img v-img:groupe2 src="../assets/images/events/events_8.jpg" class="_img img-gal img_portfolio27" alt="TF3">
                                <img v-img:groupe2 src="../assets/images/events/events_13.jpg" class="_img img-gal img_portfolio28" alt="TF3">
                                <img v-img:groupe2 src="../assets/images/events/events_9.jpg" class="_img img-gal img_portfolio29" alt="TF3">
                                <img v-img:groupe2 src="../assets/images/events/events_22.jpg" class="_img img-gal img_portfolio30" alt="TF3">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--press-->
            <div id="press" class="tab-pane fade in active">
                <div class="row">
                    <div id="project4" class="col-md-12 col-sm-12 col-lg-12 col-xs-12 margin_article">
                        <h3 id="project4_ancre">Charlie Hebdo</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="container">
                        <div class="row-gal row_param">
                            <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 col_param">
                                <img v-img:groupe3 src="../assets/images/press/press_1.jpg" class="_img img-gal img_portfolio31" alt="TF3">
                                <img v-img:groupe3 src="../assets/images/press/press_2.jpg" class="_img img-gal img_portfolio32" alt="TF2">
                                <img v-img:groupe3 src="../assets/images/press/press_4.jpg" class="_img img-gal img_portfolio33" alt="TF5">
                                <img v-img:groupe3 src="../assets/images/press/press_5.jpg" class="_img img-gal img_portfolio34" alt="TF4">
                                <img v-img:groupe3 src="../assets/images/press/press_6.jpg" class="_img img-gal img_portfolio35" alt="TF6">
                                <img v-img:groupe3 src="../assets/images/press/press_7.jpg" class="_img img-gal img_portfolio36" alt="TF">
                                <img v-img:groupe3 src="../assets/images/press/press_8.jpg" class="_img img-gal img_portfolio37" alt="TF3">
                                <img v-img:groupe3 src="../assets/images/press/press_9.jpg" class="_img img-gal img_portfolio38" alt="TF">
                                <img v-img:groupe3 src="../assets/images/press/press_10.jpg" class="_img img-gal img_portfolio39" alt="TF3">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


</template>

<script>

export default {

  data() {
    return {
  
    };
  },
};
</script>

<style lang="scss" scoped>
@import "Invisible2.sass"
</style>