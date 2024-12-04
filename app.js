const express = require('express')
const app = express()

app.listen(7000)

const userRouter = require('./routes/users') // users 소환
const channelRouter = require('./routes/channels')  // channel-demo 소환

app.use("/", userRouter)
app.use("/channels", channelRouter)