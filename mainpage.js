import React from "react";
import { Link } from "react-router-dom";
import "./mainpage.css";
import { IM1 } from "./Assets/Images";

const MainPage = () => {
  const buttons = [
    "Home",
    "Task Assignment",
    "Location and Status Tracking",
    "Report Generation",
    "User Collaboration",
    "Destination Data",
    "Missions",
    "Astronauts",
    "Equipment",
    "Teams",
    "Analysis",
    "Notifications",
  ];

  const renderButtons = () => {
    return buttons.map((button) => {
      if (button === "Task Assignment") {
        return (
          <Link to="/TaskAssignmentLanding" key={button}>
            <button className="square-button">{button}</button>
          </Link>
        );
      } if (button === "Location and Status Tracking") {
        return (
          <Link to="/LocationStatusTrackingLanding" key={button}>
            <button className="square-button">{button}</button>
          </Link>
        );
      }
      if (button === "Report Generation") {
        return (
          <Link to="/ReportGeneration" key={button}>
            <button className="square-button">{button}</button>
          </Link>
        );
      }if (button === "User Collaboration") {
        return (
          <Link to="/UserCollaborationLanding" key={button}>
            <button className="square-button">{button}</button>
          </Link>
        );
      }
      if (button === "Destination Data") {
        return (
          <Link to="/DestinationDataLanding" key={button}>
            <button className="square-button">{button}</button>
          </Link>
        );
      }
      if (button === "Missions") {
        return (
          <Link to="/MissionProfileLanding" key={button}>
            <button className="square-button">{button}</button>
          </Link>
        );
      }
      if (button === "Astronauts") {
        return (
          <Link to="/AstronautsLanding" key={button}>
            <button className="square-button">{button}</button>
          </Link>
        );
      }
      //EquipmentManagement
      if (button === "Equipment") {
        return (
          <Link to="/EquipmentManagementLanding" key={button}>
            <button className="square-button">{button}</button>
          </Link>
        );
      }
      if (button === "Teams") {
        return (
          <Link to="/TeamManagementLanding" key={button}>
            <button className="square-button">{button}</button>
          </Link>
        );
      }
      if (button === "Analysis") {
        return (
          <Link to="/MissionDataAnalysisLanding" key={button}>
            <button className="square-button">{button}</button>
          </Link>
        );
      }
      if (button === "Notifications") {
        return (
          <Link to="/TaskNotificationLanding" key={button}>
            <button className="square-button">{button}</button>
          </Link>
        );
      }
       else {
        return (
          <button className="square-button" key={button}>
            {button}
          </button>
        );
      }
    });
  };

  return (
    <div className="main-container1">
      <div className="buttons-container">{renderButtons()}</div>
    </div>
  );
};

export default MainPage;
