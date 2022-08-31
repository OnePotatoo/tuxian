<template>
  <div>app组件</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import request from "./utils/request";

onMounted(() => {
  request({
    
    url: '/home/index',
    method: 'GET'
  }).then(res => {
    console.log(res);
  })
})
</script>
