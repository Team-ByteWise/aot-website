import Departments from "../assets/data/departments.json";
import { Event } from "./Event";
import { Faculty } from "./Faculty";

interface PlacementStatistics {
  year: number;
  percentage: number;
  placedStudents: number;
  totalOffers: number;
}

interface FacultyInfo {
  facultyList: Faculty[];
  image: string;
}

export interface Department {
  name: string;
  tagLine: string;
  about: string;
  placementStatistics: PlacementStatistics;
  facultyInfo: FacultyInfo;
  events: Event[];
}

export default Departments as { [key: string]: Department };
