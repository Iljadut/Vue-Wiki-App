<template>
    <div class="hello">
        <textarea v-model="message" placeholder="Please add"></textarea>
    </div>
</template>

<script>
export default {
    name: "Textinput",
    props: {
        message: String,
    },
    data: function () {
        return {
            message: "",
        };
    },
};
</script>

<style scoped>

</style>