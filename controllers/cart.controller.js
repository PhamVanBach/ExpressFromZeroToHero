var db = require('../db')

module.exports.addToCart = function(req, res, next){
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;

    if(!sessionId){
        res.redirect('/products');
        return;
    }

    var count = db
      .get('sessions')
      .find({id : sessionId})
      .get('cart.' + productId, 0)
      .value();
   
    db.get('sessions')
      .find({id : sessionId})
      .set('cart.' + productId, count + 1)
      .write();
    
    res.redirect('/products');
};

//not done

// module.exports.cartBooked = (req, res) => {
//     var sessionId = req.signedCookies.sessionId;
//     var productId = req.params.productId;

//     const cart = db 
//     .get("sessions")
//     .find({id : sessionId})
//     .get('cart.' + productId, 0)
//     .value();

//     const difProductId = cart ? cart.cart : [];
//     const products = db
//                     .get("products")
//                     .filter(product => {
//                         return difProductId.includes(product.id);
//                     }) 
//                     .value();

    
//     res.render("cart/index", { auth: req.user, products });
// };