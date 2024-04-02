🤖 Vue Maps
Internal TCK project in Vue 3, TypeScript, and Vuex.

Vue Maps application retrieves your location, and from that point, you can search for destinations. When you select a destination, it will automatically display the driving route on the map and tell you the distance in kilometers and how far it is from your location.

Currently, I'm using Mapbox for map presentation and polyfills.

Technological Stack
Name	Version
Language	TypeScript	^4.9.5
Framework	Vue.js (SFC)	^3.2.13
Store	Vuex	^4.0.0
⚠️ Prerequisites
Node v18.10.0 or later version.

🛠 Installation
Clone the project using git:

bash
Copy code
git clone git@github.com:Amampel/Vue-Maps.git
To install dependencies, run:

bash
Copy code
npm install
To run the project in development mode, execute:

bash
Copy code
npm run serve
This will start a server locally (http://localhost:8080/).

The page will automatically render when there are changes. Errors can also be viewed in the console.

📌 Start Production Mode
Compilation, minification, and preview of the production mode.

arduino
Copy code
npm run build
npm run preview
⚙️ Other Useful Commands
Linter
Every time a commit is made, the Husky hook will execute the linter. But it can also be done manually with:

arduino
Copy code
npm run lint:all
The project also uses a linter from package.json that organizes, lints in search of errors, and structures the content according to the configuration defined in the .fixpackrc file.

If any modifications are made to package.json when committing, it will execute the Husky hook that will run the fixpack linter. If it fails, we should execute the following command to format the package.json according to the defined rules:

Copy code
fixpack
📍 Interesting Points
Development Notes:
The entire application is built using Vue 3, specifically the Composition API using the syntactic sugar script setup. For more information, refer to Docs.
