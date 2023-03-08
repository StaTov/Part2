import React from 'react';

const ErrorNotFound = ({deletedName}) => {
    const style = {
        color: 'red',
        border: 'solid',
        backgroundColor: 'gary',
        padding: 5,
        margin: 15,
        borderRadius: 3,
        fontSize: 17,

    }
    if(deletedName === null){
        return null
    }
    return (
        <div style={style}>
            {`${deletedName} has already removed from server`}
        </div>
    );
};

export default ErrorNotFound;