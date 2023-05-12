const mongoose = require("mongoose");

const OrgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  orgID: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  desciption: {
    type: String,
  },
  location: {
    type: String,
  },
  jobs: [
    {
      job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "job",
      },
    },
  ],
});

module.exports = Org = mongoose.model("org", OrgSchema);
