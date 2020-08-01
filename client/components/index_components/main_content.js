import React,{Fragment,useState} from 'react'
import { Search,Upload } from 'react-feather';

import InputSearch from "components/global_components/inputs/inputSearch";
import SelectInput from "components/global_components/inputs/selectInput";
import MainContentCard from "components/global_components/cards/MainCards";




export default function main_content() {
    const [placeHolder, setPlaceHolder] = useState("მოძებნე სასურველი კურსი")

    return (
<Fragment>
    <div className="main_content">
        <div className="main_content--container">
            <div className="categories">
                <div className="categories__heading">
                    <p className="heading-bold-Noto heading-6">კატეგორიები</p>
                </div>
            </div>
            <div className="courses">
                <div className="courses--input">

                    {/* <div className="input_container">
                        <input type="text" className="input_field-with-search input_styles"
                            placeholder="მოძებნე სასურველი კურსი" />
                        <Search className="search" size={22} />
                    </div> */}
                    <InputSearch placeHolder={placeHolder} />

                    <div className="sorting">
                        <div className="sorting__heading">
                            <p className="paragraph-regular-Noto paragraph-medium-small">დახარისხება:</p>
                        </div>
                        <div className="sorting__select">
                        <SelectInput/>
                            {/* <select className="select_field" name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select> */}
                        </div>
                    </div>
                </div>
                <div className="courses--cards">
                <MainContentCard/>
                <MainContentCard/>
                <MainContentCard/>
                <MainContentCard/>
                <MainContentCard/>
                <MainContentCard/>
                <MainContentCard/>
                <MainContentCard/>

                </div>
            </div>
        </div>
    </div>
</Fragment>
)
}
