import React, { Fragment, useEffect, useState } from 'react'





export default function CheckScore(props) {

    const [mainScore, setMainScore] = useState()

    useEffect(() => {
        setMainScore(localStorage.getItem("mainScore"))
    }, [])



    let checkScore = () => {
        if (mainScore <= 51) {
            return (
                <Fragment>
                    <p className={props.finished ? "display_block your_result heading-semi-bold paragraph-biggest " : "display_none"}>თქვენი ქულა,მოუთითებს,რომ კომპანიისთვის უმჯობესია საკუთარი პროდუქტის
                    რეალიზება ადგილობრივ ბაზარზე მოახდინოს,ვიდრე ექსპორტზე!</p>
                    <div className={props.finished ? "display_block  test_score" : "display_none"} >
                        <p className="heading-semi-bold paragraph-big">{mainScore}</p>
                    </div>
                </Fragment>
            )
        }

        if (mainScore > 51 && mainScore <= 75) {
            return (
                <Fragment>
                    <p className={props.finished ? "display_block your_result heading-semi-bold paragraph-biggest " : "display_none"}>თქვენი ქულა,მოუთითებს,რომ კომპანია მზადაა განიხილოს ექსპორტი უცხო!</p>
                    <div className={props.finished ? "display_block test_score yellow" : "display_none "}>
                        <p className="heading-semi-bold paragraph-big">{mainScore}</p>
                    </div>
                </Fragment>

            )
        }

        if (mainScore >= 76 && mainScore <= 100) {
            return (
                <Fragment>
                    <p className={props.finished ? "display_block your_result heading-semi-bold paragraph-biggest " : "display_none"}>თქვენი ქულა,მოუთითებს,რომ კომპანია მზადაა ექსპორტისთვის!</p>
                    <div className={props.finished ? "display_block test_score green" : "display_none "}>
                        <p className="heading-semi-bold paragraph-big">{mainScore}</p>
                    </div>
                </Fragment>
            )
        }

        if (mainScore >= 101) {
            return (
                <Fragment>
                    <p className={props.finished ? "display_block your_result heading-semi-bold paragraph-biggest " : "display_none"}>თქვენი ქულა,მოუთითებს,რომ კომპანია მზადაა ექსპორტისთვის!</p>
                    <div className={props.finished ? "display_block test_score green" : "display_none "}>
                        <p className="heading-semi-bold paragraph-big">{mainScore}</p>
                    </div>
                </Fragment>
            )
        }
    }

    return (
        <Fragment>
            {checkScore()}
        </Fragment>
    )
}
