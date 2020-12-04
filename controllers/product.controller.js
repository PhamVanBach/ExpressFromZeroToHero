var db = require("../db");

module.exports.index = function(req,res){
    var page = parseInt(req.query.page) || 1;//lấy giá trị của page nếu k có mặc định là 1
    var perPage = 8;

    //way1
    // var start = (page - 1) * perPage;
    // var end = page*perPage;

    //way2
    var drop = (page - 1) * perPage;
    res.render('products/index', {
        //way1
        // products: db.get('products').splice(start,end).value()
        //way2
        products: db.get('products').drop(drop).take(perPage).value()
    })
};