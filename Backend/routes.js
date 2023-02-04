const router = require('express').Router();
const Stepone = require("./controllers/Stepone")

router.post('/apilink', Stepone.search)
router.post('/apilink', Stepone.store)

module.exports = router;