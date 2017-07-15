export default class UserInactivity {
  private static timerID: number = 0;
  private static waitTime: number = 1380;

  public static checkInactivity(callback: any) {
    clearTimeout(UserInactivity.timerID);

    UserInactivity.timerID = window.setTimeout(() => {
      callback();
    }, UserInactivity.waitTime);
  }
}
