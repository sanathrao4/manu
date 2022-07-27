import React from 'react'

class Datepick extends React.Component

{
    constructor()
    {
        super()
        this.state={
            date1:new Date().toISOString().slice(0,10)
        }
    }

    selDate=(e)=>
    {
        this.setState({date1:e.target.value})
    }
    render()
    {
        return(
            <div className='main'>
                <input type="date" value={this.state.date1} onChange={this.selDate}/>
            </div>
        )
    }
}

export default Datepick 


// import React,{useState} from "react";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// function Datepick(){
//     const[startDate, setStartDate]=useState(new Date());
//     function onChangeDateHandler(value){
//         setStartDate(value);
//     }
//     return(
//         <div className="main">
//         <DatePicker 
//         selected={startDate}
//         onChange={onChangeDateHandler}
//         dateFormat="dd MMM yyyy"/>
//         </div>
//     );
// }

// export default Datepick





// import React,{useState, useEffect} from "react";
// import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css';

// function Datepick(){
//     const[startDate,setDate]=useState();
//       useEffect(() => {
//     setDate(new Date);
//   });
//     return(
//         <div className="main">
//         <DatePicker selected={startDate} onchange={e=>setDate(e.target.value)}/>
//         </div>
//     );
// }

// export default Datepick




// import React,{useState} from "react";

// function Datepick(){
//         const[startDate, setStartDate]=useState(new Date());
//     function onChangeDateHandler(value){
//         setStartDate(value);
//     }
//     return(
//         <div className="main">
//         <input type="date" 
//         selected={startDate}
//         onChange={onChangeDateHandler}
//         dateFormat="dd MMM yyyy"/>
//         </div>
//     );
// }
// export default Datepick



// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


// function Datepick (){
//     const [selectedDate , setSelectedDate]=useState(null)
//     return (
//         <div className='main'>
//             <DatePicker selected={selectedDate}
//             onChange={date=>setSelectedDate(date)}/>
//         </div>
//     )
// }

// export default Datepick


// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";



// const Datepick = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//   );
// };

// export default Datepick