// plugins/modal-vanilla.client.js
import Modal from 'modal-vanilla'

export default (context, inject) => {
  // 전역으로 사용할 수 있게 $Modal로 주입
  inject('Modal', Modal)
}
