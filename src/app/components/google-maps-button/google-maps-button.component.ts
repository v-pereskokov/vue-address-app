import * as Vue from 'vue';
import Component from 'vue-class-component';

import './google-maps-button.component.scss';

@Component({
  template: `<div class='button__wrapper'>
              <a
              :href='googleAddress'
              :disabled='!address'
              target='_blank'
              class='waves-effect waves-light btn button__position'>
                <i class='material-icons right'>send</i>
                Go to Google Maps
              </a>
            </div>`,
  props: {
    address: String
  }
})
export class GoogleMapsButtonComponent extends Vue {
  public address: string = '';

  public get addressData() {
    return this.address;
  }

  public get googleAddress() {
    return `https://www.google.ru/maps/place/${this.addressData.replace(/ /g, '+')}`;
  }
}
