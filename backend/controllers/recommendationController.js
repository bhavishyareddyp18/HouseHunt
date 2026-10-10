const Property = require("../models/Property");

exports.getRecommendations = async (req, res) => {

  try {

    const userPrefs = req.user?.preferences || {
      city: "Hyderabad",
      type: "Apartment",
      minPrice: 10000,
      maxPrice: 50000,
      bedrooms: 2
    };

    const properties =
      await Property.find();

    const scored = properties.map(p => {

      let score = 0;

      if (p.city === userPrefs.city) score += 40;

      if (p.type === userPrefs.type) score += 25;

      if (p.rent >= userPrefs.minPrice &&
          p.rent <= userPrefs.maxPrice)
        score += 25;

      if (p.bedrooms === userPrefs.bedrooms)
        score += 10;

      return {
        ...p._doc,
        score
      };

    });

    scored.sort((a, b) => b.score - a.score);

    res.json(scored.slice(0, 10));

  }

  catch (err) {

    res.status(500).json({
      message: "Recommendation error"
    });

  }

};

exports.getSimilar = async (req, res) => {

  try {

    const property =
      await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found"
      });
    }

    const similar =
      await Property.find({
        city: property.city,
        type: property.type
      });

    res.json(similar);

  }

  catch (err) {

    res.status(500).json({
      message: "Similarity error"
    });

  }

};
