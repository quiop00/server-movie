const Support= require("../models/Support");
const getSupport= async (id, res) => {
  const support = await Support.findById(id);
  if (!support) {
    return res.status(404).json({
      message: "Error",
      success: false
    });
  }
  let result = {
    id:support._id,
    title: support.title,
    content:support.content
  };
    return res.status(200).json({
      ...result,
      message: "Get data successfully.",
      success: true
    });
};
const addSupport=async (reviewDets,res)=>{
    
    //console.log(reviewDets.content.toString());
    const newSupport = new Support({
        ...reviewDets
      });
  
    await newSupport.save();
    return res.json(newSupport);
}

module.exports = {getSupport,addSupport}
