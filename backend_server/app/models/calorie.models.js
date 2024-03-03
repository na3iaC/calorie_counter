const db = require("../../calorie");

const getFood = (foodItem, done) => {
    const sql = "SELECT * FROM calories WHERE FoodItem LIKE '%" + foodItem + "%'";
    db.all(sql, (err, foods) => {
        if (err) {
            return done(err);
        }
        return done(null, foods);
    });
};

module.exports = { getFood };


