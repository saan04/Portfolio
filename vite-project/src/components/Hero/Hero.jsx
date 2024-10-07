import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = ()=>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Saanvi!</h1>
            <p className={styles.description}>I am an NLP research student with 2 years of experience using NLP frameowrks and fairseq. Reach out if you want to collaborate in the Indic-NLP realm.</p>
            <a href="mailto:saanvinair2004@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;

};