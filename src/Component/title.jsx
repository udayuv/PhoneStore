import React from 'react';

const Title = ({name,title}) => {
    return ( 
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <p>{name}
                <strong className="text-blue">{title}</strong>
                </p>
            </div>
        </div>
     );
}
 
export default Title;