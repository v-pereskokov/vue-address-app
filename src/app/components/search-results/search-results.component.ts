import * as Vue from 'vue';
import Component from 'vue-class-component';

import './search-results.component.scss';

@Component({
  template: `<ul class="collection">
              <li class="collection-item">
                <span class="title">{{ myMessage }}</span>
                <a class="secondary-content">
                  <i class="material-icons icon icon__color">location_on</i>
                </a>
              </li>
            </ul>`,
  props: {
    myMessage: String
  }
})
export class SearchResultsComponent extends Vue {
  public myMessage: string = 'Result field';
}
