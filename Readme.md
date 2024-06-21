# Coincash test JS / ReactJS responsive app

### Prerequistes
NodeJS

### Build and run
 - `npm install`
 - `npm start`
 - Visit http://localhost:8080 from your browser

### Build only
Builds typescript to a single bundled js file (src/dist/bundle.js)

 - `npm install`
 - `npm build`


### Development mode

 - `npm run ts:watch` : Watch and compile typescript files to src/js output directory upon file changes
 - `npm run js:watch` : Watch and bundle javascript output module files
 - `npm run serve` : Run a local http server listening to port 8080


### Improvements for production
- Bundle CSS to a single (cached) file
- Minify / uglify and cache the bundled JS
