import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class RouterCard extends LitElement {
    static properties = {
        version: {},
        name: { type: String },
        rebootingFlag:{type:Boolean}

    };

    static styles = css`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    :host *{
        box-sizing: border-box;
        font-size:12px;
    }
    :host{
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 320px;
        height: 300px;
        background-color: #D7DBE0;
        box-shadow: 4px 4px 6px hsla(0, 0%, 40%, 0.493),
        2px 2px 6px hsla(0, 0%, 85%, 0.7) inset,
        -2px -2px 6px hsla(0, 0%, 85%, 0.4) inset;
        border-radius: 10px;
    }
    .disabledcard::before{
        content:"";
        position:absolute;
        top:0;left:0;
        width:100%; height:100%;
        opacity:.6;
        background:grey;
        border-radius:inherit;
        z-index:999;
    }
    .disabledcard::after{
        content:'Pleas Wait!';
        position:absolute;
        top:50%;left:50%;
        text-align:center;
        font-weight:600;
        color:red;
        transform: translate(-50%,-50%);
    }
    .disabledcard {
        position: relative;
        pointer-events: none;
    }

    #header {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        padding: 10px;
        margin-bottom: 20px;
        width: 100%;
        height: 90px;
    }
    #avatar {
        position: relative;
        width:60px; height:60px;
        margin-bottom:12px;
        border-radius:50%;
        background-color:#fff;
    }
    
    #avatar ::slotted(img){
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%,-50%);
        width:80%;
    }

    #title {
        grid-area: 1 / 1 / 3 / 4;
    }

    #title .name {
        flex: 1 1 auto;
        font-weight: 800;
        font-size: 26px;
        text-align:left;
    }

    #controls {
        grid-area: 1 / 4 / 3 / 6;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn {
    width: 100%;
    background: hsl(213, 74%, 50%);
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 8px;
    color: #ffffff;
    font-size:12px ;
    text-align: center;
    padding: 10px 12px;
    text-decoration: none;
    }

    .btn:hover {
    cursor: pointer;
    background: hsl(213, 74%, 40%);
    text-decoration: none;
    }

    .main {
        flex: 1 1 auto;
        display: grid;
        margin: 10px;
        padding: 8px;
        height: calc(100% - 120px);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        gap: 0px 0px;
        grid-template-areas:
        "div1 div1 div1 div1 div1 div1"
        "div2 div2 div2 div3 div3 div3"
        "div2 div2 div2 div3 div3 div3"
        "div4 div4 div4 div5 div5 div5";
        background-color: #DDE1E5;
        border-radius: 6px;
    }

    .main >div {
    padding: .25em;
    }


    .div1 {
    grid-area: div1;
    }

    .div2 {
    grid-area: div2;
    }

    .div3 {
    grid-area: div3;
    }

    .div4 {
    grid-area: div4;
    }

    .div5 {
    grid-area: div5;
    }

    .metrics {
    width: 100%;
    display: flex;
    padding: 8px 12px !important;
    flex-direction: row;
    gap: 5px;
    justify-content: space-evenly;
    background-color: #5613e6;
    border-radius: 5px;
    }

    .metrics div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 1 auto;
    }

    .label {
    font-weight: 700;
    font-size: 13px;
    color: #c3c3c3;
    text-align: center;
    text-shadow: 1px 1px 8px #2d2d2d63;
    }
    .label.large { font-size: 15px;}
    .label.medium { font-size: 13px;}
    .label.smal { font-size: 11px;}

    .label.aligned.left {
    text-align: left;
    }

    .label.inverted {
    color: #464646;
    }

    .value {
    font-weight: 600;
    font-size: 22px;
    color: #c7c7c7;
    text-align: center;
    }

    .symbol {
    font-weight: 600;
    font-size: 12px;
    color: #c7c7c7;
    text-align: center;
    }

    .interfaces {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    }

    .item {
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    color: #555555;

    }

    .interfaces ::slotted(span ){ color:red;}


    .progress-bar__container {
    --height-bar:15px;
    margin-top: calc((-1.2)*var(--height-bar));
    width: 100%;
    height: var(--height-bar);
    border-radius:var(--height-bar);
    position: relative;
    overflow: hidden;
    transition: all 0.5s;
    will-change: transform;
    background-color: #cccbcb;
    box-shadow: 2px 2px 5px #33333364,
    2px 2px 8px #ffffff98 inset;
    }

    .progress-bar {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    background-color: #2070D4;
    top: 0;
    bottom: 0;
    left: -50%;
    border-radius: 2rem .2rem .2rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    box-shadow: inherit;
    font-family: sans-serif;
    }

    .progress-bar__text {
    display: none;
    }
`;

    static rebooting = html` <div class="disabledcard" ?hidden=${!this.rebootingFlag} >Rebboting</div>`

    constructor() {
        super();
        this.version = 'STARTING';
        this.name = this.getAttribute("data-name")
        this.active = false;
        this.rebootingFlag = false;
    }

    render() {
        return html`
        <div class="disabledcard" ?hidden=${!this.rebootingFlag} >Rebboting</div>
        <div id="header">
            <div id="title">
            <div id="avatar">
                <slot id="img" name="avatar"></slot>
            </div>
            <div class="name label inverted"> ${this.name} </div>
            </div>
            <div id="controls">
                <div class="btn" @click=${this.reboot} >Reboot Device</div>
            </div>
        </div>
        <div class="main">
            <div class="div1"> 
            <div class="progress-bar__container">
            <div class="progress-bar">
              <span class="progress-bar__text">Uploaded Successfully!</span>
            </div>
          </div>
            </div>
            <div class="div2 interfaces" >
                <div class="label inverted aligned left">
                    Interfaces
                </div>
                <slot class="item" name="interfaces"></slot>
            </div>
            <div class="div3 metrics">
                <div>
                    <div class="label small">Voltage</div>
                    <div class="group">
                        <div class="value">23.2</div>
                        <div class="symbol">VDC</div>
                    </div>
                </div>
                <div>
                    <div class="label small">Temperature</div>
                    <div class="group">
                        <div class="value">29</div>
                        <div class="symbol">°C</div>
                    </div>
                </div>
            </div>
            <div class="div4">
                <div class="label inverted aligned left">Up Time</div>
                <slot class="item" name="upTime"></slot>
            </div>
            <div class="div5">
                <div class="label inverted aligned left">Serial Number</div>
                <slot class="item" name="serialNumber"></slot>
            </div> 
        </div> 
    `;
    }

    reboot() {
        console.log('Devices is rebooting!')
        this.rebootingFlag = true;
        setTimeout(() => {
            this.rebootingFlag = false;
        }, 5000)
    }


    // firstUpdated() {
    //     this.image.style.setProperty('--image-url',`url('${this.person.image}')`)
    // }

    get _component() {
        return this.renderRoot?.querySelector(':host') ?? null;
    }
}
customElements.define('router-card', RouterCard);

