console.log("Let's get this party started!");

const $gifarea = $('#gifs');

async function searchFor() {
let input = document.querySelector("input").value;
let res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {
    q: input, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
}});
let $newGif = $("<img>", {
    src: res.data.data[1].images.original.url,
    class: "w-100"
});
let $col = $("div");
$col.append($newGif)
$gifarea.append($col);
};

function del() {
    $gifarea.empty();
}

//document.querySelector('button').addEventListener('click', searchFor);