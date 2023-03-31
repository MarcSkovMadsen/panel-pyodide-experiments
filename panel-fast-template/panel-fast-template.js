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

function addHeadInnerHTML(headInnerHTML) {
    document.write(headInnerHTML)
    console.log("headInnerHTML added")
}
addHeadInnerHTML(headInnerHTML)

class PanelFastTemplate extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(panelFastTemplate.content.cloneNode(true));
        
        
    }
  

  get bokeh() {
    return this.getAttribute('bokeh') ? null : "2.4.3";
  }
  
  get panel() {
    return this.getAttribute('panel') ? null : "0.14.3";
  }

  connectedCallback() {
    // let el = document.createElement('p');
    // el.innerHTML = "Hello"
    // this._shadowRoot.appendChild(el);
  }
}

window.customElements.define('panel-fast-template', PanelFastTemplate);