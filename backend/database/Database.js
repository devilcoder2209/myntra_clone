// access : http://132.145.213.159/


const mongoose = require('mongoose')

const connectdatabse = ()=>{
    console.log(process.env.DB_URI)
    mongoose.connect(process.env.DB_URI, {useNewUrlParser: true,
         useUnifiedTopology:true,
        }).then((data)=>{
        console.log(`Database connected ${data.connection.host}`)
    })

}

module.exports = connectdatabse



// JSON FILE
// {
//     "brand": "Killer",
//     "title": "Formal Shirt",
//     "sellingPrice" : 1300 ,
//     "mrp" : 80,
//     "size" : "XL",
//     "bulletPoints" : [],
//     "productDetails" : "Wrinkle Free",
//     "material" : "Cotton 100 %",
//    "specification": [],
//     "category" : "Men",
//     "style_no" : "1",
//     "images": [
//      {
//          "url" : "https://cdn.staticans.com/image/tr:h-800,w-600,cm-pad_resize/data/Killer/10-June-2022/1587-FS-WISKEY-K071FSSLNDR-NV_1.jpg"
//      }
//     ],
//     "color" : "Navy Blue",
//     "gender": "Male",
//     "stock" : 10
//   }