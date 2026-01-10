import styles from './NavBar.module.css';
import rudolfLogov4 from '../../assets/img/rudolfLogov4.webp'
import { ButtonNavBar } from '../ButtonNavBar/ButtonNavBar';
import { CartWidget } from '../CartWidget/CartWidget'

export function NavBar () {
    return(
        <header className={`${styles.navbarHeader} px-8 py-2 relative text-sm`}>
            <div className={` ${styles.logoImgHeader} flex items-center gap-2 cursor-pointer`}>
                <img src={rudolfLogov4} alt="Logo Rudolf Mercadito" className='cursor-pointer'/>
                <h1 className='text-red-400 font-bold text-base'>Rudolf</h1>
            </div>
            <div className={`${styles.menuNavHeader} absolute left-1/2 -translate-x-1/2`}>
                <ButtonNavBar label='Frescos'/>
                <ButtonNavBar label='Procesados' />
                <ButtonNavBar label='Aceites' />
                <ButtonNavBar label='Bebidas' />
                
            </div>
            <div className={styles.carritoHeader}>
                <ButtonNavBar label='Entrar'/>
                <ButtonNavBar label='Cadastrar' className='bg-red-400 text-stone-50 hover:font-semibold hover:text-neutral-800'/>
                <div className='cursor-pointer hover:scale-110 duration-300 ease-in-out'>
                    <CartWidget />
                </div>
            </div>

        </header>
        
    )
}