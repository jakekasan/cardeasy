import { Component, setState } from "react";

class Header extends Component {
    constructor() {
        this.state = setState();
    }

    render() {
        return (
            <header>
                <h1>This is a header!</h1>
            </header>
        )
    }
}

export default Header;