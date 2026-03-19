<template>
  <div class="document-container">
    <div class="print-header no-print">
      <button @click="printPage" class="print-btn">
<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="19" height="19" rx="3" fill="#EEEEEE"/>
<path d="M5.84375 12.3433H4.21875C4.00326 12.3433 3.7966 12.2577 3.64423 12.1053C3.49185 11.9529 3.40625 11.7463 3.40625 11.5308V7.46826C3.40625 7.25277 3.49185 7.04611 3.64423 6.89374C3.7966 6.74136 4.00326 6.65576 4.21875 6.65576H14.7812C14.9967 6.65576 15.2034 6.74136 15.3558 6.89374C15.5081 7.04611 15.5938 7.25277 15.5938 7.46826V11.5308C15.5938 11.7463 15.5081 11.9529 15.3558 12.1053C15.2034 12.2577 14.9967 12.3433 14.7812 12.3433H13.1562M5.03125 8.28076H5.84375H5.03125Z" fill="#C6C6C6"/>
<path d="M5.84375 12.3433H4.21875C4.00326 12.3433 3.7966 12.2577 3.64423 12.1053C3.49185 11.9529 3.40625 11.7463 3.40625 11.5308V7.46826C3.40625 7.25277 3.49185 7.04611 3.64423 6.89374C3.7966 6.74136 4.00326 6.65576 4.21875 6.65576H14.7812C14.9967 6.65576 15.2034 6.74136 15.3558 6.89374C15.5081 7.04611 15.5938 7.25277 15.5938 7.46826V11.5308C15.5938 11.7463 15.5081 11.9529 15.3558 12.1053C15.2034 12.2577 14.9967 12.3433 14.7812 12.3433H13.1562M5.03125 8.28076H5.84375" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="6" y="10" width="7" height="6" fill="white"/>
<path d="M7.46875 11.5308H11.5313M7.46875 13.1558H10.3125M5.84375 9.90576H13.1563V15.5933H5.84375V9.90576ZM13.1563 6.65576H5.84375V4.21826C5.84375 4.00277 5.92935 3.79611 6.08173 3.64374C6.2341 3.49136 6.44076 3.40576 6.65625 3.40576H12.3438C12.5592 3.40576 12.7659 3.49136 12.9183 3.64374C13.0706 3.79611 13.1563 4.00277 13.1563 4.21826V6.65576Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
출력하기
      </button>
    </div>

    <h1>투자 권유 문서</h1>

    <div class="doc-top-info">
      <div class="info-row">
        <span class="label">이용고객 : </span>
        <span class="value underline">#{고객명}</span>
      </div>
      <div class="info-row">
        <span class="label">계약일 : </span>
        <span class="value underline">#{결제일}</span>
      </div>
      <div class="info-row align-start">
        <span class="label">자문회사 : </span>
        <div class="value-group">
          <span class="value">(주)핀블렌드투자자문 대표 박민규</span>
          <span class="address">(경기도 용인시 기흥구 중부대로 579, 더브릭스 4층 408-424호)</span>
        </div>
      </div>
    </div>

    <section class="doc-body" v-html="proposalHtml"></section>
  </div>
</template>

<script>
export default {
  layout: 'document',
  async asyncData() {
    let proposalHtml = ''
    try {
      if (process.server) {
        const https = require('https')
        proposalHtml = await new Promise((resolve) => {
          https.get('https://tradingpoint.co.kr/trading/document/smartmoney.do', (res) => {
            let data = ''
            res.on('data', (chunk) => { data += chunk })
            res.on('end', () => resolve(data))
          }).on('error', () => {
            resolve('<p>문서를 불러오는 중 오류가 발생했습니다.</p>')
          })
        })
      } else {
        const response = await window.fetch('https://tradingpoint.co.kr/trading/document/smartmoney.do')
        proposalHtml = await response.text()
      }
    } catch (err) {
      console.error('Failed to load HTML', err)
      proposalHtml = '<p>문서 로드 오류</p>'
    }
    return { proposalHtml }
  },
  methods: {
    printPage() {
      window.print()
    }
  }
}
</script>

<style scoped>
.document-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px 40px 20px;
  background-color: white;
  color: #333;
  line-height: 1.6;
  font-family: 'Malgun Gothic', 'Dotum', sans-serif;
}

@media print {
  @page {
    size: A4;
    margin: 0;
  }
  body {
    background: none !important;
  }
  .document-container {
    width: 100% !important;
    padding: 20mm !important;
    max-width: none !important;
  }
  .print-header, .no-print {
    display: none !important;
  }
}

.print-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.print-btn {
  @apply flex items-center gap-1.5 text-[14px] text-[#5E6367] bg-transparent cursor-pointer p-0 border-none;
}

h1 {
  @apply text-2xl font-bold text-center mb-10 pb-4 border-b-2 border-slate-700;
}

.doc-top-info {
  @apply mb-10 p-4 bg-slate-50 rounded-lg border border-slate-200 text-[14px];
}

.info-row {
  @apply flex items-center mb-2;
}

.info-row.align-start {
  @apply items-start;
}

.info-row .label {
  @apply font-bold min-w-[100px] text-slate-700;
}

.info-row .value.underline {
  @apply border-b border-slate-400 min-w-[200px] inline-block h-6;
}

.value-group {
  @apply flex flex-col;
}

.address {
  @apply text-[13px] text-slate-500 mt-1;
}

.doc-body h2 {
  @apply text-lg font-bold bg-slate-700 text-white p-3 mb-4 rounded;
}

.sub-section {
  @apply mb-10 px-2;
}

.sub-section h3 {
  @apply text-[15px] font-bold text-slate-800 mb-3 flex items-center;
}

.sub-section p {
  @apply mb-4 text-[14px] text-slate-600;
}

.table-w {
  @apply mb-6 overflow-hidden border border-slate-200 rounded;
}

table {
  @apply w-full border-collapse text-[13px];
}

th {
  @apply bg-slate-50 font-bold border border-slate-200 p-2 text-center;
}

td {
  @apply border border-slate-200 p-2;
  text-align: left !important;
}

.list-dot {
  @apply list-disc pl-5 mb-4 text-[14px];
}

.list-dot li {
  @apply mb-1;
}

/* Hang (Paragraph) level: 1), 2), 3) ... */
.list-hang {
  counter-reset: hang;
  @apply list-none pl-0 mb-4 text-[14px];
}

.list-hang > li {
  @apply mb-2 flex items-start;
}

.list-hang > li::before {
  content: counter(hang) ") ";
  counter-increment: hang;
  @apply mr-2 font-bold flex-shrink-0 min-w-[24px];
}

/* Ho (Item) level: ①, ②, ③ ... */
.list-ho {
  @apply list-none pl-0 mb-4 text-[14px];
}

.list-ho > li {
  @apply mb-2 flex items-start;
}

.list-ho > li::before {
  @apply mr-2 text-[16px] font-normal flex-shrink-0;
}

.list-ho > li:nth-child(1)::before { content: "①"; }
.list-ho > li:nth-child(2)::before { content: "②"; }
.list-ho > li:nth-child(3)::before { content: "③"; }
.list-ho > li:nth-child(4)::before { content: "④"; }
.list-ho > li:nth-child(5)::before { content: "⑤"; }
.list-ho > li:nth-child(6)::before { content: "⑥"; }
.list-ho > li:nth-child(7)::before { content: "⑦"; }
.list-ho > li:nth-child(8)::before { content: "⑧"; }
.list-ho > li:nth-child(9)::before { content: "⑨"; }
.list-ho > li:nth-child(10)::before { content: "⑩"; }

.notice {
  @apply text-[12px] text-gray-400 mt-2;
}

.doc-footer {
  @apply mt-20 text-center font-bold text-lg text-slate-800;
}
</style>
