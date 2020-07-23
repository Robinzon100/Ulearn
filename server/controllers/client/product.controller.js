
//! ─── QUERYS ─────────────────────────────────────────────────────────────────────
const client = require("../../querys/client.queries");



//! ─── GET ───────────────────────────────────────────────────────────────────────
// exports.getNews = async (req, res) => {

//   try {
//     await client.getFromCollection("news")
//       .then(result => {
//         res.json({
//           message: "succsess",
//           news: result
//         })
//       });
//   } catch (error) {
//     console.log(error)
//   }
// };

exports.getSingleProduct = async (req, res, next) => {
  let { productId } = req.params;

  if (productId) {
    try {
      await client.getSingleFromCollection("products", productId)
        .then(result => {
          res.json({
            message: "succsess",
            product: result
          })
        });
    } catch (error) {
      console.log(error)
    }
  } else {
    return next()
  }
};



exports.getAllProductsCountriesAndCategories = async (req, res, next) => {

  try {
    let productCategoriesAndCountries = await client.getFromCollectionWithSpecificFields("products", { categoryId: 1, countryId: 1 })
    let categoriesArray = []
    let countriesArray = []
    productCategoriesAndCountries.forEach(obj => {
      categoriesArray.push(obj.categoryId)
      countriesArray.push(obj.countryId)
    });


    let categories = await client.getFromCollectionWithSort("categories", { categoryTitle: 1 })
    let countries = await client.getFromCollectionWithSort("countries", { countryTitle: 1 })

    let matchedCategories = [...categories.filter(category => categoriesArray.includes(`${category._id}`))]
    let matchedCountries = [...countries.filter(country => countriesArray.includes(`${country._id}`))]


    res.json({
      categories: matchedCategories,
      countries: matchedCountries
    })
  } catch (error) {
    console.log(error)
  }
};




exports.getSingleProductWithcCountryAndCategory = async (req, res, next) => {
  let { countryId, categoryId } = req.params;

  // console.log(countryId, categoryId);


  if (countryId && categoryId) {
    try {
      await client.getSingleFromCollectionWhere("products", { categoryId: categoryId, countryId: countryId })
        .then(result => {
          res.json({
            productId: result._id
          })
        });
    } catch (error) {
      console.log(error)
    }
  } else {
    return next()
  }

};






