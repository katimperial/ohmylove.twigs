const db = require('../db')
const { Gallery } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const galleries = [
        { 
            image: 'https://i.imgur.com/jt2c2dJ.jpg',
            photographer: 'Liz Johnson Artur'
        },
        {
            image: 'https://i.imgur.com/c4cq9Rc.jpg',
            photographer: 'Inez & Vinoodh'
        },
        {
            image: 'https://hips.hearstapps.com/ell.h-cdn.co/assets/16/27/2560x3431/gallery-1467812864-elle-august-fka-twigs-01.jpg?resize=980:*',
            photographer: 'Paola Kudacki'
        },
        {
            image: 'https://i.imgur.com/dy3UWYt.png',
            photographer: 'Orograph'
        },
        {
            image: 'https://i.imgur.com/mWzCDUo.jpg',
            photographer: 'Matthew Stone'
        },
        {
            image: 'https://i.imgur.com/k5FF9au.jpg',
            photographer: 'Credit: FKA Twigs / YouTube'
        },
        {
            image: 'https://i.imgur.com/DjWfnIy.jpg',
            photographer: 'Matthew Stone'
        },
        {
            image: 'https://i.imgur.com/2RFOUvy.jpg',
            photographer: 'Orograph'
        },
        {
            image: 'https://i.imgur.com/8U09AZW.png',
            photographer: 'Jamie-James Medina'
        },
        {
            image: 'https://i.imgur.com/SF0pXOh.png',
            photographer: 'Orograph'
        }
    ]

    await Gallery.insertMany(galleries)
    console.log("Here is the gallery!")
}
const run = async () => {
    await main()
    db.close()
}

run()