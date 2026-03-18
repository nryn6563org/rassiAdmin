<template>
  <article class="document-content">
    <div class="doc-header shadow-none no-print">
      <button class="btn-print" @click="printDoc">출력하기</button>
    </div>
    <h1 class="doc-title">투자자문계약서</h1>

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

    <section class="doc-body">
      <p class="intro-text">
        핀블렌드 투자자문 소속의 투자자문역이 제공하는 종목추천 서비스 가입고객 (이하 "고객"이라 한다)님과 주식회사 핀블렌드투자자문 (이하 "회사"라 한다)은 다음과 같이 체결한다.
      </p>

      <h2>제 1 조 (계약의 목적)</h2>
      <p>본 계약서는 고객의 금융투자상품 가치 또는 금융투자상품에 대한 투자판단 에 대해 회사가 고객에게 계약기간 동안 지속적으로 투자자문서비스를 제공 하고, 그 대가로 고객은 회사에게 투자자문수수료를 지급하는 투자자문계약 의 내용 및 그 이행에 필요한 사항을 정함을 목적으로 한다.</p>

      <h2>제 2 조 (투자자문의 대상)</h2>
      <p>회사가 고객에게 투자자문서비스를 제공함에 있어 그 투자자문의 대상이 되 는 금융투자상품은 다음 각 호에 해당하는 것으로 한다.</p>
      <ul class="custom-labeled-list">
        <li>
          <span class="list-label">1.</span>
          <span class="list-text">자본시장과 금융투자업에 관한 법률 제4조에 규정된 증권</span>
        </li>
        <li>
          <span class="list-label">2.</span>
          <span class="list-text">그 밖의 관련법령에서 허용한 투자자문 대상자산으로서 고객과 회사가 사 전 합의한 금융투자상품 등</span>
        </li>
      </ul>

      <h2>제 3 조 (투자자문서비스의 내용 및 범위)</h2>
      <p>회사가 고객에게 제공하는 투자자문서비스의 내용 및 범위는 다음 각 호와 같다.</p>
      <ul class="custom-labeled-list">
        <li>
          <span class="list-label">1.</span>
          <span class="list-text">장, 단기 투자전략 수립 및 자산배분에 관한 자문</span>
        </li>
        <li>
          <span class="list-label">2.</span>
          <span class="list-text">계약자산의 포트폴리오 구성 및 분석에 관한 자문</span>
        </li>
        <li>
          <span class="list-label">3.</span>
          <span class="list-text">금융투자상품 투자에 대한 종류, 종목, 수량, 가격, 매매방법, 매매시기 등 종합적인 투자판단 등의 자문</span>
        </li>
        <li>
          <span class="list-label">4.</span>
          <span class="list-text">국내외 경제동향, 산업 및 자본시장에 관한 조사 및 이와 관련한 간행물 제공</span>
        </li>
        <li>
          <span class="list-label">5.</span>
          <span class="list-text">그 밖에 투자전략과 관련한 고객의 요청 자료 제공</span>
        </li>
      </ul>

      <h2>제 4 조 (계약의 유효기간)</h2>
      <ul class="custom-labeled-list">
        <li>
          <span class="list-label marker-circle">①</span>
          <span class="list-text">이 계약은 계약체결일로부터 효력이 발생되며, 계약기간은 고객과 회사가 합의한 기간으로 한다.</span>
        </li>
        <li>
          <span class="list-label marker-circle">②</span>
          <span class="list-text">회사는 계약종료일 1개월 전까지 고객에게 계약종료일을 통지하여야 하 며 “고객은 계약종료일 이전까지 계약 해지의 의사표시를 할 수 있으며, 계약 해지의 의사표시를 하지 아니한 경우에는 종전 계약과 동일한 기간 과 동일한 조건으로 계약이 갱신된 것으로 본다”는 내용을 고객에게 통지하여야 한다.</span>
        </li>
        <li>
          <span class="list-label marker-circle">③</span>
          <span class="list-text">고객이 제2항의 통지를 받은 날로부터 계약종료일까지 계약 해지의 의사 표시를 하지 아니한 경우에는 종전 계약과 동일한 기간 및 동일한 조건으 로 계약이 갱신된 것으로 본다. 단, 계약금액 및 계약기간은 당사자간의 합의에 따라 변동될 수 있다.</span>
        </li>
      </ul>

      <h2>제 5 조 (투자자문 제공방법)</h2>
      <ul class="custom-labeled-list">
        <li>
          <span class="list-label marker-circle">①</span>
          <span class="list-text">회사는 고객에게 투자자문 서비스를 제공함에 있어 고객의 재무상태, 투 자목적, 위험선호도 등을 사전에 전자방식(전용어플리케이션 등), 유선 등 의 방법으로 파악함으로써 고객의 의사를 투자자문에 반영하도록 한다.</span>
        </li>
        <li>
          <span class="list-label marker-circle">②</span>
          <span class="list-text">회사는 고객의 투자자문재산의 내용이나 규모 및 투자방침에 부합된 투 자자문 서비스를 사전에 고객에게 안내한 전자방식, 유선 등의 방법으로 제공한다.</span>
        </li>
      </ul>

      <h2>제 6 조 (투자자문수수료)</h2>
      <p>고객은 회사가 제공하는 투자자문 서비스의 대가로 투자자문수수료를 납부한다.</p>
      <ul class="custom-labeled-list mt-3">
        <li>
          <span class="list-label">1.</span>
          <span class="list-text">고객은 회사가 제공하는 투자자문서비스의 대가로서 투자자문수수료(이하 “기본수수료”라 한다)를 회사에 지급한다.</span>
        </li>
        <li>
          <span class="list-label">2.</span>
          <span class="list-text">기본수수료는 계약금액을 기준으로 기본수수료율을 적용하여 선취로 징수하는 수수료로 계약일로부터 7일 이내에 회사가 지정한 계좌로 이체하여 지급한다.</span>
        </li>
      </ul>

      <h2>제 7 조 (회사의 신의성실의무)</h2>
      <p>회사는 고객에게 투자자문서비스를 제공함에 있어 선량한 관리자로서 신의 에 따라 성실하게 그 의무를 이행하여야 한다.</p>

      <h2>제 8 조 (투자자문담당자의 선정)</h2>
      <ul class="custom-labeled-list">
        <li>
          <span class="list-label marker-circle">①</span>
          <span class="list-text">회사는 고객에 대한 투자자문재산의 내용과 규모 등을 고려하여 고객과 회사가 협의하여 투자자문담당자를 선임한다.</span>
        </li>
      </ul>

      <h2>제 9 조 (비밀유지의무)</h2>
      <ul class="custom-labeled-list">
        <li>
          <span class="list-label marker-circle">①</span>
          <span class="list-text">고객은 회사의 사전 동의 없이 회사의 투자자문 서비스를 제3자와 공동 으로 이용하지 못한다.</span>
        </li>
        <li>
          <span class="list-label marker-circle">②</span>
          <span class="list-text">회사는 계약과 관련하여 알게 된 고객의 투자자문재산 내용과 관리상황, 신상 내용 및 그 밖에 모든 사항 대해 고객의 사전 동의 없이 제3자에 게 누설해서는 안 된다.</span>
        </li>
      </ul>

      <h2>제 10 조 (통지의무)</h2>
      <ul class="custom-labeled-list">
        <li>
          <span class="list-label marker-circle">①</span>
          <span class="list-text">고객은 이메일과 연락처 등 회사의 투자자문 서비스 제공에 영향을 줄 수 있는 사항에 관해 변동이 생길 경우 지체 없이 회사에 통지해야 한다.</span>
        </li>
        <li>
          <span class="list-label marker-circle">②</span>
          <span class="list-text">고객이 고객의 책임 있는 사유로 고객이 통지의무를 이행하지 않아 발생 하는 불이익에 대해서 회사는 회사의 책임 있는 사유가 없는 한 책임을 지지 않는다. 다만, 이 경우에도 회사는 선량한 관리자로서의 주의의무를 다하여야 한다.</span>
        </li>
      </ul>

      <h2>제 11 조 (투자자문에 의한 투자결과의 귀속)</h2>
      <p>회사가 투자자문재산을 자문한 결과 발생하는 이익과 손실은 고객에게 귀속된다.</p>

      <h2>제 12 조 (이해상충 방지를 위한 절차)</h2>
      <p>회사는 투자자문 서비스를 제공함에 있어 회사와 고객 간, 특정 고객과 다른 고객 간의 이해상충이 발생될 우려가 있는 경우 이를 공정하게 관리할 수 있는 내부통제체계를 구축한다.</p>

      <h2>제 13 조 (불가항력으로 인한 면책)</h2>
      <p>회사는 천재지변, 사변 이에 준하는 불가항력의 사유로 인하여 서비스를 제 공할 수 없는 경우와 지연되는 경우 이에 대한 책임을 지지 아니한다.</p>

      <h2>제 14 조 (회사의 금지행위)</h2>
      <ul class="custom-labeled-list mt-3">
        <li>
          <span class="list-label">1.</span>
          <span class="list-text">투자자로부터 금전·증권, 그 밖의 재산의 보관·예탁을 받는 행위</span>
        </li>
        <li>
          <span class="list-label">2.</span>
          <span class="list-text">투자자에게 금전·증권, 그 밖의 재산을 대여하거나 투자자에 대한 제삼 자의 금전·증권, 그 밖의 재산의 대여를 중개·주선 또는 대리하는 행위</span>
        </li>
        <li>
          <span class="list-label">3.</span>
          <span class="list-text">투자권유자문인력이 아닌 자에게 투자자문업을 수행하게 하는 행위</span>
        </li>
        <li>
          <span class="list-label">4.</span>
          <span class="list-text">계약으로 정한 수수료 외의 대가를 추가로 받는 행위</span>
        </li>
        <li>
          <span class="list-label">5.</span>
          <span class="list-text">투자자문 업무를 함에 있어서 금융투자상품, 그 밖의 투자대상자산의 가 격에 중대한 영향을 미칠 수 있는 매수 또는 매도 의사 를 결정한 후 이를 실행하기 전에 그 금융투자상품, 그 밖의 투자대상 자산을 자기의 계산으 로 매수 또는 매도하거나 제삼자에게 매수 또는 매도를 권유하는 행위</span>
        </li>
        <li>
          <span class="list-label">6.</span>
          <span class="list-text">자기 또는 제3자의 이익을 도모할 목적으로 투자자문재산을 통상의 거래 조건과 다른 불공정한 조건으로 거래하는 행위</span>
        </li>
        <li>
          <span class="list-label">7.</span>
          <span class="list-text">자본시장과 금융투자업에 관한 법률 제 98 조 및 시행령 제 99 조에서 정 하고 있는 투자자문업자 금지행위</span>
        </li>
        <li>
          <span class="list-label">8.</span>
          <span class="list-text">그 밖에 투자자 보호 또는 건전한 거래 질서를 해칠 염려가 있는 행위로 서 금융위원회가 정하여 고시하는 행위</span>
        </li>
      </ul>

      <h2>제 15 조 (계약의 변경 및 해지 등)</h2>
      <ul class="custom-labeled-list">
        <li>
          <span class="list-label marker-circle">①</span>
          <span class="list-text">고객은 전화 또는 서면 등 회사와 사전에 합의한 방법으로 계약을 변경 하거나 해지할 수 있다.</span>
        </li>
        <li>
          <span class="list-label marker-circle">②</span>
          <span class="list-text">계약을 체결한 고객은 계약서류를 교부 받은 날부터 7일 이내 서면에 의 하여 계약을 해제할 수 있으며, 회사는 계약이 해제된 경우 고객으로부터 미리 지급받은 계약과 관련한 대가에 대하여 고객에게 반환하여야 한다. 다만, 자본시장법령에서 정하는 범위 내에서 고객과 합의하여 반환금액을 정한다.</span>
        </li>
      </ul>

      <h2>제 16 조 (분쟁조정)</h2>
      <p>고객은 회사와 분쟁이 발생한 경우 회사의 민원처리기구에 그 해결을 요구 하거나 금융감독원, 한국금융투자협회 등에 분쟁조정 을 신청할 수 있다.</p>

      <h2>제 18 조 (관할법원)</h2>
      <p>본 계약과 관련하여 발생한 분쟁에 대하여 고객과 회사 사이에 소송의 필요 가 생긴 경우에는 그 관할법원인 「민사소송법」이 정 하는 바에 따른다.</p>

      <h2>제 19 조 (관련법규 등 준용)</h2>
      <ul class="custom-labeled-list">
        <li>
          <span class="list-label marker-circle">①</span>
          <span class="list-text">이 약관에서 정하지 아니한 사항은 별도의 약정이 없는 한 관계법규에서 정하는 바에 따르며 관계법규에도 정함이 없는 경우에 는 일반적인 상관습에 따른다.</span>
        </li>
        <li>
          <span class="list-label marker-circle">②</span>
          <span class="list-text">이 약관에 의한 거래 중 전자금융거래에 관하여는 「전자금융거래이용에 관한 기본약관」 및 전자금융 거래법령이 우선 적용 된다.</span>
        </li>
      </ul>

      <div class="doc-footer">
        <p>고객과 회사는 이 계약서의 모든 조항을 확인하고, 이 계약을 성실히 이행할 것을 약속합니다. 체결된 계약은 서비스 내 고객용 개 인페이지에서 확인이 가능합니다.</p>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  layout: 'document',
  head() {
    return {
      title: '자문계약서 | PINBLEND'
    }
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
  @apply w-[800px] bg-white text-[#141414] leading-[1.6] relative;
}
.doc-header {
  @apply flex justify-end mb-4;
}
.btn-print {
  @apply px-4 py-1.5 bg-gray-800 text-white text-[13px] rounded hover:bg-gray-700 transition-colors;
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
.doc-info {
  @apply mb-10 text-[14px] text-right;
}
.doc-info p {
  @apply mb-1;
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
  @apply mt-12 pt-8 border-t border-gray-200 text-center text-[14px] font-bold;
}

@media print {
  @page {
    size: A4;
    margin: 20mm;
  }
  body {
    background: none !important;
  }
  .document-content {
    width: 100% !important;
    padding: 0 !important;
    box-shadow: none !important;
  }
  .no-print {
    display: none !important;
  }
}
</style>
