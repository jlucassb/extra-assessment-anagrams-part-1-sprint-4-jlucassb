
function getAnagramsOf(input){
}

const button = document.getElementById("findButton");

button.addEventListener("click", function () {

    let typedText = document.getElementById("input").value
    let textRight = alphabetize(typedText)
    const text = document.createElement('p')
    text.textContent = textRight
    getAnagramsOf(typedText)
    document.body.appendChild(text)
    return text
})



function alphabetize(a){
    return a.toLowerCase().split("").sort().join("").trim()
}
