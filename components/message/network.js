const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', (req, res) => {
    // console.log(req.headers)
    response.standard(res);
})
.post('/post', (req, res) => {
    controller.AddMessage(req.body.user, req.body.message)
    .then(r => response.success(r,res,201))
    .catch(r => response.error(res,r,400)) 
})
.get('/get', (req, res) => {
    controller.getMessage()
    .then(r => response.success(r,res))
    .catch(r => response.error(res,'Unexpect error')) 
})

module.exports = router