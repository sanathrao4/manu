const slot = {
    
   contact: '7619414659',
    slotstartts: "8:00 AM",
    slotendts: "10:00 AM",
    woid: "woid 131",
    wostatus: "Open"
   
}

const slot1= {
    
    contact: '7619414659',
    slotstartts: "8:00 AM",
    slotendts: "10:00 AM",
    woid: "woid 132",
    wostatus: "Completed"
   
}

const slot2= {
    
    contact: '7619414659',
    slotstartts: "8:00 AM",
    slotendts: "10:00 AM",
    woid: "woid 133",
    wostatus: "Open"
}

const slot3 = {
    
   contact: '7619414659',
    slotstartts: "8:00 AM",
    slotendts: "10:00 AM",
    woid: "woid 134",
    wostatus: "Inprogress"
}

const slot4 = {
    
    contact: '7619414659',
    slotstartts: "8:00 AM",
    slotendts: "10:00 AM",
    woid: "woid 135",
    wostatus: "Completed"
   
}


const slot5 = {
    
    contact: '7619414659',
    slotstartts: "8:00 AM",
    slotendts: "10:00 AM",
    woid: "woid 136",
    wostatus: "Esclate",
   
}


const In = (props) => {
    console.log(props);

    return (
        <article className='in'>
            <h1>{props.contact}</h1> 
           <h2> {props.slotstartts}</h2>
              <h2>{props.slotendts}</h2>
             <h2>{props.woid}</h2> 
              <h2>{props.wostatus}</h2>
        </article>
    );
};

const Inlist = () => {
    return (
        <section>
            <section className='inlist'>
                 <section className="slot18">
               <In contact={slot.contact} slotstartts={slot.slotstartts} slotendts={slot.slotendts} woid={slot.woid} wostatus={slot.wostatus}/>
     </section>
     <section className="slot19">
     <In contact={slot1.contact} slotstartts={slot1.slotstartts} slotendts={slot1.slotendts} woid={slot1.woid} wostatus={slot1.wostatus}/>
     </section>
     <section className="slot20">
     <In contact={slot2.contact} slotstartts={slot2.slotstartts} slotendts={slot2.slotendts} woid={slot2.woid} wostatus={slot2.wostatus}/>
     </section>
       <section className="slot21">
     <In contact={slot3.contact} slotstartts={slot3.slotstartts} slotendts={slot3.slotendts} woid={slot3.woid} wostatus={slot3.wostatus}/>
     </section>
      <section className="slot22">
   <In contact={slot4.contact} slotstartts={slot4.slotstartts} slotendts={slot4.slotendts} woid={slot4.woid} wostatus={slot4.wostatus}/>
   </section>
       <section className="slot23">
   <In contact={slot5.contact} slotstartts={slot5.slotstartts} slotendts={slot5.slotendts} woid={slot5.woid} wostatus={slot5.wostatus}/>
</section>
            </section>
        </section>
    )
}


export default Inlist