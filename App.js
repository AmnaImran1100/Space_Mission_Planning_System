import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './landing';
import Registration from './registration';
import Login from './login';
import Homepage from './homepage'; 
import MainPage from './mainpage'; // Import the MainPage component
import TaskAssignment from './TaskAssignment';
import TaskAssignmentList from './TaskAssignmentDisplay';
import TaskAssignmentLanding from './TaskAssignmentLanding';
import SpaceRocketDistance from './LocationStatusTracking';
import MissionList1 from './LocationStatusTrackingDisplay';
import LocationStatusTrackingLanding from './LocationStatusTrackingLanding';
import ReportGeneration from './ReportGeneration';
import DiscussionForum from './UserCollaboration';
import DiscussionForumMessages from './UserCollaborationDisplay';
import UserCollaborationLanding from './UserCollaborationLanding';
import DestinationData from './DestinationData';
import DestinationDataDisplay from './DestinationDataDisplay';
import DestinationDataLanding from './DestinationDataLanding';
import MissionProfileCreation from './MissionProfile';
import ViewMissionProfiles from './MissionProfileDisplay';
import MissionProfileLanding from './MissionProfileLanding';
import AstronautForm from './Astronauts';
import AstronautsDisplay from './AstronautsDisplay';
import AstronautsLanding from './AstronautsLanding';
import EquipmentManagement from './EquipmentManagement';
import ViewEquipment from './EquipmentManagementDisplay';
import EquipmentManagementLanding from './EquipmentManagementLanding';
import TeamManagement from './TeamManagement';
import ViewTeams from './TeamManagementDisplay';
import TeamManagementLanding from './TeamManagementLanding';
import MissionPlanner from './MissionDataAnalysis';
import MissionPlanner1 from './MissionDataAnalysisDisplay';
import MissionDataAnalysisLanding from './MissionDataAnalysisLanding';
import NotificationSystem from './TaskNotification';
import NotificationSystem1 from './TaskNotificationDisplay';
import TaskNotificationLanding from './TaskNotificationLanding';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/mainpage" element={<MainPage />} /> {/* Define the MainPage route */}
        <Route path="/TaskAssignment" element={<TaskAssignment />} />
        <Route path="/TaskAssignmentDisplay" element={<TaskAssignmentList />} />
        <Route path="/TaskAssignmentLanding" element={<TaskAssignmentLanding />} />
        <Route path="/LocationStatusTracking" element={<SpaceRocketDistance />} />
        <Route path="/LocationStatusTrackingDisplay" element={<MissionList1 />} />
        <Route path="/LocationStatusTrackingLanding" element={<LocationStatusTrackingLanding />} />
        <Route path="/ReportGeneration" element={<ReportGeneration />} />
        <Route path="/UserCollaboration" element={<DiscussionForum />} />
        <Route path="/UserCollaborationDisplay" element={<DiscussionForumMessages />} />
        <Route path="/UserCollaborationLanding" element={<UserCollaborationLanding />} />
        <Route path="/DestinationData" element={<DestinationData />} />
        <Route path="/DestinationDataDisplay" element={<DestinationDataDisplay />} />
        <Route path="/DestinationDataLanding" element={<DestinationDataLanding />} />
        <Route path="/MissionProfile" element={<MissionProfileCreation />} />
        <Route path="/MissionProfileDisplay" element={<ViewMissionProfiles />} />
        <Route path="/MissionProfileLanding" element={<MissionProfileLanding />} />
        <Route path="/AstronautsLanding" element={<AstronautsLanding />} />
        <Route path="/Astronauts" element={<AstronautForm />} />
        <Route path="/AstronautsDisplay" element={<AstronautsDisplay />} />
        <Route path="/EquipmentManagement" element={<EquipmentManagement />} />
        <Route path="/EquipmentManagementDisplay" element={<ViewEquipment />} />
        <Route path="/EquipmentManagementLanding" element={<EquipmentManagementLanding />} />
        <Route path="/TeamManagement" element={<TeamManagement />} />
        <Route path="/TeamManagementDisplay" element={<ViewTeams />} />
        <Route path="/TeamManagementLanding" element={<TeamManagementLanding />} />
        <Route path="/MissionDataAnalysis" element={<MissionPlanner />} />
        <Route path="/MissionDataAnalysisDisplay" element={<MissionPlanner1 />} />
        <Route path="/MissionDataAnalysisLanding" element={<MissionDataAnalysisLanding />} />
        <Route path="/TaskNotification" element={<NotificationSystem />} />
        <Route path="/TaskNotificationDisplay" element={<NotificationSystem1 />} />
        <Route path="/TaskNotificationLanding" element={<TaskNotificationLanding />} />

        

      </Routes>
    </Router>
  );
}

export default App;
