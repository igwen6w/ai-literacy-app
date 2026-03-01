import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cards',
    name: 'flashcards',
    component: () => import('../views/FlashCardsView.vue')
  },
  {
    path: '/levels',
    name: 'levels',
    component: () => import('../views/LevelsView.vue')
  },
  {
    path: '/game/:levelId',
    name: 'game',
    component: () => import('../views/GameView.vue'),
    props: true
  },
  {
    path: '/storybook',
    name: 'storybook',
    component: () => import('../views/StoryBookView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
