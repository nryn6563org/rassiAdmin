<template>
  <div class="table_w">
    <div class="table" ref="tableContainer">
      <table :style="{ width: tableStyleWidth }">
        <colgroup>
          <col v-for="(width, index) in currentColWidths" :key="index" :width="width" />
        </colgroup>
        <StandardThead :theadList="headerData" :isAllChecked="isAllChecked" @toggle-all="toggleAllChecks" />
        <ConsultingTbody :tbodyLists="bodyData" />
      </table>
    </div>

    <BasicPaging />
  </div>
</template>

<script>
import StandardThead from '@/components/IR/Standard/StandardThead.vue'
import ConsultingTbody from '@/components/PM/Consulting/ConsultingTbody.vue'
import BasicPaging from '@/components/TableElement/BasicPaging.vue'

export default {
  components: {
    StandardThead,
    ConsultingTbody,
    BasicPaging
  },
  data() {
    return {
      isAllChecked: false,
      headerData: ['', 'No', '제목', '문의자', '회원구분', '공개여부', '등록일시', '상담자', '처리상태', '관리', '삭제'],
      // 4. 원본 컬럼 너비 정의 (고정값 관리)
      originColWidths: [60, 90, 415, 120, 120, 120, 160, 120, 120, 130, 130],
      // 실제 화면에 렌더링될 컬럼 너비들 (가변)
      currentColWidths: [],
      // 테이블 태그에 적용할 스타일 너비
      tableStyleWidth: '100%',
      // tbody 임시 데이터
      bodyData: Array.from({ length: 10 }, (_, i) => {
        const num = i + 1

        return {
          checked: false,
          ListNumber: num,
          Obj: '2025년 특별 매매 코멘트 전격 분석 내용전격으로 파헤쳐보는 시간 2025년 특별 매매 코멘트 전격 분석 내용전격으로 파헤쳐보는 시간 2025년 특별 매매 코멘트 전격 분석 내용전격으로 파헤쳐보는 시간',
          ItemNumber: String(num).padStart(6, '0'),
          Divide: Math.random() < 0.5 ? '유료회원' : '잠재고객',
          Public: Math.random() < 0.5 ? '비밀글' : '공개',
          Author: '홍길동',
          Customer: '씽크풀',
          Registration: '2026.01.02 12:43',
          Status: Math.random() < 0.5 ? '답변완료' : '문의중'
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
.table_w{
  @apply mt-4
}
table {
  @apply table-fixed border-collapse;
}
</style>
