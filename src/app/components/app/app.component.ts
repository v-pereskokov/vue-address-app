import * as Vue from 'vue';
import Component from 'vue-class-component';
import { TokenInputComponent } from "../token-input/token-input.component";
import { SearchResultsComponent } from "../search-results/search-results.component";
import { LoadingProgressComponent } from "../loading-progress/loading-progress.component";


@Component({
  template: `
    <div>
      <token-input></token-input>
      <loading-progress></loading-progress>
      <search-results></search-results>
    </div>
  `,
  components: {
    'token-input': TokenInputComponent,
    'loading-progress': LoadingProgressComponent,
    'search-results': SearchResultsComponent,
  },
})
export class AppComponent extends Vue {
}
