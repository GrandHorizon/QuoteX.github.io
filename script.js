const quote = document.getElementById("quote")
const quoteAuthor = document.getElementById("quote-author")
const GenButton = document.querySelector(".Gen-Button")
const copyButton = document.querySelector("#copy-button")
const scrollAnimationDiv = document.querySelector(".source-code")




const url = "https://api.quotable.io/random"

async function getquote(url){
    const response = await fetch(url);
    let data = await response.json()
    // console.log(data)
    quote.innerHTML = data.content;
    quoteAuthor.innerHTML = data.author;
}
// getquote(url)

GenButton.addEventListener("click", ()=>{
    getquote(url)
})

