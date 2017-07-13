import * as Vue from 'vue';
import Component from 'vue-class-component';


@Component({
  template: `<input @keyup="eventSource" v-model="token" />`,
})
export class TokenInputComponent extends Vue {
  public token: string = '';

  public eventSource() {
  }

}
