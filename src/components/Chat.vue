<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ChatHeader from './ChatHeader.vue'
import Messages from './Messages.vue';
import type { FormInputType, MessageType } from '../types/types';

const props = defineProps<{ header: String, formInputs: FormInputType[] }>()

// create an array of MessageType
const messages = ref<MessageType[]>([]);

const reply = ref();
const state = ref({
  formIndex: 0
})

// actions
function handleSubmitReply() {
  pushReplyToMessages();
  if(validateInput()){
    pushNextQuestionToMessages();
  }
  clearReplyInput();
}

function validateInput(){
  const currentInput = props.formInputs[state.value.formIndex - 1];
  if (currentInput && currentInput.validation) {
    const validation = currentInput.validation(reply.value);
    if (typeof(validation) === 'string') {
      messages.value.push({
        id: messages.value.length + 1,
        content: validation,
        received: true
      });
      return false;
    }
  }
  return true;
}

function pushReplyToMessages() {
  messages.value.push({
    id: messages.value.length + 1,
    content: reply.value,
    received: false
  });
}

function clearReplyInput() {
  reply.value = '';
  // focus on the input
  const input = document.querySelector('.chat-footer-textarea-input');
  if (input) {
    input.focus();
  }
}

function pushNextQuestionToMessages() {
  const nextInput = props.formInputs[state.value.formIndex];
  if (nextInput) {
    messages.value.push({
      id: nextInput.id,
      content: nextInput.placeholder,
      received: true
    });
    state.value.formIndex++;
  }
}

onMounted(() => {
  pushNextQuestionToMessages();
})
</script>

<template>
  <div class="chat">
    <chat-header :header="props.header" />
    <div class="chat-body">
      <Messages :messages="messages" />
    </div>
    <div class="chat-footer">
      <div class="chat-footer-textarea">
        <textarea style="width: 100%" v-model="reply" class="chat-footer-textarea-input" placeholder="Type a message"></textarea>
      </div>
      <div class="chat-footer-button">
        <button @click="handleSubmitReply" class="chat-footer-button-send">Send</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.chat-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  padding: 1em;
}
.chat-footer{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  border-top: 1px solid #e0e0e0;
}
.chat-footer-textarea {
  justify-content: space-between;
  padding: 1em;
  width: 691px;
  /* textarea size 100% */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;


}
.chat-footer-button{
  align-items: center;
  justify-content: space-between;
  padding: 1em;

}
</style>
