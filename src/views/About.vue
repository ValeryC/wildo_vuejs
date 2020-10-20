<template>
  <div>
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
                        <p>{{ message }}</p>
                    </div>
                
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "About",
  data() {
      return {
          message :"I was born in London, UK in 1980, Studied ‘Art and Design’ at the University of Gloucestershire then ‘Photography, Film and Video’ at the University of Westminster. I worked as a staff photographer with The Independent Newspaper. I left this job to pursue a second career in concert photography. In 2000, I was fallen in love with Paris, and moved in the french capital. I have also taught and lectured on contemporary street photography at Museums, Universities and on TV in Paris."
      }
   },
  methods: {
      reverseMessage() {
      this.message = this.message.split('').reverse().join('').split(" ")
                  .reverse()
                   .join(" ")
    }
      

  }
}
</script>

<style lang="scss" scoped>
@import 'About.sass'
</style>