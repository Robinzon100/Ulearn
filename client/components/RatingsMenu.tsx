import React from 'react'
import { ArrowUp } from "react-feather";

import Stars from "components/global_components/svg/Stars";
import Lines from "components/global_components/svg/Lines";


const RatingsMenu: React.FC = () => {
    return (
        <>
            <div className="ratings ">
         
                
                <div className="ratings__with-number">
                    <div className="ratings__with-number--heading">
                        <p className="Eina-semibold heading-1">4.4</p>
                    </div>
                    <div className="ratings__with-number--stars">
                        <Stars StarWidth={20} numberOfStars={4} />

                    </div>
                    <div className="ratings__with-number--voice">
                        <ArrowUp size={15} />
                        <p className="paragraph-regular-Noto paragraph-small">ხმა</p>
                    </div>

                </div>
                <div className="ratings__with-percentage">
                    {/* //! ხაზები და პროცენტები */}

                    <div className="percentage_container">
                        <div className="lines_stars">
                            {/* //! აქ სტარს გადაეცემა ორი პროპი: 1 - ეს არის
                                //! რამხელა იქნება სიდიდეში(პროცენტებში) და 
                                //! მეორე პროპი რამდენი ვარსკვლავი იქნება ანთებული

                                //! ხოლო ლაინ კომპონენტს მხოლოდ სიგრძისა და ესეც პროცენტებშია
                            */}
                            <Stars StarWidth={15} numberOfStars={1}  />
                            <Lines LineWidth={65}/>
                            
                        </div>
                        <div className="percentage_number">
                            <p className="Eina-semibold paragraph-medium-small">65%</p>
                        </div>
                    </div>

                    <div className="percentage_container">
                        <div className="lines_stars">
                            <Stars StarWidth={15} numberOfStars={2}  />
                            <Lines LineWidth={5}/>
                            
                        </div>
                        <div className="percentage_number">
                            <p className="Eina-semibold paragraph-medium-small">5%</p>
                        </div>
                    </div>
                    <div className="percentage_container">
                        <div className="lines_stars">
                            <Stars StarWidth={15} numberOfStars={4}  />
                            <Lines LineWidth={10}/>
                            
                        </div>
                        <div className="percentage_number">
                            <p className="Eina-semibold paragraph-medium-small">10%</p>
                        </div>
                    </div>
                    <div className="percentage_container">
                        <div className="lines_stars">
                            <Stars StarWidth={15} numberOfStars={3}  />
                            <Lines LineWidth={20}/>
                            
                        </div>
                        <div className="percentage_number">
                            <p className="Eina-semibold paragraph-medium-small">20%</p>
                        </div>
                    </div>
                    <div className="percentage_container">
                        <div className="lines_stars">
                            <Stars StarWidth={15} numberOfStars={0}  />
                            <Lines LineWidth={1}/>
                            
                        </div>
                        <div className="percentage_number">
                            <p className="Eina-semibold paragraph-medium-small">1%</p>
                        </div>
                    </div>

                    
                    
                </div>
            </div>
            <div className="ratings-about">
                <div className="ratings-about__container">
                    <div className="difficulty">
                        <div className="graph"></div>
                        <p className="paragraph-small heading-semi-bold-Noto ">სირთულე</p>
                    </div>
                    <div className="learning">
                        <h1 className="Eina-semibold heading-5">2000</h1>
                        <p className="paragraph-small heading-semi-bold-Noto">სწავლობს</p>
                    </div>
                    <div className="time-length">
                        <h1 className="Eina-semibold heading-5">8<span className="heading-semi-bold-Noto heading-5">სთ</span></h1>
                        <p className="paragraph-small heading-semi-bold-Noto">ხანგძლივობა</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RatingsMenu;