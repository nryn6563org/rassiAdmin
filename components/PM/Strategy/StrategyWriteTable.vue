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
            <input type="text" name="" id="" placeholder="종목명을 검색해 주세요." />
          </td>
        </tr>
        <tr>
          <th>
            <span>차트입력</span>
          </th>
          <td>
            <div class="addChart">
              <label for="addChartInput">
                <input type="text" name="" id="addChartInput" class="custom-text-input" placeholder="종목명 또는 종목코드" style="width:220px" />
                <button class="btn013 round" type="submit">차트추가</button>
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import FileInputImage from '@/components/InputGroup/FileInputImage.vue'

export default {
  components: {
    FileInputImage
  },
  methods: {
    // 2. methods 안에 "onFileChanged" 라는 함수가 반드시 있어야 합니다!
    // 이 함수가 없거나 이름이 다르면 "got undefined" 에러가 뜹니다.
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
.addChart label {
  @apply flex items-center gap-2;
}
.addChart button {
  @apply h-[46px] w-[91px];
}
</style>
