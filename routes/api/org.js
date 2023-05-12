const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Org = require("../../models/Org");

// @route       POST api/org
// @description Register Org
// @access      Public
router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("orgID", "Org ID is required").not().isEmpty(),
    check(
      "password",
      "Please enter a password of 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, orgID, password } = req.body;

    try {
      let org = await Org.findOne({ orgID });
      if (org) {
        return res.status(400).json({
          errors: [{ msg: "Organization already exists" }],
        });
      }

      org = new Org({ name, orgID, password });

      const salt = await bcrypt.genSalt(10);
      org.password = await bcrypt.hash(password, salt);

      await org.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: org.id,
        },
        role: "org",
      };

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 3600000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
