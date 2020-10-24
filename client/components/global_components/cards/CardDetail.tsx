import React, {useEffect } from "react";
import { ShoppingCart, Check } from "react-feather";
import {stringToCut} from "components/utils/stringCut";

//! ============= INTERFACE

import { PrimaryContentCardHover } from './../../../interfaces/PrimaryContentCardHover.interface';


interface isLastCard {
    isLastCard: boolean;
}

const CardDetail: React.FC<PrimaryContentCardHover & isLastCard> = ({
    id,
    title,
    posted,
    difficulty,
    description,
    descriptionList,
    isLastCard,
    
}) => {
    const handleHoverCardStyle = () => {
        const hoverCards = document.querySelectorAll<HTMLElement>(".card_detail");

        hoverCards.forEach((card) => {
            card.style.left = "-400px";
         }); 
    };


    
    // let handleDetectCardPosition = () => {
    //     const hoverCards = document.querySelectorAll<HTMLElement>(".card_detail");

    //     hoverCards.forEach((card) => {
            
    //         let getLeftPostion = Math.floor((window.innerWidth  - card.offsetLeft) / 4.8);
    //         // let getTopPostion = (window.innerHeight ) - card.offsetTop;

    //         card.style.left = `${getLeftPostion}px`;
    //         console.log({ x:getLeftPostion })
    //     });
    // }

    

    useEffect(() => {
        if (isLastCard) {
            console.log("left");
           handleHoverCardStyle(); 
        }
        
        // handleHoverCardsStyle(); 
    
    }, [isLastCard]);



    return (
        <>
            <div key={id}>
                <div className="card_detail--container">
                    <div className="inside_content">
                        <div className="card_detail--container__title">
                            <a href="#">
                                <p className="heading-bold-Noto paragraph-regular">
                                    {stringToCut(title,25)}
                                </p>
                            </a>
                        </div>
                        <div className="card_detail--container__date">
                            <p
                                className="paragraph-light-Noto paragraph-smallest"
                                style={{ color: "#00E267" }}
                            >
                                
                            დაიდო:
                            <span className="paragraph-smallest Eina-semibold">
                                    
                                {posted}
                                </span>
                            </p>
                            <p
                                className="paragraph-light-Noto paragraph-smallest"
                                style={{ color: "#636469" }}
                            >
                                სირთულე:
                                <span className="" style={{ color: "#FFD703" }}>
                                   
                                {difficulty}
                                </span>
                            </p>
                        </div>
                        <div className="card_detail--container__description">
                            <p className="paragraph-light-Noto paragraph-small">
                                {description}
                            </p>
                        </div>
                        <div className="card_detail--container__list">
                            <ul>
                                { 
                                    descriptionList &&
                                        descriptionList.map((list,i) =>(
                                        <li key={i}> 
                                            <div className="check">
                                                <Check size={15} />
                                            </div>
                                            <div className="paragraph">
                                                <p className="paragraph-light-Noto paragraph-small ">
                                                    {list.list}
                                                </p>
                                            </div>
                                        </li>
                                    ))
                                    
                                }
                              
                            </ul>
                        </div>
                    </div>
                    
                    <a href="#">
                    <div className="card_detail--container__addtobucket">
                        <div className="heading">
                            <p className="heading-bold-Noto paragraph-regular">
                                კალათაში დამატება
                            </p>
                        </div>
                        <div className="shoppingCart">
                            <ShoppingCart
                                style={{ color: "#ffffff", fontWeight: "bold" }}
                                size={25}
                            />
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default CardDetail;
