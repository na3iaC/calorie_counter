const cal = require('../controllers/calorie.controllers');

module.exports = function(app){
    app.route('/foods/:foodItem')
        .get(cal.getSingleFood);
}
