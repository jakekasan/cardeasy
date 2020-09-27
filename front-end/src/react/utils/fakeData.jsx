export const FAKE_DESIGNS = [
    "CLASSIC",
    "VINTAGE",
    "FUTURISTIC",
    "BLUE",
    "RED",
    "PURPLE",
    "PINK",
    "TURQUOISE"
].map((item, i) => Object.assign({}, {text: item}, {id: i}))


export const FAKE_OCCASIONS = [
    "Birthday",
    "Anniversary",
    "Moved house",
    "Graduated",
    "Christmas",
    "Promotion"
].map((item, i) => Object.assign({}, {text: item}, {id: i}))

let just_users = [
    {
        id: 0,
        name: "Bart Simpson",
        email: "elbarto@aykaramba.com"
    },
    {
        id: 1,
        name: "Lisa Simpson",
        email: "lisa.simpson@springfield.com"
    },
    {
        id: 2,
        name: "Homer Simpson",
        email: "homie@npp.com"
    },
    {
        id: 3,
        name: "Marge Simpson",
        email: "marge.simpson@springfield.com"
    },
    {
        id: 4,
        name: "Maggie Simpson",
        email: "the.baby@springfield.com"
    },
    {
        id: 5,
        name: "Luke Skywalker",
        email: "luke.skywalker@rebel.alliance"
    },
    {
        id: 6,
        name: "Darth Vader",
        email: "annie@empire.imp"
    },
    {
        id: 7,
        name: "Ross Geller",
        email: "rossatron@museum.ny"
    },
    {
        id: 8,
        name: "Rachel Greene",
        email: "r.greene@ralph-lauren.com"
    },
    {
        id: 9,
        name: "Monica Geller",
        email: "mon@javu.com"
    },
    {
        id: 10,
        name: "Pheobe Buffay",
        email: "pheebs@yahoo.com"
    },
    {
        id: 11,
        name: "Chandler Bing",
        email: "chanandler.bong@yahoo.com"
    },
    {
        id: 12,
        name: "Joey Tribianni",
        email: "joe@dool.com"
    }
]

export const FAKE_CARDS = [
    {
        id: 0,
        design: 0,
        occasion: 0,
        recipient: 0,
        sender: 1,
        collaborators: [
            2,3,4,5
        ]
    },
    {
        id: 1,
        design: 0,
        occasion: 0,
        recipient: 7,
        sender: 8,
        collaborators: [
            2,6
        ]
    },
    {
        id: 2,
        design: 0,
        occasion: 0,
        recipient: 10,
        sender: 9,
        collaborators: [
            2,6,7,8
        ]
    },
    {
        id: 3,
        design: 0,
        occasion: 1,
        recipient: 7,
        sender: 6,
        collaborators: [
            2,12,11,10,9,8
        ]
    },
    {
        id: 4,
        design: 0,
        occasion: 2,
        recipient: 6,
        sender: 5,
        collaborators: []
    }
].map(card => {
    return {
        ...card,
        design: FAKE_DESIGNS.find(d => d.id === card.design),
        occasion: FAKE_OCCASIONS.find(o => o.id === card.occasion),
        recipient: just_users.find(u => u.id === card.recipient),
        sender: just_users.find(u => u.id === card.sender),
        collaborators: card.collaborators.map(collab => {
            return just_users.find(u => u.id === collab)
        })
    }
})


export const FAKE_USERS = just_users.map(user => {
    return {
        ...user,
        cards: FAKE_CARDS.filter(card => user.id === card.sender.id || card.collaborators.map(c => c.id).includes(user.id))
    }
})