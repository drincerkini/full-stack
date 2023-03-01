<template>
    <div class="form-register">
        <h1>Create an Account</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p><button @click="register" >Submit</button></p>
        <p><button @click="signInWithGoogle" >Sing In With Google</button></p>
    </div>
</template>


<script setup>
    import {ref} from 'vue';
    import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
    import router from '../router';

    const email = ref("");
    const password = ref("");

    const register = () => {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                console.log("Succesfuly registered!", data);
                router.push('/feed');
            })
            .catch((error) => {
                console.log(error.code);
                alert(error.message);
            });
    };

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(getAuth(), provider)
            .then((result) => {
                console.log(result.user);
                router.push("/feed");
            }).catch((error) =>{console.log("error", error)})
            
    }
</script>

<style scoped>
.form-register{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
}
</style>