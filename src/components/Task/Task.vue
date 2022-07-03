<template>
    <div :class="Condition[1]" class="task_animation w-full bg-slate-900 p-3 my-4 border-0 border-l-4 border-red-500 rounded-r-lg flex justify-between items-center shadow-2xl">
        <p
            @click="$emit('changeCondition')"
            :class="Condition[0]"
            class="select-none cursor-pointer text-gray-400 overflow-hidden w-[80%] h-6 relative after:w-8 after:h-[1.5rem] after:bg-gradient-to-l after:from-slate-900 after:absolute after:block after:right-0 after:top-0"
        >
            {{input}}
        </p>
        <div>
            <i @click="$emit('showFunc')" class="fa-solid fa-trash-can text-red-500 mr-4 cursor-pointer"></i>
            <i @click="$emit('edit')" class="fa-solid fa-pen-to-square text-green-500 cursor-pointer"></i>
        </div>
    </div>
</template>

<script src="./Task.js"></script>

<style src="./Task.css"></style>