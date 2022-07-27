const firstbook = {
    img: "https://th.bing.com/th/id/OIP.E1Le23l87tj1YW2TMWYN9gHaHa?pid=ImgDet&rs=1",
    title: 'SCHEDULE ITEMS',
    contact: '35',
}

const secondbook = {
    img: "https://th.bing.com/th/id/OIP.k33dlLqSdWSWl8zZn8WM1AAAAA?w=160&h=180&c=7&r=0&o=5&pid=1.7",
    title: 'RESCHEDULE ITEMS',
    contact: '0',
}

const thirdbook = {
    img: "https://th.bing.com/th/id/OIP.L8wP__xWLTmnoh7GKx5V2gAAAA?w=180&h=180&c=7&r=0&o=5&pid=1.7",
    title: 'COMPLETE ITEMS',
    contact: '24',
}

const fourthbook = {
    img: "https://th.bing.com/th/id/OIP.A6yiC0f71idRUBEjCRSIkwHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7",
    title: 'MISSED APPS',
    contact: '0',
}

const fifthbook = {
    img: "https://cdn2.iconfinder.com/data/icons/arrow-18/15/19-512.png",
    title: 'MATERIAL WORK ',
    contact: ' 75%',

}

const sixthbook = {
    img: "https://cdn2.iconfinder.com/data/icons/arrow-18/15/19-512.png",
    title: 'ACTIVITY',
    contact: ' 64%',
}



const Book = (props) => {

    return (
        <article className='book'>
            <img src={props.img} alt="" />
            <h1>{props.title}</h1>
            <h2>{props.contact}</h2>

        </article>
    );
};


const BookList = () => {
    return (
        <section>
            <section className='booklist'>
                <Book img={firstbook.img} title={firstbook.title} contact={firstbook.contact} />
                <Book img={secondbook.img} title={secondbook.title} contact={secondbook.contact} />
                <Book img={thirdbook.img} title={thirdbook.title} contact={thirdbook.contact} />
                <Book img={fourthbook.img} title={fourthbook.title} contact={fourthbook.contact} />
                <Book img={fifthbook.img} title={fifthbook.title} contact={fifthbook.contact} />
                <Book img={sixthbook.img} title={sixthbook.title} contact={sixthbook.contact} />
            </section>
        </section>
    )
}



export default BookList 