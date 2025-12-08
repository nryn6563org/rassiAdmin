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
              <input type="radio" name="checkforpublic" id="cfp001" checked>
              <label for="cfp001">전체공개</label>
              <input type="radio" name="checkforpublic" id="cfp002">
              <label for="cfp001">회원전용</label>
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <span>*제목</span>
          </th>
          <td>
            <input type="text" name="" id="" class="custom-text-input" placeholder="제목을 입력해 주세요." style="width:100%">
          </td>
        </tr>
        <tr>
          <th>
            <span>*대표이미지</span>
          </th>
          <td>
            <input type="file" name="" id="">
          </td>
        </tr>
        <tr>
          <th>
            <span>관련종목</span>
          </th>
          <td>
            <input type="text" name="" id="" placeholder="종목명을 검색해 주세요.">
          </td>
        </tr>
        <tr>
          <th>
            <span>차트입력</span>
          </th>
          <td>
            <input type="file" name="" id="">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
