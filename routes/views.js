let express = require('express');
const router = express.Router();

router.get('/test', (req, res, next) => {
    let names = ["Marcus", "Garnacho", "Hojlund"];
    res.render('test', {players:[{name:names[0],age:2},{name:names[1],age:25},{name:names[2],age:26}]});
})

module.exports = router;