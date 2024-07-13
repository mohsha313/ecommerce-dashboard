import { mongooseConnect } from '../../lib/mongoose.js';
import { Product } from '../../models/Product.js';

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === 'POST') {
    const { title, description, price, images,details, brand , category} = req.body;

    const productDoc = await Product.create({
      title,
      description,
      price,
      images,
      details,
      brand,
      category
    })

    res.json(productDoc);
  }

  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {

      res.json(await Product.find());
    }
  }

  if (method === 'PUT') {
    const { title, description, price, _id, images,details, brand,category} = req.body;
    await Product.updateOne({ _id }, {
      title, description, price, images,details, brand,category
    });
    res.json(true);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Product.deleteOne({_id:req.query?.id});
      res.json(true)
    }
  }
}