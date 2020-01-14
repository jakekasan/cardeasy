import React, { Component } from "react";
import Form from "./form/main.jsx";

function Test(props) {
    const formData = [
        0, 0, 0, 0
    ]

    return (
        <Form formData = {formData} />
    )
}

// class Test extends Component {
//     render() {
//         return (
//             <Form />
//         )
//     }
// }

export default Test;