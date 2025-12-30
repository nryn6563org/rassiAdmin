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
            <span>공개범위</span>
          </th>
          <td>
            <div class="publicCheck">
              <label for="cfp001" class="custom-radio-label">
                <input type="radio" name="checkforpublic" id="cfp001" checked class="custom-radio-input" />
                <span class="custom-radio-txt">전체공개</span>
              </label>

              <label for="cfp002" class="custom-radio-label">
                <input type="radio" name="checkforpublic" id="cfp002" class="custom-radio-input" />
                <span class="custom-radio-txt">회원전용</span>
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <span>*제목</span>
          </th>
          <td>
            <input type="text" name="" id="" class="custom-text-input" placeholder="제목을 입력해 주세요." style="width: 100%" />
          </td>
        </tr>
        <tr>
          <th>
            <span>*대표이미지</span>
          </th>
          <td>
            <FileInputImage @change-file="uploadToServer" />
          </td>
        </tr>
        <tr>
          <th>
            <span>관련종목</span>
          </th>
          <td>
            <SearchInput :searchLabel="'종목명을 검색해 주세요.'" :items="itemList" v-model="selectedItem" />

            <div class="searchResult">
              <strong>총 <em>10</em> 종목 선택됨</strong>

              <div class="resultList">
                <button v-for="(rItem, rItemIndex) in resultList" :key="rItemIndex">
                  <span>{{ rItem }}</span>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5L13.2782 13.5" stroke="black" />
                    <path d="M13.5 5.5L5.72183 13.5" stroke="black" />
                  </svg>
                </button>
              </div>
            </div>
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
import FileInputImage from '@/components/InputGroup/FileInputImage.vue'
import SearchInput from '@/components/InputGroup/SearchInputSvg.vue'
import AddChart from '@/components/InputGroup/AddChart.vue'

export default {
  components: {
    FileInputImage,
    SearchInput,
    AddChart
  },
  data() {
    return {
      resultList: [
        '씨제이바이오사이언스 (311690)', '씨제이바이오사이언스 (311690)', '씨제이바이오사이언스 (311690)', '씨제이바이오사이언스 (311690)', '씨제이바이오사이언스 (311690)',
        '씨제이바이오사이언스 (311690)', '씨제이바이오사이언스 (311690)', '씨제이바이오사이언스 (311690)', '씨제이바이오사이언스 (311690)', '씨제이바이오사이언스 (311690)'
      ],
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
.publicCheck {
  @apply flex items-center gap-3;
}
.addChart label {
  @apply flex items-center gap-2;
}
.addChart button {
  @apply h-[46px] w-[91px];
}
.searchResult{
  @apply mt-4 w-full flex flex-col
}
.searchResult strong{
  @apply text-[20px] text-[#141414] h-6 leading-6 font-normal
}
.searchResult strong em{
  @apply text-[#3C68CD] font-bold
}
.resultList{
  @apply flex flex-wrap w-full mt-3 gap-x-2 gap-y-1
}
.resultList button{
  @apply p-2.5 flex gap-2.5 items-center h-10 border-[1px] border-[#bfbfbf] rounded-[10px]
}
.resultList button span{
  @apply text-[16px] text-[#5E6367]
}
</style>
