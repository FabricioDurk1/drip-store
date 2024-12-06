import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import styles from './styles/section.module.css';

const Section = ({title, link, children}) => {
    return (
        <section>
            <ul className={styles.textSection}>
                <li className={styles.title}>{title}</li>
                <li className={styles.showMore}><a href={link}>Ver todos<img src='/images/arrow24px.svg'/></a></li>                
            </ul>
            <div className={styles.cardSection}>
                {children}
            </div>
        </section>
     );
}
 
export default Section;