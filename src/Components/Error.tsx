interface Props{
    message:string,
}
export const Error:React.FC<Props> =(props:Props)=>{
    return(
        <div className="text-center">
        <h1>Error In Clent Side Rendering</h1>
        <p>{props.message}</p>
        </div>
    )
}

