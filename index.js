var express = require("express");
var useRouter = require('./router/user.router');

var app = express();
var port = 3000;
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index', {
        name:'Boss'
    });
});

//user router
app.use('/users', useRouter);

app.listen(port, function(){
    console.log('Server listening on port' + port);
})