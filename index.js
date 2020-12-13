var express = require("express");

var bodyPaser = require("body-parser");
var cookieParser = require('cookie-parser');

//MiddleWare
var useRouter = require('./router/user.router');
var authRoter = require('./router/auth.router');
var productRouter = require('./router/product.router');
var cartRouter = require('./router/cart.router');

var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware');
var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyPaser.json()) // for parsing application/json
app.use(bodyPaser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// app.use(cookieParser(process.env.SESSION_SECRET));
app.use(cookieParser("dasddqwetgfgfsdf3"));
app.use(sessionMiddleware);

app.use(express.static('public'));

 //Routes
app.get('/', function(req, res){
    res.render('index', {
        name:'Boss'
    });
});

app.use('/users', authMiddleware.requireAuth , useRouter);
app.use('/products', productRouter);
app.use('/auth', authRoter);
app.use('/cart', cartRouter);

app.listen(port, function(){
    console.log('Server listening on port' + port);
})