const jwt=require('jsonwebtoken')



const authenticateUser =  async(req, res, next)=>{
    
    const token = req.headers['o-auth']
    try{
        const userDoc=jwt.verify(token,process.env.JWT_SECRET)
        if(userDoc){
            req.user.id=userDoc.id 
            next()
        }

    }catch(err){
        res.status(401).json({error:'access denied'})

    }
    



    // User.findByToken(token)
    //     .then((user)=> {
    //         if(user) {
    //             const result=bcrypt.compare(token===user.token)
    //             req.user = user
    //             req.token = token
    //             next()
    //         } else {
    //             res.status('401').send({ errors: 'token not available'})
    //         }
    //     })
    //     .catch((err)=> {
    //         res.status('401').send(err)
    //     })
}

module.exports = authenticateUser
