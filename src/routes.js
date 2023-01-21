
const cubeController = require("./controllers/cubeController");

const router = require("express").Router();


router.get('/',(req,res)=>{
  
    res.render('index');
});

router.get('/create',cubeController.getCreateCube);

router.get("/about",(req,res)=>{
    res.render("about");
});

module.exports = router;