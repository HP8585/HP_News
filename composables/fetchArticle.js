

export const loadNews = async (payload)=>{
    // const { data } = await useFetch(`https://newsapi.org/v2/everything?q=world&from=2023-08-16&sortBy=publishedAt&pageSize=3&page=1`, {
    //     headers:{
    //         Authorization: 'Bearer 4bc4912a5f8448e09f5da308e62c27be'
    //     }
    // })
    
    // payload.value = data.value.articles
    const apiKey = '4bc4912a5f8448e09f5da308e62c27be'; // Replace with your actual API key
    const url = `https://newsapi.org/v2/everything?q=world&from=2023-08-16&sortBy=publishedAt&pageSize=3&page=1&apiKey=${apiKey}`;
  
    const { data } = await useFetch(url);
    payload = data

}
