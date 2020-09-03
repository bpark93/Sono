import { useState } from 'react';
import Fuse from 'fuse.js'
import {database} from '../../database'

export default (layout) => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    let flatLayout = []
    Object.entries(layout).map(category => {
        Object.entries(category[1]).map(subcategory => {
            flatLayout.push(subcategory[1])
        })
    })
    const flatterLayout = flatLayout.flat()

    const searchOptions = {
        keys: ['title', 'alt', 'category']
    };
    const fuse = new Fuse(flatterLayout, searchOptions);       
    
    const searchApi = async (newText) => {
        try {
            const response = await fuse.search(newText);
            setResults(response);         
        } catch(e) {
            setErrorMessage('Your search could not be made at this time. :(')
        }
    }

    return [searchApi, results, errorMessage];
};