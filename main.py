import os

from flask import Flask, render_template, request, jsonify
from google import genai

app = Flask("tripPlanner")

# Reads the key from the environment variable set in Railway
client = genai.Client(api_key=os.environ["GOOGLE_GEMINI"])


@app.route("/")
def tripPlanner():
    return render_template("tripPlannerpt2.html")


@app.route("/receiveDestination", methods=["POST"])
def receiveDestination():
    currentLocation = request.form["currentLoc"]
    destination = request.form["dest"]
    depatureTime = request.form["depTime"]

    print(currentLocation)
    print(destination)
    print(depatureTime)

    response = client.models.generate_content(
        model="gemini-3.1-flash-lite-preview",
        contents=f'''
            Give me facts about {destination} like the general current weather, places to visit while there
            Give me food recommendations for {destination}
            Give me the possible arrival time for {destination}
            I am departing from {currentLocation} at {depatureTime} Use less than 100 words
        '''
    )
    print(response.text)

    return jsonify({"answer": response.text})
