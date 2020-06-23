<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
        <!--    命名视图 -->
        <router-view name="email"></router-view>
        <router-view name="tel"></router-view>
        <transition-group name="router">
        </transition-group>
    </div>
</template>

<style lang="less">
    .router-enter{
        opacity: 0;
    }
    .router-enter-active{
        transition: opacity 1s ease;
    }
    .router-enter-to {
        opacity: 1;
    }
    .router-leave{
        opacity: 1;
    }
    .router-leave-active{
        transition: opacity 1s ease;
    }
    .router-leave-to {
        opacity: 0;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
