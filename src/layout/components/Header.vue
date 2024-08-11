<template>
  <header :class="Topclass">
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
          <button v-b-modal.member class="member w-6 h-6 lg:w-auto lg:h-auto">
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
    <!-- <div class="absolute left-0 top-20 rotate-1 w-full h-7 bg-red-800 shadow-md"></div> -->
    
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

    <b-modal id="member" class="modal" hide-footer>
      <template #modal-title>
        <div class="layertit flex items-center gap-1 text-2xl font-semibold text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
          </svg>
          회원가입
        </div>
      </template>
      <div class="modalcontainer">
        <b-form @submit="Joinmember">
          <b-form-group
            id="formid1"
            label="아이디"
            label-for="id"
            description="4~15자리 이내의 영문과 숫자로만 입력하세요"
            class="relative pr-20"
          >
            <b-form-input
              id="id"
              v-model="form.id"
              type="text"
              placeholder="아이디를 작성해 주세요"
              required
            >
            </b-form-input>
            <b-button class="absolute right-0 bottom-[31px] w-[75px] h-10 border rounded-none bg-slate-100 text-sm">중복확인</b-button>
          </b-form-group>
          <b-form-group
            id="formid2"
            label="비밀번호"
            label-for="password"
            description="8자리 이상의 영문과 숫자로만 입력하세요"
          >
            <b-form-input
              id="password"
              v-model="form.pass"
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="formid3"
            label="이메일 수신"
            label-for="mailing"
            description="※ 이메일 수신을 허락하면 독자 혜택을 받을 수 있어요"
          >
            <b-form-radio value="Y" v-model="form.mail" class="inline-block ml-4 mr-3.5 text-sm">예</b-form-radio>
            <b-form-radio value="N" v-model="form.mail" class="inline-block ml-4 mr-3.5 text-sm">아니오</b-form-radio>
            <!-- 선택된 라디오 버튼의 값: {{ form.mail }} -->
          </b-form-group>
          <b-form-group
            id="formid4"
            label="관심분야"
            label-for="checkedtype"
            description="※ 관심분야를 선택하세요. 여러개 선택 가능합니다."
          >
            <b-form-checkbox value="html" v-model="form.checkedtype" class="inline-block ml-4 mr-3.5 text-sm">HTML/CSS</b-form-checkbox>
            <b-form-checkbox value="javascript" v-model="form.checkedtype" class="inline-block ml-4 mr-3.5 text-sm">자바스크립트</b-form-checkbox>
            <b-form-checkbox value="python" v-model="form.checkedtype" class="inline-block ml-4 mr-3.5 text-sm">파이썬</b-form-checkbox>
            <b-form-checkbox value="vue.js" v-model="form.checkedtype" class="inline-block ml-4 mr-3.5 text-sm">뷰</b-form-checkbox>
            <b-form-checkbox value="angular" v-model="form.checkedtype" class="inline-block ml-4 mr-3.5 text-sm">앵귤러</b-form-checkbox>
            <b-form-checkbox value="react" v-model="form.checkedtype" class="inline-block ml-4 mr-3.5 text-sm">리액트</b-form-checkbox>
            <b-form-checkbox value="data" v-model="form.checkedtype" class="inline-block ml-4 mr-3.5 text-sm">자료구조/알고리즘</b-form-checkbox>
            <b-form-checkbox value="cad" v-model="form.checkedtype" class="inline-block ml-4 mr-3.5 text-sm">오토캐드</b-form-checkbox>
          </b-form-group>
        </b-form>
        <!-- 관심분야: {{ form.checkedtype }} -->
        <div class="btnwrap half flex justify-center gap-2 mt-7">
          <b-button type="submit" variant="login" class="basis-1/2 bg-sky-600 text-white">확인</b-button>
          <b-button type="reset" variant="cancel" class="basis-1/2 bg-slate-300">취소</b-button>
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
      ],
      form: {
        id: "",
        pass: "",
        mail: "",
        checkedtype: []
      },
      Topclass: ""
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    goToPage(target) {
      if (this.$router.currentRoute.path !== target) {
        this.$router.push(target);
      }
    },
    Joinmember(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      this.$nextTick(() => {
        this.form.id = "";
        this.form.pass = "";
        this.form.mail = "";
        this.form.checkedtype = [];
      })
    },
    handleScroll() {
      const scrollTop = window.pageYOffset;
      const headerTop = document.querySelector("header").clientHeight;
      if (scrollTop < headerTop) {
        this.Topclass = "";
      } else {
        this.Topclass = "scrollTop";
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  &::after {
    position: absolute;
    left: 0;
    top: 80px;
    transform: rotate(1.5deg);
    background-color: #b31f28;
    // box-shadow: 1px 5px 9px -3px rgb(50 50 50 / 75%);
    z-index: 2;
  }
}
.modal-header {
  padding: 10px 20px;
}
.form-control {
  height: 40px;
  font-size: 0.875rem;
}
.form-group {
  .d-block {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1;
    &::before {
      display: inline-block;
      margin: -5px 3px 0 0;
      vertical-align: bottom;
      font-family: bootstrap-icons !important;
      line-height: 1;
    }
  }
  .form-text {
    display: block;
    position: relative;
    margin: 10px 0 0 10px;
    padding: 0 20px;
    font-weight: 500;
    font-size: 0.875rem;
    color: #17a2b8 !important;
    opacity: 0.6;
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      background: url("../../../public/images/pencil.svg") no-repeat left center;
      opacity: 0.4;
    }
  }
  &:nth-child(1) {
    .d-block {
      &::before {
        content: "\F676";
      }
    }
  }
  &:nth-child(2) {
    .d-block {
      &::before {
        content: "\F47A";
      }
    }
  }
  &:nth-child(3) {
    .d-block {
      &::before {
        content: "\F68B";
      }
    }
  }
  &:nth-child(4) {
    .d-block {
      &::before {
        content: "\F890";
      }
    }
  }
}
.scrollTop {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
  .topmenu {
    display: none;
  }
  &::after {
    position: fixed;
    top: 22px;
  }
}
@media screen and (max-width:767px) {
  header {
    &.scrollTop {
      &::after {
        top: 14px;
      }
    }
  }
}
</style>