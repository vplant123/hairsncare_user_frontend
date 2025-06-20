import React,{useState,useEffect}from 'react'
import BASE_URL from '../../Config';
import ManagementReportUser from './ManagementReportUser';
import DoctorAnalyseUser from './DoctorAnalyseUser'
import PrescriptionUser from './PrescriptionUser';
import { useParams } from 'react-router-dom';
import ManagementReport from '../Reports/managementReport';
import DoctorAnalysis from '../Reports/DoctorAnalysis';
export default function MyReport() {
    const [selectedTab, setSelectedTab] = useState('Prescription');
    const [data1, setdata1] = useState({});
    const [loading, setLoading] = useState(true);
    const [noData, setNoData] = useState(false);
    const params = useParams();

    let storedUserData = localStorage.getItem("User343");
    let User=JSON.parse(storedUserData).logedInUser.user;
    console.log(User._id);

    // Fetch data based on selected tab
  const fetchData = async (tab) => {
    console.log(tab, "tab")
    
      setLoading(true);
      setNoData(false);
      let endpoint = '';
      if (tab === 'Prescription') {
        endpoint = `${BASE_URL}/doctor/getPrescription?appointmentId=${params.id}`;
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
  // const response =  fetchData(tab)
  //   window.open(
  //     `${process.env.REACT_APP_FRONTEND_URL}/order-prescription/${params.id}`,
  //     "_blank"
  //   );
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
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        noData ? (
          <h1>Give a Test</h1>
        ) : (
          selectedTab === 'Management Report' ? (
            <div>
              <ManagementReport data={data1} />
            </div>
          ) : selectedTab === 'Doctor Analyse Report' ? (
            <div><DoctorAnalysis data={data1} /></div>
          ) : (
            <div><PrescriptionUser data={data1} /></div>
          )
        )
      )}

         
      
      
    </div>
  );
}


