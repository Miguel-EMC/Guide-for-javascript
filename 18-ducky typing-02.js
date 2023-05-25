function requiredParam(param){
    throw new Error(param + " Este parametro es obligatorio");
}

function createLearningPath({
    name = requiredParam("name"),
    course = [],
}){
    const private = {
        "_name": name,
        "_course":course
    };
    const public = {
        get name(){
            return private["_name"];
        },
        set name(newName){
          if(newName.length != 0){
                private["_name"] = newName;
            } else{
                console.warn("tu nombre debe tener al menos 1 caracter");
            }
        },
        get courses(){
            return private["_courses"];
        },
        set courses(newcourses){
          if(newcourses.length != 0){
                private["_courses"] = newcourses;
            } else{
                console.warn("tu nombre debe tener al menos 1 caracter");
            }
        }
    };

    return public;
}