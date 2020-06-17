const express = require('express')
const VideoId = require('./routes/Videos-ID')
const DownloadVideo = require('./routes/DownloadVideo')
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(VideoId)
app.use(DownloadVideo)


module.exports = app