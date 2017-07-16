import * as Vue from 'vue';
import Component from 'vue-class-component';

import './google-maps-button.component.scss';

@Component({
  template: `<div class="button__wrapper">
              <button class="btn waves-effect waves-light button__position" type="submit" name="action">
              Go to Google Maps  
                <i class="material-icons right">send</i>
              </button>
            </div>`
})
export class GoogleMapsButtonComponent extends Vue {
}
