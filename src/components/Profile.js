import styles from "./Mypagebox.module.css"
import { useState } from "react";
import Intro from "./Intro";
import InUseIntro from "./InUseIntro";

const Profile = () => {

    const [fileUrl, setFileUrl] = useState(null);

    function handleFileChange(event){
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl)
     }

return (
    <>
    <div className={styles.MyPageProfile}>
    
    <div className={styles.imageBox}>
    
    <div>
    <img className={styles.image} src={fileUrl} alt=""/>
    </div>
     
    </div>

  {/* <input type='file' 
      accept='image/jpg,impge/png,image/jpeg' 
      name='profile_img' 
    //   onChange={onChange}
      >
  </input>
  
  소개 한마디 정렬하기. 파일 선택이 아래로.
  */}


    <div className={styles.Item}>
        <p>소개 한마디</p>
    </div>
    <div className={styles.Contents}>
    <p>
            <InUseIntro/>
            </p>
        <div className={styles.Change}>
            <Intro/>
        </div>
        <hr style={
            {margin: "20px 0 20px 30px",
            width: "60%",
            border: "solid 1px",
            color: "#cccccc"}}/>
            </div>

    <div className={styles.itemSelect}>
    <label className={styles.inputFileButton} for="file">
  사진 선택
</label>
      <input className={styles.itemFile} type="file" id="file" onChange={handleFileChange} />
    </div>
    </div>
    </>
);
};
export default Profile;