import { Footer } from '../../components/footer';
import {LoginCard} from '../../components/login-card';
import {SignUpCard} from '../../components/sign-up-card';

import styles from './styles.module.scss';

export default function Login() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
          <div className={styles.loginCard}>
              <LoginCard/>
          </div>
          <div className={styles.signUpCard}>
              <SignUpCard/>
          </div>
      </div>
      <div className={styles.footer}>
      <Footer/>
      </div>
    </div>
    
  )
}