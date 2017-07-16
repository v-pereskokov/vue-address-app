import * as Vue from 'vue';
import Component from 'vue-class-component';

import './header.component.scss';

@Component({
  template: `<div class="header__wrapper">
              <p class="header__text">Find address by token</p>
            </div>`
})
export class HeaderComponent extends Vue {
}
