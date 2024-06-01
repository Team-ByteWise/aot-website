import { NestedRecord } from "./NavBarTypes";

const NavBarItems: NestedRecord = {
  Academics: {
    Departments: {
      "B. Tech": [
        { title: "CSBS", link: "/department/CSBS" },
        { title: "CSE", link: "/department/CSE" },
        { title: "ECE", link: "/department/ECE" },
        { title: "EE", link: "/department/EE" },
        { title: "EEE", link: "/department/EEE" },
        { title: "ME", link: "/department/ME" },
      ],
      PG: [
        { title: "MBA", link: "/department/MBA" },
        { title: "MCA", link: "/department/MCA" },
      ],
    },
    Programs: [
      { title: "UG Programs", link: "#" },
      { title: "PG Programs", link: "#" },
      { title: "Program Structure", link: "#" },
      { title: "Regulations", link: "#" },
      { title: "Curriculum", link: "#" },
    ],
    Resources: [
      { title: "Library", link: "/library" },
      { title: "Moodle", link: "/moodle" },
    ],
    Admission: [
      { title: "UG Admission", link: "#" },
      { title: "PG Admission", link: "#" },
    ],
  },
  Research: [
    { title: "Current Research", link: "#" },
    { title: "Past Research", link: "#" },
    { title: "Research Facilities", link: "#" },
  ],
  Students: [
    { title: "Life @ AOT", link: "#" },
    { title: "Campus Facilities", link: "#" },
    { title: "Career Services", link: "#" },
    { title: "Events", link: "#" },
  ],
  Faculty: [
    { title: "Faculty List", link: "/faculty/list" },
    { title: "Faculty Positions", link: "#" },
    { title: "Career Benefits @ AOT", link: "#" },
  ],
};

export default NavBarItems;