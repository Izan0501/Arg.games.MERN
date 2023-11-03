import React from 'react'

export const SectionName = (props) => {
    return (
        <div class="cardsTittle">
            <a href="#" class="sectionName">
                {props.content}
            </a>
        </div>
    );
};

export default SectionName