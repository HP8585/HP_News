<template>
    <header >
        <div @click="isSidebarExpanded = !isSidebarExpanded" class="bg-gray-800 text-white flex justify-between md:w-full w-[41em] items-center h-14 px-8">
        <div class="cursor-pointer"><i class="fa fa-bars text-2xl" /></div>
        <div class="text-red-700 text-xl font-bold "><p style="text-shadow: 0px 0px 8px red;">HP News</p></div>
        <div class="text-black ">
            <!-- <input class="outline-none" type="text" placeholder="Search..."> -->
        </div>
    </div>
    <div class="z-20 absolute w-full h-[3em] duration-300" v-show="isSidebarExpanded">
    <burgermenu/>
</div>
    </header>

    <slot />
    

     
    <!-- <aside class="text-white md:absolute top-14 mt-3  w-[10em] h-screen bg-gray-800">
        <h1 class="text-center font-bold mt-3 mb-5">Categories</h1>
        <sidebarCategories/>
    </aside> -->
    
    <aside class="text-white absolute top-[52em] py-5 w-[10em] h-fit bg-gray-800">
       <sidebar-articles/>
    </aside>
    

    <footer class="text-gray-400 px-4 py-4 border-t-gray-800 border-t">
        <p>For reachout you can contact us via Whatsapp (+1234-421-5421)</p>
        <p>All rights reserved!</p>
    </footer>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'

const isSidebarExpanded = ref(false)

onClickOutside(isSidebarExpanded.value, ()=>{
    isSidebarExpanded.value = !isSidebarExpanded.value
})
</script>