export default function handler(req, res) {
  const { params } = req.query;
  console.log("params : ", params);
  res.status(200).json(params);
}
