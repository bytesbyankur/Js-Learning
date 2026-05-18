async function fetchGitHubUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();
    return userData;
}

function displayUserData(userData) {
    const userInfoDiv = document.getElementById('results');
    userInfoDiv.innerHTML = `
        <h2>${userData.name} (${userData.login})</h2>
        <img src="${userData.avatar_url}" alt="${userData.login}'s avatar" width="150">
        <p>Public Repositories: ${userData.public_repos}</p>
        <p>Followers: ${userData.followers}</p>
        <p>Following: ${userData.following}</p>
        <p>Bio: ${userData.bio || 'N/A'}</p>
    `;
}

document.getElementById('searchBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const username = document.getElementById('search').value;
    const userData = await fetchGitHubUser(username);
    displayUserData(userData);
});
