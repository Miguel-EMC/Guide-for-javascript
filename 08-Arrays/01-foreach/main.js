const letters = ["a", "b", "v"];

for (let i = 0; i < letters.length; i++) {
  const element = letters[i];
  console.log(element);
}

letters.forEach((item) => console.log("foreach", item));

function fetchData() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}


async function awaitData(){
    try{
        let response = await fetch("https://rickandmortyapi.com/api/character")
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.error(error)
    }
}