const seventhbook = {
    img: "https://cdn-icons-png.flaticon.com/128/3048/3048122.png",
    title: 'Andy Adarsh',
    contact: '123456789',
    toggle:"https://th.bing.com/th/id/OIP.H8nm4cT4ulpHBw2jj1iAVgHaHa?w=162&h=180&c=7&r=0&o=5&pid=1.7",
}
const eighthbook = {
    img: "https://cdn-icons-png.flaticon.com/128/3048/3048122.png",
    title: 'Bharath',
    contact: '123456789',
    toggle:"https://th.bing.com/th/id/OIP.H8nm4cT4ulpHBw2jj1iAVgHaHa?w=162&h=180&c=7&r=0&o=5&pid=1.7",
}

const ninthbook = {
    img: "https://cdn-icons-png.flaticon.com/128/3048/3048122.png",
    title: 'Chethan',
    contact: '123456789',
    toggle:"https://th.bing.com/th/id/OIP.H8nm4cT4ulpHBw2jj1iAVgHaHa?w=162&h=180&c=7&r=0&o=5&pid=1.7",
}


const tenthbook = {
    img: "https://cdn-icons-png.flaticon.com/128/3048/3048122.png",
    title: 'Darshan',
    contact: '123456789',
    toggle:"https://th.bing.com/th/id/OIP.H8nm4cT4ulpHBw2jj1iAVgHaHa?w=162&h=180&c=7&r=0&o=5&pid=1.7",
}

const elebook = {
    img: "https://cdn-icons-png.flaticon.com/128/3048/3048122.png",
    title: 'Sandesh',
    contact: '123456789',
    toggle:"https://th.bing.com/th/id/OIP.H8nm4cT4ulpHBw2jj1iAVgHaHa?w=162&h=180&c=7&r=0&o=5&pid=1.7",
}
const twobook = {
    img: "https://cdn-icons-png.flaticon.com/128/3048/3048122.png",
    title: 'Praveen',
    contact: '123456789',
    toggle:"https://th.bing.com/th/id/OIP.H8nm4cT4ulpHBw2jj1iAVgHaHa?w=162&h=180&c=7&r=0&o=5&pid=1.7",
}


const Books = (props) => {
    console.log(props);

    return (
        <article className='user'>
            <img src={props.img} alt="" />
            <h1>{props.title}</h1>
            <h2>{props.contact}</h2>
            <article className="menu">
            <img src={props.toggle} alt=""/>
          </article>
        </article>
    );
};



const Userlist = () => {
    return (
        <section>
            <section className='userlist'>
                <Books img={seventhbook.img} title={seventhbook.title} contact={seventhbook.contact} toggle={seventhbook.toggle} />
                <Books img={eighthbook.img} title={eighthbook.title} contact={eighthbook.contact} toggle={seventhbook.toggle} />
                <Books img={ninthbook.img} title={ninthbook.title} contact={ninthbook.contact} toggle={seventhbook.toggle} />
                <Books img={tenthbook.img} title={tenthbook.title} contact={tenthbook.contact} toggle={seventhbook.toggle} />
                <Books img={elebook.img} title={elebook.title} contact={elebook.contact} toggle={seventhbook.toggle} />
                <Books img={twobook.img} title={twobook.title} contact={twobook.contact} toggle={seventhbook.toggle} />
            </section>
        </section>
    )
}


export default Userlist
