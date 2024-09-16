import SimponsCard from "../../components/SimpsonsCard/SimpsonsCard";

import "./styles.css";

function Lesson_03() {
  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Safety Inspector",
    hobby: "beer Duff",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

  const margeSimpson = {
    firstName: "Marge",
    lastName: "Simpson",
    job: "No job",
    hobby: "cooking",
    avatar: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
  };

  const bartSimpson = {
    firstName: "Bart",
    lastName: "Simpson",
    job: "No job",
    hobby: undefined,
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
  };

  return (
    <div className="homework02-wrapper">
      <SimponsCard
        firstName={homerSimpson.firstName}
        lastName={homerSimpson.lastName}
        avatar={homerSimpson.avatar}
        hobby={homerSimpson.hobby}
        job={homerSimpson.job}
      />
      <SimponsCard
        firstName={margeSimpson.firstName}
        lastName={margeSimpson.lastName}
        avatar={margeSimpson.avatar}
        hobby={margeSimpson.hobby}
        job={margeSimpson.job}
      />
      <SimponsCard
        firstName={bartSimpson.firstName}
        lastName={bartSimpson.lastName}
        avatar={bartSimpson.avatar}
        hobby={bartSimpson.hobby}
        job={bartSimpson.job}
      />
    </div>
  );
}

export default Lesson_03;
