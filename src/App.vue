<template>
    <div id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <img alt="stardust" src="./assets/stardust2.png">
        <HelloWorld msg="Welcomellalalfdmwieiwhefihweiff"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        }
    }
</script>

<style lang="scss">
    $font_color: #2c3e50;
    body{
        margin: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $font_color;
        width: 100%;
        /*margin-top: 60px;*/
        img{
            width: 100%;
        }
    }
</style>
