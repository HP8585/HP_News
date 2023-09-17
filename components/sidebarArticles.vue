<template>

     <ul>
            <li @click="navigateToArticle(index)" v-for="(item, index) in articles" :key="index" class="mb-10 cursor-pointer border-b-gray-700 border-b-2 pb-2">
                <div>
            <img :src="item.urlToImage" alt="">
            <p class="text-center mt-3">{{ item.title }}</p>
        </div>
            </li>
        </ul>

</template>

<script setup>

const now = new Date()
const day = now.getDate()
const month = now.getMonth()
const year = now.getFullYear()

const articles = ref('')
async function loadNews(){
    const { data } = await useFetch(`https://newsapi.org/v2/everything?q=life&from=${year}-${month}-${day}&sortBy=publishedAt&pageSize=8&page=1`, {
        headers:{
            Authorization: 'Bearer 4bc4912a5f8448e09f5da308e62c27be'
        }
    })
    
    articles.value = data.value.articles
    

}


onMounted(()=>{
    setTimeout(() => {
        loadNews()
    }, 2000);
  

})

const navigateToArticle = (index)=>{
    const articleData = articles.value[index]
        navigateTo({
        path: `articles/${index}`,
        query: { articleData: JSON.stringify(articleData)}
    })
    
}
</script>

