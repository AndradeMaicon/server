import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ Message: 'E la vamos nos' })
})

export default router
