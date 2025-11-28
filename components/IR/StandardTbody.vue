<template>
  <tbody>
    <tr v-for="(tbodyList, tbodyListIndex) in tbodyLists" :key="tbodyListIndex">
      <td>
        <label :for="`check_${tbodyListIndex}`">
          <input type="checkbox" v-model="tbodyList.checked" :id="`check_${tbodyListIndex}`" />
        </label>
      </td>
      <td>
        <div>
          <span>{{ tbodyList.ListNumber }}</span>
        </div>
      </td>
      <td>
        <div class="itemName">
          <span class="name">
            {{ tbodyList.ItmeName }}
          </span>
          <span class="number"> ({{ tbodyList.ItemNumber }}) </span>
        </div>
      </td>
      <td>
        <div class="volatility">
          <span class="price">
            {{ tbodyList.CurrentPrice }}
          </span>
          <span class="per"> ({{ tbodyList.CurrentPer }}) </span>
        </div>
      </td>
      <td>
        <div class="myInfo">
          <div class="signal" v-html="tbodyList.Signal"></div>
          <div class="priceInfo">
            <div class="volatility">
              <span class="price">
                {{ tbodyList.MyPrice }}
              </span>
              <span class="per"> ({{ tbodyList.MyPer }}) </span>
            </div>
            <div class="date">
              <span>
                {{ tbodyList.MyDate }}
              </span>
            </div>
            </div>
          </div>
      </td>
      <td>
        <div>
          <span>{{ tbodyList.TargetPrice }}</span>
          &nbsp;/&nbsp;
          <span>{{ tbodyList.StopPrice }}</span>
        </div>
      </td>
      <td>
        <div>
          <span>{{ tbodyList.Recommendation }}</span>
          <a href="#">조회</a>
        </div>
      </td>
      <td>
        <div>
          <span>{{ tbodyList.Registration }}</span>
        </div>
      </td>
      </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    tbodyLists: {
      type: Array,
      default: () => []
    }
  }
}
</script>