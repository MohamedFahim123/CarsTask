import styles from './notFound.module.css';
import notFoundImg from '../../assets/imges/not-found/404-not-found.png';
import { useNavigate } from 'react-router-dom';
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.notFound__handler}>
      <img src={notFoundImg} alt="not found page" />
      <button type="button" className='mainBtnStyle singUp__btn mt-4' onClick={()=>navigate('')}>Home</button>
    </div>
  );
};
