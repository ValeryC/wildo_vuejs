<template>
  <nav>
    <div class="nav-wrapper">
      <div class="container">
        <router-link to="/" class="brand-logo">Wildo Codak</router-link>
        <ul class="nav-links">
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
        </ul>
        <div class="logo"></div>
        <div class="logo"></div>
        <div class="logo"></div>

      </div>
    </div>
  </nav>
</template>

<style  scoped>

.brand-logo{  
    letter-spacing: 5px;
    font-family: 'Montserrat', sans-serif;
    color: #fefefe;
    font-weight: 800;
    font-size: 1.5rem;
    text-decoration: none;
}
.container{

    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    min-height: 8vh;
    font-family: 'Montserrat', sans-serif;
    height: 12vh;
}

ul.nav-links {
  display: flex;
  justify-content: space-between;
  width: 40%;
  line-height: 75px;
}

ul.nav-links li {
  list-style: none;
}

ul.nav-links a {
  text-decoration: none;
  color: #fefefe;
  font-size: 1.2rem;
  font-weight: 500;
  display: block;
}

</style>
