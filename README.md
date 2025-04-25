# Actualización del Proyecto del Curso de Introducción a React.js en Platzi

Del To Do Machine, ahora se incluyen rutas con React Router Dom. 

## Versión Actual de este proyecto
https://SuKuShaing.github.io/To-Do-Machine-con-Rutas

### Solución a resubir una page a github usando gh-pages
https://stackoverflow.com/questions/63733908/fatal-couldnt-find-remote-ref-refs-heads-gh-pages-after-runninggit-push-ori

1) ya no se pudo con 
```sh
npm run deploy
```
2) cambia el package.json de
```json
"deploy": "gh-pages -d build"
```
a 
```json
"deploy": "gh-pages-clean gh-pages -d build"
```
3) ejeculato
4) vuelve a cambiar el package.json a 
```json
"deploy": "gh-pages -d build"
```
5) y ejecutalo, ahora sí debiese subirse nuevamente tu page
.
.
.
## Versión anterior

### Ver el proyecto en funcionando
https://sukushaing.github.io/curso-react-intro/

#### Fondo utilizado disponible aquí
https://alvarotrigo.com/blog/animated-backgrounds-css/
