import styles from "./Home.module.css";
import carImage from "../../assets/images/h car.png";
function Home() {
  return (
    <div
      className={`${styles.hero} bg-dark text-white d-flex align-items-center justify-content-start`}
    >
      <div className={`${styles.text} text-white fs-1`}>
        Buy Your Next <span>Modern</span> Car
      </div>

      <div className={`${styles.rectangle}`}>
        <img src={carImage} alt="Car" className={styles.carImage} />
      </div>
    </div>
  );
}

export default Home;
