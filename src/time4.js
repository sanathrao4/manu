const slot = {
  contact: '7619414659',
    slotstartts: "8:00 AM",
    slotendts: "10:00 AM",
    woid: 109,
    wostatus: "Open"
    
   
   
}

const slot1= {
   contact: '7619414659',
    slotstartts: "11:00 AM",
    slotendts: "1:00 PM",
    woid: 109,
    wostatus: "Inprogress"
    
   
   
}

const slot2= {
    
  contact: '7619414659',
    slotstartts: "1:00 PM",
    slotendts: "2:00 PM",
    woid: 109,
    wostatus: "Open"
    
   
}

const slot3 = {
   contact: '7619414659',
    slotstartts: "2:00 PM",
    slotendts: "4:00 PM",
    woid: 109,
    wostatus: "Completed"
    
   
}

const slot4 = {
contact: '7619414659',
    slotstartts: "4:00 PM",
    slotendts: "6:00 PM",
    woid: 109,
    wostatus: "Esclate"
    
   
}


const slot5 = {
    
  contact: '7619414659',
    slotstartts: "6:00 PM",
    slotendts: "8:00 PM",
    woid: 109,
    wostatus: "Open"
    
   
   
}


const Log = (props) => {
    console.log(props);

    return (
        <article className='log'>
               <h1>{props.contact}</h1> 
           <h2> {props.slotstartts}</h2>
              <h2>{props.slotendts}</h2>
             <h2>{props.woid}</h2> 
              <h2>{props.wostatus}</h2>
        </article>
    );
};

const Loglist = () => {
    return (
        <section>
            <section className='loglist'>
                         <section className="slot6">
               <Log contact={slot.contact} slotstartts={slot.slotstartts} slotendts={slot.slotendts} woid={slot.woid} wostatus={slot.wostatus}/>
     </section>
     <section className="slot7">
     <Log contact={slot1.contact} slotstartts={slot1.slotstartts} slotendts={slot1.slotendts} woid={slot1.woid} wostatus={slot1.wostatus}/>
     </section>
     <section className="slot8">
     <Log contact={slot2.contact} slotstartts={slot2.slotstartts} slotendts={slot2.slotendts} woid={slot2.woid} wostatus={slot2.wostatus}/>
     </section>
       <section className="slot9">
     <Log contact={slot3.contact} slotstartts={slot3.slotstartts} slotendts={slot3.slotendts} woid={slot3.woid} wostatus={slot3.wostatus}/>
     </section>
      <section className="slot10">
   <Log contact={slot4.contact} slotstartts={slot4.slotstartts} slotendts={slot4.slotendts} woid={slot4.woid} wostatus={slot4.wostatus}/>
   </section>
       <section className="slot11">
   <Log contact={slot5.contact} slotstartts={slot5.slotstartts} slotendts={slot5.slotendts} woid={slot5.woid} wostatus={slot5.wostatus}/>
</section>
            </section>
        </section>
    )
}


export default Loglist