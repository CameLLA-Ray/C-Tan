<template>
  <div>
    <vee-form :validation-schema="schema" @submit="regUser">
      <div class="mb-3">
        <label class="inline-block mb-2">Name</label>
        <vee-field
          type="text"
          placeholder="Enter Name"
          name="name"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
        <ErrorMessage name="name" class="text-red-600"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label class="inline-block mb-2">Account</label>
        <vee-field
          type="text"
          placeholder="Account is unique for each user"
          name="account"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
        <ErrorMessage name="account" class="text-red-600"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label class="inline-block mb-2">Email</label>
        <vee-field
          v-model="UserEmail"
          type="email"
          name="email"
          placeholder="Enter email"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
        <ErrorMessage name="email" class="text-red-600"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label class="inline-block mb-2">Password</label>
        <vee-field
          type="password"
          name="password"
          placeholder="Enter password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
        <ErrorMessage name="password" class="text-red-600"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label class="inline-block mb-2">Confirm Password</label>
        <vee-field
          type="password"
          name="confirm_password"
          placeholder="Confirm password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
        <ErrorMessage name="confirm_password" class="text-red-600"></ErrorMessage>
      </div>

      <div class="mb-3 flex flex-row justify-between">
        <div>
          <label class="inline-block mb-2">Check code</label>
          <vee-field
            type="text"
            name="checkcode"
            placeholder="Enter the Check code"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          />
        </div>
        <button
          class="px-3 h-10 inline-block bg-deeper-green text-white rounded hover:bg-heigher-green self-end"
          @click="sendCode(UserEmail)"
        >
          Get the Checkcode
        </button>
        <ErrorMessage name="confirm_password" class="text-red-600"></ErrorMessage>
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
import { reactive, ref } from 'vue'
import { register } from '../network/register'
import { getCode } from '../network/checkCode'

// VeeValidate schema
const schema = reactive({
  name: 'required|min:3|max:20|alpha_spaces',
  email: 'required|min:3|max:100|email',
  password: 'required|min:9|max:100|excluded:password',
  confirm_password: 'passwords_mismatch:@password',
  checkcode: 'required',
  account: 'required|min:6'
})

//注册用户
const regUser = function (values) {
  console.log(values)
  const infoData = {
    checkPassword: values.confirm_password,
    code: values.checkcode,
    userAccount: values.account,
    userEmail: values.email,
    userName: values.name,
    userPassword: values.password
  }
  register(infoData).then((response) => {
    console.log(response.data.message)
  })
}

//获取验证码
const UserEmail = ref('')
const sendCode = function (values) {
  console.log(values)
  const data = {
    userEmail: values
  }
  getCode(data).then((response) => {
    console.log(response.data.message)
  })
}
</script>

<style lang="scss" scoped></style>
