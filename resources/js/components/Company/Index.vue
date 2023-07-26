<template>
    <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-5">Companies</h2>

        <router-link to="/companies/create" class="mb-5 inline-block px-5 py-2 bg-blue-500 text-white rounded">Create
            New</router-link>

        <table class="table-auto w-full mt-5">
            <thead>
                <tr>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Email</th>
                    <th class="px-4 py-2">Logo</th>
                    <th class="px-4 py-2">Website</th>
                    <th class="px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="companies.length === 0">
                    <td colspan="5" class="border px-4 py-2 text-center">No companies found.</td>
                </tr>
                <tr v-for="company in companies" :key="company.id">
                    <td class="border px-4 py-2">{{ company.name }}</td>
                    <td class="border px-4 py-2">{{ company.email }}</td>
                    <td class="border px-4 py-2">
                        <img :src="company.logo" alt="Company Logo" class="h-10 w-10 object-cover">
                    </td>
                    <td class="border px-4 py-2">{{ company.website }}</td>
                    <td class="border px-4 py-2">
                        <router-link :to="`/companies/${company.id}/edit`"
                            class="text-blue-500 hover:text-blue-700 mr-2">Edit</router-link>
                        <a href="#" class="text-red-500 hover:text-red-700"
                            @click.prevent="deleteCompany(company)">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <button @click="nextPage" :disabled="currentPage === lastPage">Next</button>
    </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
    setup() {
        const companies = ref([]);

        const getCompanies = async () => {
            try {
                const response = await axios.get('/api/companies');
                companies.value = response.data.data;
            } catch (error) {
                console.error(error);
            }
        };

        const deleteCompany = (company) => {
            // Implement delete logic here
            console.log('Delete', company);
        };

        getCompanies();

        return {
            companies,
            deleteCompany,
        }
    },
}
</script>
