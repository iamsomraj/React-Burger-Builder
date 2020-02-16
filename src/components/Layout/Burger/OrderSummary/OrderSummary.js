import React from 'react';
import Aux from '../../../../hoc/Auxx';
import Button from '../../UI/Button/Button';

const OrderSummary = props => {
  const ingredients = Object.keys(props.ingredients).map((igKey, index) => {
    return (
      <li key={igKey + index}>
        <span>{igKey.substring(0, 1).toUpperCase() + igKey.substring(1)}</span>{' '}
        : {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h2>Your Own Customized Order</h2>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredients}</ul>
      <h3>Proceed to checkout ?</h3>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        Checkout
      </Button>
    </Aux>
  );
};

export default OrderSummary;
