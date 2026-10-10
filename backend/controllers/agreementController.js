const createAgreement =
require("../utils/generateAgreement");

const Agreement = require("../models/Agreement");

exports.generateAgreement =
async (req, res) => {

  try {

    const data = req.body;

    const doc =
      createAgreement(data);

    res.setHeader(

      "Content-Type",
      "application/pdf"

    );

    doc.pipe(res);

  }

  catch(error) {

    res.status(500)
    .json({
      message:"Error generating agreement"
    });

  }

};

exports.getAgreements =
async (req, res) => {

  const agreements =
    await Agreement.find();

  res.json(agreements);

};