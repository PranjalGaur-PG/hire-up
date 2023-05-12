const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  org: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "org",
  },
  salaryType: {
    // INR or $
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  JobType: {
    // Remote or On-site or Hybrid
    type: String,
    required: true,
  },
  desciption: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  skillsRequired: [
    {
      type: String,
      required: true,
    },
  ],
  experience: {
    type: Number,
    required: true,
  },
  applicants: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    },
  ],
});

module.exports = Job = mongoose.model("job", PostSchema);
