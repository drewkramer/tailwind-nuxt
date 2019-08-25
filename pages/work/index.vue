<template>
    <div>
        <div class="Content">
            <div class="py-20 px-12">
                <div class="container mb-16 px-10 mx-auto overflow-hidden">
                    <h1 class="text-4xl text-black">Work</h1>
                    <div class="flex flex-wrap my-12 -mx-4">
                        <div class="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
                            <nuxt-link to="/work/a-simple-palate" class="block max-w-md overflow-hidden rounded shadow-lg hover:shadow-xl">
                                <img class="w-full" src="https://picsum.photos/600/400" alt="Sunset in the mountains">
                                <div class="px-6 py-4">
                                    <p class="text-xl mb-2">The Coldest Sunset</p>
                                    <p class="text-gray-800 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>
                                <div class="px-6 pt-1 pb-6">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-800 mr-1">design</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-800 mr-1">code</span>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>