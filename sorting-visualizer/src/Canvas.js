import react from 'react'
import React from 'react'
import PropTypes from 'prop-types';


function Canvas ({draw, numLines}) {
    const canvas = react.useRef();

    React.useEffect(() => {
        const context = canvas.current.getContext('2d');
        draw(context);
    });

    return (
        <div className="lines-wrapper">
            <canvas ref={canvas} id="lines" width="800" height="500">

            </canvas>
        </div>
    )
}

Canvas.propTypes = {
    draw: PropTypes.func.isRequired,
};


export default Canvas