
import Input from "components/lib/inputs/Input"
import Button from "components/lib/button/Button"
import { useState } from "react"





const PriceSale = () => {

    const [values, setValues] = useState({ price:0,sale:0,coin:0 })


    const getPriceSaleValues = (e,field:string) => {
        setValues({...values,
            [field]:e.target.value
        })
    }

    const handleSubmit = () => {
        console.log(values)
    }



    return (
        <>
            <div className="price-sale">
                <div className="price-sale__container">




                    <div className="price">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">ფასი</h1>
                        </div>


                        <Input
                            size="large"
                            name="price"
                            width="100%"
                            type="number"
                            onChange={(e) => getPriceSaleValues(e,"price")}
                            value={values.price}
                            placeHolder="ფასი"
                            color="white"
                            minLength={5}
                            maxLength={150}
                        />
                    </div>





                    <div className="sale">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">ფასდაკლება</h1>
                            <h2 className="f-size-p7 f-weight-bl">(შეგიძლიათ არ მიუთითოთ)</h2>
                        </div>

                        <Input
                            size="large"
                            name="sale"
                            width="100%"
                            type="number"
                            onChange={(e) => getPriceSaleValues(e,"sale")}
                            value={values.sale}
                            placeHolder="ფასდაკლება"
                            color="white"
                            minLength={5}
                            maxLength={150}
                        />
                    </div>





                    <div className="coin">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">ფასდაკლება</h1>
                        </div>

                        <Input
                            size="large"
                            name="sale"
                            width="100%"
                            type="number"
                            onChange={(e) => getPriceSaleValues(e,"coin")}
                            value={values.coin}
                            placeHolder="Ulearn ქოინი"
                            color="white"
                            minLength={100}
                            maxLength={200}
                        />
                    </div>




                    <div className="btn-container">
                        <Button
                            className="price-sale-btn"
                            width="100%"
                            maxWidth="35rem"
                            size="large"
                            color="black"
                            onClick={() => handleSubmit()}>
                            <p className="f-weight-r f-size-p4 ">შენახვა</p>
                        </Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PriceSale
