import {useState, useEffect} from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phoneBookService from "./services/phoneBookService";


const App = () => {

    useEffect(() => {
        phoneBookService
            .getAll()
            .then(initialPersons => setPersons(initialPersons))
    }, [])

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [nameFilter, setNameFilter] = useState('')
    const handleName = (event) =>
        setNewName(event.target.value)
    const handleNumber = (event) =>
        setNewNumber(event.target.value)
    const handleNameFilter = (event) =>
        setNameFilter(event.target.value)
    const handleDeletePerson = (name, id) => {
        if (window.confirm(`Delete ${name}?`)) {
            phoneBookService
                .remove(id)

            setPersons(persons.filter(p => p.id !== id))
        }

    }

    const showPhoneBook = nameFilter
        ? persons.filter(person => person.name.toLowerCase().indexOf(nameFilter.toLowerCase()) !== -1)
        : persons
    const handleSubmit = (event) => event.preventDefault()
    const handleAdd = () => {
        for (let i = 0; i < persons.length; i++) {
            if (persons[i].name.toLowerCase().trim() === newName.toLowerCase().trim()) {

                if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {

                    const userContact = {name: newName, number: newNumber}
                    const personId = persons.find(p => p.name === newName).id

                    phoneBookService
                        .update(personId, userContact)
                        .then(response => setPersons(persons.map(person =>
                            person.id === personId
                                ? response.data
                                : person)))


                    setNewName('')
                    setNewNumber('')
                }
                return
            }
        }
        const userContact = {name: newName, number: newNumber}

        phoneBookService
            .create(userContact)
            .then(response => {
                setPersons(persons.concat(response.data))
                setNewName('')
                setNewNumber('')
            })
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter nameFilter={nameFilter} handleNameFilter={handleNameFilter}/>

            <h3>Add a new</h3>
            <PersonForm
                newNumber={newNumber}
                newName={newName}
                handleName={handleName}
                handleSubmit={handleSubmit}
                handleNumber={handleNumber}
                handleAdd={handleAdd}
            />

            <h2>Numbers</h2>
            <Persons
                showPhoneBook={showPhoneBook}
                handleDeletePerson={handleDeletePerson}
            />
        </div>
    )
}

export default App;
