import React from 'react';
import {observer} from 'mobx-react';
import {computed, observable} from 'mobx';
import store from './store';

@observer
class App extends React.Component {
  @observable myCustomState = {
    multiplier: 1,
  };

  @computed get total () {
    return this.myCustomState.multiplier * store.counter;
  }

  increment () {
    const {increment} = store;

    //store.counter++
    increment();
  }

  decrement () {
    const {decrement} = store;

    store.counter--;
    //decrement()
  }

  render () {
    return (
        <div>
          <h3>store counter</h3>
          <button onClick={this.increment}>INCREMENT</button>
          <p>{store.counter}</p>
          <button onClick={this.decrement}>DECREMENT</button>
          <hr/>
          <h3>state multiplier</h3>
          <button onClick={() => this.myCustomState.multiplier++}>INCREMENT
          </button>
          <p>{this.myCustomState.multiplier}</p>
          <button onClick={() => this.myCustomState.multiplier--}>DECREMENT
          </button>
          <h3>total</h3>
          <p>{this.total}</p>
        </div>
    );
  }
}

export default App;
