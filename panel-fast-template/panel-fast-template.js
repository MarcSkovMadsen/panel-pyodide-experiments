const panelFastTemplate = document.createElement('template');

panelFastTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/css/widgets.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/css/alerts.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/css/debugger.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/css/markdown.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/css/loading.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/css/json.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/css/dataframe.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/css/card.css" type="text/css" />
<style>
  .bk.pn-loading.arc:before {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJtYXJnaW46IGF1dG87IGJhY2tncm91bmQ6IG5vbmU7IGRpc3BsYXk6IGJsb2NrOyBzaGFwZS1yZW5kZXJpbmc6IGF1dG87IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzNjM2MzIiBzdHJva2Utd2lkdGg9IjEwIiByPSIzNSIgc3Ryb2tlLWRhc2hhcnJheT0iMTY0LjkzMzYxNDMxMzQ2NDE1IDU2Ljk3Nzg3MTQzNzgyMTM4Ij4gICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+ICA8L2NpcmNsZT48L3N2Zz4=");
    background-size: auto calc(min(50%, 400px));
  }
</style>
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_root.css">
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_bokeh.css">
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_bokeh_slickgrid.css">
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_panel.css">
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_panel_dataframe.css">
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_panel_widgets.css">
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_panel_markdown.css">
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_awesome.css">
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastlisttemplate/fast_list_template.css">
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastdefaulttheme/fast_root_default.css">
<link rel="stylesheet" href="https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastlisttemplate/default.css">
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
<style>
  :root {
    --body-font: Open Sans, sans-serif;
  }
  body {
    color: #00aa41;
    background-color: #ffffff;
    font-family: var(--body-font);
  }
  #header a {
    color: currentColor;
  }
  #header-design-provider {
    --neutral-foreground-rest: #ffffff;
  }
  #sidebar {
    width: 330px;
  }
  #header {
      box-shadow: 2px 2px 10px silver;
  }
  #sidebar {
      box-shadow: 2px 2px 10px silver;
  }
</style>
<fast-design-system-provider id="body-design-provider" use-defaults accent-foreground-cut-rest="#FFFFFF"
background-color="#ffffff"accent-base-color="#0072B5"  >
  <div id="container">
  <fast-design-system-provider id="header-design-provider"
background-color="#0072B5"  >
  <nav id="header">
    <div class="app-header">
<a class="title" href="/" >&nbsp;Panel</a><span class="title">-</span><a class="title" href="" >Hello</a>    </div>
    <div id="header-items">
  </div>
  <div class="pn-toggle-theme">
    <fast-switch id="theme-switch" style="float: right;" onChange="toggleLightDarkTheme('default')" checked>
      <span slot="checked-message">
        <svg class="theme-toggle-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/></svg>
      </span>
      <span slot="unchecked-message">
        <svg class="theme-toggle-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"/></svg>
      </span>
    </fast-switch>
    <fast-tooltip anchor="theme-switch" position="bottom">
      Toggle the Theme
    </fast-tooltip>
  </div>
	<div class="pn-busy-container" id="busy-container">
	  <div class="bk-root" id="7abc34e4-23a8-4dbb-9cef-8d055c4364ff" data-root-id="1007"></div>
	</div>
  <fast-tooltip anchor="busy-container" position="left">
    Busy Indicator
  </fast-tooltip>

  </nav>
  </fast-design-system-provider>

  <div class="row" id="content">

    <div class="main" id="main"
    style="margin-left: 0px;"
    >
      <div class="card-margin">
<fast-card class="pn-wrapper">        <span class="fullscreen-button" onclick="toggleFullScreen(this)">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"/></svg>
        </span>
        <slot name="main">...</slot>
</fast-card>      </div>

      <fast-dialog id="pn-Modal" hidden style="--dialog-width: 80%; --dialog-height: auto; --background-color: var(--neutral-layer-floating);">
        <fast-button class="pn-modal-close" id="pn-closeModal">&times;</fast-button>
	<div>
	</div>
      </fast-dialog>
  </div>
  </div>
</div>
</fast-design-system-provider>
`

loadingArch = `
<style>
.bk.pn-loading.arc:before {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJtYXJnaW46IGF1dG87IGJhY2tncm91bmQ6IG5vbmU7IGRpc3BsYXk6IGJsb2NrOyBzaGFwZS1yZW5kZXJpbmc6IGF1dG87IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzNjM2MzIiBzdHJva2Utd2lkdGg9IjEwIiByPSIzNSIgc3Ryb2tlLWRhc2hhcnJheT0iMTY0LjkzMzYxNDMxMzQ2NDE1IDU2Ljk3Nzg3MTQzNzgyMTM4Ij4gICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+ICA8L2NpcmNsZT48L3N2Zz4=");
  background-size: auto calc(min(50%, 400px));
}
</style>
`

dynamicStyle = `
<style>
  :root {
    --body-font: Open Sans, sans-serif;
  }
  body {
    color: #00aa41;
    background-color: #ffffff;
    font-family: var(--body-font);
  }
  #header a {
    color: currentColor;
  }
  #header-design-provider {
    --neutral-foreground-rest: #ffffff;
  }
  #sidebar {
    width: 330px;
  }
  #header {
      box-shadow: 2px 2px 10px silver;
  }
  #sidebar {
      box-shadow: 2px 2px 10px silver;
  }
</style>
`

fastScript=`
<script type="module">
  import { parseColorHexRGB } from "https://cdn.holoviz.org/panel/0.14.4/dist/bundled/js/@microsoft/fast-colors@5.3.1/dist/index.js";
  import {
    createColorPalette,
    accentFillActiveBehavior,
    accentFillHoverBehavior,
    accentFillRestBehavior,
    accentForegroundActiveBehavior,
    accentForegroundCutRestBehavior,
    accentForegroundFocusBehavior,
    accentForegroundHoverBehavior,
    accentForegroundRestBehavior,
    neutralDividerRestBehavior,
    neutralFillHoverBehavior,
    neutralFillInputActiveBehavior,
    neutralFillInputHoverBehavior,
    neutralFillInputRestBehavior,
    neutralFillRestBehavior,
    neutralFillStealthActiveBehavior,
    neutralFillStealthHoverBehavior,
    neutralFillStealthRestBehavior,
    neutralFocusBehavior,
    neutralFocusInnerAccentBehavior,
    neutralForegroundActiveBehavior,
    neutralForegroundHoverBehavior,
    neutralLayerFloatingBehavior,
    neutralOutlineActiveBehavior,
    neutralOutlineHoverBehavior,
    neutralOutlineRestBehavior
  } from "https://cdn.holoviz.org/panel/0.14.4/dist/bundled/js/@microsoft/fast-components@1.21.8/dist/fast-components.js";

  function standardize_color(str){
    var ctx = document.createElement('canvas').getContext('2d');
    ctx.fillStyle = str;
    return ctx.fillStyle;
  }

  function setAccentColor(color, selector){
      color = standardize_color(color);
      const accent = color;
      const palette = createColorPalette(parseColorHexRGB(accent));
      const provider = document.querySelector(selector);
      provider.accentBaseColor = accent;
      provider.accentPalette = palette;
  }
  setAccentColor("#0072B5", "#body-design-provider");
  setAccentColor("#ffffff", "#header-design-provider");

  function setNeutralColor(color, selector){
      color = standardize_color(color);
      const palette = createColorPalette(parseColorHexRGB(color));
      const provider = document.querySelector(selector);

      provider.neutralPalette = palette;
  }
  setNeutralColor("#ffffff", "#header-design-provider");
  setNeutralColor("#000000", "#body-design-provider");

  function setBackgroundColor(color, selector){
    color = standardize_color(color);
    const provider = document.querySelector(selector);
    provider.backgroundColor=color;
  }
  setBackgroundColor("#0072B5", "#header-design-provider");
  setBackgroundColor("#ffffff", "#body-design-provider");

  document.querySelector("#body-design-provider").cornerRadius=3;

  function registerCSSCustomProperties(selector)  {
    const provider = document.querySelector(selector);
    provider.registerCSSCustomProperty(accentFillActiveBehavior)
    provider.registerCSSCustomProperty(neutralFillRestBehavior)
    provider.registerCSSCustomProperty(accentFillHoverBehavior)
    provider.registerCSSCustomProperty(accentFillRestBehavior)
    provider.registerCSSCustomProperty(accentForegroundActiveBehavior)
    provider.registerCSSCustomProperty(accentForegroundCutRestBehavior)
    provider.registerCSSCustomProperty(accentForegroundFocusBehavior)
    provider.registerCSSCustomProperty(accentForegroundHoverBehavior)
    provider.registerCSSCustomProperty(accentForegroundRestBehavior)
    provider.registerCSSCustomProperty(neutralDividerRestBehavior)
    provider.registerCSSCustomProperty(neutralFillHoverBehavior)
    provider.registerCSSCustomProperty(neutralFillInputActiveBehavior)
    provider.registerCSSCustomProperty(neutralFillInputHoverBehavior)
    provider.registerCSSCustomProperty(neutralFillInputRestBehavior)
    provider.registerCSSCustomProperty(neutralFillRestBehavior)
    provider.registerCSSCustomProperty(neutralFillStealthActiveBehavior)
    provider.registerCSSCustomProperty(neutralFillStealthHoverBehavior)
    provider.registerCSSCustomProperty(neutralFillStealthRestBehavior)
    provider.registerCSSCustomProperty(neutralFocusBehavior)
    provider.registerCSSCustomProperty(neutralFocusInnerAccentBehavior)
    provider.registerCSSCustomProperty(neutralForegroundActiveBehavior)
    provider.registerCSSCustomProperty(neutralForegroundHoverBehavior)
    provider.registerCSSCustomProperty(neutralLayerFloatingBehavior)
    provider.registerCSSCustomProperty(neutralOutlineActiveBehavior)
    provider.registerCSSCustomProperty(neutralOutlineHoverBehavior)
    provider.registerCSSCustomProperty(neutralOutlineRestBehavior)
  }
  registerCSSCustomProperties("#header-design-provider")
  registerCSSCustomProperties("#body-design-provider")

  class FastDesignProvider {
    setAccentColor(value, element){
      setAccentColor(value, element);
    }
    setNeutralColor(value, element){
      setNeutralColor(value, element);
    }
    setBackgroundColor(value, element){
      setBackgroundColor(value, element)
    }
  }
  window.fastDesignProvider = new FastDesignProvider()
</script>
`

function add_element(el){
  var current = document.currentScript;
  current.parentElement.insertBefore(el, current)
}

function add_script(src, type='text/javascript'){
  var el = document.createElement('script');
  el.src = src;
  el.type = type;
  el.async=false
  add_element(el)
}

function add_stylesheet(href){
  var el = document.createElement('link');
  el.rel="stylesheet"
  el.href=href
  el.type="text/css"
  add_element(el)
}

function add_text(text){
  var div = document.createElement('div');
  div.innerHTML = text.trim();
  add_element(div.firstChild)
}

function addHeadInnerHTML() {
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/css/widgets.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/css/alerts.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/css/debugger.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/css/markdown.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/css/loading.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/css/json.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/css/dataframe.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/css/card.css")
  add_text(loadingArch)
  add_script("https://cdn.bokeh.org/bokeh/release/bokeh-2.4.3.js")
  add_script("https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.3.min.js")
  add_script("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.3.min.js")
  add_script("https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.3.min.js")
  add_script("https://cdn.jsdelivr.net/npm/@holoviz/panel@0.14.4/dist/panel.min.js")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_root.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_bokeh.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_bokeh_slickgrid.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_panel.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_panel_dataframe.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_panel_widgets.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_panel_markdown.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_awesome.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastlisttemplate/fast_list_template.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastdefaulttheme/fast_root_default.css")
  add_stylesheet("https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastlisttemplate/default.css")
  add_stylesheet("//fonts.googleapis.com/css?family=Open+Sans")
  add_text(dynamicStyle)
  add_script("https://cdn.holoviz.org/panel/0.14.4/dist/bundled/fastbasetemplate/fast_template.js")
  add_script("https://cdn.holoviz.org/panel/0.14.4/dist/bundled/js/@microsoft/fast-colors@5.3.1/dist/index.js", type="module")
  add_script("https://cdn.holoviz.org/panel/0.14.4/dist/bundled/js/@microsoft/fast-components@1.21.8/dist/fast-components.js", type="module")
  add_text(fastScript)
  console.log("headInnerHTML added")
}

addHeadInnerHTML()

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
    return this.getAttribute('panel') ? null : "0.14.4";
  }

  connectedCallback() {
    // let el = document.createElement('p');
    // el.innerHTML = "Hello"
    // this._shadowRoot.appendChild(el);
  }
}

window.customElements.define('panel-fast-template', PanelFastTemplate);