function setUsername(username){
    this.username=username;
}

function createUser(username, email, password){
    setUsername.call(this, username);
    this.email=email;
    this.password=password;
}


const sha = new createUser("shakti", "abc@gmai", "abc")
console.log(sha)