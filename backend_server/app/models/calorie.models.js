const db = require("../../calorie");

const search = (foodItem, done) => {
    const sql = "SELECT * FROM calories WHERE FoodItem LIKE '%" + foodItem + "%'";
    db.all(sql, (err, foods) => {
        if (err) {
            return done(err);
        }
        return done(null, foods);
    });
};

const getFoodItemDetails = (foodId, done) => {
    const sql = "SELECT FoodCategory, FoodItem, Per100Grams, Cals_per100grams, KJ_per100grams FROM calories WHERE id = ?";
    db.get(sql, [foodId], (err, foodDetails) => {
        if (err) {
            return done(err);
        }
        return done(null, foodDetails);
    });
};

module.exports = { search, getFoodItemDetails };


