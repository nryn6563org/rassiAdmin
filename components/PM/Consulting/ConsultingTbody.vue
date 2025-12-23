<template>
  <tbody>
    <tr v-for="(tbodyList, tbodyListIndex) in tbodyLists" :key="tbodyListIndex">
      <td>
        <label :for="`check_${tbodyListIndex}`" class="custom-checkbox-label">
          <input type="checkbox" v-model="tbodyList.checked" :id="`check_${tbodyListIndex}`" class="custom-checkbox-input" />
          <span class="custom-checkbox-box"></span>
        </label>
      </td>
      <!-- check -->
      <td>
        <div class="num">
          <span>{{ tbodyList.ListNumber }}</span>
        </div>
      </td>
      <!-- No -->
      <td>
        <div class="obj">
          <NuxtLink to="/" :title="tbodyList.obj">{{ tbodyList.Obj }}</NuxtLink>
        </div>
      </td>
      <!-- 제목 -->
      <td>
        <div class="author">
          <span>{{ tbodyList.Author }}</span>
        </div>
      </td>
      <!-- 작성자 -->
       <td>
        <div class="public">
          <span>{{ tbodyList.Public }}</span>
        </div>
       </td>
      <td>
        <div class="registration">
          <span>{{ tbodyList.Registration }}</span>
        </div>
      </td>
      <!-- 등록일시 -->
      <td>
        <div class="customer">
          <span>{{ tbodyList.Customer }}</span>
        </div>
      </td>
      <!-- 상담자 -->
      <td>
        <div class="status">
          <span>{{ tbodyList.Status }}</span>
        </div>
      </td>
      <!-- 처리상태 -->
      <td>
        <div class="manage">
          <button @click="gotoReadManage()" class="btn012 btn-mid">
            <span>관리</span>
          </button>
        </div>
      </td>
      <!-- 삭제 -->
      <td>
        <div class="delete">
          <button @click="handleModalClick($event)" class="btn006 btn-mid btnDlt">
            <span>삭제</span>
          </button>
        </div>
      </td>
    </tr>
    <tr v-if="tbodyLists.length === 0">
      <td colspan="11" class="empty">
        <span>등록된 게시물이 없습니다.</span>
      </td>
    </tr>
  </tbody>
</template>

<script>
import BoardModal from '@/components/Modal/BoardModal.vue'

export default {
  props: {
    tbodyLists: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    gotoReadManage() {
      this.$router.push('/PM/ConsultingWrite')
    },
    getSignalClass(signalHtml) {
      if (!signalHtml) {
        return ''
      }
      const match = signalHtml.match(/sgl(\d{3})/)
      return match && match[1] ? `tc${match[1]}` : ''
    },

    handleModalClick(event) {
      // 1. 클릭된 요소 중 가장 가까운 버튼 찾기
      const button = event.target.closest('button')
      const activeCheckbox = event.target.closest('.activeChecking')

      if (!button && !activeCheckbox) {
        return
      }

      let component = null
      let mode = ''

      // 2. 버튼 클래스에 따라 컴포넌트 및 모드 설정
      if (button) {
        if (button.classList.contains('btnDlt')) {
          // 삭제
          component = BoardModal // 혹은 삭제 전용 모달
          mode = 'delete'
        }
      }

      // 3. 모달 열기 이벤트 발송
      if (component) {
        this.$nuxt.$emit('open-global-modal', {
          component,
          props: {
            mode // TradingModal 등에서 사용할 모드값 전달
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.listNumber {
  @apply text-[16px] text-[#5E6367] tracking-[130%] w-full text-center;
}
.num {
  @apply flex justify-center w-full;
}
.obj a {
  @apply w-full line-clamp-1 text-[16px] text-[#5E6367]
  hover:underline;
}
.author {
  @apply flex w-full justify-center;
}
.public {
  @apply flex w-full justify-center;
}
.registration {
  @apply flex w-full justify-center;
}
.manage,
.delete {
  @apply flex w-full justify-center;
}
.manage button span,
.delete button span {
  @apply w-[56px];
}
.hiddenTr {
  @apply absolute top-0 left-[-9999em];
}
.customer{
  @apply w-full text-center
}
.status{
  @apply w-full text-center
}
</style>
