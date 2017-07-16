import * as Vue from 'vue';
import Component from 'vue-class-component';
import {MainWindowComponent} from '../main-window/main-window.component';
import {BackgroundComponent} from '../background/background.component';
import {HeaderComponent} from '../header/header.component';
import {TokenInputComponent} from '../token-input/token-input.component';
import {SearchResultsComponent} from '../search-results/search-results.component';
import {LoadingProgressComponent} from '../loading-progress/loading-progress.component';
import {addresses} from '../../lib/addresses/index';
import UserInactivity from '../../../services/UserInactivity/UserInactivity';

@Component({
  template: `
    <div>
      <background></background>
      <main-window>
        <header-component></header-component>
        <token-input @new-token='handleToken'></token-input>
        <loading-progress :is-render='preloaderData'></loading-progress>
        <search-results :my-message='messageData'></search-results>
      </main-window>
    </div>
  `,
  components: {
    'main-window': MainWindowComponent,
    'background': BackgroundComponent,
    'header-component': HeaderComponent,
    'token-input': TokenInputComponent,
    'loading-progress': LoadingProgressComponent,
    'search-results': SearchResultsComponent,
  }
})
export class AppComponent extends Vue {
  public message: string = '';
  public isPreloader: boolean = false;
  private oldToken: string = '';

  public handleToken(value: string) {
    const data: string = value.trim();

    if (data.length > 3 && this.oldToken !== data) {
      UserInactivity.checkInactivity(async () => {
        this.isPreloader = true;

        this.message = await addresses.getAddressByToken(data);

        this.oldToken = data;
        this.isPreloader = false;
      });
    } else {
      clearTimeout(UserInactivity.timerId());
    }
  }

  get messageData() {
    return this.message;
  }

  get preloaderData() {
    return this.isPreloader;
  }
}
