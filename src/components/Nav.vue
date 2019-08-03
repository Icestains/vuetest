<template>
    <transition name="headerNavBar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="navBar">
            <router-link class="navbar-brand" to="/">Icestains</router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav" v-on:click="clickNavBar">
                    <router-link class="nav-item nav-link" to="/">Home</router-link>
<!--                    <router-link class="nav-item nav-link" to="/nav">Nav</router-link>-->
                    <router-link class="nav-item nav-link" to="/about">About</router-link>
                </div>
            </div>
        </nav>
    </transition>
    <!--    <div id="navigation">-->
    <!--        &lt;!&ndash;<HelloWorld msg="Welcome to my websites"/>&ndash;&gt;-->

    <!--        <div id="links">-->
    <!--            <h1>Nav</h1>-->
    <!--            <ul id="linkList">-->
    <!--                <li v-for="item in items" v-bind:key="item.id">-->
    <!--                    <a :href="item.url">{{item.title}}</a>-->
    <!--                </li>-->
    <!--            </ul>-->
    <!--            &lt;!&ndash;<router-link tag='a' :to="/" >跳转demo</router-link>&ndash;&gt;-->
    <!--        </div>-->
    <!--    </div>-->
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "Nav",
        data() {
            return {

            }
        },
        mounted() {
            this.showPathBtn()
        },
        updated() {
            this.showPathBtn()
        },
        methods: {
            clickNavBar() {
                if ($('.navbar-toggler').is(':visible')) {
                    $('.navbar-toggler').click()
                }
                this.showPathBtn()
            },
            showPathBtn() {
                $('.navbar-nav').find('a').each(function () {
                    let aHref = $(this).attr('href')
                    if (aHref === location.pathname) {
                        $(this).addClass("active")
                    } else {
                        $(this).removeClass("active")
                    }
                })
            },
        }
    }
</script>

<style scoped lang="scss">

</style>