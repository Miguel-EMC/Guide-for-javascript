/**
 * 
 * 
 * Promise()

Estados: 
pending
fullfilled
Rejected 

callbacks:
resolve
reject

 * 
 */


async (params) => {
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
           let operationsSuccessful = true; 
           if(operationsSuccessful){
            resolve("La operacion fue exitosa")
        } else {
            reject("Fallo de operacion")
        }
        }, 2000);
    
    });
}