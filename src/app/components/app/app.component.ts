import * as Vue from 'vue';
import Component from 'vue-class-component';
import { TokenInputComponent } from "../token-input/token-input.component";
import { SearchResultsComponent } from "../search-results/search-results.component";
import { LoadingProgressComponent } from "../loading-progress/loading-progress.component";
import {addresses} from '../../lib/addresses/index';


@Component({
  template: `
    <div>
      <token-input @new-token="handleToken"></token-input>
      <loading-progress :is-render="preloaderData"></loading-progress>
      <search-results :my-message="messageData"></search-results>
    </div>
  `,
  components: {
    'token-input': TokenInputComponent,
    'loading-progress': LoadingProgressComponent,
    'search-results': SearchResultsComponent,
  }
})
export class AppComponent extends Vue {
  public message: string = '';
  public isPreloader: boolean = false;

  public async handleToken(value: string) {
    this.isPreloader = true;

    const data: string = value.trim();

    if (data.length > 3) {
      this.message = await addresses.getAddressByToken(data);
    }

    this.isPreloader = false;
  }

  get messageData() {
    return this.message;
  }

  get preloaderData() {
    return this.isPreloader;
  }
}
