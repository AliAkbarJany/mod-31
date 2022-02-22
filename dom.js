document.getElementById('add-border').addEventListener('click', function () {
    // console.log('click button')
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid red';

})


function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    // debugger;
    for (const friend of friends) {
        friend.style.background = 'gray';
    }

    /* const friends = document.getElementsByClassName('friend');
    for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    friend.style.background = 'gray';
    console.log(friend);
    } */
}


document.getElementById('add-friend').addEventListener('click', function () {
    // console.log('click')
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">new FRIEND-5</h3>
    <p>Placeat, vero.</p>

    `
    container.appendChild(friendDiv);
})
