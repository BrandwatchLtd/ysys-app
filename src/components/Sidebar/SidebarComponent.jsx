import React from 'react'
import './SidebarComponent.css';
import { Button } from '@material-ui/core'
import axios from 'axios';

 

// TODO - make sure SidebarComponent is expecting the right props!
export const SidebarComponent = () => {
   



    // TODO - reflect expanded/collapsed state in sidebar's className
    // TODO - make sure the classNames in the SidebarComponent.css match up with the classes you choose!
    return <div className={'sidebar'}>
        {
        /* TODO - flesh out this component to include all controls for configuring your data retrieval.
             This must include the category (books/characters/houses)
        */} 
       
        <div id="mySidebar" className="sidebar">
  <form className="search-bar"> 
        <input type="text" id="search" name="search" placeholder="Enter search..."/> <br></br><br></br>
        <Button variant="contained" color="secondary">
                  SEARCH
         </Button>
         
        </form>
  <a href="#">Houses</a>
  <a href="#">Books</a>
  <a href="#">Characters</a>
</div>


    </div>
};