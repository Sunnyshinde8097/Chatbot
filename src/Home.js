import React from "react";

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                    <div className="position-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="">
                                    Dashboard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <h2 className="mt-4">Welcome to the Home Page</h2>
                    <p>This is your main content area.</p>
                </main>
            </div>
        </div>
    );
};

export default Home;