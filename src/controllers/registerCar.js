module.exports.registerCar = async (req, res, next) => {
  const body = req.body;
  return res.status(201).json({
    message: "Worked well",
    data: body,
  });
};
