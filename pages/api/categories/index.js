import { connectToDatabase } from "../../../mongodb"

export default async (req, res) => {

  const { db } = await connectToDatabase();

  if (req.method === 'POST') {
    // Create Category
    const category = req.body
    await db
      .collection("categories")
      .insertOne(category)
    return res.json(category);
  }


  // Show All Categories
  const categories = await db
    .collection("categories")
    .find({})
    .toArray();

  return res.json(categories);

};