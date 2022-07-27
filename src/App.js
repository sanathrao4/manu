import React from 'react';
import './index.css';
import Header from './Header';
import BookList from './cardlist';
import ReactDom from 'react-dom';
import UserList from './userList'
import OfficeDropDown from './dropdown'
import Footer from './Footer';
import Search from './search';
import Timelist from './time';
import Viewlist from './time2';
import Readlist from './time3';
import Loglist from './time4';
import Outlist from './time5';
import Inlist from './time6';
import Datepick from './datepicker';
import Table from './table';
import TestList from './testing';
import Filter from './filter';





const App = () => {
    return (
        
       <div>
            <div>
              <Header/> 
            </div>
             <div>
                <BookList />
            </div>
          <div>
            <Datepick/>
          </div>
              <div>
                <Search/> 
            </div>   
            <div>
                <TestList/>
            </div>
            <div>
                <Filter/>
            </div>
              <div>
                <UserList />
            </div>
            <div>
                <Timelist/>
            </div>
            <div>
                <Viewlist/>
            </div>
            <div>
                <Readlist/>
            </div>
            <div>
                <Loglist/>
            </div>
            <div>
                <Outlist/>
            </div>
            <div>
                <Inlist/>
            </div>
            <div>
                <Footer/>
            </div>
            <div>
                <Table/>
            </div>
        </div>
    
    )
}

export default App 