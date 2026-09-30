/*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: MIT-0
 */

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createBootstrap } from 'bootstrap-vue-next'
import App from './App.vue'
import router from './router'
import { store } from './store'
import messages from './languages/translations.json'

import IoT from '@/components/IoT.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { appConfig } from './config'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faImages, faGlobe, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { getLanguageList } from './languages/languageLookup'

// Font-awesome library
library.add(faImages, faGlobe, faArrowCircleLeft)

// Internationalization
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

const app = createApp(App)

app.use(createBootstrap())
app.use(i18n)

app.component('iot', IoT)
app.component('font-awesome-icon', FontAwesomeIcon)

// Global properties
app.config.globalProperties.$languages = getLanguageList(messages)
app.config.globalProperties.$appConfig = appConfig

app.use(router)
app.use(store)

app.mount('#app')
