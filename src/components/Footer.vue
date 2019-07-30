<template>
  <div id="footer" class="footer">
    <h1>Footer</h1>
    <div class="container">
      <div class="row">
        <ul class="col-sm">
          <li v-for="item in items" v-bind:key="item.id">
            <a v-if="item.space === 'outer'" :href="item.url">{{ item.title }}</a>
            <router-link v-else-if="item.space === 'inner'" :to="item.url">{{ item.title }}</router-link>
          </li>
        </ul>
        <ul class="col-sm">
          <li v-for="item in items" v-bind:key="item.id">
            <a v-if="item.space === 'outer'" :href="item.url">{{ item.title }}</a>
            <router-link v-else-if="item.space === 'inner'" :to="item.url">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        items: [
          {
            space: 'outer',
            title: '个人博客',
            url: 'http://47.103.5.67/'
          },
          {
            space: 'inner',
            title: '首页',
            url: '/'
          },
          {
            space: 'inner',
            title: '导航站',
            url: '/nav'
          },
        ]
      }
    },
  }
</script>

<style scoped lang="less">
  @nice-blue: #5B83AD;
  @light-blue: @nice-blue + #111;

  .footer {
    /*position: absolute;*/
    /*bottom: 0;*/
    /*left: 0;*/
    height: 300px;
    background: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    color: @light-blue;
    padding: 10px 0;
  }

  .links {
    display: flex;
    justify-content: center;
    /*width: 1000px;*/
  }

  ul {
    padding: 0;
    /*width: 300px;*/
  }

  li {
    list-style: none;
    text-align: center;
    /*width: 100px;*/
  }

  a {
    color: #2c3e50;
    text-decoration: none;

    &:hover {
      color: dimgrey;
    }
  }
</style>