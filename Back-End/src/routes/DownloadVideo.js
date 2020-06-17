const express = require('express')
const router = new express.Router()
const fs = require('fs')
const youtubedl = require('youtube-dl')


router.get('/downloadvideo', (req, res, next) => {

    if (!req.query.quality) {
        return res.send({
            error: 'you must select download format item'
        })
    }

    // console.log( JSON.parse(req.query.quality))
    const { id, format, title } = JSON.parse(req.query.quality)

    console.log("object is is--->>", id, format, title)

   
    const video = youtubedl(`https://www.youtube.com/watch?v=${id}`, format,`extract-audio' => true`,{ cwd: __dirname })
    video.on('info', function (info) {
        console.log('Download started')
        console.log('filename: ' + info._filename)
        console.log('size: ' + info.size)
     dv(info._filename) 
    })
   dv=(a)=>{
    video.pipe(fs.createWriteStream(`${a}`))
   }
 })
module.exports = router
