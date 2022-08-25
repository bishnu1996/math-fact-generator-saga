import "./style.css";
import { useDispatch } from "react-redux";
import MathText from "../MathText";
import { useEffect } from "react";
import Action from "../store/action";
const MathFact = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type:Action.FETCH_FACT_REQUEST})
  },[])

  const onClickAnotherfact = ()=>{
    dispatch({type:Action.FETCH_FACT_REQUEST})
  }
  return (
    <div className="container">
      <h3>Don't Laugh Challenge</h3>
      <MathText/>
      <button className="btn" onClick={onClickAnotherfact}>Get Another Fact</button>
    </div>
  )
}
export default MathFact;
