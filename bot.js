async function getFact(query)
{
	let link = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent"

	let apiKey = "AIzaSyDNurCTTg6Injy7hs5fLvjllnTOXIt1iyw"
	let response = await fetch(link,{
		"method":"post",
		"headers":{
			"x-goog-api-key":apiKey,
			"Content-type":"application/json"
		},
		"body":JSON.stringify({
			contents:[{
				parts:[{text:"what's the distance from earth to jupiter?"}]
			},
		],
		})
	})
	let data = await response.json()
	{
		console.log(data)
	}
	if (data){

		let text = data.candidates[0].content.parts[0].text

	console.log(text)

	}
	}
	let query = `
			Give me facts about nairobi like the general current weather, places to visit while there
			Give me the possible arrival time for nairobi
			I am departing from sydney at midnight
		`  



getFact(query)

