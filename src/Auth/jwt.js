require('dotenv').config()

const jwt = require("jsonwebtoken");

  module.exports = {
  
    async Verify(request, response, next) {

      if (request.headers['x-access-token']){

        const token = request.headers['x-access-token'];
    
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) =>{
    
            if(err) return response.status(401).end();
    
            request.userId = decoded.userId;
            next();
        });
    
      }else{
    
        return response.status(500).json({ message: 'Não foi identificado o header: x-access-token'}).end();  
    
      }
    },

    async start(req, res) {
      const {user, password} = req.body;
      
      if (user == "api_tascom_alexa" && password == "s3cr3t4p1t4sc0m") {

        const token =  jwt.sign({userId: 1}, process.env.SECRET_KEY ,{expiresIn: 300})
        return res.json({auth: true, token: token});

      }

      return res.status(401).json({auth: false, token: null});
   
      },
};