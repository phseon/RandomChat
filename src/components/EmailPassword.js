import styles from "./Mypagebox.module.css"
import Password from './Password'
import InUseEmail from "./InUseEmail";

const EmailPassword = () => {
return (
    <>
    <div className={styles.MyPagebox}>
        
        <div className={styles.Item}>
            <p>이메일</p>
        </div>
        <div className={styles.Contents}>
            <p><InUseEmail/></p>
            <div className={styles.Change}><Password/>
            </div>
        </div>
        <hr/>
        </div>
        </>
);
};
export default EmailPassword;