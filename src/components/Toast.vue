<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'ToastView',
  props: ['message']
}
export const useToastEffect = () => {
  const toastData = reactive({
    showToast: false,
    message: ''
  })
  const changeToast = (value) => {
    toastData.showToast = true
    toastData.message = value
    setTimeout(() => {
      toastData.showToast = false
      toastData.message = ''
    }, 2000)
  }
  const { showToast, message } = toRefs(toastData)
  return { showToast, message, changeToast }
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: .1rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: .05rem;
  color: $bgColor;
}
</style>
