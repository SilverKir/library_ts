

export const getCount=async(bookId:string)=>{
    const url= process.env.COUNTER_URL+"/counter/"  + bookId;
    const response = await fetch(url);
    return response.json();
}


 export const setCounter=(bookId:string) => {
        const url = process.env.COUNTER_URL+"/counter/"  + bookId+"/incr";
        const options = {
            method: 'POST',
        };
        fetch(url, options)
            .then()
            .catch(error => {
                console.error('Error:', error);
            });
    }