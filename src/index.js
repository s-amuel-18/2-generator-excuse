import "./sass/sass.scss"
let who = [`mi tortuga`,`mi gato`,`mi perro`,`el zorrillo`]
let what  = [`rompio`,`mordio`,`aruño`,`destroso`]
let when  = [`mi ropa`,`la tarea`,`el libro`,`mi celular`]
let whoLength = who.length - 1
let whatLength  = what.length - 1
let whenLength  = when.length - 1
const button = document.getElementById(`button`)
const excuse = document.getElementById(`excuse`)

button.addEventListener(`click`, ()=> {
  // let numberRandom=Math.round(Math.random()) *3
  
  excuse.textContent = `${who[Math.round(Math.random() * whoLength)]} ${what[Math.round(Math.random() * whatLength)]} ${when[Math.round(Math.random() * whenLength)]}`

  console.log(who[Math.round(Math.random()) * whoLength])
  console.log(Math.round(Math.random() * whoLength ))
  console.log(whoLength)
})