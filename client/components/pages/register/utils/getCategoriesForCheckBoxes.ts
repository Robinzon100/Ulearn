
import { getAllCategories } from "actions/client/categories.action";




export const getCategoriesForCheckBoxes = async (setCheckboxContent) => {
    const { categories: { main_categories } } = await getAllCategories()
    let parsedCheckboxContent = []
    main_categories.map(ca => {
      parsedCheckboxContent.push({
        label: ca.name,
        value: ca.id,
        checked: false
      })
    })
    setCheckboxContent(parsedCheckboxContent)
}