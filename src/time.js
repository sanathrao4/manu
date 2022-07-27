const slot = {
    
    
    contact: '7619414659',
    slotstartts: "8:00 AM",
    slotendts: "10:00 PM",
    woid: 101,
    wostatus: "Completed"
    

   
}

const slot1 = {
    
    contact: '9619414448',
    slotstartts: "10:00 AM",
    slotendts: "12:00 PM",
    woid: 102,
    wostatus: "Open"
   
}

const slot2 = {
    
     contact: '9619414688',
    slotstartts: "1:00 PM",
    slotendts: "2:00 PM",
    woid: 102,
    wostatus: "Inprogress"
}

const slot3 = {
    
     contact: '8619414668',
    slotstartts: "2:00 PM",
    slotendts: "4:00 PM",
    woid: 103,
    wostatus: "Esclate"
}

const slot4 = {
    
      contact: '9007656747',
    slotstartts: "4:00 PM",
    slotendts: "6:00 PM",
    woid: 104,
    wostatus: "Open"
   
}


const slot5 = {
    
      contact: '8123234332',
    slotstartts: "6:00 PM",
    slotendts: "8:00 PM",
    woid: 105,
    wostatus: "Completed"
   
}


const Time = (props) => {
    console.log(props);

    return (
        <article className='time'>
            
            <h1>{props.contact}</h1>
          
           <h2> {props.slotstartts}</h2>
              <h2>{props.slotendts}</h2>
             <h2>{props.woid}</h2> 
              <h2>{props.wostatus}</h2>
              
        </article>
    );
};

const Timelist = () => {
    return (
        <section>
            <section className='timelist'>
                <section className="define">
     <Time contact={slot.contact} slotstartts={slot.slotstartts} slotendts={slot.slotendts} woid={slot.woid} wostatus={slot.wostatus}/>
     </section>
     <section className="defines">
     <Time contact={slot1.contact} slotstartts={slot1.slotstartts} slotendts={slot1.slotendts} woid={slot1.woid} wostatus={slot1.wostatus}/>
     </section>
     <section className="arrow">
     <Time contact={slot2.contact} slotstartts={slot2.slotstartts} slotendts={slot2.slotendts} woid={slot2.woid} wostatus={slot2.wostatus}/>
     </section>
       <section className="arrows">
     <Time contact={slot3.contact} slotstartts={slot3.slotstartts} slotendts={slot3.slotendts} woid={slot3.woid} wostatus={slot3.wostatus}/>
     </section>
      <section className="button">
   <Time contact={slot4.contact} slotstartts={slot4.slotstartts} slotendts={slot4.slotendts} woid={slot4.woid} wostatus={slot4.wostatus}/>
   </section>
       <section className="buttons">
   <Time contact={slot5.contact} slotstartts={slot5.slotstartts} slotendts={slot5.slotendts} woid={slot5.woid} wostatus={slot5.wostatus}/>
</section>
            </section>
        
        </section>
    )
}
export default Timelist