<template>
    <div class="nums">
        <div class="nums-box" v-for="item in numsArr" :key="item.id">{{item.num}}</div>
    </div>
 </template>
 
 <script>
 export default {
   data(){
     return {
        numsArr:[
            {
                id:1,
                num:'0'
            },
            {
                id:2,
                num:'2'
            },
            {
                id:3,
                num:'9'
            },
            {
                id:4,
                num:'4'
            },
            {
                id:5,
                num:'3'
            }
        ]
     }
   },
   components: {
    
   },
 }
 </script>
 
 <style lang="scss" scoped>
 .nums{
    margin:10px 0;
    box-shadow: 0 0 30px #0099b8 inset, 0 0 2px #0099b8;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;
    .nums-box{
        width: 45px;
        height: 50px;
        border: 1px solid rgb(6,187,196);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
    }

 }
 </style>