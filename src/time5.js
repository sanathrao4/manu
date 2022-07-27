const slot = {
    
    contact: '7619414659',
    slotstartts: "8:00 AM",
    slotendts: "10:00 AM",
    woid: 109,
    wostatus: "Inprogress"
   
}

const slot1= {
    
   contact: '7619414659',
    slotstartts: "11:00 AM",
    slotendts: "1:00 AM",
    woid: 109,
    wostatus: "Open"
   
}

const slot2= {
    contact: '7619414659',
    slotstartts: "1:00 AM",
    slotendts: "2:00 AM",
    woid: 109,
    wostatus: "Esclate"
}

const slot3 = {
    
    contact: '7619414659',
    slotstartts: "2:00 AM",
    slotendts: "4:00 AM",
    woid: 109,
    wostatus: "Complete"
}

const slot4 = {
    
   contact: '7619414659',
    slotstartts: "4:00 AM",
    slotendts: "6:00 AM",
    woid: 109,
    wostatus: "Inprogress"
   
}


const slot5 = {
    
    contact: '7619414659',
    slotstartts: "6:00 AM",
    slotendts: "8:00 AM",
    woid: 109,
    wostatus: "Open"
   
}


const Out = (props) => {
    console.log(props);

    return (
        <article className='out'>
          <h1>{props.contact}</h1> 
           <h2> {props.slotstartts}</h2>
              <h2>{props.slotendts}</h2>
             <h2>{props.woid}</h2> 
              <h2>{props.wostatus}</h2>
        </article>
    );
};

const Outlist = () => {
    return (
        <section>
            <section className='outlist'>
              <section className="slot12">
               <Out contact={slot.contact} slotstartts={slot.slotstartts} slotendts={slot.slotendts} woid={slot.woid} wostatus={slot.wostatus}/>
     </section>
     <section className="slot13">
     <Out contact={slot1.contact} slotstartts={slot1.slotstartts} slotendts={slot1.slotendts} woid={slot1.woid} wostatus={slot1.wostatus}/>
     </section>
     <section className="slot14">
     <Out contact={slot2.contact} slotstartts={slot2.slotstartts} slotendts={slot2.slotendts} woid={slot2.woid} wostatus={slot2.wostatus}/>
     </section>
       <section className="slot15">
     <Out contact={slot3.contact} slotstartts={slot3.slotstartts} slotendts={slot3.slotendts} woid={slot3.woid} wostatus={slot3.wostatus}/>
     </section>
      <section className="slot16">
   <Out contact={slot4.contact} slotstartts={slot4.slotstartts} slotendts={slot4.slotendts} woid={slot4.woid} wostatus={slot4.wostatus}/>
   </section>
       <section className="slot17">
   <Out contact={slot5.contact} slotstartts={slot5.slotstartts} slotendts={slot5.slotendts} woid={slot5.woid} wostatus={slot5.wostatus}/>
</section>
            </section>
        </section>
    )
}


export default Outlist