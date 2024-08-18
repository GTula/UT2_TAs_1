function getTheTitles(books){
    let titles = "";
    for(let i =0; i<books.length; i++){
        titles+=" " + books[i].title;
    }
    console.log(titles);
    return titles;
}

const books = [
    {
    title: 'Book',
    author: 'Name'
    },
    {
    title: 'Book2',
    author: 'Name2'
    },
    {
    title: 'Book3',
    author: 'Name3'
    },
    {
    title: 'Book4',
    author: 'Name4'
    }
]  

getTheTitles(books);
