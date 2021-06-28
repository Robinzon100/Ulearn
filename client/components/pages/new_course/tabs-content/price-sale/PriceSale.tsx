
import Input from "components/lib/inputs/Input"
import { useNewCourseStore } from 'mobx/newCourseStateContext';
import { observer } from 'mobx-react-lite';




const PriceSale = observer(() => {
    let { newCourseStore } = useNewCourseStore()



    const getPriceSaleValues = (e, field: string) => {
        newCourseStore.newCourseData.courseInfo[field] = e.target.value
    }



    return (
        <>
            {newCourseStore.newCourseData && (
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
                                onChange={(e) => getPriceSaleValues(e, "price")}
                                value={newCourseStore.newCourseData.courseInfo.price}
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
                                onChange={(e) => getPriceSaleValues(e, "discount_price")}
                                value={newCourseStore.newCourseData.courseInfo.discount_price}
                                placeHolder="ფასდაკლება"
                                color="white"
                                minLength={5}
                                maxLength={150}
                            />
                        </div>





                        <div className="coin">
                            <div className="heading">
                                <h1 className="f-size-p5 f-weight-bl">Ulean coin</h1>
                                <h1 style={{fontStyle:"italic",opacity:"60%"}}>
                                    1 ლარი = 5 coin 
                                </h1>
                            </div>

                            <Input
                                size="large"
                                name="sale"
                                width="100%"
                                type="number"
                                onChange={(e) => getPriceSaleValues(e, "ulearn_coin_price")}
                                value={newCourseStore.newCourseData.courseInfo.ulearn_coin_price}
                                placeHolder="Ulearn ქოინი"
                                color="white"
                                minLength={100}
                                maxLength={200}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
})

export default PriceSale
