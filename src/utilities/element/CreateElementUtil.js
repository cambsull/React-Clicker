import { createElement } from 'react';
import '../../styles/elementStyles.css';

//Pass props laterally to CreateElement
function CreateElementUtil({ elementType, elementText, className }) {

    return (
        createElement(
            `${elementType}`,
            {className: `${className}`},
            `${elementText}`
        )
    );

}

//Null function to allow for default export. Essentially creates a psuedo-class template.
function CreateElement() {
    return null;
}

//Specific elements that can be injected via JSX in any component that CreateElement is imported into
CreateElement.CreateBuilding = function ({ className, elementText }) {
    return (
        <CreateElementUtil
            elementType="button"
            elementText={elementText || "Default Building"}
            className={className || "buildingButton"}
        />
    );
};

CreateElement.CreateParagraph = function ({ className, elementText }) {
    return (
        <CreateElementUtil
            elementType="p"
            elementText={elementText || "Default Text"}
            className={className || "p"}
        />
    );
};


export default CreateElement;

