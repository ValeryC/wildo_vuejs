<template>
  <nav class="my-nav navbar navbar-default">
     <div class="container-fluid">
        <div class="nopadding_margin">
            <div class="col-md-12 col-xs-12 col-lg-12">
              <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                            aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                  <router-link to="/" class="navbar-brand name_photograph">Wildo Codak</router-link>
                </div>
                  <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                          <router-link to="/">HOME</router-link>
                        </li>
                        <li>
                          <router-link to="/projects">PROJECTS</router-link>
                        </li>
                         <li>
                          <router-link to="/portefolio">PORTEFOLIO</router-link>
                        </li>
                        <li>
                          <router-link to="/about">ABOUT ME</router-link>
                        </li>
                        <li>
                          <router-link to="/contact">CONTACT</router-link>
                        </li>
                        <li>
                          <div class="block_icons">
                              <a href="http://facebook.com" target="_blank">
                                  <i class="fab fa-facebook-square icons"></i>
                              </a>
                              <a href="http://instagram.com" target="_blank">
                                  <i class="fab fa-instagram icons"></i>
                              </a>
                              <a href="http://flickr.com" target="_blank">
                                  <i class="fab fa-flickr icons"></i>
                              </a>
                          </div>
                        </li> 
                    </ul>
            </div>
         </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss"  scoped>
@import 'Navbar.sass'
</style>
