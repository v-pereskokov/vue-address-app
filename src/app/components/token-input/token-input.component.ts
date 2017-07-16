import * as Vue from 'vue';
import Component from 'vue-class-component';

import './token-input.component.scss';

@Component({
  template: `<div class='row'>
              <div class='col s12'>
                <div class='row'>
                  <div class='input-field col s12'>
                    <input
                    placeholder='Search address'
                    class='token__input'
                    @keyup='eventSource'
                    v-model='token'/>
                  </div>
                </div>
              </div>
            </div>`
})
export class TokenInputComponent extends Vue {
  public token: string = '';

  public eventSource() {
    this.$emit('new-token', this.tokenData);
  }

  get tokenData() {
    return this.token;
  }
}
