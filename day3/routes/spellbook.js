const database = [
    {
        _uid: '1',
        castingTime: '1 reaction, which you take when you are hit by an attack or targeted by the magic missle spell',
        description: 'An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missle',
        duration: 'Instantaneous',
        level: 1,
        material: '',
        name: 'Shield',
        range: 'Self',
        school: 'Abjuration',
        somatic: true,
        verbal: true,
    },
    {
        _uuid: '2',
        castingTime: '1 action',
        description: 'You utter a word of power that can compel one creature you can see within range to die instantly. If the creature you choose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect.',
        duration: 'Instantaneous',
        level: 9,
        material: '',
        name: 'Power Word Kill',
        range: '60 feet',
        school: 'Enchantment',
        somatic: false,
        verbal: true
    }
];

function getSpellIndex(id) { return database.findIndex(spell => spell._uuid === id) };
    
const express = require('express');
const router = express.Router();

// Get all the spells
router.get('/', (req, res) => {
    res.send(database);
});

router.get('/spell/:id', (req, res) => {
    const index = getSpellIndex(req.params.id);
    if (index < 0) {
        res.send({ message: 'Invalid spell' });
    } else {
        res.send(database[index]);
    }
});

module.exports = router;