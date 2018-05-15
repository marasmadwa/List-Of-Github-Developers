let users = ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs'];

const userStars = (user) => {
    fetch('https://api.github.com/users/' + user + '/repos?per_page=150', {
        // method: 'get',
        // headers: new Headers({
        //     'Authorization': 'Basic ' + btoa('login:password'),
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // })
    }).then(function (response) {
        return response.json();
    }).then(function (responseJson) {
        let allStars = 0;

        for (let i = 0; i < responseJson.length; i++) {
            allStars += responseJson[i].stargazers_count
        }
        let currentStars = document.getElementById(user + 'stars');
        currentStars.innerHTML = allStars;
    })
};

const userNamesAndRepos = (user) => {
    fetch('https://api.github.com/users/' + user, {
        // method: 'get',
        // headers: new Headers({
        //     'Authorization': 'Basic ' + btoa('login:password'),
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // })
    }).then(function (response) {
        return response.json();
    })
        .then(function (responseJson) {
            let currentUser = document.getElementById(user);
            let currentProject = document.getElementById(user + 'project');
            currentUser.innerHTML = responseJson.name;
            currentProject.innerHTML = responseJson.public_repos;
        });
};

users.forEach(userNamesAndRepos);
users.forEach(userStars);


export default {
    userNamesAndRepos, userStars
}







































