<template>
  <div class="table_w">
    <div class="table" ref="table">
      <table width="">
        <colgroup>
          <col width="60" />
          <col width="90" />
          <col width="245" />
          <col width="210" />
          <col width="424" />
          <col width="240" />
          <col width="180" />
          <col width="160" />
        </colgroup>
        <StandardThead :theadList="headerData" :isAllChecked="isAllChecked" @toggle-all="toggleAllChecks" />
        <StandardTbody :tbodyLists="bodyData" />
      </table>
    </div>

    <BasicPaging />
  </div>
</template>

<script>
import StandardThead from '~/components/IR/StandardThead.vue'
import StandardTbody from '~/components/IR/StandardTbody.vue'
import BasicPaging from '~/components/TableElement/BasicPaging.vue'

export default {
  components: {
    StandardThead,
    StandardTbody,
    BasicPaging
  },
  data() {
    return {
      isAllChecked: true, // 전체 선택 상태 관리
      headerData: ['', 'No.', '종목명', '현재가(등락률)', '나의 매수 금액 / 매도 금액 (수익률)', '목표가 / 손절가', '종목추천발생', '등록일시'],
      bodyData: Array.from({ length: 20 }, (_, i) => {
        const num = i + 1
        return {
          checked: false,
          ListNumber: num,
          ItmeName: `삼성전자 ${num}`,
          ItemNumber: String(num).padStart(6, '0'),
          CurrentPrice: (50000 + num * 100).toLocaleString(),
          CurrentPer: `+${num % 10}.5%`,
          Signal: num % 2 === 0 ? '<span class="sgl001">매수</span>' : '<span class="sgl002">매도</span>',
          MyPrice: '527,500',
          MyPer: '+44.33%',
          MyDate: `2025.11.${String((num % 30) + 1).padStart(2, '0')} 15:20`,
          TargetPrice: '600,000',
          StopPrice: '400,000',
          Recommendation: '2025.11.27 15:21',
          Registration: '2025.11.06 15:20'
        }
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setTableWidth()
    })
  },
  methods: {
    // @description 전체 선택 상태를 토글하고 bodyData의 모든 항목에 반영합니다.
    //  @param {boolean} checkedStatus - 전체 체크 상태 (true: 선택, false: 해제)
    toggleAllChecks(checkedStatus) {
      this.isAllChecked = checkedStatus
      // 🌟 구현 완료: bodyData의 모든 항목의 checked 상태를 변경합니다.
      this.bodyData.forEach((item) => {
        item.checked = checkedStatus
      })
      console.log('전체 선택 상태 반영 완료:', checkedStatus)
    },

    // @description 테이블의 col width 합산과 컨테이너 너비를 비교하여 테이블 너비를 동적으로 설정합니다.
    setTableWidth() {
      // 1. 필요한 DOM 엘리먼트들을 가져옵니다.
      const tableWrapperElement = this.$el.querySelector('.table_w')
      const tableElement = this.$el.querySelector('table')
      const colElements = tableElement ? tableElement.querySelectorAll('colgroup col') : null

      if (!tableElement || !tableWrapperElement || !colElements || colElements.length === 0) {
        return
      }

      // 2. 고정된 col width의 합산을 계산하고, 가장 큰 width를 가진 col을 찾습니다.
      let totalFixedWidth = 0 // 고정 너비(px)의 합계
      let largestFixedCol = null
      let largestWidth = 0

      colElements.forEach((col) => {
        const widthAttr = col.getAttribute('width')
        // '*'는 합계에서 제외합니다.
        if (widthAttr === '*') {
          return
        }

        const width = parseInt(widthAttr)
        if (!isNaN(width)) {
          totalFixedWidth += width
          // 가장 큰 고정 너비를 가진 col을 추적
          if (width > largestWidth) {
            largestWidth = width
            largestFixedCol = col
          }
        }
      })

      // 3. .table (컨테이너)의 현재 실제 넓이 값을 구합니다.
      const tableWrapperWidth = tableWrapperElement.getBoundingClientRect().width

      // 🌟 디버깅 코드 추가 🌟
      console.log('--- Table Width Check ---')
      console.log('1. 고정 너비 합산 (totalFixedWidth):', totalFixedWidth)
      console.log('2. 컨테이너 너비 (tableWrapperWidth):', tableWrapperWidth)
      console.log('3. 조건 충족 여부 (합산 < 컨테이너):', totalFixedWidth < tableWrapperWidth)
      console.log('-------------------------')
      // 🌟 디버깅 코드 끝 🌟

      // 4. 조건에 따른 넓이 설정 로직을 적용합니다.

      // 🌟 조건 1: col width의 합산이 .table의 넓이 값보다 작으면 (테이블을 컨테이너에 꽉 채워야 함)
      if (totalFixedWidth < tableWrapperWidth) {
        // 가장 넓은 고정 width를 가진 col의 width를 '*'로 변환합니다.
        if (largestFixedCol) {
          largestFixedCol.setAttribute('width', '*')
          console.log('Case 1: Col width 합산이 .table 넓이보다 작아, 가장 넓은 col을 "*"로 설정했습니다.')
        }
      } else { // 🌟 조건 2: col width의 합산이 .table의 넓이 값보다 크거나 같으면 (테이블이 컨테이너보다 넓음)
        // .table width의 값을 col width값의 합산으로 설정하여 스크롤이 가능하게 합니다.
        tableElement.style.width = `${totalFixedWidth}px`
        console.log('Case 2: Col width 합산이 .table 넓이보다 크거나 같아, table width를 합산 값으로 설정했습니다.')
      }
    }
  }
}
</script>