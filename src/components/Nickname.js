import styles from "./Mypagebox.module.css"
import Nick from './Nick';
import InUseNick from './InUseNick';

const nickname = () => {
return (
    <>
    <div className={styles.MyPagebox}>
        
        <div className={styles.Item}>
            <p>닉네임</p>
        </div>
        <div className={styles.Contents}>

            <p>
            <InUseNick/>
            </p>

            <div className={styles.Change}>
            <Nick/>
            </div>
        </div>
        <hr/>
        </div>
        </>
);
};
export default nickname;