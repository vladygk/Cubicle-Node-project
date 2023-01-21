
function setupViewEngfine(app){
    const hb = require('express-handlebars');
    app.engine("hbs",hb.engine({extname:"hbs"}));
    app.set('view engine',"hbs");
    app.set('views','./src/views');
}

module.exports = setupViewEngfine;