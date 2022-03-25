const hello = document.getElementById('hello')
const title = document.getElementById('title')
const cardText = document.getElementById('card-text')
const todoId = document.getElementById('todo-id')

const quoteTitle = document.getElementById('quoteTitle')
const quote = document.getElementById('quote')
const btn = document.getElementById('btn')

let BASE_URL = 'https://jsonplaceholder.typicode.com/posts/1'

// BASE_URL = 'https://api-mobilespecs.azharimm.site/v2/brands'

// fetch(BASE_URL)
// .then((response) => response.json())
// .then((json) => {
//     console.log(json)
//     title.innerText = json.title
//     cardText.innerText = json.body
//     todoId.innerHTML = `${json.id} - ${json.userId}`
// });

// fetch(BASE_URL)
// .then((response) => response.json())
// .then((json) => {
//     console.log(json)
//     title.innerText = json.data[0].brand_name
//     cardText.innerText = json.data[0].brand_slug
// });

// BASE_URL = 'https://api.quotable.io/random'
// async function getQuotes(){
//     const result = await fetch(BASE_URL)
//     const data = await result.json()
//     quoteTitle.innerText = data.author
//     quote.innerText = data.content
// }

// getQuotes()

// btn.addEventListener("click", getQuotes)

$(document).ready(()=>{
    $.ajax({
        url: BASE_URL,
        type: 'get',
        dataType: 'json',
        success: function(result){
            $('#title').text(result.title)
        },
        error: () => {
            $('#title').text('Something wrong happened')
        }
    })

    const handleSubmit = () => {
        BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
        $.ajax({
            url: BASE_URL,
            type: 'post',
            body:{
                title: $("#postTitle").val(),
                body: $("#postBody").val(),
                userId: Math.floor(Math.random()*10),
            },
            success: function(result){
                console.log('Masuk')
                console.log($("#postTitle").val())
                console.log($("#postBody").val())
                console.log(Math.floor(Math.random()*10))
            },
            error: () => {
                console.log('Error')
            }
        })
    }
    $("#submitBtn").click(handleSubmit)
})