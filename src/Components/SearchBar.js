import React from 'react';

const SearchBar = ({ products, setSearchResults}) => {
    const handleSearchChange = (e) => {
        if(!e.target.value) {
            return setSearchResults(products);
        }
       
        const resultsArray = 
        products.filter(product => 
        product.title.toLowerCase().includes(e.target.value));
        setSearchResults(resultsArray);
        
    }
    return (
        <header>
            <form className="search" >
                <input 
                className="search__input" 
                type="text"
                id="search"
                placeholder="Search products"
                onChange={handleSearchChange}
                />
            </form>   
        </header>
    )
}
export default SearchBar;