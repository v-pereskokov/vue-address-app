import * as Vue from 'vue';
import Component from 'vue-class-component';
import { addresses } from '../../lib/addresses';

import './token-input.component.scss';

@Component({
  template: `<div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s12">
                    <input placeholder="Search" class="token-input" @keyup="eventSource" v-model="token"/>
                  </div>
                </div>
              </form>
            </div>`
})
export class TokenInputComponent extends Vue {
  public token: string = '';

  public async eventSource() {
    this.$emit('new-token', this.tokenData);

    // const data = await addresses.getAddressByToken('abc');
    // console.log(data);
  }

  get tokenData() {
    return this.token;
  }

}
