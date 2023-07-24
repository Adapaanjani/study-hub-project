import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Main = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleBoxClick = (regulationId) => {
    navigate(`/regulation/${regulationId}`);
  };

  return (
    <>
      <div className={styles.main_container}>
        <nav className={styles.navbar}>
          <h1>JNTUK</h1>
          <h2>Welcome to JNTUK materials download website!</h2>

          <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button>
        </nav>

        <center>
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.M9LoBkZMhQrbE-v3MU0GaAHaHh&pid=Api&P=0&h=180"
            alt="JNTUK"
          />
          <p>
            Jawaharlal Nehru Technological University Kakinada (JNTUK) is
            established in the year 2008 vide ACT NO. 30 OF 2008 by the State of
            ANDHRA PRADESH. The University grew out of the College of Engineering
            Vizagapatnam founded by the Government of the composite Madras State
            in the year 1946. Spread over a sprawling campus of 100 acres in the
            port city of Kakinada, the college became a constituent of JNTU,
            Hyderabad in 1972. Subject to the trifurcation of the JNTUHyderabad,
            it was notified as JNTUK Kakinada by the act of legislature in 2008.
          </p>
          <br />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.jjdvUkRZpaRT3og_m5OqpQHaCy&pid=Api&P=0&h=180"
            alt="KIET"
          />
          <br />
          <p>
            Since the inception in 2001, the Mission of Kakinada Institute of
            Engineering and Technology (KIET) is to provide high-quality education
            in varied disciplines of technical education. Within a short span of
            a decade, it has steadily evolved into a world-class institution
            recognized for its experiential learning methodologies and practical
            exposure. KIET Group has attracted the most professional and
            passionate faculty to deliver knowledge and contextual applications
            in a vibrant learning environment.
          </p>
          <br />
          <p>
            Our college is <b>JNTUK</b> affiliated.
          </p>
        </center>
        <h1>COURSES IN KIET COLLEGE :</h1>
       <ol><b>
        <li>COMPUTER SCIENCE (cse)</li>
        <li>COMPUTER SCIENCE AND ARTIFICIAL INTELLIGENCE (cai)</li>
        <li>COMPUTER SCIENCE AND ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING (csm)</li>
        <li>COMPUTER SCIENCE AND DATA SCIENCE (csd)</li>
        <li>DATA SCIENCE AND ARTIFICIAL INTELLIGENCE (aids)</li>
        <li>COMPUTER SCIENCE AND CYBER SECURITY (csc)</li>
        </b>
       </ol>
      
        <h1>CHOOSE REGULATION</h1>
        <center>
       <div className={styles.container}>
        <div className={styles.box}>
          <div
            className={styles.component}
            onClick={() => handleBoxClick("R19")}
          >
            R19
          </div>
          </div>
          <div className={styles.box}>
          <div
            className={styles.component}
            onClick={() => handleBoxClick("R20")}
          >
            R20
          </div>
        </div>
        
      </div>
      </center>
      </div>
    </>
  );
};

export default Main;
