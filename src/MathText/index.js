import { useSelector } from "react-redux";

const MathText = ()=>{

    const fact = useSelector((state)=>state.fact);

    return(
        <div className="joke">{fact}</div>
    );
};
export default MathText;