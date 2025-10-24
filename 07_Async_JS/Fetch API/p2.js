async function get() {
    try {
        const res = await fetch("https://api.github.com/users/unknown_user_12345");
        const data = await res.json();

        // Access only specific details
        console.log("Login:", data.login);
        console.log("ID:", data.id);

        if (!res.ok) {
            throw new Error("User not found!"); // throw our custom error
        }

    } catch (err) {
        console.error( err);
    }
}

get();