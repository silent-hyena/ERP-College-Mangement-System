import './History.css'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/AppFooter';
const History = () => {
  const milestones = [
    { year: "1995", event: "College founded with Arts & Science departments" },
    { year: "2000", event: "Engineering faculty introduced" },
    { year: "2010", event: "Campus expanded with new library and labs" },
    { year: "2015", event: "Accredited by NAAC with Grade A" },
    { year: "2022", event: "Collaboration with international universities" },
  ];

  return (
    <div>
      <Navbar />
    <div className="history-container">
      <h1 className="history-title">Our History</h1>

      <p className="history-intro">
        Established in 1995, <strong>ABC College</strong> has grown from a small
        institution with a handful of students to a leading center for higher
        education. With a commitment to academic excellence, research, and
        holistic development, the college has consistently contributed to
        shaping future leaders and innovators.
      </p>

      {milestones.map((m, index) => (
        <div key={index} className="milestone-card">
          <div className="milestone-year">{m.year}</div>
          <p className="milestone-event">{m.event}</p>
        </div>
      ))}

      <div className="future-section">
        <h2 className="future-title">Looking Ahead</h2>
        <p className="future-text">
          Our vision for the future includes expanding research initiatives,
          building global partnerships, and embracing technology-driven learning
          to empower students with 21st-century skills.
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default History
