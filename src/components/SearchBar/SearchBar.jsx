import  { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');
    const notify = () => toast('no image to find, put text');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!query) {
            notify();
            return;
        }
        
        onSubmit(query);
       
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <header className = {css.box}>
            <form onSubmit={handleSubmit}>
                <input className = {css.search}
                    value={query}
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit" className={css.button}>Search</button>
                <Toaster />
            </form>
        </header>
    );
}

export default SearchBar;
