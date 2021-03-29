import { connectToDatabase } from "../../../mongodb"
import mongodb from 'mongodb'

export default async (req, res) => {

  const { db } = await connectToDatabase();

  if (req.method === 'PUT') {
    // Update Category
    const { name, description } = req.body

    try {
      const result = await db
        .collection("categories")
        .updateOne(
          { _id: new mongodb.ObjectID(req.query.id) },
          { $set: { name, description } }
        )
      return res.json({ message: 'ok' })
    } catch (e) {
      return res.status(400).send({ message: e.message })
    }
  }

  // Get a Category
  const category = await db
    .collection("categories")
    .find(
      {_id: new mongodb.ObjectID(req.query.id)}
     )
    .toArray();

  return res.json(category);


}