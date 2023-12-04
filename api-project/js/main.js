import '../css/style.css';
//npm run dev; npm run preview

const URL = `https://api.isevenapi.xyz/api/`;
async function getData(URL){
    try{
        //whem u ask the computer for smth, you are requesting a response REST APIs; relational estfdjkg transfer;
        const response = await fetch(URL); 
        console.log(response);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
        //convert response to JSON
        const data = await response.json();
        document.querySelector("h1").textContent = data.content;
    } catch (error) {
        console.log(error, "uh oh");
        document.querySelector("h1").textContent = "sdcbvjhb";
    }
}
getData(URL);