import * as Vue from 'vue';
import Component from 'vue-class-component';


@Component({
  template: '<div>sdfsaf: {{ myMessage }}</div>',
  props: {
    myMessage: String
  }
})
export class SearchResultsComponent extends Vue {
}
