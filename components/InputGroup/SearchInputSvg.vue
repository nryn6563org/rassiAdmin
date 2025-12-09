<template>
  <div class="schInput">
    <label for="schInput">
      <input type="text" name="" id="schInput" :placeholder="searchLabel" />
      <button type="submit">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="26" height="26" transform="matrix(-1 0 0 1 26 0)" fill="url(#pattern0_987_30357)" />
          <defs>
            <pattern id="pattern0_987_30357" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_987_30357" transform="scale(0.03125)" />
            </pattern>
            <image
              id="image0_987_30357"
              width="32"
              height="32"
              preserveAspectRatio="none"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABy0lEQVR4nO1WS0oDQRAdlLjxs1U8gnoH9QL+MOoJRqz3eqKGrHsn4jH8nscPGn+QA7iRZKEbIxUrMGYRnR41CHnQhGH61Xupqq7pKOrjv8J7PyQiawBOAVQBNGxVSZ7oO93zK+IkV0g+kmx2WwAeACz/mLD3fgDAQUrknGTinJsql8vDukRkGkCJ5EVq375ycxuAiQN4IbnZLai+E5Et29sy8RNpb2pA59xsBtNzKRNLQeLe+6FUzTez8kmKce/jOC5kNiAia+2ah9SyWCwOArjUGM651cwGSJ5Z+l0UCADbFuM4xMCtuZ8KNaCnwwxUQwzUlSwiI6EGKpXKqJWxnpkMoJHXgHNuzDLwnJlMOwF5SpAkyUxwCQCcGrkUagDArpXgMIS8YeSL0GNI8ir4GMZxXCBZsz7YysrnBzSDd0GDSCEii+1RrOM1+iacc/MAXkm+AViIQiEiEySfUh8j0dR+kXaauJZvL5c4gBsL1DJhRi51wumQ0SOqy7p9p11z/ecqHvw5lpS4/uqzlaP2jQvJXe60o0O8ozHX9fplN5+GTcxrAEfa7cENp0iSZLydRrvzTUZ/haQvzh6Id0ysTw33pwCAnon3EfUA70nzm/MsCZH5AAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>
      </button>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    searchLabel: {
      type: String,
      default: '종목명 또는 종목코드 검색'
    }
  }
}
</script>

<style scoped>
.schInput label {
  @apply relative inline-block;
}
.schInput input {
  @apply w-[408px] h-[46px] p-[0_36px_0_10px] border-[1px] border-[#E3E3E3] text-[16px] text-[#5E6367] rounded-[6px];
}
.schInput input::placeholder {
  @apply text-[16px] text-[#9E9E9E];
}
.schInput button {
  @apply absolute top-2.5 right-2.5 z-10
}
</style>
