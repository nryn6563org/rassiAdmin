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

    <h1>투자자문계약 권유문서</h1>

    <div class="doc-top-info">
      <div class="info-row align-start">
        <span class="label">자문회사 : </span>
        <div class="value-group">
          <span class="value">(주)씽크풀투자자문 대표 조완우</span>
          <span class="address">(서울 영등포구 국제금융로 70 미원빌딩 1107호)</span>
        </div>
      </div>
    </div>

    <section class="doc-body" v-html="proposalHtml"></section>
  </div>
</template>

<script>
const DEPOSITOR_PROTECTION_NOTICE = `
  <div class="depositor-protection-notice" role="note">
    <img
      src="/img/DOC/depositor-protection.png"
      alt="예금자보호 비보호"
      class="depositor-protection-mark"
    >
    <p>이 금융상품은 예금자보호법에 따라 보호되지 않습니다.</p>
  </div>
`

function addDepositorProtectionNotice(html) {
  if (html.includes('depositor-protection-notice')) {
    return html
  }

  return html.replace(
    /(<h2[^>]*>\s*■?\s*회사 개요\s*<\/h2>)/i,
    `${DEPOSITOR_PROTECTION_NOTICE}$1`
  )
}

export default {
  layout: 'document',
  async asyncData() {
    let proposalHtml = ''
    try {
      if (process.server) {
        const https = require('https')
        proposalHtml = await new Promise((resolve) => {
          https.get('https://tradingpoint.co.kr/trading/document/0000336255@nv.do', (res) => {
            let data = ''
            res.on('data', (chunk) => { data += chunk })
            res.on('end', () => resolve(data))
          }).on('error', () => {
            resolve('<p>문서를 불러오는 중 오류가 발생했습니다.</p>')
          })
        })
      } else {
        const response = await window.fetch('https://tradingpoint.co.kr/trading/document/0000336255@nv.do')
        proposalHtml = await response.text()
      }
    } catch (err) {
      console.error('Failed to load HTML', err)
      proposalHtml = '<p>문서를 불러오는 중 오류가 발생했습니다.</p>'
    }
    return { proposalHtml: addDepositorProtectionNotice(proposalHtml) }
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
  padding: 0 40px 40px 40px;
  background-color: white;
  color: #141414;
  line-height: 1.6;
  font-family: 'Malgun Gothic', sans-serif;
}

@media print {
  @page {
    size: A4;
    margin: 15mm;
  }
  .document-container {
    padding: 0;
    max-width: none;
  }
  .print-header {
    display: none;
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
  @apply text-[24px] font-bold text-center mb-10 border-b-2 border-slate-900 pb-6;
}

.doc-top-info {
  @apply mb-10 bg-slate-50 p-6 border border-slate-200 rounded-sm text-[14px];
}

.info-row {
  @apply flex items-center mb-3 last:mb-0;
}

.info-row.align-start {
  @apply items-start;
}

.info-row .label {
  @apply w-[100px] font-bold text-slate-600;
}

.info-row .value.underline {
  @apply border-b border-slate-400 min-w-[200px] h-6 flex items-center font-bold;
}

.value-group {
  @apply flex flex-col;
}

.address {
  @apply text-[12px] text-slate-500 mt-1;
}

.intro-box {
  @apply mb-10 p-6 bg-slate-50 border-l-4 border-slate-800 text-[14px] text-justify space-y-4;
}

.doc-body ::v-deep .depositor-protection-notice {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 30px 0;
  padding: 0 30px;
  color: #202632;
  font-family: Pretendard, 'Malgun Gothic', sans-serif;
  font-size: 16px;
  line-height: 24px;
  break-inside: avoid;
}

.doc-body ::v-deep .depositor-protection-notice p {
  margin: 0;
}

.doc-body ::v-deep .depositor-protection-mark {
  width: 41px;
  height: 26px;
  flex: 0 0 41px;
  object-fit: cover;
}

.doc-body h2 {
  @apply text-[17px] font-bold bg-[#141414] text-white p-3 mb-6;
}

.sub-section {
  @apply mb-12 px-2;
}

.sub-section h3 {
  @apply text-[15px] font-bold text-[#141414] mb-4 border-b border-slate-200 pb-2;
}

.sub-section p {
  @apply text-[14px] mb-4 text-justify;
}

.table-w {
  @apply mb-6;
}

table {
  @apply w-full border-collapse text-[13px] border-t-2 border-slate-800;
}

th {
  @apply bg-slate-50 font-bold border border-slate-200 p-2 text-center text-slate-700;
}

td {
  @apply border border-slate-200 p-2 text-center;
}

td.text-left {
  text-align: left !important;
}

.list-ho {
  @apply list-none p-0 mb-4 text-[14px];
}
.list-ho li {
  @apply flex items-start mb-2;
}
.list-ho li::before {
  content: "①";
  @apply mr-2 text-[16px] leading-[22px] flex-shrink-0 text-slate-700;
}
.list-ho li:nth-child(2)::before { content: "②"; }
.list-ho li:nth-child(3)::before { content: "③"; }
.list-ho li:nth-child(4)::before { content: "④"; }
.list-ho li:nth-child(5)::before { content: "⑤"; }
.list-ho li:nth-child(6)::before { content: "⑥"; }

.list-dot {
  @apply list-disc pl-5 mb-4 text-[14px] text-slate-700;
}
.list-dot li {
  @apply mb-1;
}

.list-num {
  @apply list-decimal pl-5 mb-4 text-[14px];
}
.list-num li {
  @apply mb-2;
}

.fee-box {
  @apply p-4 bg-slate-50 border border-slate-200 rounded text-[14px] space-y-2;
}

.notice {
  @apply text-[12px] text-slate-500 mt-2 leading-relaxed;
}
.notice-desc {
  @apply text-[13px] text-slate-600 mt-2;
}

.doc-footer {
  @apply mt-20 text-center font-bold text-[19px] border-t border-slate-200 pt-10;
}
</style>
