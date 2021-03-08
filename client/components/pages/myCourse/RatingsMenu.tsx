
import { ArrowUp } from "react-feather";

import Stars from "components/lib/svg/Stars";
import Lines from "components/lib/svg/Lines";


const RatingsMenu: React.FC = () => {
    return (
        <>
            <div className="ratings ">
         
                
                <div className="ratings__with-number">
                    <div className="ratings__with-number--heading">
                        <p className="f-size-h1">4.4</p>
                    </div>
                    <div className="ratings__with-number--stars">
                        <Stars StarWidth={20} numberOfStars={4} />

                    </div>
                    <div className="ratings__with-number--voice">
                        <ArrowUp size={15} />
                        <p className="f-size-p6">ხმა</p>
                    </div>

                </div>
                <div className="ratings__with-percentage">
                    {/* //! ხაზები და პროცენტები */}

                    <div className="percentage_container">
                        <div className="lines_stars">
                            <Stars StarWidth={15} numberOfStars={1}  />
                            <Lines LineWidth={65}/>
                            
                        </div>
                        <div className="percentage_number">
                            <p className="f-size-p5">65%</p>
                        </div>
                    </div>

                    <div className="percentage_container">
                        <div className="lines_stars">
                            <Stars StarWidth={15} numberOfStars={2}  />
                            <Lines LineWidth={5}/>
                            
                        </div>
                        <div className="percentage_number">
                            <p className="f-size-p5">5%</p>
                        </div>
                    </div>
                    <div className="percentage_container">
                        <div className="lines_stars">
                            <Stars StarWidth={15} numberOfStars={4}  />
                            <Lines LineWidth={10}/>
                            
                        </div>
                        <div className="percentage_number">
                            <p className="f-size-p5">10%</p>
                        </div>
                    </div>
                    <div className="percentage_container">
                        <div className="lines_stars">
                            <Stars StarWidth={15} numberOfStars={3}  />
                            <Lines LineWidth={20}/>
                            
                        </div>
                        <div className="percentage_number">
                            <p className="f-size-p5">20%</p>
                        </div>
                    </div>
                    <div className="percentage_container">
                        <div className="lines_stars">
                            <Stars StarWidth={15} numberOfStars={0}  />
                            <Lines LineWidth={1}/>
                            
                        </div>
                        <div className="percentage_number">
                            <p className="f-size-p5">1%</p>
                        </div>
                    </div>

                    
                    
                </div>
            </div>
            <div className="ratings-about">
                <div className="ratings-about__container">
                    <div className="difficulty">
                        <div className="graph"></div>
                        <p className="f-size-p6">სირთულე</p>
                    </div>
                    <div className="learning">
                        <h1 className="f-size-h7">2000</h1>
                        <p className="f-size-p6">სწავლობს</p>
                    </div>
                    <div className="time-length">
                        <h1 className="f-size-h7">8<span className="f-size-h7">სთ</span></h1>
                        <p className="f-size-p6">ხანგძლივობა</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RatingsMenu;