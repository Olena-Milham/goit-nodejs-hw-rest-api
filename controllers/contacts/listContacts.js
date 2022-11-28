const { Contact } = require("../../models/contact");
const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  console.log(req.query);
  const { page = 2, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  // const result = await Contact.find();
  const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "name email");
  res.json(result);
};

module.exports = listContacts;
