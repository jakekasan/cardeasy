import React, { useState, useContext } from "react";

import "./StepForm.scss";
const StepFormContext = React.createContext({});

const lengthOfChildren = (children) => {
    try {
        React.Children.only(children);
        return 1;
    } catch {
        return children.length;
    }
}

const BackButton = () => {
    const { currentStep, setCurrentStep } = useContext(StepFormContext);

    return (
        <button
            onClick={ () => setCurrentStep(step => Math.max(0, step - 1)) }
            disabled={ currentStep < 1 }>Back</button>
    )
}

const NextButton = () => {
    const { currentStep, setCurrentStep, maxStep, submit } = useContext(StepFormContext);

    const isLastStep = currentStep == maxStep;
    const onClick = isLastStep
                        ? () => submit()
                        : () => setCurrentStep(step => Math.min(step + 1, maxStep))
    return (
        <button
            onClick={ onClick }>{ (isLastStep) ? "Submit" : "Next"}</button>
    )
}

const useFormData = (DEFAULT_DATA = {}) => {
    const [formData, setFormData] = useState(DEFAULT_DATA);

    const getFormDataPart = (partName) => {
        if (Object.keys(formData).includes(partName)) return formData[partName];

        return undefined
    }

    const setFormDataPart = (partName, partData) => {
        setFormData((currentFormData) => {
            return { ...currentFormData, [partName]: partData}
        })
    }

    return {
        getFormDataPart,
        setFormDataPart,
        formData
    }
}

const StepForm = ({ children }) => {
    const [ currentStep, setCurrentStep ] = useState(0);
    const maxStep = lengthOfChildren(children) - 1;

    const { getFormDataPart, setFormDataPart, formData } = useFormData({ firstStep: "", secondStep: ""});

    const submit = () => {
        console.log(formData);
    }
    

    return (
        <StepFormContext.Provider value={
            {
                currentStep,
                setCurrentStep,
                maxStep,
                getFormDataPart,
                setFormDataPart,
                submit
            } }>
            { children[currentStep] }
            <BackButton/>
            <NextButton/>
        </StepFormContext.Provider>
    )
}

const FormStep = ({ children }) => <article className="stepform">{ children }</article>

const StepOne = () => {
    return (
        <FormStep>
            <h5>Hello, I am a step</h5>
            <input type="text" placeholder="Enter a name..."/>
        </FormStep>
    )
}

const StepTwo = () => {

    const { setFormDataPart, getFormDataPart } = useContext(StepFormContext);
    const onInputChange = ({ target: { value }}) => setFormDataPart("secondStep", value);
    const inputValue = getFormDataPart("secondStep") ?? "";
    
    return (
        <FormStep>
            <h5>I am another step</h5>
            <input
                type="text"
                placeholder="Enter an email..."
                value={ inputValue }
                onChange={ onInputChange }/>
        </FormStep>
    )
}


const OtherCardForm = () => {
    return (
        <StepForm>
            <StepOne />
            <StepTwo />
        </StepForm>
    )
}

export default OtherCardForm;