import React from 'react'

const am = {
    time: '8AM',
}

const am1 = {
    time:'9AM',
}

const am2 = {
   time:'10AM',
}
const am3 = {
    time:'11AM',
}

const am4 = {
   time:'12PM'

}

const am5 = {
   time:'1PM'
}

const am6={
  time: '2PM'
}
const am7={
  time: '3PM'
}
const am8={
  time: '4PM'
}
const am9={
  time: '5PM'
}
const am10={
  time: '6PM'
}
const am11={
  time: '7PM'
}
const am12={
  time: '8PM'
}


const AM= (props) => {

    return (
        <article className='testing'>
            <h1>{props.time}</h1>
        </article>
    );
};


const TestList = () => {
    return (
        <section>
            <section className='testlist'>
                <AM time={am.time}/>
                <AM time={am1.time}/>
                <AM time={am2.time}/>
                <AM time={am3.time}/>
                <AM time={am4.time}/>
                <AM time={am5.time}/>
                <AM time={am6.time}/>
             <AM time={am7.time}/>
              <AM time={am8.time}/>
               <AM time={am9.time}/>
                <AM time={am10.time}/>
                 <AM time={am11.time}/>
                  <AM time={am12.time}/>
                
            </section>
        </section>
    )
}



export default TestList 