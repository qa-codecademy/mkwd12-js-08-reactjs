import {
  decrementByAmount,
  decrementOne,
  incrementByAmount,
  incrementOne,
} from "../../state/slices/counter.slice";
import { RootState } from "../../state/store";
import Button from "../Button/Button";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <div className="display">{count}</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          btnText="Remove 5"
          onBtnClick={() => {
            dispatch(decrementByAmount(5));
          }}
        />
        <Button
          style={{ backgroundColor: "lightpink" }}
          btnText="Remove 1"
          onBtnClick={() => {
            dispatch(decrementOne());
          }}
        />
        <Button
          style={{ backgroundColor: "lightgreen" }}
          btnText="Add 1"
          onBtnClick={() => {
            dispatch(incrementOne());
          }}
        />
        <Button
          btnText="Add 5"
          onBtnClick={() => {
            dispatch(incrementByAmount(5));
          }}
        />
      </div>
    </div>
  );
}
