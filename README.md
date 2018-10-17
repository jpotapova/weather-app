### Instructions

Prerequisites: node, Ruby

To run a local development environment:

1. clone the repository to your machine
2. cd into project root directly
3. run `npm install`
4. run `npm run db` - this will start a simple json with fake REST API (which is necessary to manage a massive list of cities)
5. open new tab/window in terminal/console and make sure you are in the project root directory
6. run `npm start`

To perform automated code checks run `npm test` instead of `npm start`.


### Branches

`dev` - development environment

`prod` - production package (minified code)

### Intender behaviour

Click heart icon to view a list of Favourite cities.

Click crosshairs icon to view current weather in your location. It takes a couple of seconds for the browser to obtain your location, please be patient. If the message states, that is was not possible to retrieve your location, please make sure you don't block this feature in browser settings.

Click earth icon to view a list of countries.
Each country in the list is clickable and once a country is selected, you will be provided with a list of 5 cities (and a corresponding map) for that country. The limit of 5 was chosen in order to not exceed the weather API quota very quickly.

Click search icon to proceed to a search page. Your search term will be submitted **only** when you click "Update results" button. Search returns 10  cities that partially match the search term.

### Technologies and APIs used

The app is using openweathermap API to get weather information and Google Maps to display weather information on the map.

Favourites are stored in local storage.

Countries and cities are stored in a massive JSON file, which is served using json-server. Json-server is a third-party tool, that creates a fake REST API.
