const Contact = require('../models/Contact');

const submitContact = async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(400);
    return next(new Error('Please provide all required fields'));
  }

  try {
    await Contact.create({ name, email, message });
    console.log(`Saved contact form from ${email} to DB`);
  } catch (dbError) {
    console.log(`Fallback (no DB) - Received message from ${name} (${email}): ${message}`);
  }

  res.status(200).json({ success: true, message: "Message received successfully. We will get back to you soon!" });
};

module.exports = { submitContact };
