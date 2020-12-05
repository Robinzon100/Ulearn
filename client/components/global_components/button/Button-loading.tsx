import {memo} from 'react'
import Loading from "components/global_components/button/Button-loading";

interface Props {
  color: string
}

const ButtonLoading: React.FC<Props> = ({ color }) => {
  return (
    <div className="btn-loading">
      {/* <Loading color={color} /> */}
      {/* <style jsx>{`
        .btn-loading {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
          
        }
      `}</style> */}
    </div>
  )
}

export default ButtonLoading