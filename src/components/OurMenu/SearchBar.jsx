import React, { useState } from 'react'
import menuData from "../../data/menuData";

function SearchBar({ setSelect, setUserSearch }) {

    function debounceSearch(e) {

        let timerId;
        return (e) => {
            const value = e.target.value;
            clearTimeout(timerId)
            timerId = setTimeout((e) => {
                setUserSearch(value)
            }, 1000);
        }
    }
    const userSearch = debounceSearch();
    return (
        <div className='search-&-filter my-10!'>
            <div className="container flex justify-between items-center">
                <div className="filtertabs py-2! px-4! border border-[#b92e2d] rounded-sm">
                    <select
                        onChange={(e) => setSelect(e.target.value)}
                        className='selectBox outline-none border-0'>

                        <option value="all">All</option>
                        <option value="snacks">Shanks</option>
                        <option value="cakes">Cake</option>
                        <option value="drinks">Drink</option>
                        <option value="food">Food</option>
                    </select>
                </div>
                <div className="searchbar">
                    <input
                        type="text"
                        placeholder='Search your favorite food...'
                        className='outline-0 border border-[#b92e2d] py-2! px-2! rounded-sm '
                        onChange={userSearch}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchBar