# 🤖 Vue Maps

Proyecto interno de TCK en Vue 3, typescript and Vuex.

La aplicación Vue Maps extrae tu ubicación y a partir de ese momento puedes buscar destinos, cuando selecciones un destino automaticamente se mostrará el camino que tienes que hacer en coche en el mapa y te dirá a cuantos kilometros está y a cuanta distancia de tu ubicación está.

Actualmente estoy usando mapbox para la presentación del mapa y los polyfill.

## Stack tecnológico

|               | Nombre      | Versión |
| ------------- | ----------- | ------- |
| **Lenguaje**  | typescript  | ^4.9.5  |
| **Framework** | vuejs (SFC) | ^3.2.13 |
| **Store**     | VueX        | ^4.0.0  |

## ⚠️ Prerrequisitos

Node v18.10.0 o versión posterior

## 🛠 Instalación

Clonar el proyecto usando git:

```bash
git clone git@github.com:Amampel/Vue-Maps.git
```

Para la instalación de dependencias, ejecutar:

```bash
npm install
```

Para levantar el proyecto en modo desarrollo, ejecutar:

```bash
npm run serve
```

Esto levantará un servidor en local (http://localhost:8080/).

La página se renderizará automáticamente cuando haya cambios. También se puede ver por consola si existen errores.

### 📌 Iniciar modo Producción

Compilación, minificación y previsualización del modo en producción.

```
npm run build
npm run preview
```

## ⚙️ Otros comandos de interés

### Linter

Cada vez que se haga un commit el hook de husky ejecutará el linter. Pero también se puede hacer manualmente con:

```
npm run lint:all
```

El proyecto también utiliza un linter de package.json que ordena, lintea en buscar de errores y estructura el contenido de acuerdo a la configuración definida en el archivo .fixpackrc

Si realizamos alguna modificación en el package.json cuando hagamos el commit ejecutara el hook de husky que lanzara el linter del fixpack. Si falla, deberemos ejecutar el siguiente comando para formatear el package.json de acuerdo a las reglas definidas:

```
fixpack
```

## 📍 Cosas interesantes

### Indicaciones de desarrollo:

- Toda la aplicación está construida utilizando vue 3 y concretamente la composition API mediante el azucar sintáctico script setup. Si quieres más información: [Docs](https://v3.vuejs.org/api/sfc-script-setup.html#basic-syntax).

## 🚧 Por hacer...

Por problema de tiempos, quedará pendiente desarrollar:

- Saber qué lógica debe tener la vista de la selección de prompts (los valores seleccionados ya se guardan en el store)
- Hacer test unitaros de los componentes
