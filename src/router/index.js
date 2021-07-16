import Index from '../components/index.vue'
import Diary from '../components/diary.vue'
import Message from '../components/message.vue'
import Photo from '../components/photo.vue'
import VueRouter from 'vue-router'
import Info from '../components/index/info.vue'
import Pic from '../components/index/pic.vue'
import Calendar from '../components/index/calendar.vue'
import Weather from '../components/index/weather.vue'

let routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: Index,
        redirect: '/index/info',
        children: [
            {
                path: '/index/info',
                component: Info
            },
            {
                path: '/index/pic',
                component: Pic
            },
            {
                path: '/index/calendar',
                component: Calendar
            },
            {
                path: '/index/weather',
                component: Weather
            }
        ]
    },
    {
        path: '/diary',
        component: Diary
    },
    {
        path: '/message',
        component: Message
    },
    {
        path: '/photo',
        component: Photo
    }
]

let router = new VueRouter({
    routes
})

export default router
