import Vue from 'vue'
import Router from 'vue-router'
import footerComponent from '@/components/footer'
import headerComponent from '@/components/header'
import bodyComponent from '@/components/body'
import homepageComponent from '@/components/homepage'
import musicComponent from '@/components/musicList'
import VueAudio from '@/components/audio'
import about from '@/components/about/about'
import homeComponent from '@/components/home'
import works from '@/components/about/works/works'
import label from '@/components/about/label/label'
import contact from '@/components/about/contact/contact'
import joke from '@/components/about/joke/joke'
import musicList from '@/components/about/musicList/musicList'




Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          redirect: '/home'
      },
      {
          path: '/home',
          name: 'home',
          component: homeComponent
      },
      {
          path: '/about/musicList',
          name: 'musicList',
          component: musicList
      },
      {
          path: '/about/works',
          name: 'works',
          component: works
      },
      {
          path: '/about/label',
          name: 'label',
          component: label
      },
      {
          path: '/about/contact',
          name: 'contact',
          component: contact
      },
      {
          path: '/about/joke',
          name: 'joke',
          component: joke
      },
      {
          path: '/about',
          name: 'about',
          component: about
      }
  ]
})