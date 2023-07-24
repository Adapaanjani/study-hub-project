import React, { useState } from "react";
import {  useParams } from "react-router-dom";
import styles from "./styles.module.css";

const Main = () => {
 
          
  const params = useParams();
  const id = params.id;

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleCourseClick = (courseName) => {
    setSelectedCourse(courseName);
  };

  return (
    <>
      <div className={styles.main_container}>
        <nav className={styles.navbar}>
          <h1 >JNTUK</h1>
          <h2>Welcome to JNTUK materials download website!</h2>
          <button className={styles.white_btn} onClick={handleLogout} >
            Logout
          </button>
          
        </nav>

        <center>
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.jjdvUkRZpaRT3og_m5OqpQHaCy&pid=Api&P=0&h=180"
            alt="KIET"
          />
          <br />
        </center>
        <h1>COURSES IN REGULATION ({id}) :</h1>
        {id === "R20" ? (
          <ol>
            <b>
              <div className={styles.course_boxes}>
                <div
                  className={styles.box}
                  onClick={() => handleCourseClick("COMPUTER SCIENCE AND ARTIFICIAL INTELLIGENCE")}
                >
                  <li>COMPUTER SCIENCE AND ARTIFICIAL INTELLIGENCE (cai)</li>
                  {selectedCourse === "COMPUTER SCIENCE AND ARTIFICIAL INTELLIGENCE" && (
                    <a href="https://drive.google.com/drive/folders/137tX06Gjuu2g3cM2sk1bf8OWmgP38S0B"  >Material</a>
                  )}
                </div>
                <div
                  className={styles.box}
                  onClick={() =>
                    handleCourseClick("COMPUTER SCIENCE AND ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING")
                  }
                >
                  <li>COMPUTER SCIENCE AND ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING (csm)</li>
                  {selectedCourse === "COMPUTER SCIENCE AND ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING" && (
                    <a href="https://drive.google.com/drive/folders/1p8uN1hvdFUCztzCJyRQ1sy-OF3S7gsAK"  >Material</a>
                  )}
                </div>
                <div
                  className={styles.box}
                  onClick={() => handleCourseClick("COMPUTER SCIENCE AND DATA SCIENCE")}
                >
                  <li>COMPUTER SCIENCE AND DATA SCIENCE (csd)</li>
                  {selectedCourse === "COMPUTER SCIENCE AND DATA SCIENCE" && (
                    <a href="https://drive.google.com/drive/folders/1eVBDCTMdIqklvbNEYBeKsvRG16HE96Tj"  >Material</a>
                  )}
                </div>
                <div
                  className={styles.box}
                  onClick={() => handleCourseClick("DATA SCIENCE AND ARTIFICIAL INTELLIGENCE")}
                >
                  <li>DATA SCIENCE AND ARTIFICIAL INTELLIGENCE (aids)</li>
                  {selectedCourse === "DATA SCIENCE AND ARTIFICIAL INTELLIGENCE" && (
                    <a href="https://drive.google.com/drive/folders/1mLwCG7ftYFKk26yRhtHCjVLapUepsKSA"  >Material</a>
                  )}
                </div>
                <div
                  className={styles.box}
                  onClick={() => handleCourseClick("COMPUTER SCIENCE AND CYBER SECURITY")}
                >
                  <li>COMPUTER SCIENCE AND CYBER SECURITY (csc)</li>
                  {selectedCourse === "COMPUTER SCIENCE AND CYBER SECURITY" && (
                    <a href="https://drive.google.com/drive/folders/1sSfiK6ibmSVSi1v0h0t50W0wjCWQdxxB"  >Material</a>
                  )}
                </div>
              </div>
            </b>
          </ol>
        ) : 
        <div
        className={styles.box}
        onClick={() => handleCourseClick("COMPUTER SCIENCE")}
      >
        <li><b>COMPUTER SCIENCE (cse)</b></li>
        {selectedCourse === "COMPUTER SCIENCE" && (
          <a href="https://drive.google.com/drive/folders/1kAhv0wWE_PAfCh-iJunqFipknjw6D05R">Material</a>
        )}
      </div>
        }
      </div>
    </>
  );
};

export default Main;
