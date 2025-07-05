import styles from './styles.module.scss'
import {Button} from "@/app/dashboard/components/button"

export default Category(){

    async function handleRegisterCategory() {
        "use server"
    }
    return(
        <main className={styles.container}>
        <h1>Nova Categolria</h1>

        <form
        className={styles.form}
        action={handleRegisterCategory}>

        <input
        type="text"
        name = "name"
        placeholder="Nome da Categoria, ex: pizza"
        required
        className={styles.input}
        />

        <Button name="Cadastrar"/>
        

        
        </form>
        </main>
    )
}