import React from "react";

const Table=()=>{
    return <div className="app-container">
        <table>
            <thead>
                <tr></tr>
                <th>@</th>
                <th>Ordered</th>
                <th>importence</th>
                <th>Time Created</th>
                <th>Appointment</th>
                <th>Earliest Start</th>
                <th>Latest Finish</th>
                <th>Customer Name</th>
                <th>Customer Phone</th>
                <th>Customer Email</th>
                <th>Location</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>one item</td>
                    <td>High</td>
                    <td>10:00 to 12:00</td>
                    <td>12th</td>
                    <td>10clk</td>
                    <td>12clk</td>
                    <td>Mahesh</td>
                    <td>123456789</td>
                    <td>@gmail.com</td>
                    <td>Mysore</td>
                </tr>

                  <tr>
                    <td>1</td>
                    <td>one item</td>
                    <td>High</td>
                    <td>10:00 to 12:00</td>
                    <td>12th</td>
                    <td>10clk</td>
                    <td>12clk</td>
                    <td>Mahesh</td>
                    <td>123456789</td>
                    <td>@gmail.com</td>
                    <td>Mysore</td>
                </tr>
                
                
                
            </tbody>
        </table>

    </div>
};

export default Table