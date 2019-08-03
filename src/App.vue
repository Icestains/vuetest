<template>
    <div id="app">

        <Nav/>

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

    import {mapMutations} from 'vuex'

    import Nav from './components/Nav'
    import HelloWorld from './components/HelloWorld.vue'
    import Footer from './components/Footer.vue'

    export default {
        data() {
            return {
                componentsNames: this.$store.state.componentsNames
            }
        },
        components: {
            Nav,
            HelloWorld,
            Footer
        },

        mounted() {
            this.componentsNames += 'App.vue'
            this.$store.state.componentsNames = this.componentsNames
            window.console.log('this:' + this.componentsNames)
            window.console.log('store:' + this.$store.state.componentsNames)
            for (let todo of this.$store.state.todos) {
                window.console.log('todos:' + todo.id + ',text:' + todo.text + ',doneyet?:' + todo.done)
            }
            for (let doneTodo of this.$store.getters.doneTodos)
                window.console.log('doneTodos:' + doneTodo.id + ',text' + doneTodo.text)
            this.increment_count({amount: 100})
            window.console.log('INCREMENT_COUNT_bf:' + this.$store.state.count)
            this.countPlus()
            // this.$store.commit('INCREMENT_COUNT', {amount: 10})
            window.console.log('INCREMENT_COUNT_af:' + this.$store.state.count)
        },
        computed: {},
        methods: {
            ...mapMutations({
                    increment_count: 'INCREMENT_COUNT',
                }
            ),
            countPlus() {
                this.$store.commit('INCREMENT_COUNT', {amount: 10})
            }
        },
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

    .main {
        flex: 1 0 auto;
        width: 100%;
        padding: 56px 0;
        margin: 0;

    }

    .changeMain-appear {
        opacity: 0;
        transform: translateY(-10%);
    }

    .changeMain-enter-active, .changeMain-leave-active {
        transition: all .3s;
    }

    .changeMain-enter, .changeMain-leave-to {
        opacity: 0;
        transform: translateY(10%);
    }


</style>
