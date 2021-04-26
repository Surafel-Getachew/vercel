export default function handler(req, res) {
    if (req.method === "POST"){
        console.log("post request");
    } else {
        console.log(req.method);
    }
  res.status(200).json({ name: "Jon Flick" });
}
