import React from 'react';

const NotificationChangePhone = ({person}) => {
    const changeStyle = {
        margin: 5,
        padding: 2,
        paddingLeft: 10,
        fontSize: 19,
        color: 'white',
        backgroundColor: 'coral',
        borderRadius: 3,

    }
    if(person === null){
        return null
    }
    return (
        <div style={changeStyle}>
            {`The ${person} phone number has been successfully changed`}
        </div>
    );
};

export default NotificationChangePhone;