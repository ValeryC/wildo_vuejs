<template>
 <div>
<!-- /.container-fluid -->
<div id="carousel-example-generic" class="my-carousel carousel slide" data-ride="carousel" data-interval="4000">

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
        <div class="item active">
            <img src="../assets/images/city/city_1.jpg" alt="Carousel image 1">
        </div>
        <div class="item">
            <img src="../assets/images/events/events_8.jpg" alt="Carousel image 1">
        </div>
        <div class="item">
            <img src="../assets/images/press/press_3.jpg" alt="Carousel image 1">
        </div>
        <div class="item">
            <img src="../assets/images/city/city_13.jpg" alt="Carousel image 1">
        </div>
        <div class="item">
            <img src="../assets/images/press/press_8.jpg" alt="Carousel image 1">
        </div>
        <div class="item">
            <img src="../assets/images/events/events_4.jpg" alt="Carousel image 1">
        </div>
        <div class="item">
            <img src="../assets/images/city/city_14.jpg" alt="Carousel image 1">
        </div>
    </div>

</div>


<!-- CONTENT ABOUT ME & CONTACT -->


<div class="content_section">

    <section id="UpPage" class="content_sectionControlsCarousel">
        <!-- Controls -->
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <!--<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>-->
            <!-- <span class="sr-only">Previous</span> -->
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <!--<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>-->
            <!-- <span class="sr-only">Next</span> -->
        </a>
        <div class="container zone_pictosUpDown">
            <div class="row">
                <div class="col-12" align="center">
                    <a href="#AboutMe">
                        <div class="pictoDown">></div>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section id="AboutMe" class="content_sectionAboutMe">

        <div class="container">
            <!-- <div class="row">
                <div class="col-12" align="center">
                    <a href="#Contact">
                        <div class="pictoUpBlack">⌄</div>
                    </a>
                </div>
                <div>
            </div>  -->
            <div class="row">
                <div class="col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-1 col-md-3 col-md-offset-1 col-lg-3 col-lg-offet-1">
                    <img class="img_photograph" src="../assets/images/photograph.jpg" alt="w">
                    <br>
                    <br>
                </div>
                <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-7 col-md-offset-0 col-lg-7 col-lg-offset-0">
                    <div class="zone_AboutMeCenter">
                        <p>I was born in London, UK in 1980, Studied ‘Art and Design’ at the University of
                            Gloucestershire
                            then ‘Photography, Film and Video’ at the University of Westminster. I worked as a staff
                            photographer with The Independent Newspaper. I left this job to pursue a second career in
                            concert photography. In 2000, I was fallen in love with Paris, and moved in the french
                            capital.
                            I have also taught and lectured on contemporary street photography at Museums, Universities
                            and on TV in Paris.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    <section id="contact" class="content_sectionContact">
        <div class="container">
            <div class="row">
                <div class="container">
                    <div class="row">
                        <!--Formulaire de contact-->
                        <form method="post" role="form">
                            <div class="controls">
                                <div class="row" align="center">
                                    <div class="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6  col-lg-offset-3">
                                        <h1>Contact me</h1>
                                        <br>
                                        <br>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                                    <div class="form-group">
                                        <!--<label for="form_name">Name *</label>-->
                                        <input id="form_name" type="text" name="name" class="form-control"
                                               placeholder="Your name*" required="required"
                                               data-error="Firstname is required.">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                                    <div class="form-group">
                                        <!--<label for="form_email">Email *</label>-->
                                        <input id="form_email" type="email" name="email" class="form-control"
                                               placeholder="Your email*" required="required"
                                               data-error="Valid email is required.">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                                    <div class="form-group">
                                        <!--<label for="form_message">Message *</label>-->
                                        <textarea id="form_message" name="message" class="form-control"
                                                  placeholder="Your message*" rows="4" required="required"
                                                  data-error="Please,leave us a message."></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                                    <span class="text-muted">*These fields are required.</span>
                                </div>
                                <div class="col-12" align="center">
                                    <br>
                                    <br>
                                    <input type="submit" class="btn_pages" value="Send message">
                                    <br>
                                    <br>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>

  
</div>
</template>

<script>

export default{
  data() {
    return {
    fruits: ["Apple", "Banana", "Pineapple", "Pear"],
    students: [
      {id: 4720, firstname: 'Kelly', lastname: 'Smist', name: 'paris sous la neige'},
      {id: 1234, firstname: 'Charlie', lastname: 'Brown', name:'paris sous la pluie'},
      {id: 2103, firstname: 'Bryan', lastname: 'Griffiths'},
    ],
    ipad_mini_4: {
      'Announcement date': 'September 9, 2015',
      'Release date': 'September 9, 2015',
      CPU: '1.5 GHz dual-core Apple Typhoon',
      GPU: 'Quad-core PowerVR GX6450',
      Memory: '2048 MB LPDDR3 RAM',    
    },
    countries: ['France', 'China', 'Canada', 'USA', 'Finland'],
  }}
}
</script>

<style lang="scss" scoped>
@import "Home.scss"
</style>
