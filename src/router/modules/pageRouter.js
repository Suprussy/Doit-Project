const pageRouter = {
  path: "/", // 컴포넌트 경로
  name: "layout", // 컴포넌트 이름
  redirect: "/main",
  component: () => import("@/layout/index.vue"), // 컴포넌트 위치
  children: [
    {
      path: "/main",
      name: "/main",
      component: () => import("@/views/main.vue")
    }
  ]
}

export default pageRouter;