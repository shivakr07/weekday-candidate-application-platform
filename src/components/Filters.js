import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import JobList from "./JobList";

const Filters = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const [filterRole, setFilterRole] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterExperience, setFilterExperience] = useState("");
  const [filterCompany, setFilterCompany] = useState("");
  const [filterWorkMode, setFilterWorkMode] = useState("");


  //   console.log(jobs);
  const handleRoleChange = (e) => {
    setFilterRole(e.target.value);
  };

  const handleLocationChange = (e) => {
    setFilterLocation(e.target.value);
  };
  const handleExperienceChange = (e) => {
    setFilterExperience(e.target.value);
  };
  const handleCompanyChange = (e) => {
    setFilterCompany(e.target.value);
  };
  const handleWorkMode = (e) => {
    setFilterWorkMode(e.target.value);
  };


  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: "40px",
          gap: "40px",
        }}
      >
        <TextField
          type="text"
          name="role"
          label="Role"
          variant="outlined"
          value={filterRole}
          onChange={handleRoleChange}
        />

        <TextField
          type="text"
          name="company"
          label="Company"
          variant="outlined"
          value={filterCompany}
          onChange={handleCompanyChange}
        />
        <TextField
          type="text"
          name="location"
          label="Location"
          variant="outlined"
          value={filterLocation}
          onChange={handleLocationChange}
        />
        
        <TextField
          type="number"
          name="experience"
          label="Min Experience"
          variant="outlined"
          value={filterExperience}
          onChange={handleExperienceChange}
        />
        <TextField
          type="text"
          name="workmode"
          label="Mode"
          variant="outlined"
          value={filterWorkMode}
          onChange={handleWorkMode}
        />
      </Box>
      <JobList
        jobs={jobs}
        filterRole={filterRole}
        filterCompany={filterCompany}
        filterLocation={filterLocation}
        filterExperience={filterExperience}
        filterWorkMode={filterWorkMode}
      />
    </div>
  );
};

export default Filters;
