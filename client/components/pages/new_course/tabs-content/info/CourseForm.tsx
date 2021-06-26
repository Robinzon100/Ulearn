import dynamic from "next/dynamic";
import { Zap, Clipboard,X } from "react-feather"
import { useState } from "react"


/// ===== COMPONENTS
import Input from "components/lib/inputs/Input"
import Select from "components/lib/select/select"
import InputAdder from "components/lib/input-adder-component/InputAdder.component"
import Button from "components/lib/button/Button"


import SelectJson from "../../../../../public/json/Select.json";
const RichTextEditor = dynamic(() =>
    import('components/lib/rich-text-editor/RichTextEditor'),
    { ssr: false }
)




const CourseForm = () => {

    let [WWULInputs, setWWULInputs] = useState(["","",""])
    const [WWULInputErr,] = useState("ინფუთების რაოდენობა არ უნდა აჭარბებდეს 6 და არ უნდა იყოს ნაკლები 3")



    //  ===== ADDING INPUTS
    const addInputHandler = () => {
        WWULInputs.push("")
        setWWULInputs(WWULInputs => ([...WWULInputs]))
    }



    //  ===== DELETING INPUTS
    const deleteInputHandler = (index:number) => {
        let deleted = [...WWULInputs];
        deleted.splice(index,1);
        setWWULInputs(deleted);
    }



    const inputValuesHandler =  (e,index) => {
        WWULInputs[index] = e.target.value;
        setWWULInputs(WWULInputs => ([...WWULInputs]))
    }



   const submitHandler = () => {
       console.log(WWULInputs)
   }




    return (
        <>
            <div className="text-editor">
                <div className="text-editor__container">

                    {/* ///  NAME */}
                    <div className="name">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">დასახელება</h1>
                        </div>

                        <Input
                            size="large"
                            name="full_name"
                            width="100%"
                            type="text"
                            placeHolder="ისწავლეთ თუ როგორ გახდეთ javascript დეველოპერი"
                            color="white"
                            minLength={20}
                            maxLength={100}
                        />
                    </div>

                    {/* ///  short-description */}
                    <div className="short-description">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">მოკლე აღწერა</h1>
                        </div>

                        <Input
                            size="large"
                            name="full_name"
                            width="100%"
                            type="text"
                            placeHolder="ამ კურსში ისწავლით,თუ როგორ გახდეთ დეველოპერი..."
                            color="white"
                            minLength={20}
                            maxLength={100}
                        />
                    </div>




                    {/* ///  detailed-description */}
                    <div className="detailed-description">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">დეტალური აღწერა</h1>
                        </div>

                        <RichTextEditor />

                    </div>



                    {/* ///  categories-selects */}
                    <div className="categories-selects">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">კატეგორიები</h1>
                        </div>

                        <div className="categories-selects__container">
                            <Select
                                size="small"
                                placeHolder="მთავარი კატეგორია"
                                id={1}
                                minHeight="19rem"
                                options={SelectJson.difficulty}
                                //   onChange={handleSelectChange}
                                icon={<Zap size={25} />}
                                color="green"
                                loading={false}
                                disabled={false}
                                width="43%"
                            />

                            <Select
                                size="small"
                                placeHolder="ქვე კატეგორია"
                                id={1}
                                minHeight="19rem"
                                options={SelectJson.difficulty}
                                //   onChange={handleSelectChange}
                                icon={<Zap size={25} />}
                                color="green"
                                loading={false}
                                disabled={false}
                                width="43%"
                            />
                        </div>
                    </div>



                    {/* ///  categories-selects */}
                    <div className="what-will-you-learn">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">კატეგორიები</h1>
                        </div>

                        <div className="container">
                        {WWULInputs.map((el,i) => (
                            <Input
                               key={i}
                               id={i}
                               onChange={(e) => inputValuesHandler(e,i)}
                               value={el}
                               size="large"
                               name="full_name"
                               width="100%"
                               type="text"
                               placeHolder="ამ კურსში ისწავლით,თუ როგორ გახდეთ დეველოპერი..."
                               color="white"
                               minLength={10}
                               maxLength={70}
                               iconRight={ i  > 2 &&
                               <X size="30" style={{cursor:"pointer"}} 
                                onClick={() => deleteInputHandler(i)} />
                               }
                           /> 
                        ))} 

                        {WWULInputs.length <= 5 &&
                            <InputAdder 
                                minHeight="8rem"
                                onClick={() => addInputHandler()}  
                            />
                        }
                        </div>
                        {WWULInputs.length == 6 &&
                            <h1 className="form_errors f-size-p6 f-weight-r">
                                {WWULInputErr}
                            </h1>
                        }
                    </div>




                    <div className="difficulty">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">სირთულე</h1>
                        </div>

                        <Select
                            size="small"
                            placeHolder="კურსის სირთულე"
                            id={1}
                            minHeight="19rem"
                            options={SelectJson.difficulty}
                            //   onChange={handleSelectChange}
                            icon={<Clipboard size={25} />}
                            color="green"
                            loading={false}
                            disabled={false}
                            width="43%"
                        />
                    </div>



                </div>






                <Button 
                    className="course-form-btn"
                    width="35rem" 
                    size="large" 
                    color="black" 
                    onClick={() => submitHandler()}
                    // route="#"
                    >
                <p className="f-weight-r f-size-p4 ">გაგზავნა</p>
              </Button>




            </div>
        </>
    )
}

export default CourseForm
