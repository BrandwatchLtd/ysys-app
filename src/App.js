import './App.css';
import React, {Component, useState} from 'react';
import { HeaderComponent } from './components/Header/HeaderComponent';
import { SidebarComponent } from './components/Sidebar/SidebarComponent';
import { FeedComponent } from './components/Feed/FeedComponent';
import { getData } from './api/api';
import { Base } from "@brandwatch/axiom-components";


function App() {
    const [sidebarCategories, setSidebarCategories] = useState(); 
    const [searchInput, setSearchInput] = useState(); 
    const [sidebarLimit, setSidebarLimit] = useState(10); 
    const [responseData, setResponseData] = useState();
    

    const fetchFilteredData = () => {
        getData(searchInput, sidebarCategories, sidebarLimit)
       
    };
    
    


    // do api call with (sidebarCategories, searchInput, sidebarLimit)
    // use response to set setResponseData(response)

    // TODO [STRETCH] - This could also include
    //  * the search term (if there is one)
    //  * whether the app is fetching data (loading)
    //  * any additional filters (number of results/filter terms in query string)

    //  Each part of the state will need to be passed down to its respective component(s) in order for it
    //  to be displayed/updated in the correct part of the UI
    //  * E.g. maybe you can expand/collapse the sidebar from the header and the feed, as well as the sidebar itself
    //  This means that the state will need to be accessed/updated from all of these components!

    // To get started:
    // TODO - add in an expanded state/setState
    // TODO - add in a feedResults state/setState
    // (See cheat sheet for useState example)


    // TODO - import getData() from api (you will need to write this function)
    //         and call it here (setting the results to the feedResults)
    // TODO [STRETCH] - implement loading state and pass to FeedComponent

    // TODO - pass in expanded sidebar state to components that need to know about it/update it.
    return (
        <Base className="app ax-theme--day">
            <HeaderComponent setSearchInput={setSearchInput} fetchFilteredData={fetchFilteredData} />
            <SidebarComponent setSidebarCategories={setSidebarCategories} setSidebarLimit={setSidebarLimit}/>
            <FeedComponent responseData={responseData} sidebarCategories={sidebarCategories}/>
        </Base>
    );
}

export default App;