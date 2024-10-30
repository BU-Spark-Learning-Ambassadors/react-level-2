import {React, useState} from 'react'
import { Input, Space } from 'antd';
const { Search } = Input;



function SearchBar({setCurrentCity}) {
    // TO DO: Going to need a state variable here
    
    //  TO DO: Implement onSearch which sets the input of the user 
    // to the currentCity state variable and then clears the user input
    const onSearch = async() =>{
     alert('search feature to be implemented')
    }

  return (
    <div style={{width: '20rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto'}}>
    <Search placeholder="Enter City Name" onSearch={console.log('implement Searchbar.jxs')} enterButton value={"Change Me"} onChange={(e) => console.log(e.target.value + "e")}/>

    </div>
  )
}

export default SearchBar