<template>
    <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-5">Employees</h2>

        <router-link to="/employees/create" class="mb-5 inline-block px-5 py-2 bg-blue-500 text-white rounded">Create New</router-link>

        <table class="table-auto w-full mt-5">
            <thead>
                <tr>
                    <th class="px-4 py-2">First Name</th>
                    <th class="px-4 py-2">Last Name</th>
                    <th class="px-4 py-2">Company</th>
                    <th class="px-4 py-2">Email</th>
                    <th class="px-4 py-2">Phone</th>
                    <th class="px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="employees.length === 0">
                    <td colspan="6" class="text-center">No employees found.</td>
                </tr>
                <tr v-for="employee in employees" :key="employee.id">
                    <td class="border px-4 py-2">{{ employee.firstName }}</td>
                    <td class="border px-4 py-2">{{ employee.lastName }}</td>
                    <td class="border px-4 py-2">{{ employee.company.name }}</td>
                    <td class="border px-4 py-2">{{ employee.email }}</td>
                    <td class="border px-4 py-2">{{ employee.phone }}</td>
                    <td class="border px-4 py-2">
                        <router-link :to="`/employees/${employee.id}/edit`" class="text-blue-500 hover:text-blue-700 mr-2">Edit</router-link>
                        <a href="#" class="text-red-500 hover:text-red-700" @click.prevent="deleteEmployee(employee)">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
    setup() {
        const employees = ref([]);

        const getEmployees = async () => {
            try {
                const response = await axios.get('/api/employees');
                employees.value = response.data;
            } catch (error) {
                console.error(error);
            }
        };

        const deleteEmployee = (employee) => {
            // Implement delete logic here
            console.log('Delete', employee);
        };

        getEmployees();

        return {
            employees,
            deleteEmployee,
        }
    },
}
</script>
