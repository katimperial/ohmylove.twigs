const db = require('../db')
const { Vid } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const vids = [
        {
            video: 'https://www.youtube.com/embed/3jH7dFvMmKk',
            caption: '"oh my love" music video'
        },
        {
            video: 'https://www.youtube.com/embed/MbZ797lufBk',
            caption: '"meta angel" music video'
        },
        { 
            video: 'https://www.youtube.com/embed/BFrp8gPLObQ', 
            caption: '"jealousy (feat. Rema)" music video' 
        },
        {
            video: 'https://www.youtube.com/embed/cZTKjzAJLCk',
            caption: '"Tears In The Club (feat. The Weeknd)" music video'
        },
        {
            video: 'https://www.youtube.com/embed/lVjN5NEQ7iw',
            caption: '"PLAYSCAPE" by FKA twigs for the International Woolmark Prize 2022'
        },
        {
            video: 'https://www.youtube.com/embed/YkLjqFpBh84',
            caption: '"cellophane" music video'
        },
        {
            video: 'https://www.youtube.com/embed/IxGDNRE-2c0',
            caption: '"sad day" music video'
        },
        {
            video: 'https://www.youtube.com/embed/p2Rro6TQgpU',
            caption: '"home with you" music video'
        },
        {
            video: 'https://www.youtube.com/embed/yRyrvdB_3lQ',
            caption: '"Cellophane" performance live on The Tonight Show Starring Jimmy Fallon'
        },
        {
            video: 'https://www.youtube.com/embed/Tfr6luGYViE',
            caption: 'Live at Maida Vale'
        },
        {
            video: 'https://www.youtube.com/embed/bYU3j-22360',
            caption: 'M3LL155X'
        },
        {
            video: 'https://www.youtube.com/embed/3yDP9MKVhZc',
            caption: '"Two Weeks" music video'
        }

    ]

    await Vid.insertMany(vids)
    console.log('Here are the videos!')
}

const run = async () => {
    await main()
    db.close()
}

run()