import React,{Fragment} from 'react'

export default function input({placeHolder}) {
    return (
        <Fragment>
             <div className="input_container">
                <input type="text" 
                className="input_field input-shadow input-shadow-onFocus input_styles paragraph-regulars paragraph-small"
                placeholder={placeHolder} />

          
        </div>
        </Fragment>
    )
}
