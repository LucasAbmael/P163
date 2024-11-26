import { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/Logo-dark.png";

export default function Header() {
    return (
        <header className={styles.header} >
            <div className={styles.menuTop} >
                <a href="#" >
                    <img src={Logo} style={{ height: 50 }} />
                </a>
                <div className={styles.buttons} >
                    <button className={styles.button} >Ciar conta</button>
                    <button className={styles.button} >Entrar</button>
                </div>
            </div>
        </header>
    )
}