import React from 'react';

const Persons = (props) => {

    return (
        <div>
            <div>{props.showPhoneBook.map(person =>
                <div key={person.name}>
                    {person.name}{' '}
                    {person.number}{' '}
                    <button
                        type="button"
                        onClick={() => props.handleDeletePerson(person.name ,person.id)}
                    >
                        delete
                    </button>
                </div>)}
            </div>
        </div>
    );
};

export default Persons;