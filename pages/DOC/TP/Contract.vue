<template>
  <article class="document-content">
    <div class="doc-header shadow-none no-print">
      <button class="btn-print" @click="printDoc">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="19" height="19" rx="3" fill="#EEEEEE" />
          <path
            d="M5.84375 12.3433H4.21875C4.00326 12.3433 3.7966 12.2577 3.64423 12.1053C3.49185 11.9529 3.40625 11.7463 3.40625 11.5308V7.46826C3.40625 7.25277 3.49185 7.04611 3.64423 6.89374C3.7966 6.74136 4.00326 6.65576 4.21875 6.65576H14.7812C14.9967 6.65576 15.2034 6.74136 15.3558 6.89374C15.5081 7.04611 15.5938 7.25277 15.5938 7.46826V11.5308C15.5938 11.7463 15.5081 11.9529 15.3558 12.1053C15.2034 12.2577 14.9967 12.3433 14.7812 12.3433H13.1562M5.03125 8.28076H5.84375H5.03125Z"
            fill="#C6C6C6"
          />
          <path
            d="M5.84375 12.3433H4.21875C4.00326 12.3433 3.7966 12.2577 3.64423 12.1053C3.49185 11.9529 3.40625 11.7463 3.40625 11.5308V7.46826C3.40625 7.25277 3.49185 7.04611 3.64423 6.89374C3.7966 6.74136 4.00326 6.65576 4.21875 6.65576H14.7812C14.9967 6.65576 15.2034 6.74136 15.3558 6.89374C15.5081 7.04611 15.5938 7.25277 15.5938 7.46826V11.5308C15.5938 11.7463 15.5081 11.9529 15.3558 12.1053C15.2034 12.2577 14.9967 12.3433 14.7812 12.3433H13.1562M5.03125 8.28076H5.84375"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect x="6" y="10" width="7" height="6" fill="white" />
          <path
            d="M7.46875 11.5308H11.5313M7.46875 13.1558H10.3125M5.84375 9.90576H13.1563V15.5933H5.84375V9.90576ZM13.1563 6.65576H5.84375V4.21826C5.84375 4.00277 5.92935 3.79611 6.08173 3.64374C6.2341 3.49136 6.44076 3.40576 6.65625 3.40576H12.3438C12.5592 3.40576 12.7659 3.49136 12.9183 3.64374C13.0706 3.79611 13.1563 4.00277 13.1563 4.21826V6.65576Z"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        출력하기
      </button>
    </div>
    <h1 class="doc-title">투자자문계약서</h1>

    <div class="doc-top-info">
      <div class="info-row">
        <span class="label">가입종목 : </span>
        <span class="value underline">#(서비스명)</span>
      </div>
      <div class="info-row">
        <span class="label">가입일 : </span>
        <span class="value underline">#(결제일)</span>
      </div>
      <div class="info-row align-start">
        <span class="label">자문회사 : </span>
        <div class="value-group">
          <span class="value">(주)씽크풀투자자문 대표 조완우</span>
          <span class="address">(서울 영등포구 국제금융로 70 미원빌딩 1107호)</span>
        </div>
      </div>
    </div>

    <section class="doc-body" v-html="contractHtml"></section>
  </article>
</template>

<script>
export default {
  layout: 'document',
  async asyncData() {
    let contractHtml = ''
    try {
      if (process.server) {
        const https = require('https')
        contractHtml = await new Promise((resolve) => {
          https
            .get('https://tradingpoint.co.kr/trading/contract/0000336255@nv.do', (res) => {
              let data = ''
              res.on('data', (chunk) => {
                data += chunk
              })
              res.on('end', () => resolve(data))
            })
            .on('error', () => {
              resolve('<p>문서를 불러오는 중 오류가 발생했습니다.</p>')
            })
        })
      } else {
        const response = await window.fetch(
          'https://tradingpoint.co.kr/trading/contract/0000336255@nv.do'
        )
        contractHtml = await response.text()
      }
    } catch (err) {
      console.error('Failed to load HTML', err)
      contractHtml = '<p>문서를 불러오는 중 오류가 발생했습니다.</p>'
    }
    return { contractHtml }
  },
  methods: {
    printDoc() {
      window.print()
    }
  }
}
</script>

<style scoped>
.document-content {
  @apply w-[800px] bg-white text-[#141414] leading-[1.6] relative p-10;
}
.doc-header {
  @apply flex justify-end mb-4;
}
.btn-print {
  @apply flex items-center gap-1.5 text-[14px] text-[#5E6367] bg-transparent cursor-pointer p-0 border-none;
}
.doc-title {
  @apply text-[24px] font-bold text-center mb-10;
}
.doc-top-info {
  @apply mb-10 bg-gray-50 p-6 border border-gray-200 rounded-sm;
}
.info-row {
  @apply flex items-center mb-3 last:mb-0;
}
.info-row.align-start {
  @apply items-start;
}
.info-row .label {
  @apply w-[80px] text-[14px] font-bold text-[#5E6367] flex-shrink-0;
}
.info-row .value-group {
  @apply flex flex-col;
}
.info-row .value {
  @apply text-[14px] font-medium text-[#141414] min-w-[150px];
}
.info-row .value.underline {
  @apply border-b border-gray-400 h-[22px];
}
.info-row .address {
  @apply text-[12px] text-gray-500 mt-0.5;
}
.doc-body h2 {
  @apply text-[16px] font-bold mt-8 mb-3 border-l-4 border-[#141414] pl-2;
}
.doc-body p {
  @apply text-[14px] mb-4 text-justify;
}
.intro-text {
  @apply mb-10 font-bold text-[15px] border-b border-gray-300 pb-4;
}
.custom-labeled-list {
  @apply mb-4 text-[14px] list-none p-0;
}
.custom-labeled-list > li {
  @apply mb-2 flex items-start;
}
.custom-labeled-list .list-label {
  @apply mr-1 whitespace-nowrap flex-shrink-0 font-normal;
}
.custom-labeled-list .list-label.marker-circle {
  @apply text-[16px] leading-[22px];
}
.custom-labeled-list .list-text {
  @apply flex-grow break-keep leading-[1.6];
}
.doc-footer {
  @apply mt-12 pt-8 border-t border-gray-200 text-center;
}
.final-pledge {
  @apply text-[13px] text-gray-600 mb-8 px-10;
}
.company-seal {
  @apply text-[18px] font-bold text-[#141414];
}

@media print {
  @page {
    size: A4;
    margin: 0;
  }
  body {
    background: none !important;
  }
  .document-content {
    width: 100% !important;
    padding: 20mm !important;
    box-shadow: none !important;
  }
  .no-print {
    display: none !important;
  }
}
</style>
