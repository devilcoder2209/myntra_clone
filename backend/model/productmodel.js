const mongoose = require('mongoose')
// {
//   "brand": "Allen Solly",
//    "title": "T Shirt",
//    "sellingPrice" : 200 ,
//    "mrp" : 200,
//    "size" : "L",
//    "bulletPoints" : [],
//    "productDetails" : "Comfortable wear",
//    "material" : "Cotton",
//    "specification": [],
//    "category" : "Men",
//    "style_no" : "1",
//    "images": [
//     {
//         "url" : "https://assets.ajio.com/medias/sys_master/root/20210118/N6eO/6005b23aaeb269698150934a/-473Wx593H-441112748-navy-MODEL.jpg"
//     }
//    ],
//    "color" : "Green",
//    "gender": "Male",
//    "stock" : 10
//  }
const productmodel = new mongoose.Schema({
    brand:{
        type:String,

    },
    title:{
        type:String
    },
    sellingPrice:{
        type:Number
    },
    mrp:{
        type:Number
    },
    size:{
        type:String
    },
    bulletPoints:[
        {
            point:{
                type:String
            }
        }
    ],
    productDetails:{
        type:String
    },
    material:{
        type:String
    },
    specification:[
        {
            point:{
                type:String
        }
        }
    ],
    category:{
        type:String
    },
    style_no:{
        type:String
    },
    images:[
        {
            url:{
                type:String
            }
        }
           
    ],
    createDate:{
        type:Date,
        default: Date.now
    },
    color:{
        type:String
    },
    gender:{
        type:String
    },
    stock:{
        type:Number
    }


})

productmodel.index({title: 1})

module.exports = mongoose.model('myntraproduct', productmodel)