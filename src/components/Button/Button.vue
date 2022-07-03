<template>
  <button class="btn ml-4 border-none p-4 px-6 shadow-2xl" :class="AddClass">
    {{Value}}
    <slot></slot>
  </button>
</template>

<script src="./Button.js"></script>

<style></style>