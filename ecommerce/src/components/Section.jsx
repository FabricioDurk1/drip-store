import './section.css';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

const Section = ({title, link, children}) => {
    return (
        <>
        <section>
            <ul>
                <li className='title'>{title}</li>
                <li className='show-more'><a href={link}>Ver todos</a></li>                
            </ul>
            <div>
                {children}
            </div>
        </section>
        </>
     );
}
 
export default Section;