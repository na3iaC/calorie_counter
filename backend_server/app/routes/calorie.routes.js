const cal = require('../controllers/calorie.controllers');

module.exports = function(app){
    app.route('/food/search') // Note the route change from '/foods/search' to '/food/search'
   .get(cal.searching);

   app.route('/food/:foodId')
   .get(cal.getFoodItemDetails);
}
