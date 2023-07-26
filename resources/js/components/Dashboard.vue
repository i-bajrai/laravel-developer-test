<template>
    <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-5">Dashboard</h2>
        
        <div class="grid grid-cols-2 gap-4">
            <div class="border p-5 text-center">
                <router-link to="/companies" class="text-blue-500 hover:text-blue-700">
                    <h3 class="text-lg font-bold mb-2">Companies</h3>
                    <p>Manage Companies</p>
                </router-link>
            </div>
            <div class="border p-5 text-center">
                <router-link to="/employees" class="text-blue-500 hover:text-blue-700">
                    <h3 class="text-lg font-bold mb-2">Employees</h3>
                    <p>Manage Employees</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // no logic needed for this component
}
</script>

<style scoped>
router-link {
    text-decoration: none;
}
</style>
