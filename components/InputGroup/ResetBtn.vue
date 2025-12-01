<template>
  <button class="reset">
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="21" height="21" fill="url(#pattern0_994_16769)" />
      <defs>
        <pattern id="pattern0_994_16769" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_994_16769" transform="scale(0.02)" />
        </pattern>
        <image
          id="image0_994_16769"
          width="50"
          height="50"
          preserveAspectRatio="none"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADlElEQVR4nO2ZS2sUQRDHO769iUF8nlUEERUlUcHvIKwiy1TtVHXXhIQcPPm4LAjGqxqNX0ARET0oKHoQUVDPPk5KIBrB981HfFMzPXEUMbvuzOrg/mBOO9vV/+nqR/3bmA4dOnRokq6acxuAZB+ynAZ295HcMyD3Hkg+ILnXSHIPyJ0FdnvR2p56vT7NtANkuY3sbv7uHSJagiRDwPIEWb429ZA8BpKDVWuXFS3kqz6/+o2Z5wO5o8gykenYGJIMQxhBGEZrmHkhIs4RkZlBMNAdUN9asNFOZDmGJA8zoiaQZETfaasQCO12ZPdSfwNynzWVNFU0vZppPyDpBZYTSO5jEsu9DFh2mKKF6JeNv+b3L3kVRVa2GiewdjmQu5QZ2ZGt9foMU4QQTREgd96Pwnu0Is2OwJTxwoiB5I0Xc6FS2TU3VyH6dZDlYhLAPfNpVAho7fo4hheTy8ikQoDdEd/wi1pNVpuCCaxdPimG5VjLDWaXyng/4GhjLj1tdGTYvY1jh3Z7a41l13wrA7n1stH4ZF2SEfJcl/s/b6jxze1GrgoyIMtln9bDpmghQHLdFARR3wpk+RSnNkRLTZkBkpN+VIZMmak5t8nv/OOVSmW6KTFdSDKaTPz2rZyFAOyO+zm5x5QZJFv1J4szpszUarLO7yl3TJkJw3BBekxqqjIEklvmH2JwcHB2elRq+E9p1VepVGaZfwhkudHU5gskr1RIYaVnu0CSe7EQ6ltrygyQOxvno412mjIDiTeVT1HzN0Fre/xS9yDvuryt1Ov1acDuUTJPpNeUGSA56HfSE6bMVK1dljiA7qOaAUXuDY0WcOaPg5CM+N30Uq69b7eQIBjoTq1RNc9Mm0GSwVyEKOrF+rr8jVo0ufVyqrgkvT8Y5K0KyaaYmmZFzpcUdfLTYxKyHMpNSGyZklzIWKaFjQxytFl9LD83z2uNnpsQRQ3lSTHqAJJ1Jl+6AnL9mXQ6p0d3/SFXIYo3syevFYDcFfWdWm03DKNVyHLNt/sFSA5nzevchaSoF5sOf2KeyUm1bJo8znQFoWyJ7xSTy6I4bWss235+sTAhinqx8TWb3pV8v6AZjd0OslWtsXX51uJM71aqIovjqzeWMFk83HjWII8nNeK8X8UqVMgPl6HsDqRns6YekjEg2Y/YvyjXyrD1g2a0UX0ntWzU7fBL6ASwvAOSp8juLrCcApLdOmItBezQocP/yTepSM1wODprZwAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>

    <span>초기화</span>
  </button>
</template>

<style scoped>
.reset{
  @apply flex h-10 items-center gap-[7px]
}
.reset span{
  @apply text-[16px] text-[#5E6367]
}
</style>
