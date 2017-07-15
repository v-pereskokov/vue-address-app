import * as Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `<div class='preloader-wrapper small active' v-if='isRenderData'>
                <div class='spinner-layer spinner-green-only'>
                  <div class='circle-clipper left'>
                    <div class='circle'></div>
                  </div><div class='gap-patch'>
                    <div class='circle'></div>
                  </div><div class='circle-clipper right'>
                    <div class='circle'></div>
                  </div>
                </div>
              </div>`,
  props: {
    isRender: Boolean
  }
})
export class LoadingProgressComponent extends Vue {
  public isRender: boolean = false;

  get isRenderData() {
    return this.isRender;
  }
}
