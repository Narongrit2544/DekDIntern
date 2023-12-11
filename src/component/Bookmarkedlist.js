import React from 'react';
import './BannerSlider.css';
import BookList from './BookList';
const Bookmaredlist =() => {
   function myfunction(){
    var x = document.getElementById("myCheck");
    x.checked =true;
    console.log('Item Clicked! isSelected:', x);
   }
    
    return (
        <div className='list'> 
            <div className='headerlist'> 
                
                จำนวนทั้งหมด 100 รายการ 
               <button className='Edit-Button' onClick={myfunction}>
                    แก้ไข
                </button>    
            </div>
            <div className = 'ListBook'> 
                <BookList/>
                <BookList/>
                <BookList/>
                <BookList/>
                <BookList/>
                <BookList/>
                <BookList/>
                <BookList/>
                <BookList/>
            </div>
        </div>
        
        );


};

export default Bookmaredlist;