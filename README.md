#  🤖 Vue Maps

![alt text](https://github.com/amampel/Vue-Maps/blob/main/vue-maps-image.png?raw=true)

Internal project handmade in Vue 3, TypeScript, and Vuex.

Vue Maps application retrieves your location, and from that point, you can search for destinations. When you select a destination, it will automatically display the driving route on the map and tell you the distance in kilometers and how far it is from your location.

Currently, I'm using Mapbox for map presentation and polyfills.

## Technological Stack

|               | Name        | Version |
| ------------- | ----------- | ------- |
| **Language**  | typescript  | ^4.9.5  |
| **Framework** | vuejs (SFC) | ^3.2.13 |
| **Store**     | VueX        | ^4.0.0  |

## ⚠️ Prerequisites
Node v18.10.0 or later version.

## 🛠 Installation
Clone the project using git:

```bash
git clone git@github.com:Amampel/Vue-Maps.git
```

To install dependencies, run:

```bash
npm install
```

To run the project in development mode, execute:

```bash
npm run serve
```

This will start a server locally (http://localhost:8080/).

The page will automatically render when there are changes. Errors can also be viewed in the console.

### 📌 Start Production Mode
Compilation, minification, and preview of the production mode.

```
npm run build
npm run preview
```

## ⚙️ Other Useful Commands

### Linter

Every time a commit is made, the Husky hook will execute the linter. But it can also be done manually with:

```
npm run lint:all
```

The project also uses a linter from package.json that organizes, lints in search of errors, and structures the content according to the configuration defined in the .fixpackrc file.

If any modifications are made to package.json when committing, it will execute the Husky hook that will run the fixpack linter. If it fails, we should execute the following command to format the package.json according to the defined rules:

```
fixpack
```

## 📍 Interesting Points
### Development Notes:
The entire application is built using Vue 3, specifically the Composition API using the syntactic sugar script setup. For more information, [Docs](https://v3.vuejs.org/api/sfc-script-setup.html#basic-syntax).
