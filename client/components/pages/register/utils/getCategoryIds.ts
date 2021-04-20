export const getCategoryIds = (checkboxObjects, setError): {} =>{
        let categoryIds = new Set() 

        categoryIds.clear();
        checkboxObjects.map(checkbox => {
            if (checkbox.checked === true)
                categoryIds.add(checkbox.value);
        });

        if (categoryIds.size < 1) setError("მონიშნეთ 1 კატეგორია მაინც");
        else setError('')

        return categoryIds
}