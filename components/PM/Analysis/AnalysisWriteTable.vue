<template>
  <div class="writeTable">
    <table width="100%">
      <colgroup>
        <col width="165" />
        <col width="*" />
      </colgroup>
      <tbody>
        <tr>
          <th>
            <span>제목</span>
          </th>
          <td>
            <input type="text" name="" id="" class="custom-text-input" placeholder="제목을 입력해 주세요." style="width: 100%" />
          </td>
        </tr>
        <tr>
          <th>
            <span>요약글</span>
          </th>
          <td>
            <input type="text" name="" id="" class="custom-text-input" placeholder="요약글을 입력해 주세요." style="width: 100%" />
          </td>
        </tr>
        <tr>
          <th>
            <span>종목선택</span>
          </th>
          <td>
            <SearchInput :searchLabel="'종목명을 검색해 주세요.'" :items="itemList" v-model="selectedItem" />
          </td>
        </tr>
        <tr>
          <th>
            <span>차트입력</span>
          </th>
          <td>
            <AddChart :searchLabel="'종목명 또는 종목코드'" :items="chartItems" v-model="selectedChartItem" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import SearchInput from '@/components/InputGroup/SearchInputSvg.vue'
import AddChart from '@/components/InputGroup/AddChart.vue'

export default {
  components: {
    SearchInput,
    AddChart
  },
  data() {
    return {
      selectedItem: '',
      itemList: [
        'Apple',
        'aanana',
        'aherry',
        'aate',
        'alderberry',
        'aig',
        'arape',
        'aoneydew'
      ],
      selectedChartItem: '',
      chartItems: [
        'Apple',
        'aanana',
        'aherry',
        'aate',
        'alderberry',
        'aig',
        'arape',
        'aoneydew'
      ]
    }
  },
  methods: {
    uploadToServer(file) {
      console.log('사용자가 선택한 파일:', file)
      // 여기서 서버로 전송하거나 data에 저장하는 로직 수행
    }
  }
}
</script>
<style scoped>
.publicCheck{
  @apply flex items-center gap-3
}

::v-deep .schInput{
  @apply h-[49px] relative w-[408px]
}
::v-deep .schInput input{
  @apply !h-[49px]
}
::v-deep .schInput button{
  @apply absolute top-2.5 right-2.5 w-fit h-fit;
}
</style>
