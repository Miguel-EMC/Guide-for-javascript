function createStudent({
    name,
    age,
    email,
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
        socialMedia:{
            twitter,
            facebook
        },
        approveddCourse,
        learningPaths02
        
    }
}

const juan = createStudent({
    name: 'Miguel',
}); //{}