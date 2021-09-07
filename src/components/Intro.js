import React, {useState} from 'react';
import IntroMordal from './IntroModal';
import "./Modal.css";
import axios from 'axios';
import styles from "./Mypagebox.module.css"


function Password() {

    const [ modalOpen, setModalOpen ] = useState(false);
  
    const openModal = () => {
        setModalOpen(true);
    }
    const changeModal = () => {
        console.log(text);

    axios.patch('http://localhost:3001/nickname/1', {introduce: text})
    .catch(error => {
        console.error('Error!', error);
    });
        
        setModalOpen(false);
        window.location.reload();
    }
    const closeModal = () => {
        setModalOpen(false);
    }
    const [text, setText] = useState("");
    const onChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }
  
    return (
      <div >
  
        <React.Fragment>
              <button className="changePass" onClick={ openModal }>소개 변경</button>
              <IntroMordal open={ modalOpen } change={ changeModal } close={ closeModal } header="소개 변경" ChangeIntro={text}>
              
        <div className="value">
        <input type="text" className={styles.introText} onChange={onChange} value={text} name="introduce"/>
        </div>
        <div>
            <h4>* 최대 13자. 특수문자 가능</h4>
        </div>
              </IntroMordal>
          </React.Fragment>
  
  
      </div>
    );
  }
  
  export default Password;