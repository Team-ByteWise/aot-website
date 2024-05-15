import Departments from "../assets/data/departments.json";

interface PlacementStatistics {
  year: number;
  percentage: number;
  placedStudents: number;
  totalOffers: number;
}

interface Department {
  name: string;
  tagLine: string;
  about: string;
  placementStatistics: PlacementStatistics;
}

export default Departments as { [key: string]: Department };
