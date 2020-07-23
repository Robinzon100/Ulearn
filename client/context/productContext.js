import React, { useState, createContext } from 'react'


export const ProductContext = createContext()


export const ProductProvider = (props) => {

    const [productDetales, setProductDetales] = useState([
        {
            "title": "საექსპორტო ბაზარი",
            "isDisabled": true,
            "subTitles":[],
            "html": ""
        },
        {
            "title": "ტექნიკური მოთხოვნები",
            "isDisabled": true,
            "subTitles":[],
            "html": ""
        },
        {
            "title": "საექსპორტო დოკუმენტაცია & სერტიფიკატები",
            "isDisabled": true,
            "subTitles":[],
            "html": ""
        },
        {
            "title": "სურსათის უვნებლობა",
            "isDisabled": true,
            "subTitles":[],
            "html": ""
        },
        {
            "title": "შეფუთვა",
            "isDisabled": true,
            "subTitles":[],
            "html": ""
        },
        {
            "title": "ეტიკეტირება",
            "isDisabled": true,
            "subTitles":[],
            "html": ""
        },
        {
            "title": "ტრანსპორტირება",
            "isDisabled": true,
            "subTitles":[],
            "html": ""
        },
        {
            "title": "სურსათის უვნებლობის სტანდარტები",
            "isDisabled": true,
            "subTitles":[],
            "html": ""
        },
        {
            "title": "სარეალიზაციო არხები საფრანგეთში",
            "isDisabled": true,
            "subTitles":[],
            "html": ""
        },
        {
            "title": "სავაჭრო გამოფენები საფრანგეთში",
            "isDisabled": true,
            "subTitles":[],
            "html": ""
        },
        {
            "title": "საბაზრო ფასები",
            "isDisabled": true,
            "subTitles":[],
            "html": ""
        },
        {
            "title": "სტატისტიკა",
            "isDisabled": true,
            "subTitles":[],
            "html": ""
        },
        {
            "title": "სასარგებლო წყაროები",
            "isDisabled": true,
            "subTitles":[],
            "html": ""
        }
    ])

    return (
        <ProductContext.Provider value={[productDetales, setProductDetales]} >
            {props.children}
        </ProductContext.Provider>
    )
}
