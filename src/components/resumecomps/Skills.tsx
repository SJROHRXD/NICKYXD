import { v4 as uuidV4 } from "uuid";
import testSkills from "../../data/testSkills.json";
import styles from "../../styles/skillsButton.module.css";

export function Skills() {
  return (
    <div>
      {testSkills.map((skill) => (
        <button key={uuidV4()} className={`${styles.ButtonB}`}>
          {skill.label}
        </button>
      ))}
    </div>
  );
}

// import { Button } from "react-bootstrap"; <-- removed that cuz wow

// map through testSkills.json and create a button for each skill, each button will have a unique id

// edit buttons as 'chips' / links to tags / onclick filter by selected tag?

// add checkmark to tags to indicate filtering
