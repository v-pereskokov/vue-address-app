export class Addresses {
  private list = [
    'Москва, Ленинградский проспект, 39с79',
    'Москва, Звенигородская улица, 16к2',
    'Москва, Шелепихинская набережная, 34с32',
    'Москва, улица Сокольнический Вал, 1Кс8',
    'Москва, Таганская улица, 40с4А',
    'Москва, переулок Сивцев Вражек, 15/25',
    'Москва, улица Вавилова, 13с61',
    'Москва, Андроньевская площадь, 4с3',
    'Москва, улица Казакова, 16Ас2',
    'Москва, Большая Спасская улица, 21',
  ];
  private index = 0;

  /**
   * get next address from list,
   * token is ignored for emulation purpouses
   */
  public getAddressByToken(token: string): Promise<string> {
    const address = this.list[this.index];
    this.index += 1;
    if (this.index === this.list.length) {
      this.index = 0;
    }
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(address);
      }, 1000);
    });
  }

}