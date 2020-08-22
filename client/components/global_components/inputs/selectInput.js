import React, { useState } from 'react'
import { motion } from "framer-motion"


export default function selectInput() {
  const [toggle, setToggle] = useState(false);

  const handleSelect = () => {
    setToggle((toggle) => !toggle);
  }


  return (
    <div>


      {/* <select className="select_field" name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
    </select> */}


      <div className="dropdown">
        <div className="dropdown-select">
          <span className="select paragraph-regular-Noto paragraph-small">რეიტინგით</span>
          {/* <i className="fa fa-caret-down icon"></i> */}
          {toggle ?
            <motion.img
              src="./pictures/select_arrow.svg"
              alt="arrow"
              onClick={handleSelect}
              animate={{ rotate: 180 }}
              transition={{ duration: .3 }}
            />
            :
            <motion.img
              src="./pictures/select_arrow.svg"
              alt="arrow"
              onClick={handleSelect}
              animate={{ rotate: 0 }}
              transition={{ duration: .3 }}
            />


          }

        </div>
        <div className={toggle ? "dropdown-list dropdown_animation" : "dropdown-list "}>
          <div className="dropdown-list__item">Pepsi</div>
          <div className="dropdown-list__item">Coca</div>
          <div className="dropdown-list__item">Monster</div>
        </div>
      </div>
    </div>





  )
}