import { Random } from "@woowacourse/mission-utils"

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  get numbers() {
    return this.#numbers;
  }

  static generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Random.pickNumberInRange(1, 45));
    }
    return [...numbers].sort((a, b) => a - b);
  }

  static generateMultipleLottos(amount) {
    const numberOfLottos = Math.floor(amount / 1000);
    const lottos = [];
    for (let i = 0; i < numberOfLottos; i++) {
      lottos.push(new Lotto(Lotto.generateNumbers()));
    }
    return lottos;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}

export default Lotto;
