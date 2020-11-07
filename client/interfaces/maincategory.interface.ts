

interface SubSubCategory {
    SubSubCategoryTitle:string
}

interface SubCategory {
    subCategoryTitle:string,
    id:number
    SubSubCategories:SubSubCategory[],

}

export interface Categories {
    id:number,
    categoryTitle:string,
    SubCategories:SubCategory[],
}