// EXPERIMENT FAILED. PLUGINS ARE LOADED TOO LATE IN THE PROCESS
const panelFastTemplate = document.createElement('template');

panelFastTemplate.innerHTML = `
<div style="height:40px;width:100%;background:blue;color:white">Panel</div>
<slot name="main">...</slot>
`

var headInnerHTML = `
<title>Red Recipe</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="name" content="NYC Taxi Deck.gl">
<link rel="icon" href="https://panel.holoviz.org/_static/icons/favicon.ico" type="">
<script type="text/javascript" src="https://cdn.bokeh.org/bokeh/release/bokeh-2.4.3.js"></script>
<script type="text/javascript" src="https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.3.min.js"></script>
<script type="text/javascript" src="https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.3.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@holoviz/panel@0.14.3/dist/panel.min.js"></script>
<style>body{margin: 0px}</style>
`

function add_script(src){
    var current = document.currentScript;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async=false
    script.onload = function() {
        callFunctionFromScript();
    }
    script.src = src;
    current.insertBefore(script, current)
}




function addHeadInnerHTML(headInnerHTML) {
    add_script("https://cdn.bokeh.org/bokeh/release/bokeh-2.4.3.js")
    add_script("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.3.min.js")
    add_script("https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.3.min.js")
    add_script("https://cdn.jsdelivr.net/npm/@holoviz/panel@0.14.3/dist/panel.min.js")
    console.log("headInnerHTML added")
}


class PyHelloWorld extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<h1>Hello, world!</h1>`;
        this.mount_name = this.id;
    }
}

console.log("importing ...")
addHeadInnerHTML(headInnerHTML)
customElements.define("py-hello-world", PyHelloWorld);

export default class HelloWorldPlugin {
    configure(_config) {
        console.log("Configure")
    }
    beforeLaunch(_config) {
        console.log("BEFORELAUNCH")
    }
    afterStartup(runtime) {
        // Create a custom element called <py-hello-world>
        console.log("AFTERSTARTUP")
        
    }
}