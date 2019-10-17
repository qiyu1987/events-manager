const {Router} = require('express')
const Event = require('./model')
const router = new Router()
router.post('/event',
    (req, res, next) =>  {
        Event.create(req.body)
            .then(event => res.json(event))
            .catch(next)
        }  
)
router.get('/event',
    (req, res, next) => {
        Event.findAll()
            .then( events => res.send(events))
    }
)
router.get('/event/:id',
    (req, res, next) => {
        Event.findByPk(req.params.id)
            .then(event => res.send(event))
    }
)
router.put(
    '/event/:id',
    (request, response, next) => Event
      .findByPk(request.params.id)
      .then(event => event.update(request.body))
      .then(event => response.send(event))
      .catch(next)
)
router.delete(
    '/event/:id',
    (request, response, next) => Event
      .destroy({ where: { id: request.params.id }})
      .then(number => response.send({ number }))
      .catch(next)
)
module.exports = router
// router.get('')