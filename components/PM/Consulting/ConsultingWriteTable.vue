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
            <span>공개여부</span>
          </th>
          <td>
            <div class="public_check">
              <label for="pbCheck001" class="custom-radio-label">
                <input type="radio" name="public" id="pbCheck001" class="custom-radio-input" checked>
                <span class="custom-radio-txt">전체공개</span>
              </label>
              <label for="pbCheck002" class="custom-radio-label">
                <input type="radio" name="public" id="pbCheck002" class="custom-radio-input">
                <span class="custom-radio-txt">비밀글</span>
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <span>상담유형</span>
          </th>
          <td>
            <span></span>
          </td>
        </tr>
        <tr>
          <th>
            <span>상담종목</span>
          </th>
          <td>
            <span>삼성전자(011111)</span>
          </td>
        </tr>
        <tr>
          <th>
            <span>처리상태</span>
          </th>
          <td>
            <span>문의중</span>
          </td>
        </tr>
        <tr>
          <th>
            <span>회원구분</span>
          </th>
          <td>
            <span>잠재고객</span>
          </td>
        </tr>
        <tr>
          <th>
            <span>등록일시</span>
          </th>
          <td>
            <span>2026.01.02 12:43 / --</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
  .public_check{
    @apply flex gap-2.5
  }
</style>