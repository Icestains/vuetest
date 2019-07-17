<template>

    <div class="home">
        <HelloWorld msg="Welcome"/>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
        <div v-if="Math.random() > 0.5">
            Now you see me
        </div>
        <div v-else>
            Now you don't
        </div>
        <template v-if="ok">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </template>
    </div>

</template>

<script>
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        },
        data() {
            return {
                message: 'Hello',
                ok: Math.random()>0.5?true:false
            }
        },
        computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            }
        }
    }

</script>

<style scoped>

</style>