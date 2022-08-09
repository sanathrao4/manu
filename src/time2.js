const slot6 = {
   
    contact: '7619414659',
    slotstartts: "8:00 AM",
    slotendts: "10:00 PM",
    woid: "woid 107",
    wostatus: "Inprogress"
    

}

const slot7= {
    
     
    contact: '7619414659',
    slotstartts: "10:00 AM",
    slotendts: "12:00 PM",
    woid: "woid 108",
    wostatus: "Esclate"
    

   
}

const slot8 = {
    
      
    contact: '7619414659',
    slotstartts: "1:00 AM",
    slotendts: "2:00 PM",
    woid: "woid 109",
    wostatus: "Open"
    

}

const slot9 = {
     
    contact: '7619414659',
    slotstartts: "2:00 AM",
    slotendts: "4:00 PM",
    woid: "woid 110",
    wostatus: "Completed"
    
}

const slot10 = {
    
     
    contact: '7619414659',
    slotstartts: "4:00 PM",
    slotendts: "6:00 PM",
    woid: "woid 111",
    wostatus: "Esclate"
    

}


const slot11 = {
  
    contact: '7619414659',
    slotstartts: "6:00 PM",
    slotendts: "8:00 PM",
    woid: "woid 112",
    wostatus: "Open"

   
}


const View = (props) => {
    console.log(props);

    return (
        <article className='view'>
             <h1>{props.contact}</h1> 
           <h2> {props.slotstartts}</h2>
              <h2>{props.slotendts}</h2>
             <h2>{props.woid}</h2> 
              <h2>{props.wostatus}</h2>
        </article>
    );
};

const Viewlist = () => {
    return (
        <section>
            <section className='viewlist'>
                <section className="fine">
               <View contact={slot6.contact} slotstartts={slot6.slotstartts} slotendts={slot6.slotendts} woid={slot6.woid} wostatus={slot6.wostatus}/>
     </section>
     <section className="fines">
     <View contact={slot7.contact} slotstartts={slot7.slotstartts} slotendts={slot7.slotendts} woid={slot7.woid} wostatus={slot7.wostatus}/>
     </section>
     <section className="arrowed">
     <View contact={slot8.contact} slotstartts={slot8.slotstartts} slotendts={slot8.slotendts} woid={slot8.woid} wostatus={slot8.wostatus}/>
     </section>
       <section className="arroweds">
     <View contact={slot9.contact} slotstartts={slot9.slotstartts} slotendts={slot9.slotendts} woid={slot9.woid} wostatus={slot9.wostatus}/>
     </section>
      <section className="ton">
   <View contact={slot10.contact} slotstartts={slot10.slotstartts} slotendts={slot10.slotendts} woid={slot10.woid} wostatus={slot10.wostatus}/>
   </section>
       <section className="tons">
   <View contact={slot11.contact} slotstartts={slot11.slotstartts} slotendts={slot11.slotendts} woid={slot11.woid} wostatus={slot11.wostatus}/>
</section>
            </section>
        </section>
    )
}


export default Viewlist