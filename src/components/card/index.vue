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
    width: 100%;
   .topBox{
    height: 40px;
    box-shadow: 0 0 30px #0099b8 inset, 0 0 2px #0099b8;
   color: #fff;
   display: flex;
   align-items: center;
   justify-content: center;
   }
}
</style>