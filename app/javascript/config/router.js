import { createRouter, createWebHashHistory } from 'vue-router'
import PostBlogPage from '../components/PostBlogPage.vue'

const routes = [
  { path: '', redirect: '/blogs' },
  { path: '/blogs', component: PostBlogPage, name: 'blogs' },
];

const router = createRouter({
  history: createWebHashHistory('/main'),
  base: '/blogs',
  routes
})

export default router
