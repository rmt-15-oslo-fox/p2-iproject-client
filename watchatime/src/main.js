import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import BaseButton from './components/ui/BaseButton.vue';
import GAuth from 'vue3-google-oauth2';
import Toast from 'vue-toastification';
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css';

const app = createApp(App);
app.use(store);
app.use(router);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);
app.component('base-button', BaseButton);
app.use(Toast, {
    maxToasts: 5,
    newestOnTop: true,
    timeout: 3300,
});
const gauthOption = {
    clientId: '637961195294-4lkrs8alldqknftu1t6pv3m82defjled.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account',
};
app.use(GAuth, gauthOption);

app.mount('#app');