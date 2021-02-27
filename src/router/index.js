import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'Home' },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/signature',
    name: 'signature',
    meta: { layout: 'Main' },
    // component: () => import('../views/Signature.vue'),
    // component: () => import('../components/modals/no-phone.vue'),
    // component: () => import('../components/modals/codeSign.vue'),
    component: () => import('../components/modals/certificate.vue'),
    // component: () => import('../components/modals/addDocSign.vue'),
  },
  {
    path: '/documents',
    name: 'documents',
    meta: { layout: 'DocumentsMain' },
    //component: () => import('../views/DocumentsView.vue'),
    component: () => import('../views/DocumentsView.vue'),
    children: [
      {
        path: ':id',
        meta: { layout: 'ViewDocuments' },
        component: () => import('../views/DocumentsView.vue'),
      }
    ],
  },
  {
    path: '/templates',
    name: 'templates',
    meta: { layout: 'TemplatesMain' },
    // Добавление шаблона
    component: () => import('../views/TemplateView.vue'),
    // Страница "Все шаблоны"
    // component: () => import('../components/AllTemplates.vue'),
    children: [
      {
        path: ':id',
        meta: { layout: 'ViewDocTpl' },
        component: () => import('../views/TemplateView.vue'),
      }
    ],
  },
  {
    path: '/agreement',
    name: 'agreement',
    meta: { layout: 'Main' },
    // component: () => import('../views/Agreement.vue'),
    // Модальное окно "Выбор документов и добавление участников"
    component: () => import('../components/modals/addDocAgr.vue'),
    // Модальное окно "сменить учатсников"
    // component: () => import('../components/modals/changePartAgr.vue'),
    // Модальное окно "Отправить контрагенту"
    // component: () => import('../components/modals/sendCounterAgr.vue'),
    // component: () => import('../views/AgrDocumentView.vue'),
    children: [
      {
        path: ':id',
        meta: { layout: 'ViewDoc' },
        component: () => import('../views/AgrDocumentView.vue'),
      }
    ],
  },
  {
    path: '/news',
    name: 'news',
    meta: { layout: 'Main' },
    component: () => import('../views/Signature.vue'),
  },
  {
    path: '/lib',
    name: 'lib',
    meta: { layout: 'Main' },
    component: () => import('../views/Signature.vue'),
  },
  {
    path: '/faq',
    name: 'faq',
    meta: { layout: 'Main' },
    component: () => import('../views/Signature.vue'),
  },
  {
    path: '/support',
    name: 'support',
    meta: { layout: 'Main' },
    component: () => import('../views/Signature.vue'),
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
