/*   const request_url = "https://api.github.com/users/amjadxdev"

  fetch(request_url).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);
  }).finally(
    console.log("done")
  )
 */


//   const promises = new Promise(function(resolve, reject) {
//     ///Do an async task
//     // DB calls
//     // cryptograpy, network calls

//     setTimeout(function() {
//         console.log("async task is complete");
//         resolve();
        
//     },1000)
//   })

//   promises.then(function(resolve) {
//     console.log("promise consume");
//   }).catch(
//     console.log("error")
//   )


/* new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("set interval")
        resolve()
    }, 1000);
}).then(() => {
    console.log("then consume");
    
}) */


    // const promiseThree = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         console.log("Fetch data from database in promiseThree");
    //         resolve({userName : "Xon",
    //             email : "xon@example.com"
    //         });
            
    //     },1000)
    // }).then((user) => { 
    //     console.log(user);
    // })
  

/*     const promiseFour = new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            console.log("Fetch data from database in promiseFour");
            if (!error) {
                resolve({userName : "Xon", email : "xon@example.com"  });
            }else{
                reject({userName : "not found",})
            }
            
        },1000)
    }).then((user) => { 
        console.log(`${user}`);
        return user.userName;
    }).then((userName)=> {
        console.log(userName);
        
    }).catch((error) => {
        console.log(error);
        
    }).finally(() =>
    {
        console.log("Finally the promise is either resolve or rejected!");
    }) */



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({userName : "Xohan", password : 1234});
        }else{
            reject(`Error: Js went wrong`)
        }
        
    }, 1000);
});

async function consumePromiseFive() {
    try{
        const respose = await promiseFive;
    console.log(respose);
    } catch(error){
        console.log(error);
        
    }
    
}

// consumePromiseFive()

// both santax are ok .then .catch or async await.

async function getAllUsers() {
    try{
        const respose = await fetch('https://api.github.com/users/amjadxdev')

    const data = await respose.json();
    console.log(data);
    }catch(error) {
        console.log(error);
        
    }
    
}

getAllUsers()