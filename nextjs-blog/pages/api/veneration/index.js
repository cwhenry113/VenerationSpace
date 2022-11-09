import connectMongo from '../../../utils/connectMongo'
import veneration from '../../../models/venModel'

export default async function handler(req, res) {
  const { method } = req

  await connectMongo()

  switch (method) {
    case 'GET':
      try {
        const vens = await veneration.find({})
        res.status(200).json({ success: true, data: vens })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const ven = await veneration.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: ven })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}