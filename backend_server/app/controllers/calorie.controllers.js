const Calorie = require('../models/calorie.models');

const getSingleFood = (req, res) => {
    const foodItem = req.params.foodItem;

    Calorie.getFood(foodItem, (err, food) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!food) {
            return res.status(404).json({ message: 'Food not found' });
        }
        return res.status(200).json({ food });
    });
};

module.exports = { getSingleFood };

