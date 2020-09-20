import React, { Fragment } from 'react'
import { ShoppingCart,Check } from 'react-feather';



export default function CardDetail() {
    return (
        <Fragment>
            <div className="card_detail">
                <div className="card_detail--container">
                    <div className="card_detail--container__img"></div>
                    <div className="inside_content">
                        <div className="card_detail--container__title">
                            <p className="heading-bold-Noto paragraph-regular">რაიმე კურსის სათაური რომელიც არ აღემატება ორ ხაზს მაგრამ ტეტალების კარტაში მთლიანი სათაური იქნება</p>
                        </div>
                        <div className="card_detail--container__date">
                            <p className="paragraph-light-Noto paragraph-smallest" style={{ color: "#00E267" }}> დაიდო:
                             <span className="paragraph-smallest Eina-semibold"> 2019.03.15 </span>
                            </p>
                            <p className="paragraph-light-Noto paragraph-smallest" style={{ color: "#636469" }}>სირთულე:
                             <span className="" style={{ color: "#FFD703" }}> საშუალო </span>
                            </p>
                        </div>
                        <div className="card_detail--container__description">
                            <p className="paragraph-light-Noto paragraph-small">მოკლე აღწერა კურსის შესახებ რომელიც ეტყვის მომხარებელს რა უნდა იცოდეს წინასწარ, რას ისწავლის და კურსის დამთავრების მერე რას შეძლებს რომ გააკეთოს ან რა სამსახურში შეძლებს მუშაობას</p>
                        </div>
                        <div className="card_detail--container__list">
                            <ul>
                                <li>
                                    <div className="check">
                                    <Check size={15}/>
                                    </div>
                                    <div className="paragraph">
                                        <p className="paragraph-light-Noto paragraph-small ">მოკლე-მოკლედ რა არის კურსზე რომელიც 2 ხაზს არ უნდა აღემატოს</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="check">
                                        <Check size={15}/>
                                    </div>
                                    <div className="paragraph">
                                        <p className="paragraph-light-Noto paragraph-small ">მოკლე-მოკლედ რა არის კურსზე რომელიც 1</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="check">
                                    <Check size={15}/>
                                    </div>
                                    <div className="paragraph">
                                        <p className="paragraph-light-Noto paragraph-small ">მოკლე-მოკლედ რა არის კურსზე რომელიც 2 ხაზს არ უნდა აღემატოს</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card_detail--container__addtobucket">
                        <div className="heading">
                            <p className="heading-bold-Noto paragraph-biggest">კალათაში დამატება</p>
                        </div>
                        <div className="shoppingCart">
                            <ShoppingCart style={{ color: "#ffffff", fontWeight: "bold" }} size={30} />
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
