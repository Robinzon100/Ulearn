// //
// // ─── MODELS ─────────────────────────────────────────────────────────────────────
// //
// const Service = require('../../models/service.model')

// //
// // ─── QUERYS ─────────────────────────────────────────────────────────────────────
// //
// const adminQuerys = require('../../querys/admin.querys')


// //
// //!─── GET ALL SERVICES ───────────────────────────────────────────────────────────────────────
// //
// exports.getAllServices = async (req, res) => {

//     try {
//         const services = await adminQuerys.getFromCollection('services')

//         res.status(200).json({
//             services
//         }); 
//     } catch (error) {
//         console.log(error)
//     }
// }


// //
// //! ─── POST SERVICE ───────────────────────────────────────────────────────────────────────
// //
// exports.postService = async (req, res) => {
//     const {
//         title,
//         type,
//         description,
//         tasks,
//         examples,
//         clinets } = req.body;

//     const service = await new Service(
//         title,
//         type,
//         description,
//         tasks,
//         [
//             {
//                 "link": "",
//                 "name": "",
//                 "description": "",
//                 "tasks": [],
//                 "reviews": [
//                     {
//                         "name": "",
//                         "contactLink": "",
//                         "imagePath": "",
//                         "review": "",
//                         "stars": 5
//                     }
//                 ],
//             }
//         ],
//         [
//             {
//                 "name": "",
//                 "imagePath": ""
//             }
//         ]
//     )

//     try {
//         await adminQuerys.postToCollection('services', service);

//         res.status(200).json({
//             "message": "succsessfully inserted the object"
//         });
//     } catch (error) {
//         console.log(error)
//     }
// }



// //
// //! ─── UPDATE SERVICE ───────────────────────────────────────────────────────────────────────
// //
// exports.updateService = async (req, res) => {
//     const id = req.params.serviceId;

//     const object = req.body;

//     const updatedService = adminQuerys.updateWithId('services', object, id);


//     res.status(200).json({
//         "updatedService": updatedService
//     });
// }



// //
// //! ─── DELETE SERVICE ───────────────────────────────────────────────────────────────────────
// //
// exports.deleteService = async (req, res) => {
//     const id = req.params.serviceId;

//     const deletedService = adminQuerys.deleteWithId('services', id);


//     res.status(200).json({
//         "deletedService": deletedService
//     });
// }



// // {
// //     "blogPosts": [
// //         {
// //             "_id": "5e31689729c91129505bfff8",
// //             "title": "saitis damzadeba sheqmna",
// //             "type": "webdevelopmenti",
// //             "description": "mamashensac ki davudevelopebt traks",
// //             "tasks": "sheni saqme araa",
// //             "examples": "vigaca.com",
// //             "clinets": "google"
// //         },
// //         
// //     ]
// // }

//     //         {
//     //             "_id": "5e318072874cbb30b4f2273b",
//     //             "title": "saitis damzadeba sheqmna",
//     //             "type": "webdevelopmenti",
//     //             "description": "mamashensac ki davudevelopebt traks",
//     //             "tasks": "sheni saqme araa",
//     //             "examples": [
//     //                 {
//     //                     "link": "",
//     //                     "name": "",
//     //                     "description": "",
//     //                     "tasks": [],
//     //                     "reviews": [
//     //                         {
//     //                             "name": "",
//     //                             "contactLink": "",
//     //                             "imagePath": "",
//     //                             "review": "",
//     //                             "stars": 5
//     //                         }
//     //                     ]
//     //                 }
//     //             ],
//     //             "clinets": [
//     //                 {
//     //                     "name": "",
//     //                     "imagePath": ""
//     //                 }
//     //             ]
//     //         }