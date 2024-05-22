var adminmodel = require('../model/adminmodel')
var addcategory = require('../model/Addcategory')
var addpuzzle = require('../model/addpuzzle')
var usermodel = require('../model/usermodel')

exports.login = async (req,res)=>{
    var data = await adminmodel.find({"email":req.body.email});

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

// exports.register = async(req,res)=>{
//     var data = await adminmodel.create(req.body);

//     res.status(200).json({
//         status:'data register',
//         data
//     })
// }    


exports.addcategory = async(req,res)=>{

    req.body.cat_image = req.file.originalname;
    var data = await addcategory.create(req.body);

    res.status(200).json({
        status:'New Category added',
        data
    })
}

exports.addpuzzle = async(req,res)=>{

    var name = req.body.puz_name;
    
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var result='';
    var arr=[];
    for(let i=0;i<=10;i++){
        var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        result += randomLetter; 
    }
    for(let i=0;i<100;i++){
        var randomChar = name[Math.floor(Math.random()*name.length)]
        if(arr.includes(randomChar)==false){
            arr.push(randomChar);
        }
    }
    
    var final = result+arr.join('');
    
    req.body.random_char = final;

    req.body.puz_image = req.file.originalname;

    var data = await addpuzzle.create(req.body);
    
    res.status(200).json({
        status:'New Puzzle added',
        data
    })
}



exports.viewuser = async(req,res)=>{

    var total_user = await usermodel.find().count();
    var view_user = await usermodel.find().select();

    res.status(200).json({
        status:"all record select",
        total_user,
        view_user
    })
}


