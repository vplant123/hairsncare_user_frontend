import React, { useState, useEffect } from 'react'
import BASE_URL from '../../Config';
import ManagementReportUser from './ManagementReportUser';
import DoctorAnalyseUser from './DoctorAnalyseUser'
import PrescriptionUser from './PrescriptionUser';
import { useParams } from 'react-router-dom';
import ManagementReport from '../Reports/managementReport';
import DoctorAnalysis from '../Reports/DoctorAnalysis';
export default function MyReport() {
  const [selectedTab, setSelectedTab] = useState('Doctor Analyse Report');
  const [data1, setdata1] = useState({});
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);
  const params = useParams();

  let storedUserData = localStorage.getItem("User343");
  let User = JSON.parse(storedUserData).logedInUser.user;
  // console.log(User._id);

  // Fetch data based on selected tab
  const fetchData = async (tab) => {
    console.log(tab, "tab")

    setLoading(true);
    setNoData(false);
    let endpoint = '';
    if (tab === 'Prescription') {
      endpoint = `${BASE_URL}/doctor/getPrescription?appointmentId=${params.id}`;
      console.log(endpoint);
    } else if (tab === 'Management Report') {
      // endpoint = `${BASE_URL}/doctor/getManagementReport?appointmentId=${params.id}`;
      endpoint = `${BASE_URL}/doctor/getPrescription?appointmentId=${params.id}`;
    } else if (tab === 'Doctor Analyse Report') {
      // endpoint = `${BASE_URL}/doctor/getDoctorAnalysis?appointmentId=${params.id}`;
      endpoint = `${BASE_URL}/doctor/getPrescription?appointmentId=${params.id}`;
    }
    console.log('params:', params);
    console.log('appointmentId:', params.id);
    console.log('fetching:', endpoint);
    try {
      const response = await fetch(endpoint, { method: 'GET' });
      if (!response.ok) {
        setNoData(true);
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setdata1(data.data);
      console.log('API data:', data.data, 'for', tab);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  // Fetch data when selectedTab or params.id changes
  useEffect(() => {
    fetchData(selectedTab);
    // eslint-disable-next-line
  }, [selectedTab, params.id]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  // return (
  //   <div>
  //         <div className='test-link container'>
  //       <div className='test-link-item'>
  //         <div onClick={() => handleTabChange('Management Report')} className={`tab-1 tab tab2 ${selectedTab === 'Management Report' ? 'selected1' : ''}`}>Management Report</div>
  //         <div onClick={() => handleTabChange('Doctor Analyse Report')} className={`tab-2 tab tab2 ${selectedTab === 'Doctor Analyse Report' ? 'selected1' : ''}`}>Doctor Analyse Report</div>
  //         <div onClick={() => handleTabChange('Prescription')} className={`tab-3 tab tab2 ${selectedTab === 'Prescription' ? 'selected1' : ''}`}>Prescription</div>
  //       </div>
  //     </div>
  //        {data1?data1.showToUser?selectedTab === 'Management Report'?"hhhhhh":null:<h1>Wait for Doctor Response</h1>: <h1>Give Test</h1>}

  //   </div>
  // )
  return (
    <div className='userProfileTab'>
      <div className='test-link container'>
        <div className='test-link-item'>
          <div onClick={() => handleTabChange('Doctor Analyse Report')} className={`tab-2 tab tab2 ${selectedTab === 'Doctor Analyse Report' ? 'selected1' : ''}`}>Doctor's Analysis Report</div>
          <div onClick={() => handleTabChange('Management Report')} className={`tab-1 tab tab2 ${selectedTab === 'Management Report' ? 'selected1' : ''}`}>Management Report</div>
          <div onClick={() => handleTabChange('Prescription')} className={`tab-3 tab tab2 ${selectedTab === 'Prescription' ? 'selected1' : ''}`}>Prescription</div>
        </div>
      </div>
      {/* Loader CSS */}
      <style>
        {`
.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 3s linear infinite;
  margin: 40px auto;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`}
      </style>
      {loading ? (
        <div className="loader"></div>
      ) : noData ? (
        <div style={{
          background: '#f8f9fa',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '32px',
          margin: '32px auto',
          maxWidth: '400px',
          textAlign: 'center',
          color: '#555',
          fontSize: '1.2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          <span style={{fontSize: '2.5rem', color: '#bdbdbd', display: 'block', marginBottom: '12px'}}>&#9888;</span>
          <strong>No report available yet.</strong>
          <div style={{marginTop: '8px', fontSize: '1rem', color: '#888'}}>Please check back later or contact support if you think this is an error.</div>
        </div>
      ) : selectedTab === 'Management Report' ? (
        (data1.dianosis && data1.dianosis.length > 0) ? (
          <div><ManagementReport data={data1} /></div>
        ) : (
                <div style={{
                  background: '#f8f9fa',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  padding: '32px',
                  margin: '32px auto',
                  maxWidth: '400px',
                  textAlign: 'center',
                  color: '#555',
                  fontSize: '1.2rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                  <span style={{ fontSize: '2.5rem', color: '#bdbdbd', display: 'block', marginBottom: '12px' }}>&#9888;</span>
                  <strong>No report available yet.</strong>
                  <div style={{ marginTop: '8px', fontSize: '1rem', color: '#888' }}>Please check back later or contact support if you think this is an error.</div>
                </div>
        )
      ) : selectedTab === 'Doctor Analyse Report' ? (
        (data1.dianosis && data1.dianosis.length > 0) ? (
          <div><DoctorAnalysis data={data1} /></div>
        ) : (
                  <div style={{
                    background: '#f8f9fa',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    padding: '32px',
                    margin: '32px auto',
                    maxWidth: '400px',
                    textAlign: 'center',
                    color: '#555',
                    fontSize: '1.2rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}>
                    <span style={{ fontSize: '2.5rem', color: '#bdbdbd', display: 'block', marginBottom: '12px' }}>&#9888;</span>
                    <strong>No report available yet.</strong>
                    <div style={{ marginTop: '8px', fontSize: '1rem', color: '#888' }}>Please check back later or contact support if you think this is an error.</div>
                  </div>
        )
      ) : (
        <div><PrescriptionUser data={data1} /></div>
      )}




    </div>
  );
}


