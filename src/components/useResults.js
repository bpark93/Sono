import { useState } from 'react';
import Fuse from 'fuse.js'
import {database} from '../../database'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchOptions = {
        keys: ['title', 'alt', 'category','tags']
    };
    const fuse = new Fuse(database, searchOptions);
       
    
    const searchApi = async (newText) => {
        try {
            const response = await fuse.search(newText);
            setResults(response);         
        } catch(e) {
            console.log(e)
            setErrorMessage('Your search could not be made at this time. :(')
        }
    }

    return [searchApi, results, errorMessage];
};