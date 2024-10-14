import PropTypes from 'prop-types';
import styles from './mainHead.module.css';

export default function MainHead({ text ,alignStart}) {
    return (
        <>
            {
                text &&
                <p className={styles.mainHeadStyle} style={alignStart ? {marginInline:'0'} : {}}>{text}</p>
            }
        </>
    );
};
MainHead.propTypes = {
    text: PropTypes.string.isRequired,
    alignStart: PropTypes.bool,
};