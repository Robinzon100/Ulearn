
import { Plus } from "react-feather"



interface IDeleteInputs {
    width?: string;
    height?: string;
    minHeight?: string
    onClick?:any;
}


const InputAdder = ({ width = "100%", height = "100%", minHeight,onClick }: IDeleteInputs) => {
    return (
        <>
            <div className="delete-inputs" onClick={onClick}>
                    <Plus size={40} stroke="var(--secondary-darker-grey)" />
            </div>


            <style jsx>
                {`
                .delete-inputs {
                    width:${width};
                    height:${height};
                    min-height:${minHeight};
                }
                `}
            </style>
        </>
    )
}

export default InputAdder
