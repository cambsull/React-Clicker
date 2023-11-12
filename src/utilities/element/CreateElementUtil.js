import { createElement } from 'react';
import '../../styles/elementStyles.css';

//Null function to allow for default export. Essentially creates a psuedo-class template for JSX injection
function CreateElement() {
    return null;
}

//Destructured function for JSX injection
CreateElement.CreateCustomElement = function ({ elementType, elementText, className }) {

    return (
        createElement(
            `${elementType}`,
            {className: `${className}`},
            `${elementText}`
        )
    );

}

export default CreateElement;
