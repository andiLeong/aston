
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import AppLink from '@/components/AppLink.vue';
// import axios from 'axios';
import './index.css';

// import SubmitButton from '@/components/forms/SubmitButton.vue';
// import ValidationErrors from '@/components/validation/ValidationErrors.vue'
// import Snack from '@/components/Snack.vue'
import { createMetaManager } from 'vue-meta'
import { createPinia } from 'pinia'
import { ObserveVisibility } from 'vue-observe-visibility';

// window.axios = axios;
// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = appUrl;


createApp(App)
    .component('AppLink', AppLink)
    // .component('SubmitButton', SubmitButton)
    // .component('ValidationErrors', ValidationErrors)
    // .component('Snack', Snack)
    .use(createMetaManager())
    .use(router)
    .use(createPinia())
    .directive('observe-visibility', {
        beforeMount: (el, binding, vnode) => {
            vnode.context = binding.instance;
            ObserveVisibility.bind(el, binding, vnode);
        },
        update: ObserveVisibility.update,
        unmounted: ObserveVisibility.unbind,
    })
    .mount('#app');
