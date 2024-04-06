<template>
    <div class="flex justify-center mt-4">
            <button class="bg-buu py-3 px-2 w-72 rounded-xl font-medium">
                {{name}}
            </button>
        </div>
</template>
<script>

export default{
    name: "ButtonForm",
    props:{
        name:String
    }
}

</script>
<style></style>