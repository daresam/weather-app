var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Dare'
    };
    // callback(user);
    setTimeout(() => {
        callback(user);
    }, 2000);
};

getUser(2, (user) => {
    console.log(user)
});