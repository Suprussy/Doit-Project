<template>
  <header class="relative z-50">
    <div class="topmenu py-1">
      <div class="contentbox flex justify-between items-center w-full max-w-screen-xl mx-auto px-5">
        <div class="logo">
          <button>
            <img src="/images/logo.png" alt="이지스퍼블리싱 로고" title="이지스 퍼블리싱" class="w-16">
          </button>
        </div>
        <div class="system">
          <button class="login">로그인</button>
          <button class="login"><span class="text-slate-300">ㆍ</span>회원가입</button>
        </div>
      </div>
    </div>
    <nav class="relative py-2 bg-red-600 z-30">
      <div class="contentbox w-full max-w-screen-xl mx-auto px-5">
        <ul class="flex">
          <li class="flex-1 text-center"><button class="text-lg font-semibold text-white">도서소개</button></li>
          <li class="flex-1 text-center"><button class="text-lg font-semibold text-white">자료실</button></li>
          <li class="flex-1 text-center"><button class="text-lg font-semibold text-white">동영상강의</button></li>
          <li class="flex-1 text-center"><button class="text-lg font-semibold text-white">교재샘플</button></li>
          <li class="flex-1 text-center"><button class="text-lg font-semibold text-white">회사소개</button></li>
        </ul>
      </div>
    </nav>
    <div class="absolute left-0 top-20 rotate-1 w-full h-7 bg-red-800 shadow-md"></div>
  </header>
</template>