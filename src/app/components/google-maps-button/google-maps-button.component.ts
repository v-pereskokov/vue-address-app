import * as Vue from 'vue';
import Component from 'vue-class-component';

import './google-maps-button.component.scss';

@Component({
  template: `<div class="button__wrapper">
              <a href="https://www.google.com" target="_blank" class="waves-effect waves-light btn button__position">
                <i class="material-icons right">send</i>
                Go to Google Maps
              </a>
            </div>`
})
export class GoogleMapsButtonComponent extends Vue {
}
