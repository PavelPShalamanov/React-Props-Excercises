import "./StudentProfileCard.css";

export default function StudentProfileCard() {
  return (
    <div className="card">
      <div className="avatar">JS</div>

      <div className="info">
        <h2 className="name">John Smith</h2>

        <div className="meta">
            <p className="class">Class: 11A</p>
            <p className="average">
            Average: <span className="grade high">5.60</span>
            </p>
        </div>

        <div className="subjects">
            <div className="subject">
            Math: <span className="grade high">6.00</span>
            </div>
            <div className="subject">
            English: <span className="grade">4.50</span>
            </div>
            <div className="subject">
            Physics: <span className="grade low">3.20</span>
            </div>
        </div>
      </div>
    </div>
  );
}