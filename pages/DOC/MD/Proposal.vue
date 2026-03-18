<template>
  <div class="document-container">
    <div class="print-header no-print">
      <button @click="printPage" class="print-btn">출력하기</button>
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

    <section class="doc-body">
      <h2>1. 투자자문의 범위 및 제공방법</h2>
      <div class="sub-section">
        <h3>1) 투자자문의 내용</h3>
        <p>회사는 산업의 분석 및 기업에 대한 합리적인 가치판단을 바탕으로 고객의 투자자문자산의 내용과 규모, 투자방침과 투자환경의 변화 등 제반 사항을 고려하여 적절한 투자자문을 수행합니다.</p>

        <h3>2) 투자자문의 대상</h3>
        <p>회사가 고객에게 투자자문서비스를 제공함에 있어 그 투자자문의 대상이 되는 금융투자상품은 다음과 같습니다.</p>
        <ul class="list-ho">
          <li>주식 및 주식관련자산</li>
          <li>RP 및 예수금 등 현금성자산</li>
          <li>국내 및 해외 파생 자산</li>
          <li>그 밖의 관련법령에서 허용한 투자자문 대상자산으로서 고객과 회사가 사전 합의한 모든 금융투자상품</li>
        </ul>

        <h3>3) 투자자문서비스의 내용 및 범위</h3>
        <p>회사가 고객에게 제공하는 투자자문서비스의 내용 및 범위는 다음과 같으며, 고객은 투자자문의 범위를 세부적으로 지정하여 계약서에 명시할 수 있습니다.</p>
        <ul class="list-ho">
          <li>장, 단기 투자전략 수립 및 자산배분에 관한 자문</li>
          <li>계약자산의 포트폴리오 구성 및 분석에 관한 자문</li>
          <li>금융투자상품 투자에 대한 종류, 종목, 수량, 가격, 매매방법, 매매시기 등 종합적인 투자판단 등의 자문</li>
          <li>국내외 경제동향, 산업 및 자본시장에 관한 조사 및 이와 관련한 간행물 제공</li>
          <li>그 밖에 투자전략과 관련한 고객의 요청 자료 제공</li>
        </ul>

        <h3>4) 투자자문의 제공방법</h3>
        <ul class="list-ho">
          <li>회사는 고객의 재무상태, 투자목적, 위험선호도 등을 전자방식(앱 등), 유선 등으로 파악하여 투자자문에 반영합니다.</li>
          <li>고객의 자산 규모에 부합된 서비스를 전자방식 또는 유선 등의 방법으로 제공합니다.</li>
        </ul>

        <h3>5) 이해상충방지를 위한 절차</h3>
        <ul class="list-ho">
          <li>회사는 선량한 관리자로서 신의성실하게 의무를 이행합니다.</li>
          <li>이해관계가 있는 기업 발행 증권 자문 시 고객에게 사전 통보합니다.</li>
          <li>이해상충 발생 우려 시 내부통제체계를 통해 공정하게 관리합니다.</li>
        </ul>

        <h3>6) 고객의 재무상태 및 투자목적 등 사전 파악</h3>
        <ul class="list-ho">
          <li>계약 전 고객의 재무상태 및 투자목적을 사전에 파악합니다.</li>
          <li>고객이 회사의 변경여부 확인 통지에 지속적으로 회신하지 않는 경우 계약을 해지할 수 있습니다.</li>
        </ul>
      </div>

      <h2>2. 투자자문업무의 절차 지침</h2>
      <div class="sub-section">
        <h3>1) 투자자문업무 절차</h3>
        <ul class="list-ho">
          <li>계약 체결: 회사와 고객은 자문 계약을 상호합의하에 체결하고 자문료를 정해진 방법으로 납부합니다. 고객의 재무상태, 투자목적 등의 파악 이후 회사와 고객은 자문 계약을 상호합의 하에체결하고 자문료를 정해진 방법으로 납부합니다.</li>
          <li>자문 시작 및 보고: 회사는 고객의 현재 포트폴리오 등을 바탕으로 투자 자문을 진행하고 분기 1회 이상 개별적인 포트폴리오 분석을 수행합니다.</li>
          <li>자문 종료</li>
        </ul>

        <h3>2) 투자자문업무 수행을 위해 회사가 정하고 있는 지침</h3>
        <ul class="list-ho">
          <li>업무지침: 회사는 철저한 조사 분석과 적절한 위험관리를 통해 안정적으로 고객 수익을 창출함을 목적으로 합니다.</li>
          <li>고객중심의 투자자문업무 수행 절차: 회사는 다양한 투자관련자료를 분석하며 운용전략 수립, 모델포트폴리오 및 상품 편입비 결정, 종목 선정 및 리스크 관리를 위해 정기적으로 운용전략회의를 운영합니다.</li>
          <li>자문업무 진행 고객과의 자문 업무 진행 시 고객의 투자경험 등을 고려하여 당해 고객이 이해할 수 있도록 쉽고, 간명하게 업무를 진행합니다.</li>
        </ul>
      </div>

      <h2>3. 투자자문담당자에 관한 사항</h2>
      <div class="sub-section">
        <h3>1) 고객의 투자자문을 담당할 회사의 투자자문담당자의 학력 및 주요경력은 다음과 같습니다.</h3>
        <div class="table-w">
          <table>
            <colgroup>
              <col width="150" />
              <col width="*" />
            </colgroup>
            <tbody>
              <tr>
                <th>성명</th>
                <td>박민규</td>
              </tr>
              <tr>
                <th>학력/경력</th>
                <td>건국대학교 수학과<br />NH투자증권 투자권유대행인<br />미래에셋금융서비스</td>
              </tr>
              <tr>
                <th>주요자격</th>
                <td>투자자산운용사<br />국제공인 투자실무사1급</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="notice">※ 위 투자자문담당자는 과거 내부자거래, 시세조종, 임의매매 등 위법행위로 형사제재를 받았거나 금융위원회로부터 법 제422조제1항제1호부터 제5호까지 또는 같은 조 제2항제1호부터 제6호까지의 조치를 받은 사실이 없습니다.</p>

        <h3 class="mt-4">2) 고객은 회사에 대하여 투자자문담당자의 제재내역 조회를 요청할 수 있습니다.</h3>
        <h3 class="mt-2">3) 고객이 투자자문담당자를 변경하고자 하는 경우 회사에게 서면 또는 전화 등 사전에 합의한 방법으로 요청하여야 합니다.</h3>
      </div>

      <h2>4. 회사의 주주 및 임원에 관한 사항</h2>
      <div class="sub-section">
        <h3>1) 주주 현황</h3>
        <div class="table-w">
          <table>
            <colgroup>
              <col width="150" />
              <col width="150" />
              <col width="150" />
              <col width="*" />
            </colgroup>
            <thead>
              <tr>
                <th>주주명</th>
                <th>주식수</th>
                <th>지분율</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>주인아</td>
                <td>62,000</td>
                <td>100%</td>
                <td>최대주주</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>2) 임원 현황</h3>
        <div class="table-w">
          <table>
            <colgroup>
              <col width="150" />
              <col width="150" />
              <col width="*" />
            </colgroup>
            <thead>
              <tr>
                <th>직위</th>
                <th>성명</th>
                <th>주요 경력</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>대표이사</td>
                <td>박민규</td>
                <td>現 (주)핀블렌드투자자문 대표이사</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="notice">※ 위 임원 및 대주주는 과거 위법행위로 인한 형사제재나 자본시장법에 따른 조치를 받은 사실이 없습니다.</p>
      </div>

      <h2>5. 회사의 의무 및 책임</h2>
      <div class="sub-section">
        <h3>1) 투자자문계약의 변경 및 해지</h3>
        <p>고객은 전화 또는 서면 등 회사와 사전에 합의한 방법으로 계약을 변경하거나 해지를 요구할 수 있으며, 회사는 투자자문계약서에 정한 특별한 사유가 없는 한 고객의 합리적인 요구 또는 계약의 변경 및 해지 요구에 대하여 응할 의무가 있습니다.</p>

        <h3>2) 비밀유지의무</h3>
        <p>회사는 계약과 관련하여 알게 된 고객의 투자자문재산 내용과 관리상황, 신상 내용 및 그 밖에 모든 사항에 대해 고객의 사전 동의 없이 제3자에게 누설하지 않습니다.</p>

        <h3>3) 투자자문회사의 금지행위</h3>
        <p>회사는 다음과 같은 행위를 하지 않습니다.</p>
        <ul class="list-ho">
          <li>투자자로부터 금전·증권, 그 밖의 재산의 보관·예탁을 받는 행위</li>
          <li>투자자에게 금전·증권, 그 밖의 재산을 대여하거나 투자자에 대한 제3자의 금전·증권, 그 밖의 재산의 대여를 중개·주선 또는 대리하는 행위</li>
          <li>투자권유자문인력 또는 투자운용인력이 아닌 자에게 투자자문업을 수행하게 하는 행위</li>
          <li>계약으로 정한 수수료 외의 대가를 추가로 받는 행위</li>
          <li>투자자문 업무를 함에 있어서 금융투자상품 등의 가격에 영향을 미칠 수 있는 매수/매도 의사 결정 후 실행 전 자기 계산으로 매매하거나 제3자에게 권유하는 행위</li>
          <li>자기 또는 제3자의 이익을 도모할 목적으로 투자자문재산을 불공정한 조건으로 거래하는 행위</li>
        </ul>
      </div>

      <h2>6. 고객의 의무 및 책임</h2>
      <div class="sub-section">
        <h3>1) 통지의무</h3>
        <ul class="list-ho">
          <li>회사의 통지는 &lt;별지1&gt;에 기재된 연락처로 전자문서 또는 유선 등 합의된 방법으로 하며, 장소 변경 시 고객은 이를 사전에 알려야 합니다.</li>
          <li>고객은 이메일, 연락처 등 서비스에 영향을 줄 수 있는 변동사항 발생 시 지체 없이 회사에 통지해야 합니다.</li>
          <li>고객의 책임 있는 사유로 통지의무를 이행하지 않아 발생하는 불이익에 대해 회사는 책임 있는 사유가 없는 한 책임을 지지 않습니다.</li>
        </ul>

        <h3>2) 비밀유지의무</h3>
        <p>고객은 투자자문서비스의 내용을 제3자에게 누설하여서는 아니 되며, 회사의 사전 동의 없이 회사의 투자자문서비스를 제3자와 공동으로 이용하지 못합니다.</p>

        <h3>3) 투자자문재산의 자문 결과에 대한 책임</h3>
        <p>회사가 투자자문재산을 자문한 결과 발생하는 이익과 손실은 고객에게 귀속되며, 회사는 수익이나 원금을 보장하는 행위는 하지 않습니다.</p>
      </div>

      <h2>7. 투자자문재산 수수료에 관한 사항</h2>
      <div class="sub-section">
        <h3>1) 고객은 회사가 제공하는 투자자문서비스의 대가로서 투자자문 수수료(이하 “기본수수료”라 한다)를 회사에 지급합니다.</h3>
        <h3>2) 회사와 고객이 투자자문계약을 개시하는 시점의 자산형태는 현금을 원칙으로 합니다. 단, 고객과 회사의 사전 협의에 의하여 그 시점에 보유하고 있는 금융투자상품으로 할 수 있으며, 이 경우 금융투자상품은 공정한 시세가 있는 것에 한정합니다.</h3>
        <h3>3) 투자자문수수료는 투자자문재산 계약금액에 제4)항의 요율을 기준으로 하여 계산합니다. 다만, 회사는 투자자문자산의 규모, 성격 및 자문방법에 따라 고객과 사전 협의하여 이와 다른 요율을 적용할 수 있습니다.</h3>
        <h3>4) 투자자문 기본수수료율 기준표 및 세부기준</h3>
        <div class="table-w">
          <table>
            <colgroup>
              <col width="150" />
              <col width="*" />
              <col width="150" />
            </colgroup>
            <thead>
              <tr>
                <th>수수료 구분</th>
                <th>수수료율</th>
                <th>납부시기</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>기본수수료</td>
                <td>고객별 월별 정액</td>
                <td>별도 계약에 따름</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul class="list-ho mt-4">
          <li>자문계약기간은 고객과 계약한 기간으로 하며, 투자자문 계약자산의 최소 가입금액 예치시점부터 계약의 효력이 유효하다. 다만, 계약기간 내 계약을 갱신할 경우 기존 계약 만료일의 익일부터 추가 자문계약을 통해서 연장된 것으로 한다.</li>
          <li>계약기간 만기 전에 해지를 하는 경우 수수료 계산은 다음의 방식에 의거한다.</li>
        </ul>
        <p class="notice pl-6">선취수수료를 징수한 건에 한하여 투자자문계약서 상의 계약조건에 따라 회사는 일할 계산하여 고객에게 반환하도록 한다.</p>
      </div>

      <h2>8. 계약기간에 관한 사항</h2>
      <div class="sub-section">
        <ul class="list-hang">
          <li>이 계약은 계약체결일로부터 효력이 발생되며, 계약기간은 계약체결일로부터 1년 이상의 기간으로 고객과 회사가 정한 기 간으로 하되, 별도의 다른 약정이 없는 한 1년으로 합니다.</li>
          <li>회사는 계약종료일 1개월 전까지 고객에게 계약종료일을 통지하여야 하며 “고객은 계약종료일 이전까지 계약해지의 의사 표시를 할 수 있으며, 계약해지의 의사표시를 하지 아니한 경 우에는 종전 계약과 동일한 기간과 동일한 조건으로 계약이 갱신된 것으로 본다”는 내용을 고객에게 통지하여야 합니다.</li>
          <li>고객이 제2항의 통지를 받은 날로부터 계약종료일까지 계약해 지의 의사표시를 하지 아니한 경우에는 종전 계약과 동일한 기간 및 동일한 조건으로 계약이 갱신된 것으로 봅니다. 단, 계약금액 및 계약기간은 당사자 간의 합의에 따라 변동될 수 있습니다.</li>
        </ul>
      </div>

      <h2>9. 계약의 변경 및 해지</h2>
      <div class="sub-section">
        <ul class="list-hang">
          <li>고객은 전화 또는 서면 등 회사와 사전에 합의한 방법으로 계약을 변경하거나 해지할 수 있습니다.</li>
          <li>
            <div class="block w-full">
              회사는 다음 각 호의 어느 하나에 해당하는 사유가 발생한 경우 고객에게 14일 이상의 기간을 부여하여 시정조치를 요구하고, 고객이 적절한 조치를 취하지 아니한 때에는 계약을 해지할 수 있습니다. 단, 고객의 계약 위반내용의 시정이 명백히 불가능하거나 계약 위반의 정도가 중하여 계약목적을 달성할 수
              없는 정도에 이른 때에는 즉시 계약을 해지할 수 있습니다.
              <ul class="list-ho mt-2">
                <li>고객의 계좌에 가압류나 압류절차가 시작되거나 질권(채무 자가 돈을 갚을 때까지 채권자가 담보물을 보유할 수 있고, 채무자가 돈을 갚지 않을 때는 그 담보물에 대하여 우선적으로 변제를 받을 수 있는 권리)이 설정되어 투자자문재산의 서비스에 제한이 있는 경우</li>
                <li>고객이 재무상태, 투자목적 등이 변경되었음에도 불구하고 4회(계약한 연도에는 3회)이상 재무상태, 투자목적 등의 변경여부에 대하여 회신하지 않는 경우</li>
              </ul>
            </div>
          </li>
          <li>계약의 해지는 해지일 이전에 실행된 거래에 영향을 미치지 아니하며, 고객이 계약체결일로부터 7일 이내 서면으로 그 해지를 청구하는 경우, 계약은 즉시 해지되는 것으로 합니다.</li>
        </ul>
      </div>

      <h2>10. 투자자문담당자의 선정</h2>
      <div class="sub-section">
        <ul class="list-hang">
          <li>회사는 고객에 대한 투자자문재산의 내용과 규모 등을 고려하여 고객과 회사가 협의하여 투자자문담당자를 선임합니다.</li>
          <li>고객은 회사에 대하여 투자자문담당자의 제재내역 조회를 요청할 수 있습니다.</li>
        </ul>
      </div>

      <h2>11. 자문플랫폼 이용 안내</h2>
      <div class="sub-section">
        <ul class="list-hang">
          <li>회사는 자문플랫폼 서비스를 제공하는 금융투자회사와 업무위수탁계약을 체결하고 자문플랫폼을 통해 자문계약을 체결한 고객에게 자문서비스를 제공할 수 있습니다.</li>
          <li>
            <div class="block w-full">
              자문플랫폼 서비스는 아래 내용을 포함하고 있습니다.
              <ul class="list-ho mt-2">
                <li>회사의 온라인 계약지원</li>
                <li>투자자문과 관련된 고객 정보의 보관 및 관리</li>
                <li>투자자문내역에 따른 주문·체결 내역의 전달·집행 등의 업무와 기록 보관</li>
                <li>고객에게 제공하는 자문과 관련하여 자문수수료 및 성과보수의 계산 및 수취업무의 대행</li>
                <li>금융투자상품의 설명서 및 투자자에게 정보 제공을 위해 필요한 자료 제공</li>
                <li>그 밖의 투자자문업무에 부수된 업무</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div class="doc-footer">
        <p>주식회사 핀블렌드투자자문</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'document',
  head() {
    return {
      title: '투자권유문서 | PINBLEND'
    }
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
  padding: 40px 20px;
  background-color: white;
  color: #333;
  line-height: 1.6;
  font-family: 'Malgun Gothic', 'Dotum', sans-serif;
}

@media print {
  @page {
    size: A4;
    margin: 20mm;
  }
  body {
    background: none !important;
  }
  .document-container {
    width: 100% !important;
    padding: 0 !important;
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
  @apply px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition;
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
counter-reset: hang;
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
