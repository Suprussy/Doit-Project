<template>
  <header class="relative z-50">
    <div class="topmenu py-1">
      <div class="contentbox flex justify-between items-center w-full max-w-screen-xl mx-auto px-5">
        <div class="logo">
          <button v-on:click="goToPage('/main')">
            <img src="/images/logo.png" alt="이지스 퍼블리싱 로고" title="이지스 퍼블리싱" class="w-16">
          </button>
        </div>
        <div class="system text-sm">
          <button v-b-modal.login class="login w-6 h-6 mr-3.5 lg:w-auto lg:h-auto lg:mr-0">
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
    <b-modal id="login" class="modal" hide-footer>
      <template #modal-title>
        <div class="layertit flex items-center gap-1 text-2xl font-semibold text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
          </svg>
          로그인
        </div>
      </template>
      <div class="modalcontainer">
        <div class="loginform text-gray-500">
          <label for="id" class="flex items-center gap-1 mb-2 font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            아이디
          </label>
          <b-form-input id="id" placeholder="아이디를 입력해주세요" />
          <label for="pass" class="flex items-center gap-1 mt-4 mb-2 font-semibold text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            비밀번호
          </label>
          <b-form-input type="password" id="pass" placeholder="비밀번호를 입력해주세요" />
        </div>
        <div class="btnwrap mt-7">
          <b-button variant="login" class="bg-sky-600 text-white">로그인</b-button>
        </div>
      </div>
    </b-modal>
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

<style lang="scss">
.modal-header {
  padding: 10px 20px;
}
.form-control {
  height: 40px;
  font-size: 0.875rem;
}
</style>