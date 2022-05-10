const db = require('../db')
const { Video } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const videos = [
        {
            video: 'https://www.youtube.com/watch?v=3jH7dFvMmKk',
            caption: '"oh my love" music video'
        },
        {
            video: 'https://www.youtube.com/watch?v=MbZ797lufBk',
            caption: '"meta angel" music video'
        },
        { 
            video: 'https://www.youtube.com/watch?v=BFrp8gPLObQ', 
            caption: '"jealousy (feat. Rema)" music video' 
        },
        {
            video: 'https://www.youtube.com/watch?v=cZTKjzAJLCk',
            caption: '"Tears In The Club (feat. The Weeknd)" music video'
        },
        {
            video: 'https://www.youtube.com/watch?v=lVjN5NEQ7iw',
            caption: '"PLAYSCAPE" by FKA twigs for the International Woolmark Prize 2022'
        },
        {
            video: 'https://www.youtube.com/watch?v=YkLjqFpBh84',
            caption: '"cellophane" music video'
        },
        {
            video: 'https://www.youtube.com/watch?v=IxGDNRE-2c0',
            caption: '"sad day" music video'
        },
        {
            video: 'https://www.youtube.com/watch?v=p2Rro6TQgpU',
            caption: '"home with you" music video'
        },
        {
            video: 'https://www.youtube.com/watch?v=yRyrvdB_3lQ',
            caption: '"Cellophane" performance live on The Tonight Show Starring Jimmy Fallon'
        },
        {
            video: 'https://www.youtube.com/watch?v=Tfr6luGYViE',
            caption: 'Live at Maida Vale'
        },
        {
            video: 'https://www.youtube.com/watch?v=bYU3j-22360',
            caption: 'M3LL155X'
        },
        {
            video: 'https://www.youtube.com/watch?v=3yDP9MKVhZc',
            caption: '"Two Weeks" music video'
        }

    ]

    await Video.insertMany(videos)
    console.log("Here are the videos!")
}
const run = async () => {
    await main()
    db.close()
}

run()