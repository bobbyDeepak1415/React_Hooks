import { useDispatch,useSelector } from "";
import { increment } from "./redux/CounterSlice";


const Demo = () => {


  const dispatch = useDispatch()

  const count=useSelector((state)=>state.counter.count)

  return <div>

    <p>count is at:{count}</p>
    <button onClick={()=>dispatch(increment())}>Increment</button>
  </div>;
};

export default Demo;
