import React, { useState } from "react";
import "./HairAssessmentFlow.css";
import { FaArrowLeft, FaCheck, FaHeart, FaShieldAlt, FaUpload, FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HairAssessmentFlow = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("assessment"); 
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (qId, optionId) => {
    setSelectedOptions(prev => ({ ...prev, [qId]: optionId }));
  };

  const menuItems = [
    { id: 'profile', label: 'Profile', stepNum: 1 },
    { id: 'medical', label: 'Medical', stepNum: 2 },
    { id: 'pattern', label: 'Pattern', stepNum: 3 },
    { id: 'density', label: 'Density', stepNum: 4 },
    { id: 'scalp', label: 'Scalp', stepNum: 5 },
    { id: 'lifestyle', label: 'Lifestyle', stepNum: 6 },
    { id: 'diet', label: 'Diet', stepNum: 7 },
    { id: 'stress', label: 'Stress', stepNum: 8 },
    { id: 'history', label: 'History', stepNum: 9 },
  ];

  if (currentView === "ai-analysis") {
    return <AiAnalysisView onBack={() => setCurrentView("assessment")} onNext={() => navigate("/results")} />;
  }

  const renderSectionContent = () => {
    if (currentStep === 1) {
      return (
        <>
          <SectionHero num="01" title="Tell Us About Yourself" subtitle="These details help our AI personalize your hair health analysis." />
          <div className="flow-card">
            <div className="card-header">
              <div className="section-header">
                <div className="section-indicator"></div>
                <h2 className="section-title">Basic Information</h2>
              </div>
              <p className="card-subtitle-main">Help us personalize your report and securely save your results</p>
            </div>
            <div className="input-group">
              <label className="input-label">Full Name</label>
              <input type="text" className="flow-input" placeholder="Enter your full name" />
            </div>
            <div className="input-group">
              <label className="input-label">Phone Number</label>
              <input type="text" className="flow-input" placeholder="Enter your mobile number" />
            </div>
            <div className="card-footer-info">
              <p className="usage-note">We'll use this to generate and share your personalized hair report.</p>
              <div className="privacy-note">
                <ShieldIcon />
                <span>Your information is protected and will not be shared.</span>
              </div>
            </div>
          </div>
          <QuestionCard title="Q1 — Age Group" subtitle="Helps determine age-related hair loss patterns" options={["18-24", "25-34", "35-44", "45-54", "55+"]} selectedOption={selectedOptions['q1']} onSelect={(opt) => handleOptionSelect('q1', opt)} />
          <QuestionCard title="Q2 — Biological Gender" subtitle="Determines hormonal hair loss pathway" options={["Male", "Female", "Other / Prefer not to say"]} selectedOption={selectedOptions['q2']} onSelect={(opt) => handleOptionSelect('q2', opt)} />
          <QuestionCard title="Q3 — Climate You Live In" subtitle="Environmental factors affect scalp oil balance and hair health" options={["Humid / Tropical", "Dry / Arid", "Coastal / Salty air", "Moderate / Mixed"]} selectedOption={selectedOptions['q3']} onSelect={(opt) => handleOptionSelect('q3', opt)} />
          <QuestionCard title="Q4 — Occupation Type" subtitle="Stress level and physical exposure factor into hair loss" options={["Office / Desk work", "High-stress role", "Field / Outdoor work", "Factory / Industrial", "Student", "Homemaker"]} selectedOption={selectedOptions['q4']} onSelect={(opt) => handleOptionSelect('q4', opt)} />
          <QuestionCard title="Q5 — Daily Helmet / Cap Use" subtitle="Trapped heat and friction can accelerate scalp issues" options={["Never", "Rarely (< 2x/week)", "Often (4-5x/week)", "Daily (all day)"]} selectedOption={selectedOptions['q5']} onSelect={(opt) => handleOptionSelect('q5', opt)} />
        </>
      );
    }

    if (currentStep === 2) {
      return (
        <>
          <SectionHero num="02" icon={<FaHeart style={{fontSize: '12px', marginLeft: '6px'}} />} title="Medical & Family History" subtitle="Understanding genetic and medical factors affecting hair loss." />
          <QuestionCard title="Q1 — Family History of Hair Loss" subtitle="Genetics is a major contributor to hair thinning" options={["No family history", "Father or grandfather", "Mother or grandmother", "Both sides of family"]} selectedOption={selectedOptions['m_q1']} onSelect={(opt) => handleOptionSelect('m_q1', opt)} />
          <QuestionCard title="Q2 — Previous Hair Loss Treatments" subtitle="Past treatment history helps refine recommendations" options={["Never used treatment", "Topical products (Minoxidil)", "Oral medication", "Clinical treatment (PRP/transplant)"]} selectedOption={selectedOptions['m_q2']} onSelect={(opt) => handleOptionSelect('m_q2', opt)} />
          <QuestionCard title="Q3 — Diagnosed Medical Conditions" subtitle="Certain conditions directly impact hair health" options={["None", "Thyroid disorder", "PCOS / hormonal condition", "Chronic illness", "Autoimmune condition"]} selectedOption={selectedOptions['m_q3']} onSelect={(opt) => handleOptionSelect('m_q3', opt)} />
          <QuestionCard title="Q4 — Recent Major Illness or Surgery" subtitle="Physical trauma can trigger temporary hair shedding" options={["No", "Yes — within last 3 months", "Yes — within last 12 months"]} selectedOption={selectedOptions['m_q4']} onSelect={(opt) => handleOptionSelect('m_q4', opt)} />
        </>
      );
    }
  };

  const totalInSection = currentStep === 1 ? 5 : 4;
  const answeredCount = Object.keys(selectedOptions).filter(k => 
    currentStep === 1 ? (k.startsWith('q') && !k.startsWith('m_')) : k.startsWith('m_q')
  ).length;

  return (
    <div className="hair-flow-container">
      <header className="flow-header">
        <button className="exit-btn" onClick={() => navigate("/")}><FaArrowLeft /> Exit</button>
        <div className="flow-logo"><img src="/assets/img/logo.png" alt="Hairsncares" /></div>
        <div className="step-indicator">Step {currentStep}/9</div>
      </header>

      <div className="section-tabs-container">
        {menuItems.map((item) => (
          <div 
            key={item.id} 
            className={`tab-item ${currentStep === item.stepNum ? 'active' : ''} ${currentStep > item.stepNum ? 'completed' : ''}`}
            onClick={() => setCurrentStep(item.stepNum)}
          >
            <div className="tab-progress-line"></div>
            <span className="tab-label">{item.label}</span>
          </div>
        ))}
      </div>

      <main className="flow-content">
        {renderSectionContent()}

        <footer className="flow-actions-footer">
          <div className="answered-summary-bar">
            <strong>{answeredCount}/{totalInSection} answered</strong> — {currentStep === 1 ? 'This assessment takes about 6 minutes to complete.' : 'This information helps improve the accuracy of your diagnosis.'}
          </div>

          <div className="flow-button-row">
            <button className="flow-prev-btn" onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}>Previous</button>
            <button 
              className={`flow-continue-btn ${answeredCount < totalInSection ? 'disabled' : ''}`}
              onClick={() => {
                 if (currentStep === 2 && answeredCount === totalInSection) {
                   setCurrentView("ai-analysis");
                 } else {
                   setCurrentStep(prev => Math.min(9, prev + 1));
                 }
              }}
              disabled={answeredCount < totalInSection}
            >
              {answeredCount < totalInSection ? 'Answer all questions to continue' : 'Continue →'}
            </button>
          </div>

          <div className="encrypted-note">
             <LockIcon />
             <span>Your responses are encrypted and remain completely private</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

/* AI Analysis Sub-View */
const AiAnalysisView = ({ onBack, onNext }) => {
  return (
    <div className="ai-analysis-container">
      <header className="ai-header">
        <div className="header-left" onClick={onBack}>
          <FaArrowLeft /> <span>Back</span>
        </div>
        <div className="header-center">
          <img src="/assets/img/logo.png" alt="Hairsncares" />
        </div>
        <div className="header-right">AI Analysis</div>
      </header>

      <div className="ai-progress-status">
        <div className="ai-progress-bar-container">
          <div className="ai-label-group">
            <span className="ai-main-label">AI PHOTO ANALYSIS</span>
            <span className="ai-optional-tag">Optional Step</span>
          </div>
          <div className="ai-progress-track">
             <div className="ai-progress-fill" style={{width: '80%'}}></div>
          </div>
        </div>
      </div>

      <main className="ai-content-main">
        <div className="ai-hero-card">
           <div className="ai-hero-inner">
              <img src="/aiphotoanalytics.png" alt="AI Head Scan" />
           </div>
        </div>

        <div className="ai-info-title-box">
          <h1 className="ai-title-primary">Improve Your Diagnosis with AI Photo Analysis</h1>
          <p className="ai-subtitle-primary">
            Upload scalp photos so our AI can analyze hair density, hairline shape, and scalp health more accurately.
          </p>
        </div>

        <div className="ai-accuracy-badge-box">
           <div className="accuracy-icon-box">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 6C11.36 6 11.6933 6.09 12 6.27C12.3067 6.45 12.55 6.69333 12.73 7C12.91 7.30667 13 7.64 13 8V14.82C12.16 14.18 11.0467 13.7467 9.66 13.52L9.34 15.48C10.6333 15.7067 11.5667 16.13 12.14 16.75C12.7133 17.37 13 18.2867 13 19.5C13 19.9533 12.8867 20.37 12.66 20.75C12.4333 21.13 12.13 21.4333 11.75 21.66C11.37 21.8867 10.9533 22 10.5 22C10.0467 22 9.63 21.8867 9.25 21.66C8.87 21.4333 8.56667 21.13 8.34 20.75C8.11333 20.37 8 19.9533 8 19.5V19.14C8.45333 19.3 8.9 19.4133 9.34 19.48L9.66 17.52C8.99333 17.4 8.24667 17.1467 7.42 16.76C6.99333 16.56 6.65 16.2567 6.39 15.85C6.13 15.4433 6 14.9933 6 14.5C6 13.7 6.18667 13.0433 6.56 12.53C6.93333 12.0167 7.49333 11.6667 8.24 11.48L9 11.28V8C9 7.64 9.09 7.30667 9.27 7C9.45 6.69333 9.69333 6.45 10 6.27C10.3067 6.09 10.64 6 11 6ZM14 5.36C13.6267 4.93333 13.18 4.6 12.66 4.36C12.14 4.12 11.5867 4 11 4C10.28 4 9.61333 4.18 9 4.54C8.38667 4.9 7.9 5.38667 7.54 6C7.18 6.61333 7 7.28 7 8V9.78C6.13333 10.1267 5.44667 10.6467 4.94 11.34C4.31333 12.2067 4 13.26 4 14.5C4 15.2733 4.18 15.9867 4.54 16.64C4.9 17.2933 5.38667 17.8267 6 18.24V19.5C6 20.3133 6.20333 21.0633 6.61 21.75C7.01667 22.4367 7.56333 22.9833 8.25 23.39C8.93667 23.7967 9.68667 24 10.5 24C11.1933 24 11.8433 23.85 12.45 23.55C13.0567 23.25 13.5733 22.84 14 22.32C14.4267 22.84 14.9433 23.25 15.55 23.55C16.1567 23.85 16.8067 24 17.5 24C18.3133 24 19.0633 23.7967 19.75 23.39C20.4367 22.9833 20.9833 22.4367 21.39 21.75C21.7967 21.0633 22 20.3133 22 19.5V18.24C22.6133 17.8267 23.1 17.2933 23.46 16.64C23.82 15.9867 24 15.2733 24 14.5C24 13.26 23.6867 12.2067 23.06 11.34C22.5533 10.6467 21.8667 10.1267 21 9.78V8C21 7.28 20.82 6.61333 20.46 6C20.1 5.38667 19.6133 4.9 19 4.54C18.3867 4.18 17.72 4 17 4C16.4133 4 15.86 4.12 15.34 4.36C14.82 4.6 14.3733 4.93333 14 5.36ZM20 19.14V19.5C20 19.9533 19.8867 20.37 19.66 20.75C19.4333 21.13 19.13 21.4333 18.75 21.66C18.37 21.8867 17.9533 22 17.5 22C17.0467 22 16.63 21.8867 16.25 21.66C15.87 21.4333 15.5667 21.13 15.34 20.75C15.1133 20.37 15 19.9533 15 19.5C15 18.2867 15.2867 17.37 15.86 16.75C16.4333 16.13 17.3667 15.7067 18.66 15.48L18.34 13.52C16.9533 13.7467 15.84 14.18 15 14.82V8C15 7.64 15.09 7.30667 15.27 7C15.45 6.69333 15.6933 6.45 16 6.27C16.3067 6.09 16.64 6 17 6C17.36 6 17.6933 6.09 18 6.27C18.3067 6.45 18.55 6.69333 18.73 7C18.91 7.30667 19 7.64 19 8V11.28L19.76 11.48C20.5067 11.6667 21.0667 12.0167 21.44 12.53C21.8133 13.0433 22 13.7 22 14.5C22 14.9933 21.87 15.4433 21.61 15.85C21.35 16.2567 21.0067 16.56 20.58 16.76C19.7533 17.1467 19.0067 17.4 18.34 17.52L18.66 19.48C19.1 19.4133 19.5467 19.3 20 19.14Z" fill="#021220"/>
              </svg>
           </div>
           <div className="accuracy-text-box">
              <h3>Photo analysis improves diagnostic accuracy by up to <span>34%</span></h3>
              <p>AI-powered visual assessment enhances report precision</p>
           </div>
        </div>

        <div className="ai-analyze-grid-section">
           <div className="section-header">
              <div className="section-indicator"></div>
              <h2 className="section-title">What the AI Will Analyze</h2>
           </div>
           <div className="analyze-grid">
              <div className="analyze-item-card">
                 <div className="analyze-icon-box">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.8002 0.833292V3.38329C11.7495 3.50551 12.6269 3.83329 13.4322 4.36662C14.2375 4.89996 14.8962 5.58607 15.4082 6.42496C15.9202 7.26385 16.2349 8.17774 16.3522 9.16663H18.8002V10.8333H16.3522C16.2349 11.8222 15.9202 12.7361 15.4082 13.575C14.8962 14.4138 14.2375 15.1 13.4322 15.6333C12.6269 16.1666 11.7495 16.4944 10.8002 16.6166V19.1666H9.2002V16.6166C8.25086 16.4944 7.37353 16.1666 6.5682 15.6333C5.76286 15.1 5.1042 14.4138 4.5922 13.575C4.0802 12.7361 3.76553 11.8222 3.6482 10.8333H1.2002V9.16663H3.6482C3.76553 8.17774 4.0802 7.26385 4.5922 6.42496C5.1042 5.58607 5.76286 4.89996 6.5682 4.36662C7.37353 3.83329 8.25086 3.50551 9.2002 3.38329V0.833292H10.8002ZM10.0002 4.99996C9.1362 4.99996 8.33086 5.22774 7.5842 5.68329C6.85886 6.12774 6.28286 6.72774 5.8562 7.48329C5.41886 8.26107 5.2002 9.09996 5.2002 9.99996C5.2002 10.9 5.41886 11.7388 5.8562 12.5166C6.28286 13.2722 6.85886 13.8722 7.5842 14.3166C8.33086 14.7722 9.1362 15 10.0002 15C10.8642 15 11.6695 14.7722 12.4162 14.3166C13.1415 13.8722 13.7175 13.2722 14.1442 12.5166C14.5815 11.7388 14.8002 10.9 14.8002 9.99996C14.8002 9.09996 14.5815 8.26107 14.1442 7.48329C13.7175 6.72774 13.1415 6.12774 12.4162 5.68329C11.6695 5.22774 10.8642 4.99996 10.0002 4.99996ZM10.0002 8.33329C10.2882 8.33329 10.5549 8.40829 10.8002 8.55829C11.0455 8.70829 11.2402 8.91107 11.3842 9.16663C11.5282 9.42218 11.6002 9.69996 11.6002 9.99996C11.6002 10.3 11.5282 10.5777 11.3842 10.8333C11.2402 11.0888 11.0455 11.2916 10.8002 11.4416C10.5549 11.5916 10.2882 11.6666 10.0002 11.6666C9.7122 11.6666 9.44553 11.5916 9.2002 11.4416C8.95486 11.2916 8.7602 11.0888 8.6162 10.8333C8.4722 10.5777 8.4002 10.3 8.4002 9.99996C8.4002 9.69996 8.4722 9.42218 8.6162 9.16663C8.7602 8.91107 8.95486 8.70829 9.2002 8.55829C9.44553 8.40829 9.7122 8.33329 10.0002 8.33329Z" fill="#00E5FF"/>
                    </svg>
                 </div>
                 <span>Hairline recession detection</span>
              </div>
              <div className="analyze-item-card">
                 <div className="analyze-icon-box">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.944 3.55004L11.136 10L10 11.1834L4.944 5.91671C4.51733 6.48337 4.18667 7.11115 3.952 7.80004C3.71733 8.51115 3.6 9.24449 3.6 10C3.6 11.2112 3.89333 12.3334 4.48 13.3667C5.04533 14.3667 5.808 15.1612 6.768 15.75C7.76 16.3612 8.83733 16.6667 10 16.6667C11.1627 16.6667 12.24 16.3612 13.232 15.75C14.192 15.1612 14.9547 14.3667 15.52 13.3667C16.1067 12.3334 16.4 11.2112 16.4 10C16.4 8.78893 16.1067 7.66671 15.52 6.63338C14.9547 5.63338 14.192 4.83893 13.232 4.25004C12.24 3.63893 11.1627 3.33337 10 3.33337C9.28533 3.33337 8.58667 3.4556 7.904 3.70004L6.672 2.41671C7.728 1.91671 8.83733 1.66671 10 1.66671C11.088 1.66671 12.128 1.88338 13.12 2.31671C14.0693 2.73893 14.9147 3.33615 15.656 4.10837C16.3973 4.8806 16.9707 5.76115 17.376 6.75004C17.792 7.78337 18 8.86671 18 10C18 11.1334 17.792 12.2167 17.376 13.25C16.9707 14.2389 16.3973 15.1195 15.656 15.8917C14.9147 16.6639 14.0693 17.2612 13.12 17.6834C12.128 18.1167 11.088 18.3334 10 18.3334C8.912 18.3334 7.872 18.1167 6.88 17.6834C5.93067 17.2612 5.08533 16.6639 4.344 15.8917C3.60267 15.1195 3.02933 14.2389 2.624 13.25C2.208 12.2167 2 11.1334 2 10C2 8.72226 2.26667 7.51115 2.8 6.36671C3.312 5.26671 4.02667 4.32782 4.944 3.55004Z" fill="#00E5FF"/>
                    </svg>
                 </div>
                 <span>Crown thinning analysis</span>
              </div>
              <div className="analyze-item-card">
                 <div className="analyze-icon-box">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.0001 2.28328C14.8001 2.28328 15.5361 2.49995 16.2081 2.93328C16.8801 3.36662 17.4081 3.95551 17.7921 4.69995C18.1974 5.47773 18.4001 6.33884 18.4001 7.28328C18.4001 8.57217 18.1121 9.81106 17.5361 11C17.0454 12.0111 16.3468 12.9833 15.4401 13.9166C14.7361 14.65 13.8988 15.3666 12.9281 16.0666C12.3841 16.4555 11.6694 16.9222 10.7841 17.4666L10.4001 17.7L10.0161 17.4666C9.0881 16.9 8.34143 16.4111 7.7761 16C6.76276 15.2666 5.89343 14.5111 5.1681 13.7333C4.25076 12.7333 3.55743 11.7 3.0881 10.6333L1.6001 10.6166V8.94995L2.5761 8.96662C2.45876 8.41106 2.4001 7.84995 2.4001 7.28328C2.4001 6.33884 2.60276 5.47773 3.0081 4.69995C3.3921 3.95551 3.9201 3.36662 4.5921 2.93328C5.2641 2.49995 6.0001 2.28328 6.8001 2.28328C7.49343 2.28328 8.18143 2.46106 8.8641 2.81662C9.4401 3.10551 9.9521 3.48328 10.4001 3.94995C10.8481 3.48328 11.3601 3.10551 11.9361 2.81662C12.6188 2.46106 13.3068 2.28328 14.0001 2.28328ZM14.0001 3.94995C13.5734 3.94995 13.1414 4.05828 12.7041 4.27495C12.2668 4.49162 11.8774 4.77773 11.5361 5.13328L10.4001 6.31662L9.2641 5.13328C8.92276 4.77773 8.53343 4.49162 8.0961 4.27495C7.65876 4.05828 7.22676 3.94995 6.8001 3.94995C6.2881 3.94995 5.81876 4.09439 5.3921 4.38328C4.96543 4.67217 4.62676 5.0694 4.3761 5.57495C4.12543 6.08051 4.0001 6.65551 4.0001 7.29995C4.0001 7.85551 4.06943 8.41106 4.2081 8.96662L5.9521 8.94995L7.6001 6.08328L10.0001 10.25L10.7521 8.94995H14.4001V10.6166H11.6481L10.0001 13.5L7.6001 9.33328L6.8481 10.6166L4.8801 10.6333C5.49876 11.7444 6.44276 12.8277 7.7121 13.8833C8.27743 14.35 8.92276 14.8222 9.6481 15.3C9.8721 15.4444 10.1228 15.6 10.4001 15.7666C10.6774 15.6 10.9281 15.4444 11.1521 15.3C11.8774 14.8222 12.5228 14.35 13.0881 13.8833C14.3041 12.8722 15.2214 11.8333 15.8401 10.7666C16.4801 9.65551 16.8001 8.49995 16.8001 7.29995C16.8001 6.65551 16.6774 6.07773 16.4321 5.56662C16.1868 5.05551 15.8508 4.66106 15.4241 4.38328C14.9974 4.10551 14.5228 3.96106 14.0001 3.94995Z" fill="#00E5FF"/>
                    </svg>
                 </div>
                 <span>Scalp health indicators</span>
              </div>
              <div className="analyze-item-card">
                 <div className="analyze-icon-box">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5998 8.33333H8.3998V11.6667H11.5998V8.33333ZM13.1998 8.33333V11.6667H15.5998V8.33333H13.1998ZM11.5998 15.8333V13.3333H8.3998V15.8333H11.5998ZM13.1998 15.8333H15.5998V13.3333H13.1998V15.8333ZM11.5998 4.16667H8.3998V6.66667H11.5998V4.16667ZM13.1998 4.16667V6.66667H15.5998V4.16667H13.1998ZM6.7998 8.33333H4.3998V11.6667H6.7998V8.33333ZM6.7998 15.8333V13.3333H4.3998V15.8333H6.7998ZM6.7998 4.16667H4.3998V6.66667H6.7998V4.16667ZM3.5998 2.5H16.3998C16.6238 2.5 16.8131 2.58055 16.9678 2.74167C17.1225 2.90278 17.1998 3.1 17.1998 3.33333V16.6667C17.1998 16.9 17.1225 17.0972 16.9678 17.2583C16.8131 17.4194 16.6238 17.5 16.3998 17.5H3.5998C3.3758 17.5 3.18647 17.4194 3.0318 17.2583C2.87714 17.0972 2.7998 16.9 2.7998 16.6667V3.33333C2.7998 3.1 2.87714 2.90278 3.0318 2.74167C3.18647 2.58055 3.3758 2.5 3.5998 2.5Z" fill="#00E5FF"/>
                    </svg>
                 </div>
                 <span>Hair density estimation</span>
              </div>
           </div>
        </div>

        <div className="ai-requirements-section">
           <div className="req-header-row">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18.3334C8.912 18.3334 7.872 18.1167 6.88 17.6834C5.93067 17.2612 5.08533 16.6639 4.344 15.8917C3.60267 15.1195 3.02933 14.2389 2.624 13.25C2.208 12.2167 2 11.1334 2 10C2 8.86671 2.208 7.78337 2.624 6.75004C3.02933 5.76115 3.60267 4.8806 4.344 4.10837C5.08533 3.33615 5.93067 2.73893 6.88 2.31671C7.872 1.88338 8.912 1.66671 10 1.66671C11.088 1.66671 12.128 1.88338 13.12 2.31671C14.0693 2.73893 14.9147 3.33615 15.656 4.10837C16.3973 4.8806 16.9707 5.76115 17.376 6.75004C17.792 7.78337 18 8.86671 18 10C18 11.1334 17.792 12.2167 17.376 13.25C16.9707 14.2389 16.3973 15.1195 15.656 15.8917C14.9147 16.6639 14.0693 17.2612 13.12 17.6834C12.128 18.1167 11.088 18.3334 10 18.3334ZM10 16.6667C11.1627 16.6667 12.24 16.3612 13.232 15.75C14.192 15.1612 14.9547 14.3667 15.52 13.3667C16.1067 12.3334 16.4 11.2112 16.4 10C16.4 8.78893 16.1067 7.66671 15.52 6.63338C14.9547 5.63338 14.192 4.83893 13.232 4.25004C12.24 3.63893 11.1627 3.33337 10 3.33337C8.83733 3.33337 7.76 3.63893 6.768 4.25004C5.808 4.83893 5.04533 5.63338 4.48 6.63338C3.89333 7.66671 3.6 8.78893 3.6 10C3.6 11.2112 3.89333 12.3334 4.48 13.3667C5.04533 14.3667 5.808 15.1612 6.768 15.75C7.76 16.3612 8.83733 16.6667 10 16.6667ZM9.2 13.3334L5.808 9.80004L6.944 8.61671L9.2 10.9834L13.728 6.26671L14.864 7.43337L9.2 13.3334Z" fill="#0ED7B5"/>
              </svg>
              <h4 className="req-title">Photo Requirements</h4>
           </div>
           <ul className="req-listing">
              <li>Clear lighting from above</li>
              <li>Hair parted to show scalp</li>
              <li>No hats or accessories</li>
              <li>Multiple angles recommended</li>
           </ul>
        </div>

        <div className="ai-privacy-banner-box">
           <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1C5.68629 1 3 3.68629 3 7V8.5H2C1.44772 8.5 1 8.94772 1 9.5V15.5C1 16.0523 1.44772 16.5 2 16.5H16C16.5523 16.5 17 16.0523 17 15.5V9.5C17 8.94772 16.5523 8.5 16 8.5H15V7C15 3.68629 12.3137 1 9 1ZM5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7V8.5H5V7ZM3 10.5H15V14.5H3V10.5ZM9 11.5C8.44772 11.5 8 11.9477 8 12.5C8 13.0523 8.44772 13.5 9 13.5C9.55228 13.5 10 13.0523 10 12.5C10 11.9477 9.55228 11.5 9 11.5Z" fill="#00E5FF"/>
           </svg>
           <p>Your photos are analyzed instantly and <strong>are never stored on our servers.</strong></p>
        </div>

        <div className="ai-action-footer">
           <button className="upload-btn-lg">
             Upload Scalp Photos 
             <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M7.74635 3.75L6.2451 5.25H3.37771V14.25H15.3877V5.25H12.5203L11.0191 3.75H7.74635ZM7.13084 2.25H11.6346L13.1358 3.75H16.1383C16.3485 3.75 16.5262 3.8225 16.6713 3.9675C16.8164 4.1125 16.889 4.29 16.889 4.5V15C16.889 15.21 16.8164 15.3875 16.6713 15.5325C16.5262 15.6775 16.3485 15.75 16.1383 15.75H2.62709C2.41691 15.75 2.23927 15.6775 2.09415 15.5325C1.94903 15.3875 1.87646 15.21 1.87646 15V4.5C1.87646 4.29 1.94903 4.1125 2.09415 3.9675C2.23927 3.8225 2.41691 3.75 2.62709 3.75H5.62959L7.13084 2.25ZM9.38271 13.5C8.63209 13.5 7.94151 13.315 7.31099 12.945C6.68046 12.575 6.18005 12.075 5.80974 11.445C5.43943 10.815 5.25428 10.125 5.25428 9.375C5.25428 8.625 5.43943 7.935 5.80974 7.305C6.18005 6.675 6.68046 6.175 7.31099 5.805C7.94151 5.435 8.63209 5.25 9.38271 5.25C10.1333 5.25 10.8239 5.435 11.4544 5.805C12.085 6.175 12.5854 6.675 12.9557 7.305C13.326 7.935 13.5112 8.625 13.5112 9.375C13.5112 10.125 13.326 10.815 12.9557 11.445C12.5854 12.075 12.085 12.575 11.4544 12.945C10.8239 13.315 10.1333 13.5 9.38271 13.5ZM9.38271 12C9.86311 12 10.3035 11.8825 10.7038 11.6475C11.1041 11.4125 11.4219 11.095 11.6571 10.695C11.8923 10.295 12.0099 9.855 12.0099 9.375C12.0099 8.895 11.8923 8.455 11.6571 8.055C11.4219 7.655 11.1041 7.3375 10.7038 7.1025C10.3035 6.8675 9.86311 6.75 9.38271 6.75C8.90231 6.75 8.46195 6.8675 8.06161 7.1025C7.66128 7.3375 7.34352 7.655 7.10832 8.055C6.87313 8.455 6.75553 8.895 6.75553 9.375C6.75553 9.855 6.87313 10.295 7.10832 10.695C7.34352 11.095 7.66128 11.4125 8.06161 11.6475C8.46195 11.8825 8.90231 12 9.38271 12Z" fill="#021220"/>
             </svg>
           </button>
           <button className="skip-btn-lg" onClick={onNext}>Skip for Now</button>
           <p className="ai-final-note">This information helps improve the accuracy of your diagnosis.</p>
        </div>
      </main>
    </div>
  );
};

const SectionHero = ({ num, title, subtitle, icon }) => (
  <div className="section-hero">
    <div className="hero-circle"></div>
    <div className="hero-text">
      <span className="section-label-tag">SECTION {num} {icon}</span>
      <h1 className="section-main-title">{title}</h1>
      <p className="section-main-subtitle">{subtitle}</p>
    </div>
  </div>
);

const QuestionCard = ({ title, subtitle, options, selectedOption, onSelect }) => (
  <div className="flow-card">
    <div className="question-header">
      <div className="q-title-box">
        <h3>{title}</h3>
        <p className="q-desc">{subtitle}</p>
      </div>
      <div className={`saved-badge ${selectedOption ? 'visible' : 'hidden'}`}>
        <FaCheck className="check-icon-small" /> Saved
      </div>
    </div>
    <div className="options-grid">
      {options.map((opt) => (
        <button 
          key={opt}
          className={`option-btn ${selectedOption === opt ? 'selected' : ''}`}
          onClick={() => onSelect(opt)}
        >
          <div className="checkbox-circle">
            {selectedOption === opt && <FaCheck className="check-icon-option" />}
          </div>
          <span>{opt}</span>
        </button>
      ))}
    </div>
  </div>
);

const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.00003 2.41668L10.4216 3.17501C10.516 3.19723 10.5937 3.24723 10.6547 3.32501C10.7158 3.40279 10.7463 3.4889 10.7463 3.58334V7.74168C10.7463 8.1639 10.6478 8.55834 10.4507 8.92501C10.2537 9.29168 9.98038 9.59168 9.63073 9.82501L7.00003 11.5833L4.36933 9.82501C4.01968 9.59168 3.74635 9.29168 3.54932 8.92501C3.3523 8.55834 3.25378 8.1639 3.25378 7.74168V3.58334C3.25378 3.4889 3.28431 3.40279 3.34536 3.32501C3.40641 3.24723 3.48411 3.19723 3.57846 3.17501L7.00003 2.41668ZM7.00003 3.26668L4.08628 3.91668V7.74168C4.08628 8.02501 4.1515 8.2889 4.28192 8.53334C4.41235 8.77779 4.59411 8.97779 4.82721 9.13334L7.00003 10.5833L9.17286 9.13334C9.40596 8.97779 9.58772 8.77779 9.71815 8.53334C9.84857 8.2889 9.91378 8.02501 9.91378 7.74168V3.91668L7.00003 3.26668ZM8.85651 5.42501L9.43926 6.01668L6.79191 8.66668L5.02701 6.90001L5.61808 6.30834L6.79191 7.49168L8.85651 5.42501Z" fill="#0ED7B5" fillOpacity="0.5"/>
  </svg>
);

const LockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 1C4.89543 1 4 1.89543 4 3V4H3C2.44772 4 2 4.44772 2 5V10C2 10.5523 2.44772 11 3 11H9C9.55228 11 10 10.5523 10 10V5C10 4.44772 9.55228 4 9 4H8V3C8 1.89543 7.10457 1 6 1ZM5 3C5 2.44772 5.44772 2 6 2C6.55228 2 7 2.44772 7 3V4H5V3ZM3 5H9V10H3V5ZM6 6.5C5.44772 6.5 5 6.94772 5 7.5V8.5C5 9.05228 5.44772 9.5 6 9.5C6.55228 9.5 7 9.05228 7 8.5V7.5C7 6.94772 6.55228 6.5 6 6.5Z" fill="#0ED7B5" fillOpacity="0.5"/>
  </svg>
);

export default HairAssessmentFlow;
