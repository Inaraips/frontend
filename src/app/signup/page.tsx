import Image from "next/image"
import Link from "next/link"
import styles from '../page.module.scss'
import {api} from '@/services/api'
import {redirect} from 'next/navigation'



export default function Signup(){

     async function handleRegister(formData: FormData){
        "use server"
        const name = formData.get("name")
        const email = formData.get("email")
        const password = formData.get("password")

       if(name === "" || email === "" || password ===""){
        console.log("Preencha todos os campos")
        return;
       }

       try{
         await api.post("/users", {
            name,
            email,
            password
         })
       }catch(err){
        console.log("error")
        console.log(err)
       }

       redirect("/")

    }
    return(
        <>
        <div className={styles.containerCenter}>
      <Image
      src="/logo.svg"
      alt="Logo da pizzaria"
      width={400}
      height={100}
      />

      <section className={styles.login}>
        <h1>Criando sua conta</h1>
        <form action={handleRegister}>
            <input
          type="text"
          required
          name="name"
          placeholder='Digite seu name'
          className={styles.input}
          />
          <input
          type="email"
          required
          name="email"
          placeholder='Digite seu email'
          className={styles.input}
          />

           <input
          type="password"
          required
          name="password"
          placeholder='Senha de 8 digito'
          className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Cadastrar
          </button>
        </form>
        <Link href="/" className={styles.text}>
           Já possui uma conta? Faça o login
        </Link>



      </section>
      </div>
        </>
    )
}