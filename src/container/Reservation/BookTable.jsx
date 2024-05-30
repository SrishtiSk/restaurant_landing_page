import React,{ useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './BookTable.css';
import { SubHeading } from '../../components';

const BookTable = () => {
    const noOfpeople = [
        {value:0, name:"Table for..."},
        {value:1, name:"One"},
        {value:2, name:"Two"},
        {value:4, name:"Three"},
        {value:5, name:"Five"},
        {value:6, name:"Six"},
        {value:7, name:"Seven"},
        {value:8, name:"Eight"},
        {value:9, name:"Nine"},
        {value:10, name:"Ten"},   
    ]

    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState(null);

   
    function Options({options}){
        return ( options.map(option => 
            <option key={option.id} value={option.value}>
                {option.name}
            </option>
        )
    )}

  return (
    <div className='app__bg flex__center section__padding' id="bookTable">
        <div className='app__reservation'>
            <div className='app__reservation-heading'>
                <SubHeading title="Reservations"/>
                <h1 className='headtext__cormorant'>Book A Table</h1>
            </div>


            <div className='app__reservation-form flex__center'>
                <select name="people">
                    <Options options={noOfpeople}/>
                </select>
                    <DatePicker 
                    selected={date} onChange={(date)=>setDate(date)}
                    closeOnScroll={true} placeholderText="Enter Date"
                    calendarClassName="app__reservation-form_DatePicker_input"
                    minDate={new Date()} maxDate={new Date(new Date().setDate(new Date().getDate()+60))}
                    /> 
                    <div className='gutter'/>
                    <DatePicker selected={startTime}
                    onChange={(time)=> setStartTime(time)} showTimeSelect showTimeSelectOnly
                    timeIntervals={30} placeholderText='Time' dateFormat="h:mm aa"
                    minTime={new Date(0, 0, 0, 8, 0)} maxTime={new Date(0, 0, 0, 23, 0)}
                    />
        

            </div>

            <button className='custom__button' type='button'>Book Now</button>
        </div>
    </div>
  )
}

export default BookTable;
