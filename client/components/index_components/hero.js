import React,{Fragment} from 'react'
import { Search, Upload } from 'react-feather';




export default function hero() {
return (
<Fragment>
    <section className="hero">
        <div className="hero--steps">
            <div className="hero--steps__info">
                <div className="hero--steps__info--heading">
                    <h1 className="heading-bold-Noto heading-3_5">რაღაცა ტექსტი იქნება აქ რომელიც აღწერს სერვის</h1>
                </div>
                <div className="hero--steps__info--paragraph">
                    <p className="paragraph-regular-Noto paragraph-medium">
                        ჩვენ გასწავლით,თუ როგორ შეუქმნათ
                        საკუთარ თავს კარიერა.ხოლო კურსების დასრულების შემდეგ,თქვენ შეძლებთ იყოთ მოწინავე ამ
                        ინდუსტრიაში
                    </p>
                </div>
                <div className="hero--steps__btn">
                    <a href="#" className="btn btn-blue heading-bold-Noto paragraph-medium"
                       >შემოგვიერთდი</a>
                </div>
            </div>
        </div>

        <div className="hero--video">
            <video  autoPlay="autoPlay" loop="loop">
                <source src="/Videos/hero_section_animation.mp4" type="video/mp4" />
                {/* <source src="movie.ogg" type="video/ogg" /> */}
              
            </video>
        </div>


    </section>






    {/* <a href="#" className="btn btn-blue">ღილაკი</a>
    <a href="#" className="btn btn-yellow">ღილაკი</a>
    <a href="#" className="btn btn-green">ღილაკი</a>

    <input type="text" className="input_field" />
    <div className="input_container">
        <input type="text" className="input_field-with-search" placeholder="მოძებნე სასურველი კურსი" />
        <Search className="search" size={20} />
    </div>


    <div className="upload_container">
        <label htmlFor="file-upload" className="custom-file-upload">
            <div className="upload_dashed">
                <Upload style={{opacity:'50%'}} className="upload" size={35} />

                <input id="file-upload" type="file" />

                <p className="heading-semi-bold-Noto paragraph-regular ">ფაილის ატვირთვა</p>
            </div>
        </label>
    </div>


    <select className="select_field" name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
    </select> */}

</Fragment>
)
}
