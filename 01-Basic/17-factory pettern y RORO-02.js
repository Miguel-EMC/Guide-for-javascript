function requiredParam(param){
    throw new Error(param + " Este parametro es obligatorio");
}

function createStudent({
    name = requiredParam("name"),
    age = requiredParam("age"),
    email = requiredParam("email"),
    twitter,
    facebook,
    approveddCourse,
    learningPaths
}
){
    return{
        name,
        age,
        email,
        approveddCourse,
        learningPaths,
        socialMedia:{
            twitter,
            facebook
        }   
    }
}

const juan = createStudent({
    name: 'Miguel',
    age: 21,
    email: 'miguel@example.com',
    twitter:'miguel-EMC'
}); //{}