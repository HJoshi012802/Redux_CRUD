import ErrorBoundary from "../../Error.Boundary";

interface Props{
    counter:number;
    increase:()=>void;
}

export const Counter:React.FC<Props> =(props:Props)=>{

if(props.counter >5){
    throw new Error('Error Try Not To  Be Smart')
}
    return(
        
        <div>
         <h3>{props.counter}</h3>
         <button onClick={props.increase}>Increase</button>
        </div>
       
    )
}

