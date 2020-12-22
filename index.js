/******************************************
 * the goal is to call the coinranking api and 
 * save in a variable using any http request
 * 
 *************************************/


// const fetch = require('node-fetch')
// let coins

// fetch('https://api.coinranking.com/v2/coins')
// .then(response=>response.json())
// .then(data=>coins=data)
// .then(()=>{return coins})

// console.log(coins)


// const axios = require('axios')

// let coins;
//  axios.get("https://api.coinranking.com/v2/coins")
//  .then(response=>coins = response)
//  .catch((err)=> console.log(err))
//  console.log(coins)

// const call = async (data)=>{
//     async function callcoins(){
//         return new Promise((resolve,reject)=>{
//             axios.get("https://api.coinranking.com/v2/coins")
//             .then(response=>resolve(response), console.log(response))
//             .catch(errx=>reject(errx))

//         })
//     }
//     try {
//         coins = await callcoins()
//         console.log(coins)
    
//     }catch(err){
//         console.log(err.response)
//     }
  
// }
// c