import express from 'express'
import knex from '../database/connection'

const router = express.Router()

router.get('/items', async (req, res) => {
  const items = await knex('items').select('*')

  const serealizedItems = items.map(item => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`
    }
  })

  return res.json(serealizedItems)
})

router.post('/points', async (req, res) => {
  const {
    name,
    email,
    whatsapp,
    latitude,
    longetude,
    city,
    uf,
    items
  } = req.body

  const insertedIds = await knex('points').insert({
    image: 'image-fake',
    name,
    email,
    whatsapp,
    latitude,
    longetude,
    city,
    uf
  })

  const point_id = insertedIds[0]

  const pointItems = items.map((item_id: number) => {
    return {
      item_id,
      point_id
    }
  })

  await knex('point_items').insert(pointItems)

  return res.json({ success: true })
})

export default router
