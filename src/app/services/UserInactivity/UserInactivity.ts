export default class UserInactivity {
  private timerID: number = 0;
  private waitTime: number = 1380;

  public checkInactivity(callback: any) {
    clearTimeout(this.timerID);

    this.timerID = window.setTimeout(() => {
      callback();
    }, this.waitTime);
  }
}
