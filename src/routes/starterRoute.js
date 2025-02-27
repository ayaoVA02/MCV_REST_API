// Call pakage  
const express = require('express');
const router = express.Router();


// Call Controller
// const starter  = require('../controller/starter/index');
const {startServer} = require('../controller/starter');



// Routes Section
router.get('/start', startServer);


// Export Router (Default)
module.exports = router;