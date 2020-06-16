import React from "react";
import { useDateForm } from "../../../hooks/useDateForm.jsx";
import { LabeledInput } from "../../../partials/LabeledInput.jsx";

// export default DateInput = () => {

//     const { dateParts } = useDateForm();

//     const renderDatePart = (datePart) => {
//         return (
//             <LabeledInput
//                 type = "number"
//                 { ...datePart }
//             />
//         )
//     }
//     return (
//         <section>
//             {
//                 dateParts.map(datePart => renderDatePart(datePart))
//             }
//         </section>    
//     )
// }

const UnLabeledInput = (props) => <input className = "UnLabeledInput" type = "text" {...props} />

export const DateInput = ({dateInputs: dateParts}) => {

    const [ year ] = dateParts.filter(part => part.name === "year")
    const [ month ] = dateParts.filter(part => part.name === "month")
    const [ day ] = dateParts.filter(part => part.name === "day")

    // return (
    //     <div className = "inlineInputs">
    //         <input className type="text" {...day}/> { "/" } <input type="text" {...month}/> { "/" } <input type="text" {...year}/> 
    //     </div>
    // )

    return (
        <div className="inlineInputs">
            <UnLabeledInput {...day} /> {"/"} <UnLabeledInput {...month} /> {"/"} <UnLabeledInput {...year} />
        </div>
    )
}