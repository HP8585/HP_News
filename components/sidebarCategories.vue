<template>
     <div>
            <ul class="flex flex-col gap-3 px-2">
                <li @click="emitCategory('Politics'), $emit('navigate')" class="border-b-gray-700 border-b pb-2 cursor-pointer hover:bg-gray-700 duration-200 pl-3 pt-2 rounded">
                    <p>Politics</p>
                </li>
                <li @click="emitCategory('Crimes'), $emit('navigate')" class="border-b-gray-700 border-b pb-2 cursor-pointer hover:bg-gray-700 duration-200 pl-3 pt-2 rounded">
                    <p>Crimes</p>
                </li>
                <li @click="emitCategory('Sports'), $emit('navigate')" class="border-b-gray-700 border-b pb-2 cursor-pointer hover:bg-gray-700 duration-200 pl-3 pt-2 rounded">
                    <p>Sports</p>
                </li>
                <li @click="emitCategory('Cosmetics'), $emit('navigate')" class="border-b-gray-700 border-b pb-2 cursor-pointer hover:bg-gray-700 duration-200 pl-3 pt-2 rounded">
                    <p>Cosmetics</p>
                </li>
                <li @click="emitCategory('Health and beauty'), $emit('navigate')" class="border-b-gray-700 border-b pb-2 cursor-pointer hover:bg-gray-700 duration-200 pl-3 pt-2 rounded">
                    <p>Helath and beauty</p>
                </li>
                <li @click="emitCategory('Mechanics'), $emit('navigate')" class="border-b-gray-700 border-b pb-2 cursor-pointer hover:bg-gray-700 duration-200 pl-3 pt-2 rounded">
                    <p>Mechanics</p>
                </li>
                <li @click="emitCategory('Future'), $emit('navigate')" class="border-b-gray-700 border-b pb-2 cursor-pointer hover:bg-gray-700 duration-200 pl-3 pt-2 rounded">
                    <p>Future</p>
                </li>
                <li @click="emitCategory('Education'), $emit('navigate')" class="border-b-gray-700 border-b pb-2 cursor-pointer hover:bg-gray-700 duration-200 pl-3 pt-2 rounded">
                    <p>Education</p>
                </li>
                <li @click="emitCategory('Medical'), $emit('navigate')" class="border-b-gray-700 border-b pb-2 cursor-pointer hover:bg-gray-700 duration-200 pl-3 pt-2 rounded">
                    <p>Medical</p>
                </li>
                <li @click="emitCategory('Science'), $emit('navigate')" class="border-b-gray-700 border-b pb-2 cursor-pointer hover:bg-gray-700 duration-200 pl-3 pt-2 rounded">
                    <p>Science</p>
                </li>
                <li @click="emitCategory('Robotics'), $emit('navigate')" class="border-b-gray-700 border-b pb-2 cursor-pointer hover:bg-gray-700 duration-200 pl-3 pt-2 rounded">
                    <p>Robotics</p>
                </li>
                <li @click="emitCategory('Nature'), $emit('navigate')" class="border-b-gray-700 border-b pb-2 cursor-pointer hover:bg-gray-700 duration-200 pl-3 pt-2 rounded">
                    <p>Nature</p>
                </li>
                <li @click="emitCategory('Agriculture'), $emit('navigate')" class="border-b-gray-700 border-b pb-2 cursor-pointer hover:bg-gray-700 duration-200 pl-3 pt-2 rounded">
                    <p>Agriculture</p>
                </li>
                
            </ul>
        </div>
</template>

<script>

export default {
    setup(props, context){
        const emitCategory = (category) => {
    
     context.emit('category', category);
}
    return{
        emitCategory
    }
    }
}



</script>