const app = require("./app");

const propertyRoutes = require("./routes/propertyRoutes");
const agreementRoutes = require("./routes/agreementRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const agentRoutes = require("./routes/agentRoutes");

// Mount properties route
app.use("/api/properties", propertyRoutes);
app.use("/api/agreements", agreementRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/agents", agentRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

