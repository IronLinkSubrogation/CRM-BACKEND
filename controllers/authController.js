const User = require('../models/User');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

exports.signup = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = new User({ email, password, role });
    await user.save();
    const token = createToken(user);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    
    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = createToken(user);
    res.status(200).json({ token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};