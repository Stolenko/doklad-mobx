import {observable, action} from 'mobx';

class counterStore {
  @observable counter = 0;

  @action
  increment = () => {
    this.counter++;
  };

  @action
  decrement = () => {
    this.counter--;
  };
}

const Store = new counterStore();
export default Store;
