<script setup lang="ts">
import { ref } from 'vue';
import Chat from './components/Chat.vue'
import { FormInputType } from './types/types';

const formInputs = ref([{
  id: 1,
  label: 'Name',
  type: 'text',
  value: '',
  placeholder: 'Enter your name',
    validation: (value: string) => {
      if (value.length < 3) {
        return 'Name must be at least 3 characters';
      }
      return true;
    },
  }, {
  id: 2,
  label: 'Email',
  type: 'email',
  value: '',
  placeholder: 'Enter your email',
  validation: (value: string) => {
    if (!value.includes('@')) {
      return 'Email must contain @';
    }
    return true;
  },
}, {
  id: 3,
  label: 'Message',
  type: 'textarea',
  value: '',
  placeholder: 'Enter your message'
}] as FormInputType[]);
</script>

<template>
  <Chat header="Noonsoft welcome page" :form-inputs="formInputs" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
