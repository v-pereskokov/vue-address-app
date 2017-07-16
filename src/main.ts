import * as Vue from 'vue';
import { AppComponent } from './app/components/app/app.component';

/**
 * start app when page is ready
 */
window.addEventListener('DOMContentLoaded', event => {
  new AppComponent({el: '#event-app'});
});
