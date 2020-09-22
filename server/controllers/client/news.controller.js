// const { promisify } = require("util");

// //! ─── MODELS ─────────────────────────────────────────────────────────────────────

// //! ─── QUERYS ─────────────────────────────────────────────────────────────────────
// const clientQueries = require("../../querys/client.queries");


// //! ─── GET ───────────────────────────────────────────────────────────────────────
// exports.getNews = async (req, res) => {
//   let { type } = req.params;


//   if (type === "all") {
//     try {
//       await clientQueries.getFromCollectionSorted("news", { newsDate: -1 })
//         .then(result => {
//           res.json({
//             message: "succsess",
//             news: result
//           })
//         });
//     } catch (error) {
//       console.log(error)
//     }
//   }


//   if (type === "featured") {
//     try {
//       await clientQueries.getFeaturedFromCollection("news")
//         .then(result => {
//           res.json({
//             message: "succsess",
//             news: result
//           })
//         });
//     } catch (error) {
//       console.log(error)
//     }
//   }


// };

// //! ─── GET ───────────────────────────────────────────────────────────────────────
// exports.getPdf = async (req, res) => {
//   let { type } = req.params;


//   if (type === "all") {
//     try {
//       await clientQueries.getFromCollectionSorted("pdf", { pdfDate: -1 })
//         .then(result => {
//           res.json({
//             message: "succsess",
//             pdf: result
//           })
//         });
//     } catch (error) {
//       console.log(error)
//     }
//   }


//   if (type === "featured") {
//     try {
//       await clientQueries.getFeaturedFromCollection("pdf")
//         .then(result => {
//           res.json({
//             message: "succsess",
//             pdf: result
//           })
//         });
//     } catch (error) {
//       console.log(error)
//     }
//   }


// };



// //! ─── GET ───────────────────────────────────────────────────────────────────────
// exports.getTest = async (req, res) => {

//   try {
//     await clientQueries.getFromCollectionAc("tests")
//       .then(result => {
//         res.json({
//           message: "succsess",
//           test: result
//         })
//       });
//   } catch (error) {
//     console.log(error)
//   }
// };







// //! ─── POST ───────────────────────────────────────────────────────────────────────
// exports.postTest = async (req, res) => {
//   let { email, score } = req.body

//   let emailWithScore = {
//     email: email,
//     score: score,
//     createdAt: new Date()
//   }

//   try {
//     await clientQueries.postToCollection("emails", emailWithScore)
//       .then(result => {
//         res.json({
//           message: "succsess",
//           email: result
//         })
//       });
//   } catch (error) {
//     console.log(error)
//   }
// };


