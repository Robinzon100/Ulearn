//* ეს იძლევა საშუალებას დაჭერის შემდეგ გამოჩნდეს Sub_categoria
export const handleHoverMainCategory = (id: number,subCategories,setRendersSubNames) => {
    const filteredSubCategory = subCategories.filter(
      (sub_id) => sub_id.main_category_id === id
    );
    setRendersSubNames(filteredSubCategory);
};


//* ეს იძლევა საშუალებას დაჭერის შემდეგ გამოჩნდეს Sub_Sub_categoria
export const handleHoverSubCategory = (id: number,subSubCategories,setRendersSubSubNames) => {
    const filteredSubSubCategory = subSubCategories.filter(
      (sub_id) => sub_id.sub_category_id === id
    );
    setRendersSubSubNames(filteredSubSubCategory);
    
};