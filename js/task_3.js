//працюємо з колекцією МАСИВ ОБ'ЄКТІВ
//перебираємо цмклом
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
]
// const friendsStatus = function (allFriends) {
//     const stats = {
//         online: [],
//         offline: [],
//     }
//     for (const friend of allFriends) {

//         if (friend.online) {
//             stats.online.push(friend)
//             continue
//         }
//             stats.offline.push(friend)
        
//     }
//         return stats
// }

// console.log(friendsStatus(friends))

// розприділяємо в масиві друзів які онлайн і які оффлайн
const friendsStatus = function (allFriends) {
    const stats = {
        online: [],
        offline: [],
    }
    for (const friend of allFriends) {
        const key = friend.online ? 'online' : 'offline' /// !!!!
        stats[key].push(friend)  /// !!!
    }
        return stats
}

console.log(friendsStatus(friends))