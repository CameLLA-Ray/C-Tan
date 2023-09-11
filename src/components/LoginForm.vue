<template>
  <div>
    <vee-form :validation-schema="schema" @submit="loginInto">
      <!-- Email -->
      <div class="mb-3">
        <label class="inline-block mb-2">Email</label>
        <vee-field
          type="email"
          placeholder="Enter your register email"
          name="email"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
        <ErrorMessage name="email" class="text-red-600"></ErrorMessage>
      </div>
      <!-- Password -->
      <div class="mb-3">
        <label class="inline-block mb-2">Password</label>
        <vee-field
          type="password"
          placeholder="Password"
          name="password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
        <ErrorMessage name="password" class="text-red-600"></ErrorMessage>
      </div>
      <button
        type="submit"
        class="block w-full bg-deeper-green text-white py-2 px-3 rounded transition hover:bg-heigher-green"
      >
        Submit
      </button>
    </vee-form>
  </div>
</template>

<script setup>
import { ErrorMessage } from 'vee-validate'
import { reactive } from 'vue'
import { login } from '../network/login'
import { useRoute, useRouter } from 'vue-router'

//参数验证
const schema = reactive({
  email: 'required|min:3|max:100|email',
  password: 'required|min:9|max:100|excluded:password'
})

//登录账号
const route = useRoute()
const router = useRouter()

const loginInto = function (values) {
  console.log(values)
  const infoData = {
    userEmail: values.email,
    userPassword: values.password
  }
  login(infoData).then((response) => {
    console.log(response)
    if (response.data.message === 'ok') {
      localStorage.setItem('token', response.data.data)
      router.push('/dashboard')
    } else {
      alert(response.data.message)
    }
  })
}
</script>

<style lang="scss" scoped>
.btn {
  width: 75px;
  height: 32px;
  border-radius: 8px;
  color: white;
  background-color: #6c7c6f;
}
</style>
