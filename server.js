const express = require('express');
const app = express();
const PORT = 8000;

const houseStark = {
    'ned stark': {
        'born': '263 AC',
        'title': 'Lord of Winterfell',
        'actor': 'Sean Bean',
        'wolf': 'None'
    },
    'catelyn stark': {
        'born': '265 AC',
        'title': 'Lady of Winterfell',
        'actor': 'Michelle Fairley',
        'wolf': 'None'
    },
    'robb stark': {
        'born': '283 AC',
        'title': 'King in the North',
        'actor': 'Richard Madden',
        'wolf': 'Grey Wind'
    },
    'sansa stark': {
        'born': '286 AC',
        'title': 'Princess',
        'actor': 'Sophie Turner',
        'wolf': 'Lady'
    },
    'arya stark': {
        'born': '289 AC',
        'title': 'Princess',
        'actor': 'Maisie Williams',
        'wolf': 'Nymeria'
    },
    'bran stark': {
        'born': '290 AC',
        'title': 'Prince of Winterfell',
        'actor': 'Isaac Hempstead Wright',
        'wolf': 'Summer'
    },
    'rickon stark': {
        'born': '295 AC',
        'title': 'Prince of Winterfell',
        'actor': 'Art Parkinson',
        'wolf': 'Shaggydog'
    },
    'jon snow': {
        'born': '283 AC',
        'title': 'Lord Commander of the Night\'s Watch',
        'actor': 'Kit Harington',
        'wolf': 'Ghost'
    },
    'unknown': {
        'unknown': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/api/:member', (req, res) => {
    const familyMember = req.params.member.toLowerCase();
    
    // A bit extra, but made the app to work if they
    // only search for first name only (ex. 'jon', 'ned')
    const filterArr = Object.entries(houseStark).filter(character => character[0].includes(familyMember));

    if (houseStark[filterArr[0][0]]) {
        res.json(houseStark[filterArr[0][0]]);
    } else {
        res.json(houseStark['unknown']);
    }

})

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`);
})