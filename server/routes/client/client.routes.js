const router = require('express').Router();


// ─── CUSTOM MODULES ─────────────────────────────────────────────────────────────


// ─── CONTOLLERS ─────────────────────────────────────────────────────────────────
const clientController = require("../../controllers/client/news.controller")
const clientControllerProduct = require("../../controllers/client/product.controller")
const clientControllerNewPage = require("../../controllers/client/newPage.controller")

const authController = require('../../controllers/client/auth.controller')


// ─── ADMIN LOGIN ─────────────────────────────────────────────────────────────────
router
    .route("/login")
    .post(authController.postLogin)




// ─── PRODUCT ─────────────────────────────────────────────────────────────────


router
    .route("/product/countries-and-categories")
    .get(clientControllerProduct.getAllProductsCountriesAndCategories)




router
    .route("/product/:productId")
    .get(clientControllerProduct.getSingleProduct)




router
    .route("/product/:countryId/:categoryId")
    .get(clientControllerProduct.getSingleProductWithcCountryAndCategory)




// ─── PDF ─────────────────────────────────────────────────────────────────

router
    .route("/pdf/:type")
    .get(clientController.getPdf)


// ─── NEWS ─────────────────────────────────────────────────────────────────

router
    .route("/news/:type")
    .get(clientController.getNews)



// ─── TEST ─────────────────────────────────────────────────────────────────
router
    .route("/test")
    .get(clientController.getTest)
    .post(clientController.postTest)



// ─── NEW PAGES ─────────────────────────────────────────────────────────────────
router
    .route("/newpage/links")
    .get(clientControllerNewPage.getNewPagesLinks)

router
    .route("/newpage/:newPageId")
    .get(clientControllerNewPage.getSingleNewPage)









module.exports = router; 