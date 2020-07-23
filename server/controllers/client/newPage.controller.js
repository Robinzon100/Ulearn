const { promisify } = require("util");

//! ─── MODELS ─────────────────────────────────────────────────────────────────────

//! ─── QUERYS ─────────────────────────────────────────────────────────────────────
const clientQueries = require("../../querys/client.queries");



//! ─── GET ───────────────────────────────────────────────────────────────────────

exports.getNewPagesLinks = async (req, res) => {

  try {
    await clientQueries.getFromCollectionWithSpecificFields("newPages", { _id: 1, menuTitle: 1 })
      .then(result => {
        res.json({
          message: "succsess",
          links: result
        })
      });
  } catch (error) {
    console.log(error)
  }
};




exports.getSingleNewPage = async (req, res, next) => {
  let { newPageId } = req.params;

  if (newPageId) {
    try {
      await clientQueries.getSingleFromCollection("newPages", newPageId)
        .then(result => {
          res.json({
            message: "succsess",
            newPage: result
          })
        });
    } catch (error) {
      console.log(error)
    }
  } else {
    return next()
  }

};
