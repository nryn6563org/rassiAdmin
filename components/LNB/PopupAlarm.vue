<template>
  <div class="popupAlarm">
    <div class="alarm">
      <button v-for="(alarm, alarmIndex) in alarms" :key="alarmIndex">
        <span>{{ alarm.title }}</span>
        <strong v-html="formatAlarmNum(alarm.num)"></strong>
      </button>
    </div>
    <!-- // -->
    <button class="signal" @click="handleModalClick($event)">
      <span>AI매매신호 종목추천 :</span><em>{{ signal }}</em>
    </button>
    <!-- // -->
  </div>
</template>

<script>
import ManageModal from '@/components/Modal/ManageModal.vue'

export default {
  data() {
    return {
      alarms: [
        {
          title: '오늘매수',
          num: 10
        },
        {
          title: '오늘매도',
          num: 10
        },
        {
          title: '추천예약',
          num: 1024
        }
      ],
      signal: 110
    }
  },
  methods: {
    // 💡 New method to format the number
    formatAlarmNum(number) {
      const maxLimit = 999
      // Check if the number exceeds the limit
      if (number > maxLimit) {
        return `${maxLimit}<em class="plus-sign">+</em>` // Return '999+'
      }
      return number // Return the number as is
    },
    handleModalClick(event) {
      // 1. 클릭된 요소 중 가장 가까운 버튼 찾기
      const button = event.target.closest('button')
      if (!button) {
        return
      }

      let component = null
      let mode = ''

      // 2. 버튼 클래스에 따라 컴포넌트 및 모드 설정
      if (button.classList.contains('signal')) {
        component = ManageModal
        mode = 'signal'
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
.popupAlarm{
  @apply w-full mt-4
}
.popupAlarm .alarm{
  @apply flex w-full h-[75px] rounded-[6px] bg-[#F9FAFB] justify-center items-center
}

.popupAlarm .alarm button{
  @apply relative w-[calc(100%/3)] h-[45px] flex flex-col items-center first:before:hidden
  before:content-[''] before:w-[1px] before:h-4 before:bg-[#5E6367] before:absolute before:top-4 before:left-0
}
.popupAlarm .alarm button span{
  @apply h-4 leading-4 text-[14px] text-[#5E6367] font-medium
}
.popupAlarm .alarm button strong{
  @apply h-6 leading-6 text-[20px] text-[#141414] font-bold mt-1 flex items-start
}
.popupAlarm .alarm button strong::v-deep em{
  @apply text-[14px] h-5 leading-5 ml-[1px]
}
.signal{
  @apply mt-3 w-full h-[43px] rounded-[3px] bg-[#F9FAFB] flex items-center justify-center
}
.signal span{
  @apply text-[16px] text-[#141414]
}
.signal em{
  @apply ml-[6px] text-[16px] font-bold text-[#141414]
}
</style>