import React, { useState } from "react";
import classes from "./operations.module.css";
import { Operation } from "../../components";
const Operations = () => {
  const [checkedOperation, setCheckedOperation] = useState({
    operation1: true,
    operation2: false,
    operation3: false,
  });
  const clickOperationHandler = (event) => {
    const operationId = event.target.id;
    if (operationId === "operation1") {
      setCheckedOperation({
        operation1: true,
        operation2: false,
        operation3: false,
      });
    }
    if (operationId === "operation2") {
      setCheckedOperation({
        operation1: false,
        operation2: true,
        operation3: false,
      });
    }
    if (operationId === "operation3") {
      setCheckedOperation({
        operation1: false,
        operation2: false,
        operation3: true,
      });
    }
  };
  return (
    <div
      className={`${classes["bankist__operations"]} section`}
      id="operations"
    >
      <div className={classes["bankist__operations-heading"]}>
        <h3>OPERATIONS</h3>
        <h1>Everything as simple as possible, but no simpler.</h1>
      </div>
      <div className={classes["bankist__operations-operation"]}>
        <div className={classes["bankist__operations-operation_type"]}>
          <div
            className={
              checkedOperation.operation1 ? classes["operation-clicked"] : ""
            }
            id="operation1"
            onClick={clickOperationHandler}
          >
            01 Instant Transfers
          </div>
          <div
            className={
              checkedOperation.operation2 ? classes["operation-clicked"] : ""
            }
            id="operation2"
            onClick={clickOperationHandler}
          >
            02 Instant Loans
          </div>
          <div
            className={
              checkedOperation.operation3 ? classes["operation-clicked"] : ""
            }
            id="operation3"
            onClick={clickOperationHandler}
          >
            03 Instant Closing
          </div>
        </div>
        {checkedOperation.operation1 && (
          <Operation
            title="Tranfser money to anyone, instantly! No fees, no BS."
            color="#ffcd0331"
          />
        )}
        {checkedOperation.operation2 && (
          <Operation
            title="Buy a home or make your dreams come true, with instant loans."
            color="#5ec5763a"
          />
        )}
        {checkedOperation.operation3 && (
          <Operation
            title="No longer need your account? No problem! Close it instantly."
            color="#ff58602d"
          />
        )}
      </div>
    </div>
  );
};

export default Operations;
