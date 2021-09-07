import React from 'react';
import "./Modal.css";

const Modal = ( props ) => {
    const { open, close, change, header } = props;
    return (
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        {props.children}
                    </main>
                    <footer>
                    <button className="change" onClick={change}> 변경 </button>
                        <button className="close" onClick={close}> 닫기 </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default Modal;