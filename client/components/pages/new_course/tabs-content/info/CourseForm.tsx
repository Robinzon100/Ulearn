import { Zap } from "react-feather"


/// ===== COMPONENTS
import Input from "components/lib/inputs/Input"
import TextArea from "components/lib/textarea/TextArea";
import Select from "components/lib/select/select"


import SelectJson from "../../../../../public/json/Select.json";



const CourseForm = () => {
    return (
        <>
            <div className="text-editor">
                <div className="text-editor__container">

                    {/* ///  NAME */}
                    <div className="name">
                        <div className="heading">
                            <h1 className="f-size-p6 f-weight-b">დასახელება</h1>
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
                            <h1 className="f-size-p6 f-weight-b">მოკლე აღწერა</h1>
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
                            <h1 className="f-size-p6 f-weight-b">დეტალური აღწერა</h1>
                        </div>

                        

                   </div>



                    {/* ///  categories-selects */}
                    <div className="categories-selects">
                        <div className="heading">
                            <h1 className="f-size-p6 f-weight-b">კატეგორიები</h1>
                        </div>

                        <div className="categories-selects__container">
                            <Select
                                size="small"
                                placeHolder="მთავარი კატეგორია"
                                id={1}
                                minHeight="19rem"
                                options={SelectJson.difficulty}
                                //   onChange={handleSelectChange}
                                icon={<Zap size={15} />}
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
                                icon={<Zap size={15} />}
                                color="green"
                                loading={false}
                                disabled={false}
                                width="43%"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CourseForm
