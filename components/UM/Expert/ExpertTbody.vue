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
        <div class="listNumber">
          <span>{{ tbodyList.ListNumber }}</span>
        </div>
      </td>
      <!-- No. -->
      <td>
        <div class="userName">
          <span>{{ tbodyList.UserName }}</span>
        </div>
      </td>
      <!-- 회원명 -->
      <td>
        <div class="phoneNumber">
          <span>{{ tbodyList.PhoneNumber }}</span>
        </div>
      </td>
      <!-- 전화번호 -->
      <td>
        <div class="siteID">
          <span>{{ tbodyList.SiteID }}</span>
        </div>
      </td>
      <!-- 씽크풀 계정 -->
      <td>
        <div class="affiliation">
          <span>{{ tbodyList.Affiliation }}</span>
        </div>
      </td>
      <!-- 소속 -->
      <td>
        <div class="authority">
          <span>{{ tbodyList.Authority }}</span>
        </div>
      </td>
      <!-- 권한 -->
      <td>
        <div class="profileImage">
          <NuxtLink :to="tbodyList.ProfileImage" target="_blank">미리보기</NuxtLink>
        </div>
      </td>
      <!-- 프로필 -->
      <td>
        <div class="registration">
          <span>{{ tbodyList.Registration }}</span>
        </div>
      </td>
      <!-- 등록일시 -->
      <td>
        <div class="manage">
          <button @click="gotoGroupManage()" class="btn012 btn-mid">
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
        <span>등록된 회원이 없습니다.</span>
      </td>
    </tr>
  </tbody>
</template>

<script>
import UserDelete from '@/components/Modal/UserDeleteModal.vue'

export default {
  props: {
    tbodyLists: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    gotoGroupManage() {
      this.$router.push('/UM/GroupManage')
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
      const mode = ''

      // 2. 버튼 클래스에 따라 컴포넌트 및 모드 설정
      if (button) {
        if (button.classList.contains('btnDlt')) {
          // 삭제
          component = UserDelete
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
td > div{
  @apply text-center
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
</style>
