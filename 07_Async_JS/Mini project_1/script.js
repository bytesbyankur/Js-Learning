const btn = document.getElementById("getUserBtn");
const userImg = document.getElementById("userImg");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userCountry = document.getElementById("userCountry");
const userGender = document.getElementById("gender");

async function getUser() {
    try{
        userName.textContent = "Loading..... Please Wait";
        userEmail.textContent = "";
        userCountry.textContent = "";
        userImg.scr = "";

        const res = await fetch("https://randomuser.me/api/");
        if(!res.ok){
            throw new Error("Network Error!!");
        }

        const data = await res.json();
        const user = data.results[0];

        userImg.src = user.picture.large;
        userName.textContent = `${user.name.first} ${user.name.last}`;
        userEmail.textContent = `📧 ${user.email}`;
        userCountry.textContent = `🌍 ${user.location.country}`;
        if(user.gender == "male" || user.gender == "Male"){
            userGender.textContent = `♂ ${user.gender}`
            document.body.style.backgroundColor = 'lightblue'
        }
        else if(user.gender == "female" || user.gender == "Female"){
            userGender.textContent = `♀ ${user.gender}`
            document.body.style.backgroundColor = 'lightpink'
        }
        
    }
    catch(err){
        userName.textContent = "Failed to load user 😞";
        console.error(err);
    }
}

btn.addEventListener("click", getUser)