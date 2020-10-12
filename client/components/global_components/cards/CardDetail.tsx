import React, { Fragment, useEffect } from "react";
import { ShoppingCart, Check } from "react-feather";

//! ============= INTERFACE
import { PrimaryContentCardHover } from "../../../interfaces/PrimaryContentCardHover.interface";

interface isLastCard {
    isLastCard: boolean;
}

const CardDetail: React.FC<PrimaryContentCardHover & isLastCard> = ({
    id,
    imageUrl,
    title,
    posted,
    difficulty,
    description,
    hoverCardDetailLists,
    isLastCard,
}) => {
    const handleHoverCardsStyle = () => {
        const hoverCards = document.querySelectorAll<HTMLElement>(".card_detail");

        hoverCards.forEach((card) => {
            card.style.left = "-27.7vw";
            if(window.innerWidth < 1200) {
                card.style.left = "-29vw";
            }
            

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
           handleHoverCardsStyle(); 
        }
        
    }, [isLastCard]);



    return (
        <>
            <div className="card_detail" key={id}>
                <div className="card_detail--container">
                    <div className="card_detail--container__img"></div>

                    <div className="inside_content">
                        <div className="card_detail--container__title">
                            <a href="#">
                                <p className="heading-bold-Noto paragraph-regular">
                                    რაიმე კურსის სათაური რომელიც არ აღემატება ორ ხაზს მაგრამ
                                    ტეტალების კარტაში მთლიანი სათაური იქნება
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
                                    
                                2019.03.15
                                </span>
                            </p>
                            <p
                                className="paragraph-light-Noto paragraph-smallest"
                                style={{ color: "#636469" }}
                            >
                                სირთულე:
                                <span className="" style={{ color: "#FFD703" }}>
                                   
                                საშუალო
                                </span>
                            </p>
                        </div>
                        <div className="card_detail--container__description">
                            <p className="paragraph-light-Noto paragraph-small">
                                მოკლე აღწერა კურსის შესახებ რომელიც ეტყვის მომხარებელს რა უნდა
                                იცოდეს წინასწარ, რას ისწავლის და კურსის დამთავრების მერე რას
                                შეძლებს რომ გააკეთოს ან რა სამსახურში შეძლებს მუშაობას
                            </p>
                        </div>
                        <div className="card_detail--container__list">
                            <ul>
                                <li>
                                    <div className="check">
                                        <Check size={15} />
                                    </div>
                                    <div className="paragraph">
                                        <p className="paragraph-light-Noto paragraph-small ">
                                            მოკლე-მოკლედ რა არის კურსზე რომელიც 2 ხაზს არ უნდა
                                            აღემატოს
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="check">
                                        <Check size={15} />
                                    </div>
                                    <div className="paragraph">
                                        <p className="paragraph-light-Noto paragraph-small ">
                                            მოკლე-მოკლედ რა არის კურსზე რომელიც 1
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="check">
                                        <Check size={15} />
                                    </div>
                                    <div className="paragraph">
                                        <p className="paragraph-light-Noto paragraph-small ">
                                            მოკლე-მოკლედ რა არის კურსზე რომელიც 2 ხაზს არ უნდა
                                            აღემატოს
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card_detail--container__addtobucket">
                        <div className="heading">
                            <p className="heading-bold-Noto paragraph-biggest">
                                კალათაში დამატება
                            </p>
                        </div>
                        <div className="shoppingCart">
                            <ShoppingCart
                                style={{ color: "#ffffff", fontWeight: "bold" }}
                                size={30}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDetail;
