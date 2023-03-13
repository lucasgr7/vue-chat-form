<script lang="ts" setup>
import { TransitionGroup } from 'vue';
import { MessageType } from '../types/types';

const props = defineProps<{ messages: MessageType[] }>()
</script>
<template>
  <div class="messages">
    <TransitionGroup name="fade">
      <div class="message" v-for="(message, i) of props.messages" :class="{'received': message.received}" :key="i">
        {{ message.content }}
      </div>
    </TransitionGroup>
  </div>
</template>
<style>
.messages{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}
.message{
  flex: 1;
  padding: 1em;
  border-radius: 1em;
  border-top-right-radius: 0;
  border-bottom-right-radius: 13;
  margin-bottom: 1em;
  max-width: 80%;
  
  /*  fixed on right  */
  margin-left: auto;
  background: #646cff;
}
.received{
  margin-left: 0%;
  position: sticky;
  left: 0;
  border-radius: 1em;
  border-top-left-radius: 0;
  border-bottom-left-radius: 13;
  background: #e0e0e0;
  color: #424242;
}

/*  create animation fade left when new .message appears */
.fade-enter-active,
.fade-leave-active {
  opacity: 0;
  transition: all 1.5s ease !important;
}

.fade-enter-to,
.fade-leave-to {
  opacity: 1;
}
</style>