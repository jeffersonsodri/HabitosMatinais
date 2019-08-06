var express = require('express')
var router = express.Router()

router.delete('/deletar/:id', function(req, res){
    var id = body.id
    res.status(200).send({
      id: id,
      item: req.body
    })
 })

 
/* GET home page. */
router.get('/', function(req, res, next) {
  
});

router.post('/inserir', function(req, res, next){
  res.status(200).send(req.body)
})

router.patch('/alterar/:id', function(req, res){
  const id = body.id
  res.status(200).send({
    id: id,
    item: req.body
  })
})

 module.exports = router;