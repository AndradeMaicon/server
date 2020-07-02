import express from 'express'
import knex from '../database/connection'

const router = express.Router()

router.get('/items', async (req, res) => {
  const items = await knex('items').select('*')

  const serealizedItems = items.map(item => {
    return {
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`
    }
  })

  return res.json(serealizedItems)
})

export default router
