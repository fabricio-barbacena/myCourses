const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    console.log(req.io, req.connectedUsers);

    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if (!targetDev) {
      return res.status(400).json({ error: "Dev does not exist!" });
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      console.log("IT IS A MATCH!");
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
};
