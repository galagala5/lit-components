import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class SessionCard extends LitElement {
    static properties = {
        version: {},
        name: { type: String },
        rebootingFlag:{type:Boolean}

    };

    static styles = css`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    :host *{
    box-sizing: border-box;
    }
    :host{
        font-family: 'Roboto', sans-serif;
        font-size:12px;
        width: 320px;
        height: 280px; 
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: .5fr 2fr 1fr;
        gap: 0;
        grid-auto-flow: row;
        grid-template-areas:
        "header header"
        "main main"
        "footer footer";
        background-color: #D7DBE0;
        box-shadow: 4px 4px 6px hsla(0, 0%, 40%, 0.493),
        2px 2px 6px hsla(0, 0%, 85%, 0.7) inset,
        -2px -2px 6px hsla(0, 0%, 85%, 0.4) inset;
        border-radius: 10px;
        padding: 1em;
        position: relative;
    }

    .header { 
        grid-area: header;
        margin-top: 10px; 
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .3em;
        padding-bottom: 0.21428571rem;
        border-bottom: 1px solid rgba(34,36,38,.15);
        /* background-color: red; */
    }
    .title{
        font-weight: 700;
        text-align: center;
        font-size: 18px;
        color:rgb(70, 70, 70);
        text-transform: uppercase;
        text-shadow: 1px 1px 8px hsla(0, 0%, 30%, 0.4);
    }
    .avatar{ 
        width: 30px;
        height: 30px;
        border-radius: 50%;
        /* background: #ffffff; */
    }
    .avatar img{ 
        display: block;
        margin-top: 22%;
        margin-left: auto;
        margin-right: auto;
        width: 60%;
    }
    
    .main { 
        grid-area: main;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .metrics{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #ffffff;
        width: 110px;
        height: 110px;
        text-align: center;
        color: #5A20D4;
        font-weight: 900;
        border-radius: 50%;
        transition: transform .2s ease-in-out;
        cursor:default;
    }
    
    .metrics:hover{
        transform: scale(1.1);
    }
    .metrics .value{
        font-size: 26pt;
    }
    .metrics .label{
        font-size: 8pt;
    }
    
    .footer { 
        grid-area: footer;
        background-color:#DDE1E5;
        border-radius: 5px;;
        display: flex;
        width: 100%; height: 100%;
        flex-direction: column;
        justify-content: flex-start;
     }
     .buttons{
        margin-top:-10px ;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
     }
     .item {
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
        color: #555555;
    }
     .statistics{
        padding: 5px 10px;
        display: flex;
        flex-direction: row;
        align-items:flex-end;
        justify-content: space-around;
        height: 100%;
    }
    .statistics > div{ 
        font-weight: 600;
        color: rgb(68, 68, 68);
        flex: 1 1 auto;
    }
        .statistics .left { text-align: left; }
        .statistics .right { text-align: right; }

.btn {
    width:110px;
    background: hsl(213, 74%, 50%);
    border-radius: 5px;
    color: #ffffff;
    font-size:12px ;
    text-align: center;
    padding: 7px 12px;
    text-decoration: none;
    box-shadow: 4px 2px 8px hsla(0, 0%, 30%, 0.4);
}

.btn:hover {
    cursor: pointer;
    background: hsl(213, 74%, 40%);
    text-decoration: none;
}

`;


    constructor() {
        super();
        this.version = 'STARTING';
        this.name = this.getAttribute("data-name") || 'test'
        this.active = false;
        this.rebootingFlag = false;
    }

    render() {
        return html`
            <div class="header">
                <div class="avatar"><img src="./tap.svg" alt="" srcset=""></div>
                <div class="title">Station 01 Power Outlet 01</div>
            </div>
            <div class="main">
                <div class="metrics">
                    <div class="value">1.540</div>
                    <div class="label">KWh</div>
                </div>
            </div>
            <div class="footer">
                <div class="buttons">
                    <a class="btn" role="button">Go To Device</a>
                    <a class="btn" role="button">Go To User</a>
                </div>
                <div class="statistics">
                    <div class="column left">
                        <div class="label">Start Time</div>
                        <div class="item">16:05 10-11-2022</div>
                    </div>
                    <div class="column right">
                        <div class="label">Active User</div>
                        <div class="item">Kostas Galanis</div>
                    </div>
                </div>
            </div>
    `;
    }


    // firstUpdated() {
    //     this.image.style.setProperty('--image-url',`url('${this.person.image}')`)
    // }

    get _component() {
        return this.renderRoot?.querySelector(':host') ?? null;
    }
}
customElements.define('session-card', SessionCard);

