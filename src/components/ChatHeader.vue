<script lang="ts" setup>
const props = defineProps<{ header: String }>()
</script>
<template>
  <div class="chat-header">
     <div class="chat-header-title">{{props.header}}</div>
   </div>
</template>
<style scoped>
.chat-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  border-bottom: 1px solid #e0e0e0;
}
.chat-header-title{
  font-size: 1.5em;
  font-weight: 500;
}
</style>