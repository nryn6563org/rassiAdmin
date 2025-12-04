<template>
  <div class="table_w">
    <div class="table" ref="tableContainer">
      <table :style="{ width: tableStyleWidth }">
        <colgroup>
          <col v-for="(width, index) in currentColWidths" :key="index" :width="width" />
        </colgroup>
        <StandardThead :theadList="headerData" :isAllChecked="isAllChecked" @toggle-all="toggleAllChecks" />
        <SignalTbody :tbodyLists="bodyData" />
      </table>
    </div>

    <BasicPaging />
  </div>
</template>

<script>
import StandardThead from '@/components/IR/StandardThead.vue'
import SignalTbody from '@/components/IR/SignalTbody.vue'
import BasicPaging from '@/components/TableElement/BasicPaging.vue'

export default {
  components: {
    StandardThead,
    SignalTbody,
    BasicPaging
  },
  data() {
    return {
      isAllChecked: false,
      headerData: ['', 'No.', '종목명', '현재신호상태', '활성 / 비활성일시', '종목추천발생', '등록일시', '추천활성', '코멘트', '삭제'],
      // 4. 원본 컬럼 너비 정의 (고정값 관리)
      originColWidths: [60, 90, 248, 320, 160, 195, 160, 100, 130, 130],
      // 실제 화면에 렌더링될 컬럼 너비들 (가변)
      currentColWidths: [],
      // 테이블 태그에 적용할 스타일 너비
      tableStyleWidth: '100%',
      // tbody 임시 데이터
      bodyData: Array.from({ length: 21 }, (_, i) => {
        const num = i + 1
        const remainder = num % 5
        const signalHtml = remainder === 1 ? '<span class="signalBullet sgl001">매수</span>' : remainder === 2 ? '<span class="signalBullet sgl002">매도</span>' : remainder === 3 ? '<span class="signalBullet sgl003">예약</span>' : remainder === 4 ? '<span class="signalBullet sgl004">만료</span>' : '<span class="signalBullet sgl005">취소</span>'

        return {
          checked: false,
          ListNumber: num,
          ItmeName: `삼성전자 ${num}`,
          ItemNumber: String(num).padStart(6, '0'),
          CurrentPrice: (50000 + num * 100).toLocaleString(),
          CurrentPer: `+${num % 10}.5%`,
          Signal: signalHtml,
          MyPrice: '527,500',
          MyPer: '+44.33%',
          MyDate: `2025.11.${String((num % 30) + 1).padStart(2, '0')} 15:20`,
          adDate: `2025.11.${String((num % 30) + 1).padStart(2, '0')} 15:20`,
          TargetPrice: '600,000',
          StopPrice: '400,000',
          AdDate: '2025.11.27 15:21',
          Recommendation: '2025.11.06 15:20',
          Registration: '2025.11.06 15:20'
        }
      })
      // signalClass 삭제됨
    }
  },
  // watch 삭제됨 (Tbody에서 처리)
  mounted() {
    // 초기 렌더링 시 너비 계산 실행
    this.adjustColumnWidths()
    // 5. 화면 크기 변경 감지 (반응형 대응)
    this.resizeObserver = new ResizeObserver(() => {
      this.adjustColumnWidths()
    })
    if (this.$refs.tableContainer) {
      this.resizeObserver.observe(this.$refs.tableContainer)
    }
  },
  beforeDestroy() {
    // 메모리 누수 방지를 위한 Observer 해제
    if (this.resizeObserver && this.$refs.tableContainer) {
      this.resizeObserver.unobserve(this.$refs.tableContainer)
    }
  },
  methods: {
    toggleAllChecks(checkedStatus) {
      this.isAllChecked = checkedStatus
      this.bodyData.forEach((item) => {
        item.checked = checkedStatus
      })
    },

    /**
     * @description 테이블 및 컬럼 너비 자동 계산 로직
     */
    adjustColumnWidths() {
      const container = this.$refs.tableContainer
      if (!container) {
        return
      }
      // .table(컨테이너)의 현재 너비
      const containerWidth = container.clientWidth
      // 설정된 컬럼 너비들의 총합 계산
      const totalColWidth = this.originColWidths.reduce((acc, curr) => acc + curr, 0)
      // 렌더링용 배열 복사
      let newWidths = [...this.originColWidths]
      // 로직 분기
      if (totalColWidth < containerWidth) {
        // [CASE 1] 컬럼 총합이 컨테이너보다 작을 경우 (여유 공간 있음)
        const maxVal = Math.max(...this.originColWidths)
        const maxIndex = this.originColWidths.indexOf(maxVal)
        if (maxIndex !== -1) {
          newWidths[maxIndex] = '*'
        }
        this.tableStyleWidth = '100%'
      } else {
        // [CASE 2] 컬럼 총합이 컨테이너보다 클 경우 (공간 부족, 스크롤 발생)
        newWidths = [...this.originColWidths]
        this.tableStyleWidth = `${totalColWidth}px`
      }
      // 데이터 업데이트
      this.currentColWidths = newWidths
    }
    // applyPerClass 메서드 삭제됨
  }
}
</script>

<style scoped>
table {
  @apply table-fixed border-collapse;
}
</style>