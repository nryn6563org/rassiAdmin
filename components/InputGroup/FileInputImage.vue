<template>
  <div class="addFileImage">
    <input
      type="file"
      id="fileForImage"
      class="custom-input-file"
      ref="fileInput"
      accept="image/*"
      @change="handleFileChange"
    />
    <span class="custom-file-name">{{ fileName }}</span>
    <label for="fileForImage" class="custom-label-file">등록</label>
  </div>
</template>

<script>
export default {
  name: 'ImageUploadInput',
  data() {
    return {
      fileName: '파일 업로드',
      file: null
    }
  },
  methods: {
    handleFileChange(event) {
      const files = event.target.files || event.dataTransfer.files

      if (!files.length) {
        this.reset()
        return
      }

      const selectedFile = files[0]

      // [추가된 로직] 파일 타입이 이미지인지 확인
      // selectedFile.type은 'image/png', 'image/jpeg' 등의 형태입니다.
      if (!selectedFile.type.startsWith('image/')) {
        alert('이미지 파일만 업로드할 수 있습니다.')
        this.reset() // 입력 초기화
        return
      }

      // 통과 시 데이터 처리
      this.file = selectedFile
      this.fileName = selectedFile.name
      this.$emit('change-file', selectedFile)
    },

    reset() {
      this.fileName = '파일 업로드'
      this.file = null
      if (this.$refs.fileInput) {
        this.$refs.fileInput.value = '' // input 초기화 (같은 파일 다시 선택 가능하게 함)
      }
    }
  }
}
</script>

<style>
  .addFileImage{
    @apply flex items-center gap-x-2
  }
</style>