import * as Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `<div>
               <slot></slot>
             </div>`,
  props: {
    myMessage: String
  }
})
export class MainWindowComponent extends Vue {
}
