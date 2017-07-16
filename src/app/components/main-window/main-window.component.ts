import * as Vue from 'vue';
import Component from 'vue-class-component';

import './main-window.component.scss';

@Component({
  template: `<div>
               <div class="parent">
                 <div class="block">
                   <slot></slot>
                  </div>
               </div>
             </div>`,
  props: {
    myMessage: String
  }
})
export class MainWindowComponent extends Vue {
}
