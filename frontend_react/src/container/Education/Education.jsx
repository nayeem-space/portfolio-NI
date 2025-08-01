import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Education.scss";

const educationData = [
  {
    institution: "University of Surrey",
    location: "Guildford, United Kingdom",
    years: "2021 - 2025",
    subject: "BSc Computer Science",
    result: "First Class",
  },
  {
    institution: "Cumilla Victoria Govt. College",
    location: "Cumilla, Bangladesh",
    years: "2018 - 2020",
    subject:
      "Mathematics, Physics, Chemistry, Biology, Information and Communication Technology (ICT), Bangla, English",
    result: "GPA-5.00",
  },
];

const Education = () => {
  return (
    <div className="app__education">
      <h1 className="head-text">Education</h1>

      <div className="app__education-list">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="education-entry"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="edu-date">{item.years}</div>
            <div className="edu-details">
              <h3>{item.institution}</h3>
              <p>{item.location}</p>
              <p>{item.subject}</p>
              <p>
                <strong>Result:</strong> {item.result}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Education, "app__education"),
  "education",
  "app__whitebg"
);
