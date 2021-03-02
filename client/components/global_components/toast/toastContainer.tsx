import { createPortal } from 'react-dom'
import Toast from 'components/global_components/toast/toast';
import { useEffect, useState, FC } from 'react';




const ToastContainerPortal = ({ toasts }) => {

    return createPortal(
        <>
            {toasts && toasts.map(toast => (
                <Toast
                    title='something'
                    color='primary'
                    size='large'
                />
            ))}
        </>
        , document.body)
}



interface toastContainerI {
    toasts?: any[]
}


const ToastContainer: FC<toastContainerI> = ({ toasts }) => {
    const [isServerSide, setIsServerSide] = useState(false)

    useEffect(() => {
        setIsServerSide(true)
    }, [isServerSide])


    return (
        <>
            {isServerSide && <ToastContainerPortal toasts={toasts} />}
        </>
    )
}


export default ToastContainer
