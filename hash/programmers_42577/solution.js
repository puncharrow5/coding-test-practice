function solution(phone_book) {
    phone_book.sort();
    
    const isPrefix = phone_book.some((book,idx)=>{
        return phone_book[idx+1]?.startsWith(book);
    })
    
    return !isPrefix
}