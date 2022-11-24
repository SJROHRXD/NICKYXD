import { Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";
import testSkills from "../../data/testSkills.json";

export function Skills() {
  const tagid = uuidV4();

  return (
    <div>
      {testSkills.map((skill) => (
        <Button
          key={uuidV4()}
          style={{
            margin: "0.5rem",
            border: "none",
            backgroundColor: "#fe5bac",
            background: "linear-gradient(45deg, #fe5bac, #ff96ca)",
            borderRadius: "12px",
            height: "30px",
            width: "80px",
            padding: "3px",
            color: "#171617",
          }}
        >
          {skill.label}
        </Button>
      ))}
    </div>
  );
}

// map through testSkills.json and create a button for each skill, each button will have a unique id

// edit buttons as 'chips' / links to tags / onclick filter by selected tag?
