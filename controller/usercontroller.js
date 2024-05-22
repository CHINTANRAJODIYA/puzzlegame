var usermodel = require('../model/usermodel')
var allcat =  require('../model/Addcategory')
var addpuzzle =  require('../model/addpuzzle');
const storage = require('node-persist');
storage.init( /* options ... */ );

exports.login = async (req,res)=>{
    
    var data = await usermodel.find({"email":req.body.email});
 
    var id = await storage.setItem('id',data[0].id);
    if(data.length>0){
        if(data[0].password==req.body.password)
        {
        res.status(200).json({
            status:"login success"
        })
        }else
        {
            res.status(200).json({
                status:"Check Your Email And Password"
            }) 
        }
    }else
    {
        res.status(200).json({
            status:"Check Your Email And Password"
        })
    }
}

exports.register = async(req,res)=>{
    var data = await usermodel.create(req.body);

    res.status(200).json({
        status:'data register',
        data
    })
}

exports.viewcategory = async(req,res) =>{
    var total_cat = await allcat.find().count();
    var all_cat = await allcat.find().select();

    res.status(200).json({
        status:'Category selected',
        total_cat,
        all_cat
    })
}

exports.catidselect = async(req,res)=>{
    
    var cat_id = req.params.id;

    var data = await allcat.findById(cat_id);

    res.status(200).json({
        status:'this specific id cat added',
        data
    })
}

exports.puzidselect = async(req,res)=>{
    
    var puz_id = req.params.id;

    var data = await addpuzzle.findById(puz_id);

    res.status(200).json({
        status:'this specific id puz selected',
        data
    })
}

exports.winidupdate = async(req,res)=>{

    var puz_id = req.params.id;

    var data = await addpuzzle.findById(puz_id);

    var uid= await storage.getItem('id');

    var win_id1=[];

    win_id1=data.win_id;

    if(data.puz_name==req.body.ans){
        win_id1.push(uid)
    }

    var update_data ={
        "win_id":win_id1
    }


    var data = await addpuzzle.findByIdAndUpdate(puz_id,update_data);

    res.status(200).json({
        status:"ans submit",
        data
    })
}