import Character from '../interfaces/character'
import OriginLocation from '../interfaces/originLocation'

export const characterMock: Character = {
    created: '2017-11-04T18:50:21.651Z',
    episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2"
    ],
    gender: 'Male',
    id: 2,
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    location: {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    name: 'Morty Smith',
    origin: {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    species: 'Human', 
    status: 'Alive',
    type: '',
    url: 'https://rickandmortyapi.com/api/character/2'
}

export const profileListMock: Character[] = [
    {
        created: '2017-11-04T18:50:21.651Z',
        episode: [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2"
        ],
        gender: 'Male',
        id: 2,
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        location: {
            "name": "Earth",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        name: 'Morty Smith',
        origin: {
            "name": "Earth",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        species: 'Human', 
        status: 'Alive',
        type: '',
        url: 'https://rickandmortyapi.com/api/character/2'
    },
    {
        created: '2017-11-04T18:48:46.250Z',
        episode: [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
        ],
        gender: 'Male',
        id: 1,
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        location: {
            name: "Earth",
            url: "https://rickandmortyapi.com/api/location/20",
        },
        name: 'Rick Sanchez',
        origin: {
            name: "Earth",
            url: "https://rickandmortyapi.com/api/location/1",
        },
        species: 'Human', 
        status: 'Alive',
        type: '',
        url: 'https://rickandmortyapi.com/api/character/2'
    }
]


export const originLocationMock: OriginLocation = { 
    dimension: 'unknown',
    created: '2017-11-10T13:08:13.191Z',
    id: 3,
    name: 'Citadel of Ricks',
    residents: [
        "https://rickandmortyapi.com/api/character/8",
        "https://rickandmortyapi.com/api/character/14",
    ],
    type: 'Space station',
    url: 'https://rickandmortyapi.com/api/location/3'
}

export const episodeList = [
    'Pilot',
    'Lawnmower Dog',
    'Anatomy Park',
    'M. Night Shaym-Aliens!',
    'Meeseeks and Destroy',
    'Rick Potion #9',
    'Raising Gazorpazorp',
    'Rixty Minutes',
    'Something Ricked This Way Comes',
    'Close Rick-counters of the Rick Kind',
    'Ricksy Business'
]