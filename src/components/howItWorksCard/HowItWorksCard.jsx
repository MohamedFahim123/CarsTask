import PropTypes from "prop-types";
import styles from './howItWorksCard.module.css';


export default function HowItWorksCard({card}) {
    return (
        <div className={styles.howItWorks__card}>
            <img src={card?.src ? card?.src : ''} alt="card icon" />
            <h4>{card?.head ? card?.head : ''}</h4>
            <p>{card?.content ? card?.content : ''}</p>
        </div>
    );
};

HowItWorksCard.propTypes = {
    card: PropTypes.object.isRequired,
};