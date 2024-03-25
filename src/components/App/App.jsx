import  { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';



function App() {
    const [query, setQuery] = useState('');

    
    

    


    return (
        <div>
            <SearchBar onSubmit={setQuery} />
          
        </div>
    );
}

export default App;
