import React from "react";

import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    <p>
      Current Price: <strong>{props.totalPrice.toFixed(2)}</strong>
    </p>
    {controls.map((cntrl) => (
      <BuildControl
        key={cntrl.label}
        label={cntrl.label}
        added={() => props.ingredientAdded(cntrl.type)}
        removed={() => props.ingredientRemove(cntrl.type)}
        disabled={props.disabled[cntrl.type]}
      />
    ))}
    <button
      className={styles.OrderButton}
      disabled={!props.purchaseble}
      onClick={props.ordered}
    >
      {props.isAuth ? "Order now" : "Sign up to order"}
    </button>
  </div>
);

export default buildControls;
