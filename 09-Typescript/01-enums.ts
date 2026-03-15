enum ROLES  {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest'
}

type User = {
    username: string,
    role: ROLES
}

const  user1: User = {
    username: 'john_doe',
    role: ROLES.ADMIN
}

const  user2: User = {
    username: 'jane_doe',
    role: ROLES.USER
}

console.log(user1);
console.log(user2);
