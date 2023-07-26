<template>
    <div>
        <h2>Create Employee</h2>
        <form @submit.prevent="submitForm">
            <label for="first_name">First Name:</label>
            <input type="text" id="first_name" v-model="form.first_name" />

            <label for="last_name">Last Name:</label>
            <input type="text" id="last_name" v-model="form.last_name" />

            <label for="company_id">Company:</label>
            <select id="company_id" v-model="form.company_id">
                <option v-for="company in companies" :key="company.id" :value="company.id">{{ company.name }}</option>
            </select>

            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email" />

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" v-model="form.phone" />

            <button type="submit">Create</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
    setup() {
        const form = ref({
            first_name: '',
            last_name: '',
            company_id: '',
            email: '',
            phone: ''
        })

        const companies = ref([])

        const fetchCompanies = async () => {
            const response = await axios.get('/api/companies')
            companies.value = response.data.data
        }

        const submitForm = async () => {
            try {
                await axios.post('/api/employees', form.value)
                form.value = {
                    first_name: '',
                    last_name: '',
                    company_id: '',
                    email: '',
                    phone: ''
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchCompanies()

        return {
            form,
            companies,
            submitForm
        }
    }
}
</script>
