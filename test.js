/*let name = "Mwende"

console.log(`Hello, I am ${name}`)

//"<p>" + allTasks[num] + "</p>" + "<button onclick = erase("+ num +")>x</button>")

`
	<div class ="d-flex flex-row mb-3">
	<p> ${allTasks[num]} </p>
	<button onclick = erase (${num}) > x </button>
	</div>
	`*/

let link = "https://catfact.ninja/fact?max_length=140"

async function getFact()
{
	let link = "https://catfact.ninja/fact?max_length=140"
	let response = await fetch(link)
	console.log(await response.json())
}

getFact()