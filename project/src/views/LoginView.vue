<template>
    <h1>Sign In</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    
    <p><button @click="register" >Submit</button></p>
    <p><button @click="signInWithGoogle" >Sing In With Google</button></p>
</template>


<script setup>
    import {ref} from 'vue';
    import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
    import router from '../router';

    const email = ref("");
    const password = ref("");

    const register = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((data) => {
                console.log("Succesfuly registered!", data);
                router.push('/categories');
            })
            .catch((error) => {
                console.log(error.code);
                alert(error.message);
            });
    };

    const signInWithGoogle = () => {

    }
</script>