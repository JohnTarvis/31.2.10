const fNumber = 13;
const favoriteNumberURL = `http://numbersapi.com/${fNumber}?json`;

window.onload = init;

async function init(){
    document.getElementById('fatn').innerHTML = fNumber;

    const fact1 = document.getElementById('fact1');
    const fact2 = document.getElementById('fact2');
    const fact3 = document.getElementById('fact3');
    const fact4 = document.getElementById('fact4');

    const res1 = await axios.get(favoriteNumberURL);
    const res2 = await axios.get(favoriteNumberURL);
    const res3 = await axios.get(favoriteNumberURL);
    const res4 = await axios.get(favoriteNumberURL);

    console.log(res1);
    
    fact1.innerHTML = res1.data.text;
    fact2.innerHTML = res2.data.text;
    fact3.innerHTML = res3.data.text;
    fact4.innerHTML = res4.data.text;

}



