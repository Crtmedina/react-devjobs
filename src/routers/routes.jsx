import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { JobList } from "../components/jobList";
import { JobDetails } from "../components/jobDetails";

export function MyRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<JobList />} />
                <Route exact path="/jobs" element={<JobList />} />
                <Route exact path="/jobs/:position" element={<JobDetails />} />

            </Routes>
        </Router>
    )
}