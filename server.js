const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const heroes = {
    'Dazzle': {
        'Attack-Type': 'Ranged',
        'Attribute': 'Intelligence',
        'Lore': 'Born to support his cohorts in battle, Dazzle keeps wounded allies alive so they might later rain death upon the enemy. His strange magic weaves its way into nearby armor, weakening enemies and strengthening friends.'
    },
    'Chaos Knight': {
        'Attack-Type': 'Melee',
        'Attribute': 'Strength',
        'Lore': 'Chaos Knight is an army unto himself. Able to summon a cavalry of clones to demolish enemy defenses, should an enemy present itself, he can rift reality to pull him and his phantasms close enough to rain brutal cudgel blows upon their head.'
    },
    'Phantom Assassin': {
        'Attack-Type': 'Melee',
        'Attribute': 'Agility',
        'Lore': 'The moment she finds her prey, Phantom Assassin strikes. Instantly closing in on a target, she effortlessly dodges attacks as she relentlessly cuts away at her foe. Without warning, any one of her attacks could prove suddenly and brutally fatal.'
    }
    
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:characterName', (request, response) => {
    const heroesName = request.params.characterName.toLowerCase()
    if(heroes[heroesName]){
        response.json(heroes[heroesName])
    } else {
        response.json(heroes['Missing...'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})