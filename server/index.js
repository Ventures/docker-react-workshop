const ioredis = require('ioredis')
const express = require('express')

const MOCK_DOGS = [
  { age: 7, name: 'hurtta' },
  { age: 4, name: 'mustix' },
]

const MOCK_OWNER = {
  name:    'Pentti',
  surname: 'Linkola'
}

express()

  .use((req, res, next) => {
    /**
     * TODO increment counter in redis
     */
    return next()
  })

  .get('/dogs',  (req, res) => res.json(MOCK_DOGS))
  .get('/owner', (req, res) => res.json(MOCK_OWNER))

  .listen(8000, () => console.log('Listening at 8000'))
