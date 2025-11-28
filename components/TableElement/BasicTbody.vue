<template>
  <tbody>
    <tr v-for="(tbody, tbodyIndex) in tbodyList" :key="tbodyIndex">
      <td>
        <label for="">
          <input type="checkbox" name="" id="" />
        </label>
      </td>
      <!-- check -->
      <td>
        <div>
          <span>{{ tbody.ListNumber }}</span>
        </div>
      </td>
      <!--  NO. -->
      <td>
        <div class="itemName">
          <span class="name">
            {{ tbody.ItmeName }}
          </span>
          <span class="number">
            ({{ tbody.ItemNumber }})
          </span>
        </div>
      </td>
      <!-- 종목명 -->
      <td>
        <div class="volatility">
          <span class="price">
            {{ tbody.CurrentPrice }}
          </span>
          <span class="per">
            ({{ tbody.CurrentPer }})
          </span>
        </div>
      </td>
      <!-- 현재가(등락률) -->
      <td>
        <div class="myInfo">
          <div class="signal" v-html="tbody.Signal"></div>
          <!--
            *********** v-html 예시 ************
            <span class="sgl001">매수</span>
            <span class="sgl002">매도</span>
            <span class="sgl003">예약</span>
            <span class="sgl004">만료</span>
            <span class="sgl005">취소</span>
            -->
          <!-- 매도/매수 -->
          <div class="priceInfo">
            <div class="volatility">
              <span class="price">
                {{ tbody.MyPrice }}
              </span>
              <span class="per">
                ({{ tbody.MyPer }})
              </span>
            </div>
            <!-- 매도/매수 금액 -->
            <div class="date">
              <span>
                {{ tbody.MyDate }}
              </span>
            </div>
            <!-- 보유일시 -->
          </div>
          <!-- 금액/보유정보 -->
        </div>
      </td>
      <!-- 나의 매수 금액 / 매도 금액 (수익률) -->
      <td>
        <div>
          <span>{{ tbody.TargetPrice }}</span>
          &nbsp;/&nbsp;
          <span>{{ tbody.StopPrice }}</span>
        </div>
      </td>
      <!-- 목표가 / 손절가 -->
      <td>
        <div>
          <span>{{ tbody.Recommendation }}</span>
          <a href="#">조회</a>
        </div>
      </td>
      <!-- 종목추천발생 -->
      <td>
        <div>
          <span>{{ tbody.Registration }}</span>
        </div>
      </td>
      <!-- 등록일시 -->
    </tr>
  </tbody>
</template>

<script>
export default {
  data() {
    return {
      tbodyList: Array.from({ length: 100 }, (_, i) => {
        const num = i + 1
        return {
          ListNumber: num,
          ItmeName: `삼성전자 ${num}`,
          ItemNumber: String(num).padStart(6, '0'),
          CurrentPrice: (50000 + num * 100).toLocaleString(),
          CurrentPer: `+${(num % 10)}.5%`,
          Signal: num % 2 === 0
            ? '<span class="sgl001">매수</span>'
            : '<span class="sgl002">매도</span>',
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
  }
}
</script>
