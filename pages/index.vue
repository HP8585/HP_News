<template>
    <!--Loading-->
        <div v-show="isLoading" class="container mt-[50vh] text-white mx-auto w-fit">
            <p class="text-xl">Loading, please wait...</p>
        </div>

        <div  :class="{'w-10 py-[0.2em] translate-x-[37em] md:translate-x-[90em]':!isExpanded, 'w-[13em] translate-x-[27em] md:translate-x-[80em]':isExpanded}" class="duration-300 cursor-pointer  overflow-hidden  relative bg-red-700 rounded-full  px-3 translate-x-[29em] translate-y-[-3em] sm:translate-x-[-23em] ">
            <div class="flex">
            <i @click="isExpanded = !isExpanded" class="mr-2 ml-[-0.1em] text-2xl fa fa-magnifying-glass fa-shake text-white"/>
        <input v-model="searchQ" class="outline-none pl-4 ml-3" type="text" placeholder="Search..." >
    </div>
    </div>

      <aside class="text-white absolute top-14 mt-0 mr-10 w-[10em] md:h-screen bg-gray-800">
        <h1 class="text-center font-bold mt-3 mb-5">Categories</h1>
        <sidebarCategories @category="searchQSet"/>
    </aside>
    
    <div class="text-black md:container ml-[11em] md:mx-auto md:w-[70em] pb-10" v-show="!isLoading">
        <h1 class="text-white mb-4 text-3xl font-semibold">Latest News :</h1>

        <ul  class="w-[30em] md:w-full z-[222]">
            <li @click="navigateToArticle(index)" v-for="(item, index) in articles" :key="index" class="mb-10 bg-gray400 shadow-xl hover:scale-105 cursor-pointer duration-300 hover:shadow-2xl " >
                <div class="relative">
                <img :src="item.urlToImage" alt="img" class="w-full max-h-[16em] md:max-h-[32em] object-cover flex items-center justify-center"  v-if="item.urlToImage">
                
                    <div v-if="item.urlToImage">
                        <span class="translate-y-[-14em] md:absolute text-white font-bold px-2 py-2 text-[.7rem] md:text-[0.8rem] bg-gray-800 bg-opacity-60 z-10">Published: {{ item.publishedAt }}</span>
                    <p class="translate-y-[-6em] md:absolute text-white font-bold px-10 py-5 md:text-xl bg-gray-800 bg-opacity-60 z-10">{{ item.title }}</p>
                </div>
                
            </div>
            

            </li>
        </ul>
    
       
    </div>
     
     <div v-show="!isLoading" class="flex gap-3 mb-10 ml-[62vw] md:ml-[50vw]  text-lg bg-gray-800 translate-y-[-2em] container mx-auto w-fit px-3 py-1 rounded  text-white ">
            <div @click="prev" class="cursor-pointer"><i class="fa-solid fa-chevron-left" /></div>
            <p>{{ page }}</p>
            <div @click="next" class="cursor-pointer"><i class="fa-solid fa-chevron-right " /></div>
        </div>


       
</template>

<script setup>
// import { refDebounced } from 'vue'

const isExpanded = ref(false)

const isLoading = ref(true)

//pagination

const page = ref(1)
function prev(){
    if(page.value > 1){
        page.value --;
        loadNews()
    } else{
        return;
    }
    
}
function next(){
    if(page.value >= 1){
        page.value ++;
        loadNews()
    } else{
        return;
    }
    
}

const now = new Date()
const day = now.getDate()
const month = now.getMonth()
const year = now.getFullYear()

const searchQ = ref('')
// const searchQDebounced = refDebounced(searchQ.value, 600)
const searchQSet = (category) => {
  searchQ.value = category;
  loadNews();
}
const articles = ref('')

// async function loadNews(){
//     const { data } = await useFetch(`https://newsapi.org/v2/everything?q=${searchQ.value === '' ? 'world': searchQ.value}&from=${year}-${month}-${day}&sortBy=publishedAt&pageSize=5&page=${page.value}`, {
//         headers:{
//             Authorization: 'Bearer 4bc4912a5f8448e09f5da308e62c27be'
//         }
//     })
    
//     articles.value = data.value.articles

// }

async function loadNews() {
  try {
    const { data } = await useFetch(`https://newsapi.org/v2/everything?q=${searchQ.value === '' ? 'world': searchQ.value}&from=${year}-${month}-${day}&sortBy=publishedAt&pageSize=5&page=${page.value}`, {
        headers:{
            Authorization: 'Bearer 4bc4912a5f8448e09f5da308e62c27be'
        }
    })
    articles.value = data.articles;
  } catch (error) {
    console.error(error);
  }
}


// watchEffect(()=>{
//     // searchQDebounced();

// })
watchEffect(()=>{
 
        loadNews()
    
})

onMounted(()=>{
    setTimeout(() => {
        loadNews()
        isLoading.value = false
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