const { response } = require('express');
const express = require('express');
const data = require('./farmer.js');

const router = express.Router();

// all requests

router.post('/add', (req, res)=>{
    const newdata = new data(req.body);
    data.findOne({username : req.body.username}, (err, result)=>{
        if(err){}
        else{
            if(result == null){
                res.send('new username');
                newdata.save()
                    .then()
                    .catch(err=>console.log(err));
            }else{
                res.send('username already present');
            }
        }
    })
});



router.get('/all', (req, res)=>{
    data.find()
        .then(users=>{ res.json(users) })
        .catch(err=>{ console.log(err) });
});


router.get('/edit/:id', (req, res)=>{
    data.findById(req.params.id)
        .then(user=>{
            res.json(user);
        })
        .catch(err=>{console.log(err)});
});

router.post('/edit/:id', (req, res)=>{
    data.findByIdAndUpdate(req.body._id, {$set : req.body})
        .then()
        .catch(err=>console.log(err));
});


router.delete('/delete/:id', (req, res)=>{
    data.findByIdAndDelete(req.params.id)
        .then()
        .catch(err=>console.log(err));
});



router.get('/expand/:id', (req, res)=>{
    data.findById(req.params.id)
        .then(user=>{
            res.json(user);
        })
        .catch(err=>{ console.log(err) });
});


module.exports = router;













