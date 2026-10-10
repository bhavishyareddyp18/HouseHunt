const Agent = require("../models/Agent");

exports.getAgents = async (req, res) => {

  const agents = await Agent.find();

  res.json(agents);

};

exports.getAgentById = async (req, res) => {

  const agent = await Agent.findById(req.params.id);

  res.json(agent);

};

exports.getDashboard = async (req, res) => {

  const agentId = req.user.id;

  const agent = await Agent.findById(agentId);

  res.json({

    totalListings: agent.totalListings,

    leads: agent.activeLeads,

    closedDeals: agent.closedDeals,

    commission: agent.commission

  });

};