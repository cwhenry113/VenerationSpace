import connectMongo from '../../../utils/connectMongo'
import veneration from '../../../models/venModel'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await connectMongo()

  switch (method) {
    case 'GET' :
      try {
        const tveneration = await veneration.findById(id)
        if (!tveneration) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: veneration })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' :
      try {
        const tveneration = await veneration.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!tveneration) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: tveneration })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' :
      try {
        const tveneration = await veneration.deleteOne({ _id: id })
        if (!tveneration) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
