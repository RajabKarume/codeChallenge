// write your code here
let likeButton = document.getElementById("like-button")
let likeCount = document.getElementsByClassName("likes")[0].innerHTML[0];
let commentForm = document.getElementById("comment-form")
span = document.getElementById("like-count");

function getImages(){
    fetch('http://localhost:3000/images/1') 
    .then((resp) => resp.json())
    .then((data) => {
        document.getElementById("card-title").innerText = data.title;
        document.getElementById("card-image").src = data.image;
        document.getElementById("card-image").alt = data.title;
    });
}

function getComments(){
    fetch(`http://localhost:3000/images/1/comments/`)
    .then((resp) => resp.json())
    .then((data) => {
        let comments = [];
        for(let i=0; i<data.length; i++){
            let arr = data[i].content;
            comments.push(arr)
        }
        // console.log(comments)
        document.getElementById("comments-list").innerHTML = comments.map((comments) =>`<li>${comments}</li>`).join("")
    })
}

document.addEventListener("DOMContentLoaded", () => {
    getImages()
    getComments()
    commentForm.addEventListener("submit", (e) => {e.preventDefault()
        let newComment = document.getElementById("comment").value;
        document.getElementById("comment-form").innerHTML += `<li>${newComment}</li>`;
        });
        likeButton.addEventListener("click", (e) =>{e.preventDefault()
            likeCount = parseInt(likeCount)+1;
            span.innerText = `${likeCount} likes`;
            // console.log(likeCount)
            // console.log(counter)
        })
    
})








