import Image from 'next/image'
import styles from './loginForm.module.scss'
import RectangleContainer from './rectangleContainer'

export default function LoginForm() {
    return (
        <div className={styles.centerLogo}>
            <Image src="/assets/images/RMS.png" alt="logo" width={500} height={100}/>
        </div>
        

        
    )
}
