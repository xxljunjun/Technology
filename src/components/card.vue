<template>
    <div class="card">
        <div class="topBox">
           {{title}}
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String,
                default:''
            }
        }
    }
</script>

<style lang="scss" scoped>
.card{
    width: 500px;
    height: 300px;
    border: 1px solid red;
}
</style>