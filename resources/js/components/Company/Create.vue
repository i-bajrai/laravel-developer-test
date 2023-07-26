<template>
  <div class="max-w-md mx-auto mt-10 bg-white p-6 rounded-md shadow-md">
    <h2 class="text-2xl font-bold mb-5 text-center">Create Company</h2>
    <error-display :errors="formErrors" class="mb-4"></error-display>
    <form @submit.prevent="submitForm" class="space-y-3" enctype="multipart/form-data">
      <div>
        <label for="name" class="block text-sm font-semibold text-gray-600">Company Name:</label>
        <input type="text" id="name" v-model="form.name" class="mt-1 block w-full border-2 p-3 rounded-md" />
      </div>
      <div>
        <label for="email" class="block text-sm font-semibold text-gray-600">Email:</label>
        <input type="email" id="email" v-model="form.email" class="mt-1 block w-full border-2 p-3 rounded-md" />
      </div>
      <div>
        <label for="logo" class="block text-sm font-semibold text-gray-600">Logo:</label>
        <input type="file" id="logo" ref="logoRef" class="mt-1 block w-full border-2 p-3 rounded-md" />
      </div>
      <div>
        <label for="website" class="block text-sm font-semibold text-gray-600">Website URL:</label>
        <input type="text" id="website" v-model="form.website" class="mt-1 block w-full border-2 p-3 rounded-md" />
      </div>
      <div>
        <button type="submit"
          class="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Create</button>
      </div>
    </form>
  </div>
</template>
  
<script>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ErrorDisplay from '../FormErrors.vue';

export default {
  components: {
    ErrorDisplay,
  },
  setup() {
    const router = useRouter();
    const formErrors = ref([]);
    const logoRef = ref(null);
    const form = ref({
      name: '',
      email: '',
      logo: null,
      website: ''
    });

    function onFileChange(e) {
      form.value.logo = e.target.files[0];
    }

    function submitForm() {
      let formData = new FormData();
      Object.entries(form.value).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      formData.append('logo', logoRef.value.files[0]);

      axios.post('/api/companies', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(({data}) => {
          if (data.id) {
            router.push('/companies');
          }
        })
        .catch((error) => {
          if (error.response && error.response.data && error.response.data.errors) {
            formErrors.value = Object.values(error.response.data.errors).flat(Infinity);
          } else {
            formErrors.value = ['An unknown error occurred. Please try again.'];
          }
        });
    }

    return { form, formErrors, logoRef, onFileChange, submitForm };
  }
}
</script>
   