import { ClassroomProvider } from "../../../context/final-exercise-contexts/ClassroomContext";
import Classroom from "./Classroom";

export default function InteractiveClassroom(){
    return (
    <ClassroomProvider>
      <Classroom />
    </ClassroomProvider>
  );
}