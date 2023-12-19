// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserProfile from './components/UserProfile';
import MissionProfile from './components/MissionProfile';
import TaskAssignment from './components/TaskAssignment';
import LocationStatusTracking from './components/LocationStatusTracking';
import MissionDataAnalysis from './components/MissionDataAnalysis';
import CalculationModule from './components/CalculationModule';
import ReportGeneration from './components/ReportGeneration';
import MissionOverviewDashboard from './components/MissionOverviewDashboard';
import TaskNotification from './components/TaskNotification';
import EquipmentManagement from './components/EquipmentManagement';
import TeamManagement from './components/TeamManagement';
import UserCollaboration from './components/UserCollaboration';
import DestinationData from './components/DestinationData';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/user-profile" component={UserProfile} />
        <Route exact path="/mission-profile" component={MissionProfile} />
        <Route exact path="/task-assignment" component={TaskAssignment} />
        <Route exact path="/location-status-tracking" component={LocationStatusTracking} />
        <Route exact path="/mission-data-analysis" component={MissionDataAnalysis} />
        <Route exact path="/calculation-module" component={CalculationModule} />
        <Route exact path="/report-generation" component={ReportGeneration} />
        <Route exact path="/mission-overview-dashboard" component={MissionOverviewDashboard} />
        <Route exact path="/task-notification" component={TaskNotification} />
        <Route exact path="/equipment-management" component={EquipmentManagement} />
        <Route exact path="/team-management" component={TeamManagement} />
        <Route exact path="/user-collaboration" component={UserCollaboration} />
        <Route exact path="/destination-data" component={DestinationData} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
};

export default Routes;
