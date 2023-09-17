<template>

    <aside class="text-white absolute top-14 mt-0 mr-10 w-[10em] md:h-screen bg-gray-800">
        <h1 class="text-center font-bold mt-3 mb-5">Categories</h1>
        <sidebarCategories @navigate="navigateTo('/')"/>
    </aside>

    <div class="text-white mt-10 flex items-center justify-center ml-[10em] " >
        <div v-if="article" class="w-[18em] md:w-fit">
            <div>
                <h1 class="font-bold mb-6 text-xl w-[34em]">{{ article.title }}</h1>
            <img :src="article.urlToImage" alt="" class="max-w-[30em] md:max-w-[65em]">
        
    </div>
        <div class="mt-7 flex items-center flex-col gap-10 md:block">
            <div class="flex justify-between">
            <p>Published: {{ article.publishedAt }}</p>
            <p>Author: {{ article.author }}</p>
        </div>
       
            <p>Source: <span>{{ article.source.name }}</span></p>
            <div class="flex items-center text-center justify-center mt-10">
            <div class="bg-gray-700 w-[40em] py-3 rounded">
                <p>{{ article.description }}</p>
            </div>
        </div>

        <div class="w-[30em] mt-10">
        <p class="mb-3">{{ article.content }}</p>
        <span @click="navigateTo(article.url,{external: true})" class=" font-semibold underline italic cursor-pointer">For full content click here</span>
        
    </div>
        </div>
        </div>
        
        <div v-else>Loading, please wait!</div>
        
    </div>
    
    
</template>



<script setup>


    

const route = useRoute()
const articleIndex = Number(route.params.id)
const articleData = route.query.articleData
const article = ref()

onMounted(()=>{

    setTimeout(() => {
        if(articleData){
        article.value = JSON.parse(articleData)
    } else if(articleIndex >= 0 && articleIndex < articles.length){
        article.value = articles[articleIndex]
    }
    }, 2000);
   
})


</script>