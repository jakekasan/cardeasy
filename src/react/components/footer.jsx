import { Component, setState } from "react";

class Footer extends Component {
    constructor() {
        this.state = setState();
    }

    render() {
        return (
            <footer>
                <h1>This is a footer!!</h1>
            </footer>
        )
    }
}

export default Footer;