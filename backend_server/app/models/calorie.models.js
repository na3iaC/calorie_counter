const db = require("../../calorie");

const getFood = (foodItem, done) => {
    const sql = 'SELECT * FROM calories WHERE FoodItem = ?';
    db.get(sql, [foodItem], (err, food) => {
        if (err) {
            return done(err);
        }
        return done(null, food);
    });
};

module.exports = { getFood };



