import { useEffect } from "react";
import { dashboardRequests } from "../../Services";

function DashboardPage() {

  useEffect(() => {
    fetchUserCredential()
  })

  const fetchUserCredential = async () => {
    await dashboardRequests.userCredentials().then((response) => {
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error.message)
    })
  }

  console.log('user logged in')
    return (
      <div className="dashboard-page">
        {/* Welcome Message */}
        {/* <h1>Hello Hannah, Welcome back to your safety dashboard!</h1>
   */}
        {/* Top buttons: Report Incident, Find Safe Route, Emergency Alert */}
        <div className="top-buttons">
          {/* Buttons here */}
        </div>
  
        {/* Live campus alerts */}
        <div className="live-alerts">
          {/* Alert cards here */}
        </div>
  
        {/* Report stats */}
        <div className="report-stats">
          {/* Stats like active reports, resolved cases, etc. */}
        </div>
  
        {/* Recent Reports */}
        <div className="recent-reports">
          {/* Recent report list */}
        </div>
      </div>
    );
  }
  
  export default DashboardPage;
  