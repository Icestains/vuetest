<template>
    <div id="navigation">
        <!--<HelloWorld msg="Welcome to my websites"/>-->

        <div id="links">
            <h1>Nav</h1>
            <ul id="linkList">
                <li v-for="item in items" v-bind:key="item.id">
                    <a :href="item.url">{{item.title}}</a>
                </li>
            </ul>
            <!--<router-link tag='a' :to="/" >跳转demo</router-link>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        data() {
            return {
                ok: Math.random() > 0.5 ? true : false,
                blogUrl: 'http://47.103.5.67/',
                navUrl: '/nav',
                items: [
                    {
                        title: '个人博客',
                        url: 'http://47.103.5.67/'
                    },
                    {
                        title: '导航站',
                        url: '/nav'
                    },

                ]
            }
        },
    }
</script>

<style scoped lang="scss">
    ul {
        padding: 0;

    }

    li {
        list-style: none;
        /*display: inline-block;*/
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