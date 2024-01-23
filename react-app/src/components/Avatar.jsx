import React, { Fragment } from 'react';

const Avatar = ({urlImage}) => {
    return (
            <Fragment>
                <img src={urlImage} alt="" className="mr-3"/>
            </Fragment>
     );
}
 
export default Avatar;