import React, { useState } from 'react'

import { Itoast } from './toast.interface';
import Toast from "./toast";


const useToast = ({title,size}) => {
    const [toasts, setToasts] = useState([
        title,
        size
    ]);
    
    const setToast = (title,size) => {
        debugger
        toasts.map((toast) => (
            <Toast key={toast.key} title={title} size={size}/>
        ))
        
    }

    return setToast;

}

export default useToast;
