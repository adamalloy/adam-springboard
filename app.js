console.log("Let's get this party started!");
async function searchFor() {
let input = document.querySelector("input").innerText;
let res = await axios.get('http://api.giphy.com/v1/gifs/search?q=${input}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym');
document.querySelector('body').append(res.data[1].url);
console.log(res)
};

document.querySelector('button').addEventListener('click', searchFor);