import "./DepartmentOverview.css"   
function Departments() {
    return (
        <> 
            <h2 className="heading">Know Your Department</h2>
            <hr></hr>
            <div className="card mb-3 content-box" style={{ maxWidth: "100%"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="computer-lab.jpg"
                            className="img-fluid rounded-start"
                            alt="department image"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Computer Science & Engineering (CSE)</h5>
                            <p className="card-text">

                                The CSE Department equips students with the skills needed to thrive in the evolving tech industry.
                                Through hands-on learning in software development, AI, data science, and system design, the college
                                provides state-of-the-art labs, industry mentorship, and project-driven coursework that prepares
                                students for impactful careers in global technology companies.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3" style={{ maxWidth: "100%",maxHeight: "250px", overflow: "hidden"  }}>
                <div className="row g-0">

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Electronics & Communication Engineering (ECE)</h5>
                            <p className="card-text">

                                The ECE Department helps students build strong expertise in semiconductor technology, communication networks,
                                and embedded systems. With advanced laboratories, internships, and research opportunities, the college enables
                                learners to innovate in telecommunications, VLSI, IoT, and next-gen electronics,
                                giving them a strong foundation for professional growth.
                            </p>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <img
                            src="chip.jpg"
                            className="img-fluid rounded-start"
                            alt="department image"
                        />
                    </div>
                </div>
            </div>

            <div className="card mb-3" style={{ maxWidth: "100%" ,maxHeight: "250px", overflow: "hidden" }}>
                <div className="row g-0">
                    <div className="col-md-4" style= {{maxHeight: "250px", overflow: "hidden"}}>
                        <img
                            src="mechanical-parts.jpg"
                            className="img-fluid rounded-start"
                            alt="department image"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">   Mechanical Engineering</h5>
                            <p className="card-text">
                                The Mechanical Engineering Department empowers students to explore design, manufacturing,
                                thermal sciences, and automation. By integrating real-world projects,
                                modern fabrication labs, and industry partnerships, the college trains students
                                to solve complex engineering challenges and develop successful careers in manufacturing,
                                automotive, robotics, and industrial engineering.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3" style={{ maxWidth: "100%" ,maxHeight: "250px", overflow: "hidden" }}>
                <div className="row g-0">

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Aerospace Engineering</h5>
                            <p className="card-text">
                                The Aerospace Engineering Department provides students with deep exposure to aerodynamics, propulsion, aircraft structures, and space systems.
                                Through simulation labs, research-driven learning, and interaction with industry experts,
                                the college prepares students to contribute to advanced aerospace
                                technologies and pursue exciting careers in aviation and space exploration.
                            </p>

                        </div>
                    </div>
                    <div className="col-md-4" style= {{maxHeight: "250px", overflow: "hidden"}}>
                        <img
                            src="jet-engine.jpeg"
                            className="img-fluid rounded-start"
                            alt="department image"
                        />
                    </div>
                </div>
            </div>

            <div className="card mb-3" style={{ maxWidth: "100%" ,maxHeight: "250px", overflow: "hidden" }}>
                <div className="row g-0">
                    <div className="col-md-4" style= {{maxHeight: "250px", overflow: "hidden"}}>
                        <img
                            src="civil-image.jpg"
                            className="img-fluid rounded-start"
                            alt="department image"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Civil Engineering</h5>
                            <p className="card-text">
                                The Civil Engineering Department prepares students to design and build sustainable infrastructure for growing communities.
                                With training in structural engineering, transportation systems, geotechnics, and environmental engineering, the college equips future
                                civil engineers with the technical and practical skills required to
                                excel in urban development, construction management, and public sector engineering roles.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    );
}

export default Departments;
