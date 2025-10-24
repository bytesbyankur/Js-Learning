async function get() {
    const res = await fetch("https://api.github.com/users/octocat")
    const data = await res.json()
    console.log("Login: ", data.login)
    console.log("ID: ", data.id)
    console.log("Avatar Url: ", data.avatar_url)
}
get()