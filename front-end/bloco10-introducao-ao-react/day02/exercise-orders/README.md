# Agora, realize este exercício de fixação

## 🚀 Exercício 2

Suponha que você abra uma aplicação React e se depare com os seguintes componentes:

```js
  // arquivo Order.js
  import React from 'react';

  class Order extends React.Component {
    render() {
      const { user, product, price } = this.props.order;

      return (
        <div className="order">
          <p> {user} bought {product} for {price.value} {price.currency} </p>
        </div>
      );
    }
  }

  export default Order;
```

```js
// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: 'cena@gmail.com',
      product: 'Razer Headphone',
      price: {
        value: 99.99,
        currency: 'dollars'
      }
    };

    const energyDrink = {
      id: 77,
      user: 'cena@gmail.com',
      product: 'Monster 500mL',
      price: {
        value: 9.99,
        currency: 'dollars'
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         {/*  adicione os componentes aqui */}
      </div>
    );
  }
}

export default App;
```

Crie uma aplicação React na sua máquina via create-react-app com o nome exercise-orders. Adicione os componentes acima dentro do diretório src do projeto criado, para poder fazer o exercício a seguir:

## No que diz respeito à composição de componentes responda:

1. O que o componente App é em relação a Order?

2. Complete o código do componente App de forma que os pedidos referentes aos produtos headphone e energyDrink sejam filhos de App.
