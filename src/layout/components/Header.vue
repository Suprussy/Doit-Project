<template>
  <header class="relative z-50">
    <div class="topmenu py-1">
      <div class="contentbox flex justify-between items-center w-full max-w-screen-xl mx-auto px-5">
        <div class="logo">
          <button v-on:click="goToPage('/main')">
            <img src="/images/logo.png" alt="이지스 퍼블리싱 로고" title="이지스 퍼블리싱" class="w-16">
          </button>
        </div>
        <div class="system">
          <button class="login w-6 h-6 mr-3.5 lg:w-auto lg:h-auto lg:mr-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 lg:hidden">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
            <span class="sr-only lg:not-sr-only">로그인</span>
          </button>
          <button class="login w-6 h-6 lg:w-auto lg:h-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 lg:hidden">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            <span class="hidden text-slate-300 lg:inline-block">ㆍ</span>
            <span class="sr-only lg:not-sr-only">회원가입</span>
          </button>
        </div>
      </div>
    </div>
    <nav class="relative py-2 bg-red-600 z-30">
      <div class="contentbox w-full max-w-screen-xl mx-auto px-5">
        <ul class="flex">
          <li v-for="(item, index) in menulists" :key="index" v-on:click="goToPage(item.link)" class="flex-auto pr-2.5 text-center md:flex-1 md:pr-0 last:pr-0">
            <button v-html="item.menutext" class="text-sm font-semibold text-white md:text-lg"></button>
          </li>
        </ul>
      </div>
    </nav>
    <div class="absolute left-0 top-20 rotate-1 w-full h-7 bg-red-800 shadow-md"></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menulists: [
        {menutext:"도서소개", link:"/book"},
        {menutext:"자료실", link:"/reference"},
        {menutext:"동영상강의", link:"/movieclass"},
        {menutext:"교재샘플", link:"/classsample"},
        {menutext:"회사소개", link:"/company"},
      ]
    }
  },
  methods: {
    goToPage(target) {
      if (this.$router.currentRoute.path !== target) {
        this.$router.push(target);
      }
    }
  }
}
</script>