const supportRouter = require("express").Router();
const Support=require("../models/Support");
const{
    getSupport,
    addSupport
  }=require("../utils/Support")
supportRouter.get("/:id",async(req,res)=>{
    await getSupport(req.params.id,res);
})
supportRouter.post("/add",async(req,res)=>{
      await addSupport(req.body,res);
});
supportRouter.route("").get(function(req, res) {
  Support.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
module.exports=supportRouter;