import React, { useState } from 'react';
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchInputChanges = (event) => {
        setSearchTerm(event.target.value);
    }

    const resetInputField = () => {
        setSearchTerm('');
    }

    const callSearchFunction = (event) => {
        const newItem = { title: 'New item' };
        setSearchTerm(searchTerm.concat(newItem));
        // TODO: call search function with searchTerm as argument
    }

    return (<>
        <form className="search">
            <input
                value={searchTerm}
                onChange={handleSearchInputChanges}
                type="text"
                placeholder="Guess a character!"
            />
            <button onClick={callSearchFunction} type="submit">Guess</button>
        </form>
        <div>
            {searchTerm}
        </div>
    </>
    );
}
export default SearchBar