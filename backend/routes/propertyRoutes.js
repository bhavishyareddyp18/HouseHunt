const express = require("express");
const router = express.Router();

// Check if propertyController exists in your backend/controllers/ folder
// If it does, you can import its methods here.
// Otherwise, this fallback returns demo properties so the frontend doesn't crash:
router.get("/", async (req, res) => {
  try {
    const { city, type } = req.query;
    
    // Mock properties response if DB is not populated yet
    const mockProperties = [
      {
        _id: "1",
        title: "Modern 2BHK Apartment",
        city: "Hyderabad",
        type: "apartment",
        price: 25000,
        location: "Gachibowli, Hyderabad",
        images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500"]
      },
      {
        _id: "2",
        title: "Luxury Villa with Pool",
        city: "Hyderabad",
        type: "villa",
        price: 75000,
        location: "Jubilee Hills, Hyderabad",
        images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500"]
      }
    ];

    let results = mockProperties;
    if (city) {
      results = results.filter(p => p.city.toLowerCase().includes(city.toLowerCase()));
    }
    if (type) {
      results = results.filter(p => p.type.toLowerCase() === type.toLowerCase());
    }

    res.json({ success: true, count: results.length, data: results });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
