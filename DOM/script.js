const p = document.createElement('p');
p.innerText = "Hey I'm red!"
p.style.color = 'red';


const h3 = document.createElement('h3');
h3.innerText = ("I’m a blue h3!")
h3.style.color = 'blue'

const div = document.createElement('div')
div.setAttribute('style', "border: 4px solid black; background: pink;")

const h1 = document.createElement('h1')
h1.innerText = "I’m in a div"

const pInDiv = document.createElement('p')
pInDiv.innerText = ("ME TOO!")

div.appendChild(h1)
div.appendChild(pInDiv)

const container = document.querySelector("#container")


container.appendChild(p)
container.appendChild(h3)
container.appendChild(div)