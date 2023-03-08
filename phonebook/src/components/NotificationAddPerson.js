import React from 'react';

const NotificationAddPerson = ({message}) => {
    const addInfo = {
        margin: 5,
        padding: 2,
        paddingLeft: 10,
        fontSize: 19,
        color: 'white',
        backgroundColor: 'coral',
        borderRadius: 3,

    }
    if(message === null) {
        return null
    }
    return (
        <div style={addInfo}>
            {message}
        </div>
    );
};

export default NotificationAddPerson;