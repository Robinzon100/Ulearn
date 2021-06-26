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

    const [WWULInputs, setWWULInputs] = useState([{
        id:0
    }])
    const [WWULValues, setWWULValues] = useState([{
        id:0,
        value:""
    }
])


    //  ===== ADDING INPUTS
    const addInputHandler = () => {
        const lastInputId = WWULInputs[WWULInputs.length - 1].id
        setWWULInputs([...WWULInputs,{
            id: lastInputId + 1
        }])
    }



    //  ===== DELETING INPUTS
    const deleteInputHandler = (id:number) => {
        const newList = WWULInputs.filter(el => el.id != id)
            .map((el, i) => Object.assign(el, { id: i }))

        setWWULInputs(newList)   
    }



    const inputValuesHandler = (e,id) => {
        // debugger
        setWWULValues([{ id:id,value:e.target.value }])
    }

   const submitHandler = () => {
    console.log([...WWULValues])
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
                        {WWULInputs.map((el,_) => (
                               <Input
                               key={el.id}
                               id={el.id}
                               onChange={(e) => inputValuesHandler(e,el.id)}
                               size="large"
                               name="full_name"
                               width="100%"
                               type="text"
                               placeHolder="ამ კურსში ისწავლით,თუ როგორ გახდეთ დეველოპერი..."
                               color="white"
                               minLength={20}
                               maxLength={100}
                               iconRight={
                               <X size="30" style={{cursor:"pointer"}} 
                                onClick={() => deleteInputHandler(el.id)} />
                               }
                           /> 
                        ))} 

                            <InputAdder 
                                minHeight="8rem"
                                onClick={() => addInputHandler()}  
                            />
                        </div>

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
