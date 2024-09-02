const users = [
    { login: "indozer", balance: 15000 },
    { login: "lanvin", balance: 10000 },
    { login: "camel", balance: 20000 },
];

const sumBalance = users.reduce((acc, num) => {
    return acc + num.balance
}, 0);

console.log(sumBalance);

const friends = [
    { name: 'Artem', friend: 'Makar' },
    { name: 'Ruslan', friend: 'Artem' },
    { name: 'Denis', friend: 'Makar' }
]

const selectedFriend = friends.reduce((acc, obj) => {
    if (obj.friend === 'Makar') {
        acc.push(obj)
    }
    return acc
}, [])
console.log(selectedFriend);

const friendsTwo = [
    { name: 'Artem', friend: 6 },
    { name: 'Ruslan', friend: 9 },
    { name: 'Denis', friend: 0 }
]

const sortFriend = friendsTwo.sort((a, b) => a.friend - b.friend)
console.log(sortFriend)

const usersTwo = [
    { name: 'Artem', skills: ["JavaScript", "HTML", "CSS"] },
    { name: 'Ruslan', skills: ["Python", "CSS", "Django"] },
    { name: 'Denis', skills: ["JavaScript", "Node.js", "Python"] }
];

const filterUsers = usersTwo.flatMap((user) => user.skills).filter((skill, index, array) => array.indexOf(skill) === index).sort()

console.log(filterUsers)