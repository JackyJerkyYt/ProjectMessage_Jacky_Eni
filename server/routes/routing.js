const router = require('express').Router();
let message = require('../models/message.model')


router.route('/message').get((req, res) => {
    message.find()
    .then((message) => {
      res.json(message)
    })
    .catch((err) => {
      res.status(400).json('Erro' + err)
    })
})

router.route('/createMessage').post((req, res) => {
    const user = req.body.user
    const text = req.body.text
    const temp = new message({
        user,
        text
    })

    temp.save()
        .then(() => {
          res.json("Yay you just created a new one!")
        })
        .catch((err) => {
          res.status(400).json("Error" + err)
        })
})


module.exports = router