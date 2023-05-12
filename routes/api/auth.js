const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");
const Org = require("../../models/Org");

// @route       GET api/auth/getrole
// @description Get the role
// @access      public
router.get("/getrole", async (req, res) => {
  const token = req.header("x-auth-token");

  try {
    jwt.verify(token, process.env.jwtSecret, (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: "Token is not valid" });
      } else {
        return res.json({ role: decoded.role });
      }
    });
  } catch (err) {
    console.error("Something wrong with auth middleware");
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route       POST api/auth
// @description Authenticate user and get token
// @access      Public
router.post(
  "/user",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is requored").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          errors: [{ msg: "Invalid Credentials" }],
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          errors: [{ msg: "Invalid Credentials" }],
        });
      }

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
        role: "user",
      };

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 360000 },
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

// @route       GET api/auth/user
// @description Find User and send back User data
// @access      Private
router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

// @route       POST api/auth/org
// @description Authenticate org and get token
// @access      Public
router.post(
  "/org",
  [
    check("orgID", "Please include a valid Organization ID").exists(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { orgID, password } = req.body;

    try {
      // See if org exists
      let org = await Org.findOne({ orgID });

      if (!org) {
        return res.status(400).json({
          errors: [{ msg: "Invalid Credentials" }],
        });
      }

      const isMatch = await bcrypt.compare(password, org.password);

      if (!isMatch) {
        return res.status(400).json({
          errors: [{ msg: "Invalid Credentials" }],
        });
      }

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
        { expiresIn: 360000 },
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

// @route       GET api/auth/org
// @description Find Org and send back Org data
// @access      Private
router.get("/org", auth, async (req, res) => {
  try {
    // console.log(req);
    const org = await Org.findById(req.user.id).select("-password");
    if (!org) return res.status(404).json({ msg: "User not found" });
    res.json(org);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
