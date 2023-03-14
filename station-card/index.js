import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class StationCard extends LitElement {
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
        padding: 8px;
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
customElements.define('station-card', StationCard);

