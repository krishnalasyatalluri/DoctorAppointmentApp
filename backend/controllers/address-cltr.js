const Address = require("../models/addressModel")
const addressCltr = {}

addressCltr.address = async (req, res) => {
    const { body } = req 
    const addresss = new Address(body) 
    try {
        await Address.save()
        res.json(addresss)
    } catch(e) {
        res.json(e) 
    }
}
addressCltr.updateAddress=async(req,res)=>{
    try{
        const body=req.body
        const id=req.params.id
        const addressDoc=await Address.findByIdAndUpdate(id,body)
        res.json(addressDoc)
    }catch(e){
        res.json(e)
    }
}


module.exports = addressCltr