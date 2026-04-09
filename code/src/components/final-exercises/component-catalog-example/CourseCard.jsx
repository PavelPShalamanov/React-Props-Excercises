import "./ComponentCatalog.css";

export default function CourseCard({ course }) {
  const levelColor = {
    Beginner: "green",
    Intermediate: "orange",
    Advanced: "red",
  };

  return (
    <div className="card">
      <div className="card-left">
        <h3>{course.title}</h3>
      </div>

      <div className="card-right">
        <span
          className="badge"
          style={{ background: levelColor[course.level] }}
        >
          {course.level}
        </span>

        <span>{course.category}</span>

        <div className="rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < course.rating && "⭐"}</span>
          ))}
        </div>

        <span className="students">{course.students} students</span>
      </div>
    </div>
  );
}

// export default function CourseCard({ course }) {
//   const levelColor = {
//     Beginner: "green",
//     Intermediate: "orange",
//     Advanced: "red",
//   };

//   return (
//     <div className="card">
//       <h3>{course.title}</h3>
//       <span className="badge" style={{ background: levelColor[course.level] }}>
//         {course.level}
//       </span>
//       <p>{course.category}</p>
//       <div>
//         {Array.from({ length: 5 }).map((_, i) => (
//           <span key={i}>{i < course.rating && "⭐"}</span>
//         ))}
//       </div>
//       <p>{course.students} students</p>
//     </div>
//   );
// }