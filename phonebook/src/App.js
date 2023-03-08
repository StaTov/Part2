import {useState, useEffect} from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import NotificationAddPerson from "./components/NotificationAddPerson";
import phoneBookService from "./services/phoneBookService";
import ErrorNotFound from "./components/ErrorNotFound";
import NotificationChangePhone from "./components/NotificationChangePhone";

const App = () => {

    useEffect(() => {
        phoneBookService
            .getAll()
            .then(initialPersons => setPersons(initialPersons))
    }, [])

    const [personChangePhone, setPersonChangePhone] = useState(null)
    const [deletedName, setDeletedName] = useState(null)
    const [message, setMessage] = useState(null)
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [nameFilter, setNameFilter] = useState('')

    const showPhoneNumberChanged = (person) => {
        setPersonChangePhone(person)
        setTimeout(() => setPersonChangePhone(null), 5000)
    }
    const showPersonDeleted = (person) => {

        setDeletedName(person)
        setTimeout(() => setDeletedName(null), 5000)
    }
    const showAddPerson = (person) => {
        setMessage(`Added new ${person}`)
        setTimeout(() => setMessage(null), 5000)
    }
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

    const handleSubmit = (event) => {
        event.preventDefault()
        for (let i = 0; i < persons.length; i++) {
            if (persons[i].name.toLowerCase().trim() === newName.toLowerCase().trim()) {

                if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {

                    const userContact = {name: newName, number: newNumber}

                    phoneBookService
                        .update(persons[i].id, userContact)
                        .then(response => {
                            setPersons([...persons].map(person =>
                                person === persons[i]
                                    ? response.data
                                    : person))
                            showPhoneNumberChanged(newName)
                        })
                        .catch(error => {
                            showPersonDeleted(newName)
                            setPersons(persons.filter(person => person.name.toLowerCase().trim() !== newName.toLowerCase().trim()))
                        })

                    setNewName('')
                    setNewNumber('')
                    return
                }
                return
            }
        }
        const userContact = {name: newName, number: newNumber}

        showAddPerson(newName)

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
            <NotificationAddPerson message={message}/>
            <NotificationChangePhone person={personChangePhone}/>
            <ErrorNotFound deletedName={deletedName}/>
            <PersonForm
                newNumber={newNumber}
                newName={newName}
                handleName={handleName}
                handleNumber={handleNumber}
                handleSubmit={handleSubmit}
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
