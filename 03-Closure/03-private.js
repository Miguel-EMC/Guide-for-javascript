const person = () =>{
    var saveName = "Name";
    return {
        getname: () =>{
            return saveName;
        },
        setName: (name) =>{
            saveName = name;
        }
    };
};

newPerson = person();
console.log(newPerson.getname());

newPerson.setName("Miguel");
console.log(newPerson.getname());