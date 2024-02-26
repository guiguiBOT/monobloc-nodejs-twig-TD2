const mainRouter = require('express').Router()

mainRouter.get('/', (req, res)=>{
    try {
        res.render('index.twig', {
            isConnected: true,
            age: 19
        })
    } catch (error) {
        
    }
})

module.exports = mainRouter