import styles from './styles/specialOffer.module.css';

const SpecialOffer = () => {
    return ( 
        <>
            <div className={`${styles.cardSpecial} container-fluid justify-content-center`}>
                <div className="row  m-0">
                    <div className="col">
                        <div className={styles.circle}>
                            <img src="./images/Laye.svg" height={"330px"} alt="" />
                        </div>
                    </div>
                    <div className={`col d-flex align-items-center text-start`}>
                        <div className={styles.textContent}>
                            <h1 className={styles.titleText}>Oferta especial</h1>
                            <h2 className={styles.promoText}>Air Jordan edição de colecionador</h2>
                            <p className={`${styles.descriptionText} text-start`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                            <button className={`${styles.seeOffer} btn`}>Ver ofertas</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default SpecialOffer;