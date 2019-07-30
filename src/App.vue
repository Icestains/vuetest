<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light sticky-top" id="navBar">
      <router-link class="navbar-brand" to="/">Icestains</router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" v-on:click="clickNavBar">
          <router-link class="nav-item nav-link" to="/">Home</router-link>
          <router-link class="nav-item nav-link" to="/nav">Nav</router-link>
          <router-link class="nav-item nav-link" to="/about">About</router-link>
        </div>
      </div>
    </nav>

    <section class="main">
      <HelloWorld msg="Welcome"/>
      <transition
        name="changeMain"
        mode="out-in"
        appear
        appear-class="changeMain-enter"
        appear-active-class="changeMain-enter-active">
        <router-view/>
      </transition>
    </section>

    <Footer class="footer"/>

  </div>
</template>

<script>

  import HelloWorld from '@/components/HelloWorld.vue'
  import Footer from '@/components/Footer.vue'
  import $ from 'jquery'


  export default {
    components: {
      HelloWorld,
      Footer
    },
    mounted() {
      window.console.log('mounted')
      this.showPathBtn()
    },
    updated() {
      window.console.log('updated')
      this.showPathBtn()
    },
    methods: {
      clickNavBar() {
        if ($('.navbar-toggler').is(':visible')) {
          window.console.log('clickNavBar')
          $('.navbar-toggler').click()
        }
        this.showPathBtn()

      },
      showPathBtn() {
        $('.navbar-nav').find('a').each(function () {
          let aHref = $(this).attr('href')
          if (aHref === location.pathname) {
            window.console.log('showFct' + aHref)
            $(this).addClass("active")
          } else {
            $(this).removeClass("active")
          }
        })
      }
    }
  }

</script>

<style lang="less">
  @font_color: #2c3e50;
  body, html {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  #app {
    display: flex;
    flex-direction: column;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: @font_color;
    width: 100%;
    min-height: 100vh;

  }

  .navbar {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
  }

  .main {
    flex: 1 0 auto;
    width: 100%;
    padding: 0;
    margin: 0;

  }

  .changeMain-appear {
    opacity: 0;
    transform: translateY(-10%);
  }

  .changeMain-enter-active, .changeMain-leave-active {
    transition: all .3s;
  }

  .changeMain-enter {
    opacity: 0;
    transform: translateY(10%);
  }


  .changeMain-leave-to {
    opacity: 0;
    transform: translateY(-10%);
  }

  .footer {

  }

</style>
