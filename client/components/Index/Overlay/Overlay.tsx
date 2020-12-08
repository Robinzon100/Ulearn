import {useState} from 'react'
import { ChevronDown} from "react-feather";
import { motion } from "framer-motion";
//!  ================ OUR INPORTS

import { seeMoreAnimation } from "constants/framer/framerAnimation";



const Overlay = ({CardsJson}) => {
    const [toggleSeeMore, setToggleSeeMore] = useState(false);
    return (
        <>
        {CardsJson.length > 2 && (
              <motion.div
                className="overlay_container"
                variants={seeMoreAnimation}
                initial={{ height: "0rem" }}
                animate={!toggleSeeMore ? "open" : "closed"}
              >
                <div className="wrapper" onClick={() => setToggleSeeMore(true)}>
                  <div className="see_more">
                    <p className="bold paragraph-biggest">
                      იხილეთ მეტი
                    </p>
                  </div>
                  <div className="see_more_arrow">
                    <ChevronDown size={40} style={{ color: "#00E267" }} />
                  </div>
                </div>
              </motion.div>
            )}
        </>
    )
}

export default Overlay
