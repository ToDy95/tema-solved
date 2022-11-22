import { useEffect, useState } from 'react';


const Autocomplete = () => {
    const [names, setNames] = useState([
        "Ana Maria", "Mihai Cioara", "Razvan Stefan", "Nelson Mondialu", "Florin Salam"
    ]);
    const [value, setValue] = useState("");
    const [filteredAns, setFilteredAns] = useState([])
    const autocomplete = (event) => {
        const newFilteredSuggestions = names.filter(
            suggestion =>
                suggestion.toLowerCase().includes(event.currentTarget.value.toLowerCase())
        );
        setFilteredAns(newFilteredSuggestions)
    };
    return (
        <div>
            <h1>Autocomplete</h1>
            <input type="text" name="autocomplete" onChange={autocomplete} value={value} />
            <ul>
                {filteredAns.map((data, index) => (
                    <li key={index}><span onClick={(event) => {
                        setValue(data)
                    }}>{data}</span></li>
                ))}
            </ul>
        </div>
    )
}

export default Autocomplete;