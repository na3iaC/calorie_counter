const Calorie = require('../models/calorie.models');

const searching = (req, res) => {
    const foodItem = req.query.q
//in the query params put the Key as q and the value as whatever ur wanting to search for
    Calorie.getFood(foodItem, (err, foods) => {
        if (err) {
            console.error("Error:", err);
            return res.status(500).json({ error: err.message });
        }
        if (!foods || foods.length === 0) {
            console.log("Food not found for:", foodItem);
            return res.status(404).json({ message: 'Food not found' });
        }
        console.log("Found foods:", foods);
        return res.status(200).json( foods );
    });
};

const getFoodItemDetails = (req, res) => {
    const foodId = req.params.foodId;

    Calorie.getFoodItemDetails(foodId, (err, foodDetails) => {
        if (err) {
            console.error("Error:", err);
            return res.status(500).json({ error: err.message });
        }
        if (!foodDetails) {
            console.log("Food details not found for:", foodId);
            return res.status(404).json({ message: 'Food details not found' });
        }
        console.log("Found food details:", foodDetails);
        return res.status(200).json(foodDetails);
    });
};

module.exports = { searching, getFoodItemDetails };