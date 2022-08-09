const slot1= {
    img:"https://th.bing.com/th/id/OIP.QH7k13-9xxS-u9N2wHsufQHaHa?w=160&h=176&c=7&r=0&o=5&pid=1.7",
    wostatus: "Completed"
   
}

const slot2= {
    
    img:"https://th.bing.com/th/id/OIP.7BCar0HxGvTthX_buK5wywHaHa?w=163&h=176&c=7&r=0&o=5&pid=1.7",
    wostatus: "Open"
}

const slot3 = {

    img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0AKwDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAEDBAf/xAAfEAEAAQQDAAMAAAAAAAAAAAAAAQIDFJJRUpEEETH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIFBwP/xAAgEQEAAQIGAwAAAAAAAAAAAAAAAgFRBAUSExVTkZLR/9oADAMBAAIRAxEAPwD0zJv9o1gyb/aNYYq8GrneYd8vNXU2oWa5N/tGsGTf7RrDEObzDvl5qbULNsm/2jWDJv8AaNYYhzeYd8vNTahZtk3+0awZN/tGsMQ5vMO+XmptQs2yb/aNYMm/2jWGIc3mHfLzU2oWbZN/tGsGTf7RrDEObzDvl5qbULNsm/2jWDJv9o1hiHN5h3y81NqFm2Tf7RrBk3+0awxDm8w75eam1CzbJv8AaNYMm/2jWGIc3mHfLzU2oWbZN/tGsGTf7RrDEObzDvl5qbULNsm/2jWEn5N/tTrDIWmd5h3S81TahYVBx6vqoggogCiAKIAogCiAKIAogCiAAI1EVUEqACCiACoAqAAAAqAKgAogAqAAI1EVUVKgIIKAAIoAICiAKIoAICgACKCANRDxfEVKieHiiB4eACeL4AHieKAnh4oCeL4AHieKAeHgAni+ACeHio1EFQSooggogCiAKIAogCiAKIAogCiAKgjURVRUqACAAAAAAAAAAAAAAAAAgNRBUVKiCiAACKACKAgoCKACKAAAigCCo1EFQSoAIKIAKgCoAAACoAqACiACoAAjURVQSoAIKIAKgCoAAACoAqACiACoAAjURVRUqACAAAAAAAAAAAAAAAACANUHdi2Pr8q2kxbHFW0g9lrl2D6o+tPjna5XMWxxVtJi2OKtpBOOwfVH1p8NcrmLY4q2kxbHFW0gcdg+qPrT4a5XMWxxVtJi2OKtpA47B9UfWnw1yuYtjiraTFscVbSBx2D6o+tPhrlcxbHFW0mLY4q2kDjsH1R9afDXK5i2OKtpMWxxVtIHHYPqj60+GuVzFscVbSYtjiraQOOwfVH1p8NcrmLY4q2kxbHFW0gcdg+qPrT4a5XMWxxVtJi2OKtpA47B9UfWnw1yuYtjiraTFscVbSC0y7B9UfWnw1yu/9k=",
    wostatus: "Inprogress"
}

const slot4 = {
    
    img:"https://th.bing.com/th/id/OIP.XC8UEKjJekzOKIn9-n7s9gHaHa?w=158&h=176&c=7&r=0&o=5&pid=1.7",
    wostatus: "Escalated"
   
}

const Color = (props) => {
    console.log(props);

    return (
        <article className='color'>
            <img src={props.img}/>
              <h1>{props.wostatus}</h1>
        </article>
    );
};

const Colorlist = () => {
    return (
        <section>
            <section className='colorlist'>
      
     <section className="slot24">
     <Color img={slot1.img} wostatus={slot1.wostatus}/>
     </section>
     <section className="slot25">
     <Color img={slot2.img} wostatus={slot2.wostatus}/>
     </section>
       <section className="slot26">
     <Color img={slot3.img} wostatus={slot3.wostatus}/>
     </section>
      <section className="slot27">
   <Color img={slot4.img} wostatus={slot4.wostatus}/>
   </section>
   
            </section>
        </section>
    )
}
 export default Colorlist