const router = require('express').Router();


// ─── CUSTOM MODULES ─────────────────────────────────────────────────────────────
const multerFunctions = require("../../middleware/multer")


// ─── CONTOLLERS ─────────────────────────────────────────────────────────────────
const adminNewsController = require("../../controllers/admin/news.controller")
const adminPdfController = require("../../controllers/admin/pdf.controller")
const adminTestController = require("../../controllers/admin/test.controller")
const adminProductController = require("../../controllers/admin/product.controller")
const adminCountryController = require("../../controllers/admin/country.controller")
const adminCategoryController = require("../../controllers/admin/category.controller")
const adminNewPageController = require("../../controllers/admin/newPage.controller")
const adminMainCategoriesController = require("../../controllers/admin/mainCategories.controller")



// ─── NEWS ─────────────────────────────────────────────────────────────────


router
    .route("/news")
    .get(adminNewsController.getNews)
    .post(multerFunctions.uploadNewsImage, adminNewsController.postNews)

router
    .route("/news/:newsId")
    .get(adminNewsController.getSingleNews)
    .put(multerFunctions.uploadNewsImage, adminNewsController.updateNews)
    .delete(adminNewsController.deleteNews)




// ─── PDF ─────────────────────────────────────────────────────────────────


router
    .route("/pdf")
    .get(adminPdfController.getPdfs)
    .post(multerFunctions.uploadPdfFile, adminPdfController.postPdf)


router
    .route("/pdf/:pdfId")
    .get(adminPdfController.getSinglePdf)
    .put(multerFunctions.uploadPdfFile, adminPdfController.updatePdf)
    .delete(adminPdfController.deletePdf)




// ─── TEST ─────────────────────────────────────────────────────────────────


router
    .route("/test")
    .get(adminTestController.getTests)
    .post(adminTestController.postTest)



router
    .route("/test/:testId")
    .delete(adminTestController.deleteTest)
    .put(adminTestController.updateTest)
    .get(adminTestController.getSingleTest)




router
    .route("/test_email")
    .get(adminTestController.getTestEmail)

router
    .route("/test_email/:emailId")
    .delete(adminTestController.deleteTestEmail)





// ─── PRODUCT ─────────────────────────────────────────────────────────────────


router
    .route("/product")
    .get(adminProductController.getProducts)
    .post(multerFunctions.uploadProductImage, adminProductController.postProduct)


router
    .route("/product/:productId")
    .delete(adminProductController.deleteProduct)
    .put(multerFunctions.uploadProductImage, adminProductController.updateProduct)
    .get(adminProductController.getSingleProduct)


router
    .route("/product_image")
    .post(multerFunctions.uploadProductImage, adminProductController.postProductDetaleImage)



// ─── MAIN CATEGORIES ─────────────────────────────────────────────────────────────────


router
    .route("/mainCategories")
    .get(adminMainCategoriesController.getAllMainCategories)


router
    .route("/mainCategories/:mainCategoriesId")
    .put(adminMainCategoriesController.updateMainCategories)
    // .delete(adminProductController.deleteProduct)
    // .get(adminProductController.getSingleProduct)


// router
//     .route("/product_image")
//     .post(multerFunctions.uploadProductImage, adminProductController.postProductDetaleImage)




// ─── NEW PAGE ─────────────────────────────────────────────────────────────────


router
    .route("/newpage")
    .get(adminNewPageController.getNewPages)
    .post(multerFunctions.uploadNewpageImage, adminNewPageController.postNewPage)


    


router
    .route("/newpage/:newPageId")
    .delete(adminNewPageController.deleteNewPage)
    .put(multerFunctions.uploadNewpageImage, adminNewPageController.updateNewPage)
    .get(adminNewPageController.getSingleNewPage)






// ─── COUNTRIES ─────────────────────────────────────────────────────────────────

router
    .route("/country")
    .get(adminCountryController.getCountries)
    .post(adminCountryController.postCountry)

router
    .route("/country/:countryId")
    .delete(adminCountryController.deleteCountry)
    .get(adminCountryController.getSingleCountry)




// ─── CATEGORIES ─────────────────────────────────────────────────────────────────

router
    .route("/category")
    .get(adminCategoryController.getCategories)
    .post(adminCategoryController.postCategory)

router
    .route("/category/:categoryId")
    .get(adminCategoryController.getSingleCategory)
    .delete(adminCategoryController.deleteCategory)




//     .post(multerFunctions.uploadNewsImage, adminNewsController.postNews)

// router
//     .route("/news/:newsId")
//     .get(adminNewsController.getSingleNews)
//     .put(multerFunctions.uploadNewsImage, adminNewsController.updateNews)
//     .delete(adminNewsController.deleteNews)









// router.post('/post-blog-post', adminNewsController.postBlogs);






// // ─── SERVICES ─────────────────────────────────────────────────────────────────
// router.get('/services', adminServicesControllers.getAllServices);
// router.post('/create-service', adminServicesControllers.postService);
// router.put('/update-service/:serviceId', adminServicesControllers.updateService);
// router.delete('/delete-service/:serviceId', adminServicesControllers.deleteService);


module.exports = router; 