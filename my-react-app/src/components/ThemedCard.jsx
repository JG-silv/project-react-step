
import lightStyles from './ThemedCardLight.module.css';
import darkStyles from './ThemedCardDark.module.css';

const ThemedCard = ({ title, description, theme }) => {
  const styles = theme === 'dark' ? darkStyles : lightStyles;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ThemedCard;
                