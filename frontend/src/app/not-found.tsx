import React from 'react';
import styles from './page.module.scss';


function NotFound() {
    return (
        <div className={styles.main}>
            <p style = {{color: "red"}}>error</p> | Something went wrong!
        </div>
    );
}

export default NotFound;
