import  { useState } from 'react'

import Toast from "./toast";


const useToast = ({title,size}) => {
    const [toasts] = useState([
        title,
        size
    ]);

    
    
    const setToast = (title,size) => {
        toasts.map((toast) => (
            <Toast key={toast.key} title={title} size={size}/>
        ))
        
    }

    return setToast;

}

export default useToast;
