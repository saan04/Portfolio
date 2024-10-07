import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = ()=>{
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} 
                alt="Me sitting with a laptop" 
                className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")}
                        alt="Cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>NLP Researcher</h3>
                            <p>
                                I am a research student with experience in utilising frameworks in the NLP suite. 
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")}
                        alt="Server" />
                        <div className={styles.aboutItemText}>
                            <h3>Model Fine-tuning</h3>
                            <p>
                                I have experience in fine-tuning models for Indic datasets. 
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")}
                        alt="UI" />
                        <div className={styles.aboutItemText}>
                            <h3>Dataset Curation</h3>
                            <p>
                                I have curated datasets by scrapping data from various Indic hosted forums and converted them into MUST-C and COVOST formats. 
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}