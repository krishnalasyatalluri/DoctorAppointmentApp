const Category = require("../models/categoryModel")
const categoryCltr = {}


categoryCltr.listAll = async (req, res) => {
    try {
        const categories = await Category.find()
        res.json(categories)
    } catch(e) {
        res.json(e) 
    }
}

categoryCltr.createCategory = async (req, res) => {
    const { body } = req 
    const category = new Category(body) 
    try {
        await category.save()
        res.json(category)
    } catch(e) {
        res.json(e) 
    }
}
categoryCltr.editCategory=async(req,res)=>{
    try{
        const body=req.body
        const id=req.params.id
        const categoryDoc=await Category.findByIdAndUpdate(id,body)
        res.json(categoryDoc)
    }catch(e){
        res.json(e)
    }
}
categoryCltr.removeCategory=async (req, res) => {
    const id=req.params.id 
    try {
        const categoryDoc = await Category.findByIdAndDelete(id)
        res.json(categoryDoc)
    } catch(err) {
        res.json(err) 
    }
}


module.exports = categoryCltr