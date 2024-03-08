export default function Btn({handlerClick,Nmb}) {
    return <button className="btn btn-light m-2 px-4 py-2 w-25 shadow-sm" value={Nmb} onClick={()=>handlerClick(Nmb)}>{ Nmb }</button>
}