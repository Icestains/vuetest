<template>
  <div class="hello">
    <!--      <img src="./assets/stardust3.png" alt="">-->

    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    background-image: url("../assets/stardust3.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center;
  }
  h1 {
    margin: 0;
    padding: 80px 0;
    font-size: 2em;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
