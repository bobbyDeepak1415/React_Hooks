import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, multiplyByAmount } from "./redux/CounterSlice";


const Demo = () => {

const dispatch = useDispatch();

const count=useSelector(state=>state.counter.count)

  return <div>

    <p>count is at:{count}</p>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(multiplyByAmount(3))}>*3</button>
  </div>;
};

export default Demo;
