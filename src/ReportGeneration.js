import React, { useState } from 'react';
import axios from 'axios';
import { PDFDocument, rgb } from 'pdf-lib'; // Import PDFDocument and rgb from pdf-lib
import './reportGen.css';
import './ReportGeneration.css';

const ReportGeneration = () => {
  const [reportType, setReportType] = useState('taskAssignment'); // Default report type is Task Assignment

  const handleGenerateReport = async () => {
    try {
      if (reportType === 'taskAssignment') {
        // Fetch Task Assignment data from your Firebase database
        const response = await axios.get('https://spacemission-d8661-default-rtdb.firebaseio.com/TaskAssignments.json');

        if (response.status === 200) {
          const taskAssignments = Object.values(response.data);

          // Generate the PDF report from the task assignment data
          const pdfDoc = await generateTaskAssignmentReport(taskAssignments);

          // Create a blob from the PDF document
          const pdfBytes = await pdfDoc.save();

          // Create a URL for the blob and trigger a download
          const blob = new Blob([pdfBytes], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'TaskAssignmentReport.pdf'; // Set the filename for the downloaded PDF
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        } else {
          alert('Failed to fetch Task Assignment data.');
        }
      } 
      else if (reportType === 'destinationData') {
        // Fetch Destination Data from your Firebase database
        const response = await axios.get('https://spacemission-d8661-default-rtdb.firebaseio.com/Destinations.json');
  
        if (response.status === 200) {
          const destinationData = Object.values(response.data);
  
          // Generate the PDF report from the destination data
          const pdfDoc = await generateDestinationDataReport(destinationData);
  
          // Create a blob from the PDF document
          const pdfBytes = await pdfDoc.save();
  
          // Create a URL for the blob and trigger a download
          const blob = new Blob([pdfBytes], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'DestinationDataReport.pdf'; // Set the filename for the downloaded PDF
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        } else {
          alert('Failed to fetch Destination Data.');
        }
      } 

      else if (reportType === 'missions') {
        // Fetch Mission Data from your Firebase database
        const response = await axios.get('https://spacemission-d8661-default-rtdb.firebaseio.com/Missions.json');

        if (response.status === 200) {
          const missionData = Object.values(response.data);

          // Generate the PDF report from the mission data
          const pdfDoc = await generateMissionProfileReport(missionData);

          // Create a blob from the PDF document
          const pdfBytes = await pdfDoc.save();

          // Create a URL for the blob and trigger a download
          const blob = new Blob([pdfBytes], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'MissionProfileReport.pdf';
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        } else {
          alert('Failed to fetch Mission Data.');
        }
      }
      else {
        // Handle other report types here
        alert('Report type not supported yet.');
      }
    } catch (error) {
      console.error('Error generating report:', error);
      alert('An error occurred while generating the report.');
    }
  };

  const generateTaskAssignmentReport = async (taskAssignments) => {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
  
    // Add a page to the document
    const page = pdfDoc.addPage([600, 400]);
    const { width, height } = page.getSize();
    const fontSize = 15;
  
    // Draw the report content on the page
    page.drawText('Task Assignment Report', {
      x: 50,
      y: height - 50,
      size: fontSize,
      color: rgb(0, 0, 0),
    });
  
    // Define a variable to track the Y position
    let currentY = height - 70;
  
    // Iterate through task assignments and add them to the report
    taskAssignments.forEach((assignment, index) => {
      currentY -= 20;
  
      page.drawText(`Task ${index + 1}:`, {
        x: 50,
        y: currentY,
        size: fontSize,
        color: rgb(0, 0, 0),
      });
  
      currentY -= 20;
  
      page.drawText(`Task Details: ${assignment.taskDetails}`, {
        x: 70,
        y: currentY,
        size: fontSize,
        color: rgb(0, 0, 0),
      });
  
      currentY -= 20;
  
      page.drawText(`Responsible: ${assignment.responsible}`, {
        x: 70,
        y: currentY,
        size: fontSize,
        color: rgb(0, 0, 0),
      });
  
      currentY -= 20;
  
      page.drawText(`Deadline: ${assignment.deadline}`, {
        x: 70,
        y: currentY,
        size: fontSize,
        color: rgb(0, 0, 0),
      });
  
      currentY -= 20;
    });
  
    return pdfDoc;
  };
  const generateDestinationDataReport = async (destinations) => {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    
    // Add a page to the document
    const page = pdfDoc.addPage([600, 400]);
    const { width, height } = page.getSize();
    const fontSize = 15;
    
    // Draw the report content on the page
    page.drawText('Destination Data Report', {
      x: 50,
      y: height - 50,
      size: fontSize,
      color: rgb(0, 0, 0),
    });
    
    // Define a variable to track the Y position
    let currentY = height - 70;
    
    // Iterate through destination data and add them to the report
    destinations.forEach((destination, index) => {
      currentY -= 20;
    
      page.drawText(`Mission: ${destination.mission}`, {
        x: 50,
        y: currentY,
        size: fontSize,
        color: rgb(0, 0, 0),
      });
    
      currentY -= 20;
    
      page.drawText(`Latitude: ${destination.latitude}`, {
        x: 70,
        y: currentY,
        size: fontSize,
        color: rgb(0, 0, 0),
      });
    
      currentY -= 20;
    
      page.drawText(`Longitude: ${destination.longitude}`, {
        x: 70,
        y: currentY,
        size: fontSize,
        color: rgb(0, 0, 0),
      });
    
      currentY -= 20;
    
      page.drawText(`Altitude: ${destination.altitude}`, {
        x: 70,
        y: currentY,
        size: fontSize,
        color: rgb(0, 0, 0),
      });
    
      currentY -= 20;
    });
    
    return pdfDoc;
  };
  
  const generateMissionProfileReport = async (missions) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const { width, height } = page.getSize();
    const fontSize = 15;

    page.drawText('Mission Profile Report', {
      x: 50,
      y: height - 50,
      size: fontSize,
      color: rgb(0, 0, 0),
    });

    let currentY = height - 70;

    missions.forEach((mission, index) => {
      currentY -= 20;

      page.drawText(`Mission ${index + 1}:`, {
        x: 50,
        y: currentY,
        size: fontSize,
        color: rgb(0, 0, 0),
      });

      Object.entries(mission).forEach(([key, value]) => {
        currentY -= 20;

        page.drawText(`${key}: ${value}`, {
          x: 70,
          y: currentY,
          size: fontSize,
          color: rgb(0, 0, 0),
        });
      });

      currentY -= 20;
    });

    return pdfDoc;
  };
  

  return (
    <div className="Report">
      <h2>Report Generation</h2>
      <div>
        <label>
          Select Report Type:
          <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
            <option value="taskAssignment">Task Assignment</option>
            <option value="destinationData">Destination Data</option>
            <option value="missions">Missions</option>
            {/* Add more report options as needed */}
          </select>
        </label>
      </div>
      <button onClick={handleGenerateReport}>Generate Report</button>
    </div>
  );
};

export default ReportGeneration;
