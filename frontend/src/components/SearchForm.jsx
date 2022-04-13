import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const people = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
];

export default function SearchForm() {

    const [focused, setFocusedState] = React.useState("none")
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    const handleFocus = event => {
        setFocusedState('block')
    }
    React.useEffect(() => {
        console.log(searchTerm);
        const results = people.filter(person =>
          person.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <div className='search-field'>
            <input
                id="search-input"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
                onFocus={handleFocus}
            />
            <ul className='search-results' style={{display:focused, listStyle:'none', paddingLeft:'0'}}>
                {searchResults.map(item => (
                <li style={{backgroundColor:'white'}}>{item}</li>
                ))}
            </ul>
        </div>
    );
}