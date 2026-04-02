import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes, FaCamera, FaCheckCircle, FaTrashAlt, FaClock, FaInfoCircle, FaHeart, FaCheck, FaShieldAlt, FaLightbulb, FaLock, FaMagic } from 'react-icons/fa';
import './HairAssessmentFlow.css';

/* Shared Shield Icon */
const ShieldIcon = () => (
  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0L0 3.11111V7.77778C0 12.1333 2.98667 16.1778 7 17.1111C11.0133 16.1778 14 12.1333 14 7.77778V3.11111L7 0Z" fill="#00E5FF" fillOpacity="0.1" />
    <path d="M7 1.55556L1.55556 4V7.77778C1.55556 11.2356 3.86667 14.4444 7 15.2889C10.1333 14.4444 12.4444 11.2356 12.4444 7.77778V4L7 1.55556Z" stroke="#00E5FF" strokeWidth="1.5" />
    <path d="M4.66663 8.55556L6.22218 10.1111L9.3333 6.99998" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HairAssessmentFlow = () => {
  const [currentView, setCurrentView] = useState("diagnostic"); // "diagnostic" or "ai-analysis"
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep, currentView]);

  const handleOptionSelect = (qId, option) => {
    setSelectedOptions(prev => ({
      ...prev,
      [qId]: option
    }));
  };

  const menuItems = [
    { label: "Profile", step: 1 },
    { label: "Medical", step: 2 },
    { label: "Pattern", step: 3 },
    { label: "Density", step: 4 },
    { label: "Scalp", step: 5 },
    { label: "Lifestyle", step: 6 },
    { label: "Diet", step: 7 },
    { label: "Stress", step: 8 },
    { label: "History", step: 9 }
  ];

  const stepTotals = { 1: 5, 2: 4, 3: 4, 4: 3, 5: 4, 6: 4, 7: 4, 8: 3, 9: 3 };
  const stepPrefixes = { 1: 'q', 2: 'm_q', 3: 'p_q', 4: 'd_q', 5: 's_q', 6: 'l_q', 7: 'dt_q', 8: 'st_q', 9: 'h_q' };

  const totalInSection = stepTotals[currentStep] || 3;
  const answeredCount = Object.keys(selectedOptions).filter(k => {
    const prefix = stepPrefixes[currentStep];
    if (currentStep === 1) return k.startsWith('q') && !k.includes('_');
    return k.startsWith(prefix);
  }).length;

  const renderSectionContent = () => {
    if (currentStep === 1) {
      return (
        <>
          <SectionProgressTracker sectionName="Patient Profile" total={5} answered={answeredCount} numMode={false} />

          <div className="flow-card">
            <div className="card-header">
              <h3 className="card-title-main">Basic Information</h3>
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

          <div className="flow-card">
            <div className="card-header">
              <h3 className="card-title-main">Identity & Origin</h3>
            </div>
            <QuestionCard title="Q3 — Age Group" options={["Under 20", "20-30 years", "31-45 years", "46-60 years", "Over 60"]} selectedOption={selectedOptions['q3']} onSelect={(opt) => handleOptionSelect('q3', opt)} />
            <QuestionCard title="Q4 — Biological Gender" options={["Male", "Female", "Other"]} selectedOption={selectedOptions['q4']} onSelect={(opt) => handleOptionSelect('q4', opt)} />
            <QuestionCard title="Q5 — Ethnic Origin" options={["South Asian", "East Asian", "Caucasian", "African", "Other"]} selectedOption={selectedOptions['q5']} onSelect={(opt) => handleOptionSelect('q5', opt)} />
          </div>
        </>
      );
    }

    // Default medical/diagnostic steps
    const stepData = {
      2: { name: "Medical History", icon: <FaHeart />, q: ["Family History", "Previous Treatments", "Medical Conditions", "Recent Illness"] },
      3: { name: "Hair Loss Pattern", q: ["Receding Hairline", "Crown Thinning", "Diffuse Thinning", "Rate of Loss"] },
      4: { name: "Hair Density", q: ["Current Thickness", "Hair Bundle Size", "Scalp Visibility"] },
      5: { name: "Scalp Condition", q: ["Scalp Type", "Dandruff Presence", "Inflammation", "Washing Frequency"] },
      6: { name: "Lifestyle Factors", q: ["Sleep Quality", "Smoking", "Alcohol", "Physical Activity"] },
      7: { name: "Diet & Nutrition", q: ["Protein Intake", "Fast Food", "Water Intake", "Diet Type"] },
      8: { name: "Stress Levels", q: ["Work/Life Stress", "Emotional Trauma", "Relaxation Quality"] },
      9: { name: "History & Duration", q: ["Duration of Loss", "Shedding Amount", "Your Growth Goal"] }
    };

    const current = stepData[currentStep];
    return (
      <>
        <SectionProgressTracker sectionName={current.name} total={stepTotals[currentStep]} answered={answeredCount} />
        {current.q.map((qTitle, idx) => {
          const qId = `${stepPrefixes[currentStep]}${idx + 1}`;
          return (
            <QuestionCard
              key={qId}
              title={`Q${idx + 1} — ${qTitle}`}
              options={["Option A", "Option B", "Option C", "Option D"]}
              selectedOption={selectedOptions[qId]}
              onSelect={(opt) => handleOptionSelect(qId, opt)}
            />
          );
        })}
      </>
    );
  };

  if (currentView === "ai-analysis") {
    return <AiAnalysisView onBack={() => setCurrentView("diagnostic")} onNext={() => alert("Analysis started!")} />;
  }

  return (
    <div className="hair-flow-container">
      <header className="flow-header">
        <button className="exit-btn" onClick={() => window.history.back()}>
          <FaChevronLeft /> EXIT
        </button>
        <div className="flow-logo">
          {/* <img src="/logo.png" alt="Logo" /> */}
          <span style={{ fontWeight: 700, letterSpacing: '1px' }}>HAIR TEST</span>
        </div>
        <div className="step-indicator">
          Step {currentStep.toString().padStart(2, '0')} / 09
        </div>
      </header>

      <main className="flow-content">
        <SectionHero
          num={currentStep.toString().padStart(2, '0')}
          sectionLabel={menuItems[currentStep - 1].label.toUpperCase()}
          title={currentStep === 1 ? "Patient Profile" : menuItems[currentStep - 1].label}
          subtitle={`Completing your ${menuItems[currentStep - 1].label.toLowerCase()} analysis phase.`}
        />

        <div className="section-tabs-container">
          {menuItems.map((item) => (
            <div
              key={item.step}
              className={`tab-item ${currentStep === item.step ? 'active' : ''} ${currentStep > item.step ? 'completed' : ''}`}
              onClick={() => setCurrentStep(item.step)}
            >
              <div className="tab-progress-line"></div>
              <span className="tab-label">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="diagnostic-view-main">
          {renderSectionContent()}
        </div>

        <div className="flow-actions-footer">
          <div className="answered-summary-bar">
            <strong>{answeredCount} of {totalInSection}</strong> questions answered in this section
          </div>
          <div className="flow-button-row">
            {currentStep > 1 && (
              <button className="flow-prev-btn" onClick={() => setCurrentStep(prev => prev - 1)}>
                Previous
              </button>
            )}
            <button
              className={`flow-continue-btn ${answeredCount < totalInSection ? 'disabled' : ''}`}
              onClick={() => {
                if (currentStep === 9 && answeredCount === totalInSection) {
                  setCurrentView("ai-analysis");
                } else {
                  setCurrentStep(prev => Math.min(9, prev + 1));
                }
              }}
              disabled={answeredCount < totalInSection}
            >
              Continue to {currentStep === 9 ? 'AI Analysis' : 'Next Section'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

/* Components */

const SectionHero = ({ num, sectionLabel, title, subtitle }) => (
  <div className="section-hero">
    <div className="hero-accent-line"></div>
    <div className="hero-circle">
      {/* Circle placeholder */}
    </div>
    <div className="hero-text">
      <span className="section-label-tag">{sectionLabel}</span>
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
        {subtitle && <p className="q-desc">{subtitle}</p>}
      </div>
      <div className={`saved-badge ${selectedOption ? 'visible' : ''}`}>
        <FaCheck className="check-icon-small" /> Saved
      </div>
    </div>
    <div className="options-grid">
      {options.map((opt, i) => (
        <button
          key={i}
          className={`option-btn ${selectedOption === opt ? 'selected' : ''}`}
          onClick={() => onSelect(opt)}
        >
          <div className="checkbox-circle">
            {selectedOption === opt && <FaCheck className="check-icon-option" />}
          </div>
          {opt}
        </button>
      ))}
    </div>
  </div>
);

const SectionProgressTracker = ({ sectionName, total, answered, numMode = true }) => (
  <div className={`flow-card section-progress-card ${!numMode ? 'checkmark-mode' : 'number-mode'}`}>
    <div className="progress-card-info">
      <h4 className="progress-section-name">{sectionName}</h4>
      <div className="progress-marks-row">
        {[...Array(total)].map((_, i) => (
          <div key={i} className={`progress-mark ${i < answered ? 'completed' : ''}`}>
            {numMode ? (i + 1) : <FaCheck className="progress-check-icon" />}
          </div>
        ))}
      </div>
      <p className="remaining-text">{total - answered} question(s) remaining</p>
    </div>
  </div>
);

const AiAnalysisView = ({ onBack, onNext }) => {
  const [subStep, setSubStep] = useState('intro'); // 'intro', 'upload', 'processing'
  const [uploadedPhotos, setUploadedPhotos] = useState({
    front: '/assets/img/uploadscalp_front.png', // Simulated for sample
    top: null,
    left: null,
    right: null
  });

  const handleDeletePhoto = (key) => {
    setUploadedPhotos(prev => ({ ...prev, [key]: null }));
  };

  const handleUploadPhoto = (key, file) => {
    if (file) {
      const preview = URL.createObjectURL(file);
      setUploadedPhotos(prev => ({ ...prev, [key]: preview }));
    }
  };

  const totalRequired = 2;
  const countRequired = [uploadedPhotos.front, uploadedPhotos.top].filter(Boolean).length;
  const totalUploaded = Object.values(uploadedPhotos).filter(Boolean).length;
  const canAnalyze = countRequired === totalRequired;

  if (subStep === 'upload') {
    return (
      <div className="ai-analysis-container">
        <header className="ai-header">
          <div className="header-left" onClick={() => setSubStep('intro')}>
            <FaChevronLeft style={{ fontSize: '12px' }} /> BACK
          </div>
          <div className="header-center">
            <img src="/assets/img/footer-logo.png" alt="Logo" />
          </div>
          <div className="header-right">Step 11 / 12</div>
        </header>

        <div className="ai-progress-status">
          <div className="ai-label-group">
            <span className="ai-main-label">AI PHOTO ANALYSIS</span>
            <span className="ai-optional-tag">Step 2 of 3</span>
          </div>
          <div className="ai-progress-track">
            <div className="ai-progress-fill" style={{ width: '66%' }}></div>
          </div>
        </div>

        <main className="ai-content-main">
          <div className="ai-upload-hero-section">
            <div className="hero-indicator-yellow"></div>
            <div className="hero-text-block">
              <h1 className="upload-title-main">Upload Scalp Photos</h1>
              <p className="upload-subtitle-main">
                Our AI analyzes scalp photos to detect hair thinning patterns and improve your diagnostic accuracy.
              </p>
            </div>
          </div>

          <div className="ai-upload-grid-cards">
            <UploadCardMain
              label="Front Hairline View"
              status="Required"
              icon={<FrontViewIcon />}
              previewUrl={uploadedPhotos.front}
              onDelete={() => handleDeletePhoto('front')}
              onUpload={(file) => handleUploadPhoto('front', file)}
            />
            <UploadCardMain
              label="Top / Crown View"
              status="Required"
              icon={<TopViewIcon />}
              previewUrl={uploadedPhotos.top}
              onDelete={() => handleDeletePhoto('top')}
              onUpload={(file) => handleUploadPhoto('top', file)}
            />
            <UploadCardMain
              label="Left Side Profile"
              status="Optional"
              icon={<SideViewLeftIcon />}
              previewUrl={uploadedPhotos.left}
              onDelete={() => handleDeletePhoto('left')}
              onUpload={(file) => handleUploadPhoto('left', file)}
            />
            <UploadCardMain
              label="Right Side Profile"
              status="Optional"
              icon={<SideViewRightIcon />}
              previewUrl={uploadedPhotos.right}
              onDelete={() => handleDeletePhoto('right')}
              onUpload={(file) => handleUploadPhoto('right', file)}
            />
          </div>

          <div className="ai-requirements-section">
            <div className="req-header-row">
              <TipsBulbIcon />
              <h3 className="req-title">Tips for Best Results</h3>
            </div>
            <ul className="req-listing yellow-dots">
              <li>Use natural lighting from above</li>
              <li>Keep hair parted to reveal scalp</li>
              <li>Avoid hats or shadows</li>
              <li>Hold camera steady</li>
            </ul>
          </div>

          <div className="ai-privacy-banner-box">
            <SecureLockIcon />
            <p>Your photos are processed securely and are <strong>never stored after analysis.</strong></p>
          </div>

          {totalUploaded > 0 && (
            <div className="ai-ready-status-banner">
              <FaCheckCircle style={{ color: '#F4C430' }} />
              <span><strong>{totalUploaded} photo{totalUploaded > 1 ? 's' : ''}</strong> ready for analysis</span>
            </div>
          )}

          <div className="ai-action-footer">
            <button
              className={`analyze-action-btn ${canAnalyze ? 'active' : ''}`}
              onClick={() => canAnalyze ? setSubStep('processing') : alert("Please upload required photos")}
            >
              Analyze Photos <SparklesIcon />
            </button>
            <button className="skip-btn-lg" onClick={() => alert("Assessment completed!")}>
              Skip Photo Analysis
            </button>
            <p className="ai-final-note">Photo analysis improves diagnostic accuracy by up to 34%.</p>
          </div>
        </main>
      </div>
    );
  }

  if (subStep === 'processing') {
    return <ProcessingView onBack={() => setSubStep('upload')} onNext={onNext} />;
  }

  return (
    <div className="ai-analysis-container">
      <header className="ai-header">
        <div className="header-left" onClick={onBack}>
          <FaChevronLeft style={{ fontSize: '12px' }} /> BACK
        </div>
        <div className="header-center">
          <img src="/assets/img/footer-logo.png" alt="Logo" />
        </div>
        <div className="header-right">Step 10 / 12</div>
      </header>

      <div className="ai-progress-status">
        <div className="ai-label-group">
          <span className="ai-main-label">AI PHOTO ANALYSIS</span>
          <span className="ai-optional-tag">Optional Step</span>
        </div>
        <div className="ai-progress-track">
          <div className="ai-progress-fill" style={{ width: '40%' }}></div>
        </div>
      </div>

      <main className="ai-content-main">
        <div className="ai-hero-card">
          <div className="ai-hero-inner">
            <img src="/aiphotoanalytics.png" alt="AI Analysis Scan" />
          </div>
        </div>

        <h1 className="ai-title-primary">Improve Your Diagnosis with AI Photo Analysis</h1>
        <p className="ai-subtitle-primary">
          Upload scalp photos so our AI can analyze hair density, hairline shape, and scalp health more accurately.
        </p>

        <div className="ai-accuracy-badge-box">
          <div className="accuracy-icon-box">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 4C9.86 4 10.1933 4.09 10.5 4.27C10.8067 4.45 11.05 4.69333 11.23 5C11.41 5.30667 11.5 5.64 11.5 6V12.82C10.66 12.18 9.54667 11.7467 8.16 11.52L7.84 13.48C9.13333 13.7067 10.0667 14.13 10.64 14.75C11.2133 15.37 11.5 16.2867 11.5 17.5C11.5 17.9533 11.3867 18.37 11.16 18.75C10.9333 19.13 10.63 19.4333 10.25 19.66C9.87 19.8867 9.45333 20 9 20C8.54667 20 8.13 19.8867 7.75 19.66C7.37 19.4333 7.06667 19.13 6.84 18.75C6.61333 18.37 6.5 17.9533 6.5 17.5V17.14C6.95333 17.3 7.4 17.4133 7.84 17.48L8.16 15.52C7.49333 15.4 6.74667 15.1467 5.92 14.76C5.49333 14.56 5.15 14.2567 4.89 13.85C4.63 13.4433 4.5 12.9933 4.5 12.5C4.5 11.7 4.68667 11.0433 5.06 10.53C5.43333 10.0167 5.99333 9.66667 6.74 9.48L7.5 9.28V6C7.5 5.64 7.59 5.30667 7.77 5C7.95 4.69333 8.19333 4.45 8.5 4.27C8.80667 4.09 9.14 4 9.5 4ZM12.5 3.36C12.1267 2.93333 11.68 2.6 11.16 2.36C10.64 2.12 10.0867 2 9.5 2C8.78 2 8.11333 2.18 7.5 2.54C6.88667 2.9 6.4 3.38667 6.04 4C5.68 4.61333 5.5 5.28 5.5 6V7.78C4.63333 8.12667 3.94667 8.64667 3.44 9.34C2.81333 10.2067 2.5 11.26 2.5 12.5C2.5 13.2733 2.68 13.9867 3.04 14.64C3.4 15.2933 3.88667 15.8267 4.5 16.24V17.5C4.5 18.3133 4.70333 19.0633 5.11 19.75C5.51667 20.4367 6.06333 20.9833 6.75 21.39C7.43667 21.7967 8.18667 22 9 22C9.69333 22 10.3433 21.85 10.95 21.55C11.5567 21.25 12.0733 20.84 12.5 20.32C12.9267 20.84 13.4433 21.25 14.05 21.55C14.6567 21.85 15.3067 22 16 22C16.8133 22 17.5633 21.7967 18.25 21.39C18.9367 20.9833 19.4833 20.4367 19.89 19.75C20.2967 19.0633 20.5 18.3133 20.5 17.5V16.24C21.1133 15.8267 21.6 15.2933 21.96 14.64C22.32 13.9867 22.5 13.2733 22.5 12.5C22.5 11.26 22.1867 10.2067 21.56 9.34C21.0533 8.64667 20.3667 8.12667 19.5 7.78V6C19.5 5.28 19.32 4.61333 18.96 4C18.6 3.38667 18.1133 2.9 17.5 2.54C16.8867 2.18 16.22 2 15.5 2C14.9133 2 14.36 2.12 13.84 2.36C13.32 2.6 12.8733 2.93333 12.5 3.36ZM18.5 17.14V17.5C18.5 17.9533 18.3867 18.37 18.16 18.75C17.9333 19.13 17.63 19.4333 17.25 19.66C16.87 19.8867 16.4533 20 16 20C15.5467 20 15.13 19.8867 14.75 19.66C14.37 19.4333 14.0667 19.13 13.84 18.75C13.6133 18.37 13.5 17.9533 13.5 17.5C13.5 16.2867 13.7867 15.37 14.36 14.75C14.9333 14.13 15.8667 13.7067 17.16 13.48L16.84 11.52C15.4533 11.7467 14.34 12.18 13.5 12.82V6C13.5 5.64 13.59 5.30667 13.77 5C13.95 4.69333 14.1933 4.45 14.5 4.27C14.8067 4.09 15.14 4 15.5 4C15.86 4 16.1933 4.09 16.5 4.27C16.8067 4.45 17.05 4.69333 17.23 5C17.41 5.30667 17.5 5.64 17.5 6V9.28L18.26 9.48C19.0067 9.66667 19.5667 10.0167 19.94 10.53C20.3133 11.0433 20.5 11.7 20.5 12.5C20.5 12.9933 20.37 13.4433 20.11 13.85C19.85 14.2567 19.5067 14.56 19.08 14.76C18.2533 15.1467 17.5067 15.4 16.84 15.52L17.16 17.48C17.6 17.4133 18.0467 17.3 18.5 17.14Z" fill="#021220" />
            </svg>

          </div>
          <div className="accuracy-text-box">
            <h3>Photo analysis improves diagnostic accuracy by <span>up to 34%</span></h3>
            <p>AI-powered visual assessment enhances report precision</p>
          </div>
        </div>

        <div className="analysis-features-section">
          <div className="section-header">
            <div className="section-indicator"></div>
            <h2 className="section-title">What the AI Will Analyze</h2>
          </div>

          <div className="analyze-grid">
            <div className="analyze-item-card">
              <div className="analyze-icon-box">
                <TargetIconSmall />
              </div>
              <span>Hairline recession detection</span>
            </div>
            <div className="analyze-item-card">
              <div className="analyze-icon-box">
                <ClockIconSmall />
              </div>
              <span>Crown thinning analysis</span>
            </div>
            <div className="analyze-item-card">
              <div className="analyze-icon-box">
                <HeartIconSmall />
              </div>
              <span>Scalp health indicators</span>
            </div>
            <div className="analyze-item-card">
              <div className="analyze-icon-box">
                <GridIconSmall />
              </div>
              <span>Hair density estimation</span>
            </div>
          </div>
        </div>

        <div className="ai-requirements-section">
          <div className="req-header-row">
            <PhotoReqIcon />
            <h3 className="req-title">Photo Requirements</h3>
          </div>
          <ul className="req-listing">
            <li>Clear lighting from above</li>
            <li>Hair parted to show scalp</li>
            <li>No hats or accessories</li>
            <li>Multiple angles recommended</li>
          </ul>
        </div>

        <div className="ai-privacy-banner-box">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5998 8.33337H16.3998C16.6238 8.33337 16.8131 8.41393 16.9678 8.57504C17.1225 8.73615 17.1998 8.93337 17.1998 9.16671V17.5C17.1998 17.7334 17.1225 17.9306 16.9678 18.0917C16.8131 18.2528 16.6238 18.3334 16.3998 18.3334H3.5998C3.3758 18.3334 3.18647 18.2528 3.0318 18.0917C2.87714 17.9306 2.7998 17.7334 2.7998 17.5V9.16671C2.7998 8.93337 2.87714 8.73615 3.0318 8.57504C3.18647 8.41393 3.3758 8.33337 3.5998 8.33337H4.3998V7.50004C4.3998 6.44449 4.6558 5.46115 5.1678 4.55004C5.65847 3.67226 6.32514 2.97782 7.1678 2.46671C8.04247 1.93337 8.98647 1.66671 9.9998 1.66671C11.0131 1.66671 11.9571 1.93337 12.8318 2.46671C13.6745 2.97782 14.3411 3.67226 14.8318 4.55004C15.3438 5.46115 15.5998 6.44449 15.5998 7.50004V8.33337ZM4.3998 10V16.6667H15.5998V10H4.3998ZM9.1998 11.6667H10.7998V15H9.1998V11.6667ZM13.9998 8.33337V7.50004C13.9998 6.74449 13.8211 6.04726 13.4638 5.40837C13.1065 4.76949 12.6211 4.26393 12.0078 3.89171C11.3945 3.51949 10.7251 3.33337 9.9998 3.33337C9.27447 3.33337 8.60514 3.51949 7.9918 3.89171C7.37847 4.26393 6.89314 4.76949 6.5358 5.40837C6.17847 6.04726 5.9998 6.74449 5.9998 7.50004V8.33337H13.9998Z" fill="#0ED7B5" />
          </svg>

          <p>Your photos are processed securely and are <strong>never stored after analysis.</strong></p>
        </div>

        <div className="ai-action-footer">
          <button className="upload-btn-lg" onClick={() => setSubStep('upload')}>
            Upload Scalp Photos <UploadIcon />
          </button>
          <button className="skip-btn-lg" onClick={() => alert("Assessment completed!")}>
            Skip Photo Analysis
          </button>
          <p className="ai-final-note">This information helps improve the accuracy of your diagnosis.</p>
        </div>
      </main>
    </div>
  );
};

/* Icons */
const BrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#020617" />
    <path d="M9.5 9.5C9.5 8.12 10.62 7 12 7C13.38 7 14.5 8.12 14.5 9.5C14.5 10.88 13.38 12 12 12C10.62 12 9.5 10.88 9.5 9.5Z" fill="#020617" />
  </svg>
);

/* Icons */
const TargetIconSmall = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.8002 0.833292V3.38329C11.7495 3.50551 12.6269 3.83329 13.4322 4.36662C14.2375 4.89996 14.8962 5.58607 15.4082 6.42496C15.9202 7.26385 16.2349 8.17774 16.3522 9.16663H18.8002V10.8333H16.3522C16.2349 11.8222 15.9202 12.7361 15.4082 13.575C14.8962 14.4138 14.2375 15.1 13.4322 15.6333C12.6269 16.1666 11.7495 16.4944 10.8002 16.6166V19.1666H9.2002V16.6166C8.25086 16.4944 7.37353 16.1666 6.5682 15.6333C5.76286 15.1 5.1042 14.4138 4.5922 13.575C4.0802 12.7361 3.76553 11.8222 3.6482 10.8333H1.2002V9.16663H3.6482C3.76553 8.17774 4.0802 7.26385 4.5922 6.42496C5.1042 5.58607 5.76286 4.89996 6.5682 4.36662C7.37353 3.83329 8.25086 3.50551 9.2002 3.38329V0.833292H10.8002ZM10.0002 4.99996C9.1362 4.99996 8.33086 5.22774 7.5842 5.68329C6.85886 6.12774 6.28286 6.72774 5.8562 7.48329C5.41886 8.26107 5.2002 9.09996 5.2002 9.99996C5.2002 10.9 5.41886 11.7388 5.8562 12.5166C6.28286 13.2722 6.85886 13.8722 7.5842 14.3166C8.33086 14.7722 9.1362 15 10.0002 15C10.8642 15 11.6695 14.7722 12.4162 14.3166C13.1415 13.8722 13.7175 13.2722 14.1442 12.5166C14.5815 11.7388 14.8002 10.9 14.8002 9.99996C14.8002 9.09996 14.5815 8.26107 14.1442 7.48329C13.7175 6.72774 13.1415 6.12774 12.4162 5.68329C11.6695 5.22774 10.8642 4.99996 10.0002 4.99996ZM10.0002 8.33329C10.2882 8.33329 10.5549 8.40829 10.8002 8.55829C11.0455 8.70829 11.2402 8.91107 11.3842 9.16663C11.5282 9.42218 11.6002 9.69996 11.6002 9.99996C11.6002 10.3 11.5282 10.5777 11.3842 10.8333C11.2402 11.0888 11.0455 11.2916 10.8002 11.4416C10.5549 11.5916 10.2882 11.6666 10.0002 11.6666C9.7122 11.6666 9.44553 11.5916 9.2002 11.4416C8.95486 11.2916 8.7602 11.0888 8.6162 10.8333C8.4722 10.5777 8.4002 10.3 8.4002 9.99996C8.4002 9.69996 8.4722 9.42218 8.6162 9.16663C8.7602 8.91107 8.95486 8.70829 9.2002 8.55829C9.44553 8.40829 9.7122 8.33329 10.0002 8.33329Z" fill="#00E5FF" />
  </svg>
);

const ClockIconSmall = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.944 3.55004L11.136 10L10 11.1834L4.944 5.91671C4.51733 6.48337 4.18667 7.11115 3.952 7.80004C3.71733 8.51115 3.6 9.24449 3.6 10C3.6 11.2112 3.89333 12.3334 4.48 13.3667C5.04533 14.3667 5.808 15.1612 6.768 15.75C7.76 16.3612 8.83733 16.6667 10 16.6667C11.1627 16.6667 12.24 16.3612 13.232 15.75C14.192 15.1612 14.9547 14.3667 15.52 13.3667C16.1067 12.3334 16.4 11.2112 16.4 10C16.4 8.78893 16.1067 7.66671 15.52 6.63338C14.9547 5.63338 14.192 4.83893 13.232 4.25004C12.24 3.63893 11.1627 3.33337 10 3.33337C9.28533 3.33337 8.58667 3.4556 7.904 3.70004L6.672 2.41671C7.728 1.91671 8.83733 1.66671 10 1.66671C11.088 1.66671 12.128 1.88338 13.12 2.31671C14.0693 2.73893 14.9147 3.33615 15.656 4.10837C16.3973 4.8806 16.9707 5.76115 17.376 6.75004C17.792 7.78337 18 8.86671 18 10C18 11.1334 17.792 12.2167 17.376 13.25C16.9707 14.2389 16.3973 15.1195 15.656 15.8917C14.9147 16.6639 14.0693 17.2612 13.12 17.6834C12.128 18.1167 11.088 18.3334 10 18.3334C8.912 18.3334 7.872 18.1167 6.88 17.6834C5.93067 17.2612 5.08533 16.6639 4.344 15.8917C3.60267 15.1195 3.02933 14.2389 2.624 13.25C2.208 12.2167 2 11.1334 2 10C2 8.72226 2.26667 7.51115 2.8 6.36671C3.312 5.26671 4.02667 4.32782 4.944 3.55004Z" fill="#00E5FF" />
  </svg>
);

const HeartIconSmall = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.0001 2.28328C14.8001 2.28328 15.5361 2.49995 16.2081 2.93328C16.8801 3.36662 17.4081 3.95551 17.7921 4.69995C18.1974 5.47773 18.4001 6.33884 18.4001 7.28328C18.4001 8.57217 18.1121 9.81106 17.5361 11C17.0454 12.0111 16.3468 12.9833 15.4401 13.9166C14.7361 14.65 13.8988 15.3666 12.9281 16.0666C12.3841 16.4555 11.6694 16.9222 10.7841 17.4666L10.4001 17.7L10.0161 17.4666C9.0881 16.9 8.34143 16.4111 7.7761 16C6.76276 15.2666 5.89343 14.5111 5.1681 13.7333C4.25076 12.7333 3.55743 11.7 3.0881 10.6333L1.6001 10.6166V8.94995L2.5761 8.96662C2.45876 8.41106 2.4001 7.84995 2.4001 7.28328C2.4001 6.33884 2.60276 5.47773 3.0081 4.69995C3.3921 3.95551 3.9201 3.36662 4.5921 2.93328C5.2641 2.49995 6.0001 2.28328 6.8001 2.28328C7.49343 2.28328 8.18143 2.46106 8.8641 2.81662C9.4401 3.10551 9.9521 3.48328 10.4001 3.94995C10.8481 3.48328 11.3601 3.10551 11.9361 2.81662C12.6188 2.46106 13.3068 2.28328 14.0001 2.28328ZM14.0001 3.94995C13.5734 3.94995 13.1414 4.05828 12.7041 4.27495C12.2668 4.49162 11.8774 4.77773 11.5361 5.13328L10.4001 6.31662L9.2641 5.13328C8.92276 4.77773 8.53343 4.49162 8.0961 4.27495C7.65876 4.05828 7.22676 3.94995 6.8001 3.94995C6.2881 3.94995 5.81876 4.09439 5.3921 4.38328C4.96543 4.67217 4.62676 5.0694 4.3761 5.57495C4.12543 6.08051 4.0001 6.65551 4.0001 7.29995C4.0001 7.85551 4.06943 8.41106 4.2081 8.96662L5.9521 8.94995L7.6001 6.08328L10.0001 10.25L10.7521 8.94995H14.4001V10.6166H11.6481L10.0001 13.5L7.6001 9.33328L6.8481 10.6166L4.8801 10.6333C5.49876 11.7444 6.44276 12.8277 7.7121 13.8833C8.27743 14.35 8.92276 14.8222 9.6481 15.3C9.8721 15.4444 10.1228 15.6 10.4001 15.7666C10.6774 15.6 10.9281 15.4444 11.1521 15.3C11.8774 14.8222 12.5228 14.35 13.0881 13.8833C14.3041 12.8722 15.2214 11.8333 15.8401 10.7666C16.4801 9.65551 16.8001 8.49995 16.8001 7.29995C16.8001 6.65551 16.6774 6.07773 16.4321 5.56662C16.1868 5.05551 15.8508 4.66106 15.4241 4.38328C14.9974 4.10551 14.5228 3.96106 14.0001 3.94995Z" fill="#00E5FF" />
  </svg>
);

const GridIconSmall = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5998 8.33333H8.3998V11.6667H11.5998V8.33333ZM13.1998 8.33333V11.6667H15.5998V8.33333H13.1998ZM11.5998 15.8333V13.3333H8.3998V15.8333H11.5998ZM13.1998 15.8333H15.5998V13.3333H13.1998V15.8333ZM11.5998 4.16667H8.3998V6.66667H11.5998V4.16667ZM13.1998 4.16667V6.66667H15.5998V4.16667H13.1998ZM6.7998 8.33333H4.3998V11.6667H6.7998V8.33333ZM6.7998 15.8333V13.3333H4.3998V15.8333H6.7998ZM6.7998 4.16667H4.3998V6.66667H6.7998V4.16667ZM3.5998 2.5H16.3998C16.6238 2.5 16.8131 2.58055 16.9678 2.74167C17.1225 2.90278 17.1998 3.1 17.1998 3.33333V16.6667C17.1998 16.9 17.1225 17.0972 16.9678 17.2583C16.8131 17.4194 16.6238 17.5 16.3998 17.5H3.5998C3.3758 17.5 3.18647 17.4194 3.0318 17.2583C2.87714 17.0972 2.7998 16.9 2.7998 16.6667V3.33333C2.7998 3.1 2.87714 2.90278 3.0318 2.74167C3.18647 2.58055 3.3758 2.5 3.5998 2.5Z" fill="#00E5FF" />
  </svg>
);

const PhotoReqIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 18.3334C8.912 18.3334 7.872 18.1167 6.88 17.6834C5.93067 17.2612 5.08533 16.6639 4.344 15.8917C3.60267 15.1195 3.02933 14.2389 2.624 13.25C2.208 12.2167 2 11.1334 2 10C2 8.86671 2.208 7.78337 2.624 6.75004C3.02933 5.76115 3.60267 4.8806 4.344 4.10837C5.08533 3.33615 5.93067 2.73893 6.88 2.31671C7.872 1.88338 8.912 1.66671 10 1.66671C11.088 1.66671 12.128 1.88338 13.12 2.31671C14.0693 2.73893 14.9147 3.33615 15.656 4.10837C16.3973 4.8806 16.9707 5.76115 17.376 6.75004C17.792 7.78337 18 8.86671 18 10C18 11.1334 17.792 12.2167 17.376 13.25C16.9707 14.2389 16.3973 15.1195 15.656 15.8917C14.9147 16.6639 14.0693 17.2612 13.12 17.6834C12.128 18.1167 11.088 18.3334 10 18.3334ZM10 16.6667C11.1627 16.6667 12.24 16.3612 13.232 15.75C14.192 15.1612 14.9547 14.3667 15.52 13.3667C16.1067 12.3334 16.4 11.2112 16.4 10C16.4 8.78893 16.1067 7.66671 15.52 6.63338C14.9547 5.63338 14.192 4.83893 13.232 4.25004C12.24 3.63893 11.1627 3.33337 10 3.33337C8.83733 3.33337 7.76 3.63893 6.768 4.25004C5.808 4.83893 5.04533 5.63338 4.48 6.63338C3.89333 7.66671 3.6 8.78893 3.6 10C3.6 11.2112 3.89333 12.3334 4.48 13.3667C5.04533 14.3667 5.808 15.1612 6.768 15.75C7.76 16.3612 8.83733 16.6667 10 16.6667ZM9.2 13.3334L5.808 9.80004L6.944 8.61671L9.2 10.9834L13.728 6.26671L14.864 7.43337L9.2 13.3334Z" fill="#0ED7B5" />
  </svg>
);

const UploadIcon = () => (
  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.74635 3.75L6.2451 5.25H3.37771V14.25H15.3877V5.25H12.5203L11.0191 3.75H7.74635ZM7.13084 2.25H11.6346L13.1358 3.75H16.1383C16.3485 3.75 16.5262 3.8225 16.6713 3.9675C16.8164 4.1125 16.889 4.29 16.889 4.5V15C16.889 15.21 16.8164 15.3875 16.6713 15.5325C16.5262 15.6775 16.3485 15.75 16.1383 15.75H2.62709C2.41691 15.75 2.23927 15.6775 2.09415 15.5325C1.94903 15.3875 1.87646 15.21 1.87646 15V4.5C1.87646 4.29 1.94903 4.1125 2.09415 3.9675C2.23927 3.8225 2.41691 3.75 2.62709 3.75H5.62959L7.13084 2.25ZM9.38271 13.5C8.63209 13.5 7.94151 13.315 7.31099 12.945C6.68046 12.575 6.18005 12.075 5.80974 11.445C5.43943 10.815 5.25428 10.125 5.25428 9.375C5.25428 8.625 5.43943 7.935 5.80974 7.305C6.18005 6.675 6.68046 6.175 7.31099 5.805C7.94151 5.435 8.63209 5.25 9.38271 5.25C10.1333 5.25 10.8239 5.435 11.4544 5.805C12.085 6.175 12.5854 6.675 12.9557 7.305C13.326 7.935 13.5112 8.625 13.5112 9.375C13.5112 10.125 13.326 10.815 12.9557 11.445C12.5854 12.075 12.085 12.575 11.4544 12.945C10.8239 13.315 10.1333 13.5 9.38271 13.5ZM9.38271 12C9.86311 12 10.3035 11.8825 10.7038 11.6475C11.1041 11.4125 11.4219 11.095 11.6571 10.695C11.8923 10.295 12.0099 9.855 12.0099 9.375C12.0099 8.895 11.8923 8.455 11.6571 8.055C11.4219 7.655 11.1041 7.3375 10.7038 7.1025C10.3035 6.8675 9.86311 6.75 9.38271 6.75C8.90231 6.75 8.46195 6.8675 8.06161 7.1025C7.66128 7.3375 7.34352 7.655 7.10832 8.055C6.87313 8.455 6.75553 8.895 6.75553 9.375C6.75553 9.855 6.87313 10.295 7.10832 10.695C7.34352 11.095 7.66128 11.4125 8.06161 11.6475C8.46195 11.8825 8.90231 12 9.38271 12Z" fill="currentColor" />
  </svg>
);

const ProcessingView = ({ onBack, onNext }) => {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 120); // ~12 seconds total

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setActiveStep(Math.min(Math.floor(progress / 20), 4));
  }, [progress]);

  const steps = [
    "Image quality verification",
    "Hairline pattern detection",
    "Scalp density analysis",
    "Miniaturization detection",
    "Scalp condition analysis"
  ];

  return (
    <div className="ai-analysis-container">
      <header className="ai-header">
        <div className="header-left" onClick={onBack}>
          <FaChevronLeft style={{ fontSize: '12px' }} /> Back
        </div>
        <div className="header-center">
          <img src="/assets/img/footer-logo.png" alt="Logo" />
        </div>
        <div className="header-right">AI Diagnostic Processing</div>
      </header>

      <main className="ai-content-main proc-content">
        <div className="ai-proc-hero-card">
          <div className="scan-animation-box">
            <img src="/aiphotoanalytics.png" alt="AI Scan" className="scan-base-img" />
            <div className="scan-line-v"></div>
          </div>
          <div className="proc-progress-container">
            <div className="proc-progress-track">
              <div className="proc-progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="proc-percent">{progress}%</span>
          </div>
        </div>

        <div className="proc-text-center">
          <h1 className="proc-title">Analyzing Your Scalp Images</h1>
          <p className="proc-subtitle">
            Our AI is examining hair density, hairline structure, and scalp health indicators.
          </p>
        </div>

        <div className="proc-checklist-card">
          {steps.map((step, idx) => {
            const isCompleted = idx < activeStep;
            const isActive = idx === activeStep;
            return (
              <div key={idx} className={`proc-check-item ${isCompleted ? 'completed' : isActive ? 'active' : ''}`}>
                <div className="item-status-icon">
                  {isCompleted ? <StatusCompletedIcon /> : isActive ? <StatusActiveIcon /> : <StatusPendingIcon />}
                </div>
                <span className="item-label">{step}</span>
              </div>
            );
          })}
        </div>

        <div className="proc-engine-info-card">
          <div className="engine-icon-v">
            <AiEngineIcon />
          </div>
          <div className="engine-text-v">
            <h4>Advanced Hair Intelligence Engine</h4>
            <p>Our system analyzes over 12 visual markers including scalp visibility, follicle density, and hairline recession.</p>
          </div>
        </div>

        <div className="proc-time-notice">
          <ProcClockIcon />
          <p>AI analysis usually takes about <strong>10–12 seconds.</strong></p>
        </div>

        <div className="proc-warning-notice">
          <ProcInfoIcon />
          <p>Please keep this page open while your analysis completes.</p>
        </div>

        <button className="skip-btn-lg proc-skip" onClick={onNext}>
          Skip Photo Analysis
        </button>
      </main>
    </div>
  );
};

const UploadCardMain = ({ label, status, icon, previewUrl, onDelete, onUpload }) => {
  const fileInputRef = React.useRef(null);

  const handleClick = () => {
    if (!previewUrl && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className={`ai-upload-item-card ${previewUrl ? 'has-photo' : ''}`} onClick={handleClick}>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange}
      />
      {previewUrl ? (
        <div className="ai-photo-preview-container">
          <img src={previewUrl} alt={label} className="ai-uploaded-img" />
          <div className="ai-photo-overlay-bottom">
            <div className="photo-added-tag">
              <FaCheckCircle style={{ color: '#F4C430', fontSize: '12px' }} />
              <span>Photo Added</span>
            </div>
            <button className="photo-delete-btn" onClick={(e) => { e.stopPropagation(); onDelete(); }}>
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="ai-upload-icon-wrapper">
            {icon}
          </div>
          <div className="ai-upload-item-text">
            <span className="ai-upload-item-label">{label}</span>
            <span className={`ai-upload-item-status ${status.toLowerCase()}`}>{status}</span>
          </div>
        </>
      )}
    </div>
  );
};

const StatusCompletedIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_5_1455)">
      <path d="M12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24Z" fill="#F4C430" shape-rendering="crispEdges" />
      <path d="M22.6436 26.12L28.5316 19.9866L29.4276 20.9333L22.6436 28.0133L18.5732 23.76L19.4692 22.8266L22.6436 26.12Z" fill="#021220" />
    </g>
    <defs>
      <filter id="filter0_d_5_1455" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.9569 0 0 0 0 0.7686 0 0 0 0 0.1882 0 0 0 0.4 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_1455" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_1455" result="shape" />
      </filter>
    </defs>
  </svg>

);

const StatusActiveIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_5_1463)">
      <path d="M12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24Z" fill="#00E5FF" shape-rendering="crispEdges" />
      <path d="M20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24Z" fill="white" />
    </g>
    <defs>
      <filter id="filter0_d_5_1463" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.898 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_1463" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_1463" result="shape" />
      </filter>
    </defs>
  </svg>
);
const StatusPendingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#054358" />
    <path d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" fill="#6B85A6" />
  </svg>
);

const ProcClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 18.3334C8.912 18.3334 7.872 18.1167 6.88 17.6834C5.93067 17.2612 5.08533 16.6639 4.344 15.8917C3.60267 15.1195 3.02933 14.2389 2.624 13.25C2.208 12.2167 2 11.1334 2 10C2 8.86671 2.208 7.78337 2.624 6.75004C3.02933 5.76115 3.60267 4.8806 4.344 4.10837C5.08533 3.33615 5.93067 2.73893 6.88 2.31671C7.872 1.88338 8.912 1.66671 10 1.66671C11.088 1.66671 12.128 1.88338 13.12 2.31671C14.0693 2.73893 14.9147 3.33615 15.656 4.10837C16.3973 4.8806 16.9707 5.76115 17.376 6.75004C17.792 7.78337 18 8.86671 18 10C18 11.1334 17.792 12.2167 17.376 13.25C16.9707 14.2389 16.3973 15.1195 15.656 15.8917C14.9147 16.6639 14.0693 17.2612 13.12 17.6834C12.128 18.1167 11.088 18.3334 10 18.3334ZM10 16.6667C11.1627 16.6667 12.24 16.3612 13.232 15.75C14.192 15.1612 14.9547 14.3667 15.52 13.3667C16.1067 12.3334 16.4 11.2112 16.4 10C16.4 8.78893 16.1067 7.66671 15.52 6.63338C14.9547 5.63338 14.192 4.83893 13.232 4.25004C12.24 3.63893 11.1627 3.33337 10 3.33337C8.83733 3.33337 7.76 3.63893 6.768 4.25004C5.808 4.83893 5.04533 5.63338 4.48 6.63338C3.89333 7.66671 3.6 8.78893 3.6 10C3.6 11.2112 3.89333 12.3334 4.48 13.3667C5.04533 14.3667 5.808 15.1612 6.768 15.75C7.76 16.3612 8.83733 16.6667 10 16.6667ZM10.8 10H14V11.6667H9.2V5.83337H10.8V10Z" fill="#00E5FF" />
  </svg>
);

const ProcInfoIcon = () => (
  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20.3334C8.912 20.3334 7.872 20.1167 6.88 19.6834C5.93067 19.2612 5.08533 18.6639 4.344 17.8917C3.60267 17.1195 3.02933 16.2389 2.624 15.25C2.208 14.2167 2 13.1334 2 12C2 10.8667 2.208 9.78337 2.624 8.75004C3.02933 7.76115 3.60267 6.8806 4.344 6.10837C5.08533 5.33615 5.93067 4.73893 6.88 4.31671C7.872 3.88338 8.912 3.66671 10 3.66671C11.088 3.66671 12.128 3.88338 13.12 4.31671C14.0693 4.73893 14.9147 5.33615 15.656 6.10837C16.3973 6.8806 16.9707 7.76115 17.376 8.75004C17.792 9.78337 18 10.8667 18 12C18 13.1334 17.792 14.2167 17.376 15.25C16.9707 16.2389 16.3973 17.1195 15.656 17.8917C14.9147 18.6639 14.0693 19.2612 13.12 19.6834C12.128 20.1167 11.088 20.3334 10 20.3334ZM10 18.6667C11.1627 18.6667 12.24 18.3612 13.232 17.75C14.192 17.1612 14.9547 16.3667 15.52 15.3667C16.1067 14.3334 16.4 13.2112 16.4 12C16.4 10.7889 16.1067 9.66671 15.52 8.63338C14.9547 7.63338 14.192 6.83893 13.232 6.25004C12.24 5.63893 11.1627 5.33337 10 5.33337C8.83733 5.33337 7.76 5.63893 6.768 6.25004C5.808 6.83893 5.04533 7.63338 4.48 8.63338C3.89333 9.66671 3.6 10.7889 3.6 12C3.6 13.2112 3.89333 14.3334 4.48 15.3667C5.04533 16.3667 5.808 17.1612 6.768 17.75C7.76 18.3612 8.83733 18.6667 10 18.6667ZM9.2 7.83337H10.8V9.50004H9.2V7.83337ZM9.2 11.1667H10.8V16.1667H9.2V11.1667Z" fill="#9FB4D0" />
  </svg>
);

const AiEngineIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.12039 4C9.46599 4 9.78599 4.09 10.0804 4.27C10.3748 4.45 10.6084 4.69333 10.7812 5C10.954 5.30667 11.0404 5.64 11.0404 6V12.82C10.234 12.18 9.16519 11.7467 7.83399 11.52L7.52679 13.48C8.76839 13.7067 9.66439 14.13 10.2148 14.75C10.7652 15.37 11.0404 16.2867 11.0404 17.5C11.0404 17.9533 10.9316 18.37 10.714 18.75C10.4964 19.13 10.2052 19.4333 9.84039 19.66C9.47559 19.8867 9.07559 20 8.64039 20C8.20519 20 7.80519 19.8867 7.44039 19.66C7.07559 19.4333 6.78439 19.13 6.56679 18.75C6.34919 18.37 6.24039 17.9533 6.24039 17.5V17.14C6.67559 17.3 7.10439 17.4133 7.52679 17.48L7.83399 15.52C7.19399 15.4 6.47719 15.1467 5.68359 14.76C5.27399 14.56 4.94439 14.2567 4.69479 13.85C4.44519 13.4433 4.32039 12.9933 4.32039 12.5C4.32039 11.7 4.49959 11.0433 4.85799 10.53C5.21639 10.0167 5.75399 9.66667 6.47079 9.48L7.20039 9.28V6C7.20039 5.64 7.28679 5.30667 7.45959 5C7.63239 4.69333 7.86599 4.45 8.16039 4.27C8.45479 4.09 8.77479 4 9.12039 4ZM12.0004 3.36C11.642 2.93333 11.2132 2.6 10.714 2.36C10.2148 2.12 9.68359 2 9.12039 2C8.42919 2 7.78919 2.18 7.20039 2.54C6.61159 2.9 6.14439 3.38667 5.79879 4C5.45319 4.61333 5.28039 5.28 5.28039 6V7.78C4.44839 8.12667 3.78919 8.64667 3.30279 9.34C2.70119 10.2067 2.40039 11.26 2.40039 12.5C2.40039 13.2733 2.57319 13.9867 2.91879 14.64C3.26439 15.2933 3.73159 15.8267 4.32039 16.24V17.5C4.32039 18.3133 4.51559 19.0633 4.90599 19.75C5.29639 20.4367 5.82119 20.9833 6.48039 21.39C7.13959 21.7967 7.85959 22 8.64039 22C9.30599 22 9.92999 21.85 10.5124 21.55C11.0948 21.25 11.5908 20.84 12.0004 20.32C12.41 20.84 12.906 21.25 13.4884 21.55C14.0708 21.85 14.6948 22 15.3604 22C16.1412 22 16.8612 21.7967 17.5204 21.39C18.1796 20.9833 18.7044 20.4367 19.0948 19.75C19.4852 19.0633 19.6804 18.3133 19.6804 17.5V16.24C20.2692 15.8267 20.7364 15.2933 21.082 14.64C21.4276 13.9867 21.6004 13.2733 21.6004 12.5C21.6004 11.26 21.2996 10.2067 20.698 9.34C20.2116 8.64667 19.5524 8.12667 18.7204 7.78V6C18.7204 5.28 18.5476 4.61333 18.202 4C17.8564 3.38667 17.3892 2.9 16.8004 2.54C16.2116 2.18 15.5716 2 14.8804 2C14.3172 2 13.786 2.12 13.2868 2.36C12.7876 2.6 12.3588 2.93333 12.0004 3.36ZM17.7604 17.14V17.5C17.7604 17.9533 17.6516 18.37 17.434 18.75C17.2164 19.13 16.9252 19.4333 16.5604 19.66C16.1956 19.8867 15.7956 20 15.3604 20C14.9252 20 14.5252 19.8867 14.1604 19.66C13.7956 19.4333 13.5044 19.13 13.2868 18.75C13.0692 18.37 12.9604 17.9533 12.9604 17.5C12.9604 16.2867 13.2356 15.37 13.786 14.75C14.3364 14.13 15.2324 13.7067 16.474 13.48L16.1668 11.52C14.8356 11.7467 13.7668 12.18 12.9604 12.82V6C12.9604 5.64 13.0468 5.30667 13.2196 5C13.3924 4.69333 13.626 4.45 13.9204 4.27C14.2148 4.09 14.5348 4 14.8804 4C15.226 4 15.546 4.09 15.8404 4.27C16.1348 4.45 16.3684 4.69333 16.5412 5C16.714 5.30667 16.8004 5.64 16.8004 6V9.28L17.53 9.48C18.2468 9.66667 18.7844 10.0167 19.1428 10.53C19.5012 11.0433 19.6804 11.7 19.6804 12.5C19.6804 12.9933 19.5556 13.4433 19.306 13.85C19.0564 14.2567 18.7268 14.56 18.3172 14.76C17.5236 15.1467 16.8068 15.4 16.1668 15.52L16.474 17.48C16.8964 17.4133 17.3252 17.3 17.7604 17.14Z" fill="#021220" />
  </svg>

);

const FrontViewIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.31982 22.5C4.31982 21.0467 4.67182 19.7 5.37582 18.46C6.05422 17.26 6.96942 16.3067 8.12142 15.6C9.31182 14.8667 10.6046 14.5 11.9998 14.5C13.395 14.5 14.6878 14.8667 15.8782 15.6C17.0302 16.3067 17.9454 17.26 18.6238 18.46C19.3278 19.7 19.6798 21.0467 19.6798 22.5H17.7598C17.7598 21.42 17.4974 20.4133 16.9726 19.48C16.4606 18.5733 15.7694 17.8533 14.899 17.32C14.003 16.7733 13.0366 16.5 11.9998 16.5C10.963 16.5 9.99662 16.7733 9.10062 17.32C8.23022 17.8533 7.53902 18.5733 7.02702 19.48C6.50222 20.4133 6.23982 21.42 6.23982 22.5H4.31982ZM11.9998 13.5C10.9502 13.5 9.98382 13.2267 9.10062 12.68C8.23022 12.1467 7.53902 11.4267 7.02702 10.52C6.50222 9.6 6.23982 8.59333 6.23982 7.5C6.23982 6.40667 6.50222 5.4 7.02702 4.48C7.53902 3.57333 8.23022 2.85333 9.10062 2.32C9.98382 1.77333 10.9502 1.5 11.9998 1.5C13.0494 1.5 14.0158 1.77333 14.899 2.32C15.7694 2.85333 16.4606 3.57333 16.9726 4.48C17.4974 5.4 17.7598 6.40667 17.7598 7.5C17.7598 8.59333 17.4974 9.6 16.9726 10.52C16.4606 11.4267 15.7694 12.1467 14.899 12.68C14.0158 13.2267 13.0494 13.5 11.9998 13.5ZM11.9998 11.5C12.691 11.5 13.331 11.32 13.9198 10.96C14.5086 10.6 14.9758 10.1133 15.3214 9.5C15.667 8.88667 15.8398 8.22 15.8398 7.5C15.8398 6.78 15.667 6.11333 15.3214 5.5C14.9758 4.88667 14.5086 4.4 13.9198 4.04C13.331 3.68 12.691 3.5 11.9998 3.5C11.3086 3.5 10.6686 3.68 10.0798 4.04C9.49102 4.4 9.02382 4.88667 8.67822 5.5C8.33262 6.11333 8.15982 6.78 8.15982 7.5C8.15982 8.22 8.33262 8.88667 8.67822 9.5C9.02382 10.1133 9.49102 10.6 10.0798 10.96C10.6686 11.32 11.3086 11.5 11.9998 11.5Z" fill="#00E5FF" />
  </svg>
);

const TopViewIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.9599 1V4.06C14.0991 4.20667 15.1519 4.6 16.1183 5.24C17.0847 5.88 17.8751 6.70333 18.4895 7.71C19.1039 8.71667 19.4815 9.81333 19.6223 11H22.5599V13H19.6223C19.4815 14.1867 19.1039 15.2833 18.4895 16.29C17.8751 17.2967 17.0847 18.12 16.1183 18.76C15.1519 19.4 14.0991 19.7933 12.9599 19.94V23H11.0399V19.94C9.90074 19.7933 8.84794 19.4 7.88154 18.76C6.91514 18.12 6.12474 17.2967 5.51034 16.29C4.89594 15.2833 4.51834 14.1867 4.37754 13H1.43994V11H4.37754C4.51834 9.81333 4.89594 8.71667 5.51034 7.71C6.12474 6.70333 6.91514 5.88 7.88154 5.24C8.84794 4.6 9.90074 4.20667 11.0399 4.06V1H12.9599ZM11.9999 6C10.9631 6 9.99674 6.27333 9.10074 6.82C8.23034 7.35333 7.53914 8.07333 7.02714 8.98C6.50234 9.91333 6.23994 10.92 6.23994 12C6.23994 13.08 6.50234 14.0867 7.02714 15.02C7.53914 15.9267 8.23034 16.6467 9.10074 17.18C9.99674 17.7267 10.9631 18 11.9999 18C13.0367 18 14.0031 17.7267 14.8991 17.18C15.7695 16.6467 16.4607 15.9267 16.9727 15.02C17.4975 14.0867 17.7599 13.08 17.7599 12C17.7599 10.92 17.4975 9.91333 16.9727 8.98C16.4607 8.07333 15.7695 7.35333 14.8991 6.82C14.0031 6.27333 13.0367 6 11.9999 6ZM11.9999 10C12.3455 10 12.6655 10.09 12.9599 10.27C13.2543 10.45 13.4879 10.6933 13.6607 11C13.8335 11.3067 13.9199 11.64 13.9199 12C13.9199 12.36 13.8335 12.6933 13.6607 13C13.4879 13.3067 13.2543 13.55 12.9599 13.73C12.6655 13.91 12.3455 14 11.9999 14C11.6543 14 11.3343 13.91 11.0399 13.73C10.7455 13.55 10.5119 13.3067 10.3391 13C10.1663 12.6933 10.0799 12.36 10.0799 12C10.0799 11.64 10.1663 11.3067 10.3391 11C10.5119 10.6933 10.7455 10.45 11.0399 10.27C11.3343 10.09 11.6543 10 11.9999 10Z" fill="#00E5FF" />
  </svg>
);

const SideViewLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.98702 11H19.6798V13H7.98702L13.1518 18.36L11.7886 19.78L4.31982 12L11.7886 4.22003L13.1518 5.64003L7.98702 11Z" fill="#00E5FF" />
  </svg>
);

const SideViewRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0126 11L10.8478 5.64003L12.211 4.22003L19.6798 12L12.211 19.78L10.8478 18.36L16.0126 13H4.31982V11H16.0126Z" fill="#00E5FF" />
  </svg>
);

const TipsBulbIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.3841 14.5833H9.2001V10.4167H10.8001V14.5833H11.6161C11.6694 14.1056 11.8188 13.6389 12.0641 13.1833C12.2774 12.7722 12.5921 12.3278 13.0081 11.85L13.2321 11.6C13.5414 11.2667 13.7121 11.0833 13.7441 11.05C14.0854 10.6056 14.3468 10.1167 14.5281 9.58333C14.7094 9.05 14.8001 8.49444 14.8001 7.91667C14.8001 7.01667 14.5814 6.17778 14.1441 5.4C13.7174 4.64444 13.1414 4.04444 12.4161 3.6C11.6694 3.14444 10.8641 2.91667 10.0001 2.91667C9.1361 2.91667 8.33076 3.14444 7.5841 3.6C6.85876 4.04444 6.28276 4.64444 5.8561 5.4C5.41876 6.17778 5.2001 7.01667 5.2001 7.91667C5.2001 8.49444 5.29076 9.05 5.4721 9.58333C5.65343 10.1167 5.91476 10.6 6.2561 11.0333C6.2881 11.0778 6.45876 11.2667 6.7681 11.6L6.9921 11.85C7.4081 12.3278 7.72276 12.7722 7.9361 13.1833C8.18143 13.6389 8.33076 14.1056 8.3841 14.5833ZM8.4001 16.25V17.0833H11.6001V16.25H8.4001ZM5.0081 12.0833C4.5601 11.5056 4.21343 10.8667 3.9681 10.1667C3.72276 9.44444 3.6001 8.69444 3.6001 7.91667C3.6001 6.70555 3.89343 5.58333 4.4801 4.55C5.04543 3.55 5.8081 2.75556 6.7681 2.16667C7.7601 1.55556 8.83743 1.25 10.0001 1.25C11.1628 1.25 12.2401 1.55556 13.2321 2.16667C14.1921 2.75556 14.9548 3.55 15.5201 4.55C16.1068 5.58333 16.4001 6.70555 16.4001 7.91667C16.4001 8.69444 16.2774 9.44444 16.0321 10.1667C15.7868 10.8667 15.4401 11.5056 14.9921 12.0833C14.9174 12.1833 14.7681 12.35 14.5441 12.5833C14.1281 13.0389 13.8348 13.4 13.6641 13.6667C13.3548 14.1333 13.2001 14.5778 13.2001 15V17.0833C13.2001 17.3833 13.1281 17.6611 12.9841 17.9167C12.8401 18.1722 12.6454 18.375 12.4001 18.525C12.1548 18.675 11.8881 18.75 11.6001 18.75H8.4001C8.1121 18.75 7.84543 18.675 7.6001 18.525C7.35476 18.375 7.1601 18.1722 7.0161 17.9167C6.8721 17.6611 6.8001 17.3833 6.8001 17.0833V15C6.8001 14.5778 6.64543 14.1333 6.3361 13.6667C6.16543 13.4 5.8721 13.0389 5.4561 12.5833C5.2321 12.35 5.08276 12.1833 5.0081 12.0833Z" fill="#F4C430" />
  </svg>
);

const SparklesIcon = () => (
  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.75813 1.83C10.0884 1.83 10.3937 1.7475 10.6739 1.5825C10.9541 1.4175 11.1768 1.195 11.3419 0.915C11.5071 0.635 11.5897 0.33 11.5897 0H12.4304C12.4304 0.33 12.5129 0.635 12.6781 0.915C12.8432 1.195 13.0659 1.4175 13.3461 1.5825C13.6263 1.7475 13.9316 1.83 14.2619 1.83V2.67C13.9316 2.67 13.6263 2.7525 13.3461 2.9175C13.0659 3.0825 12.8432 3.305 12.6781 3.585C12.5129 3.865 12.4304 4.17 12.4304 4.5H11.5897C11.5897 4.17 11.5071 3.865 11.3419 3.585C11.1768 3.305 10.9541 3.0825 10.6739 2.9175C10.3937 2.7525 10.0884 2.67 9.75813 2.67V1.83ZM0 6.75C0.810675 6.75 1.5663 6.545 2.26689 6.135C2.94745 5.735 3.4879 5.195 3.88824 4.515C4.29858 3.815 4.50375 3.06 4.50375 2.25H6.005C6.005 3.06 6.21017 3.815 6.62051 4.515C7.02085 5.195 7.5613 5.735 8.24186 6.135C8.94245 6.545 9.69808 6.75 10.5088 6.75V8.25C9.69808 8.25 8.94245 8.455 8.24186 8.865C7.5613 9.265 7.02085 9.805 6.62051 10.485C6.21017 11.185 6.005 11.94 6.005 12.75H4.50375C4.50375 11.94 4.29858 11.185 3.88824 10.485C3.4879 9.805 2.94745 9.265 2.26689 8.865C1.5663 8.455 0.810675 8.25 0 8.25V6.75ZM2.91243 7.5C3.40283 7.77 3.8482 8.105 4.24854 8.505C4.64887 8.905 4.98415 9.35 5.25438 9.84C5.5246 9.35 5.85988 8.905 6.26021 8.505C6.66055 8.105 7.10592 7.77 7.59633 7.5C7.10592 7.23 6.66055 6.895 6.26021 6.495C5.85988 6.095 5.5246 5.65 5.25438 5.16C4.98415 5.65 4.64887 6.095 4.24854 6.495C3.8482 6.895 3.40283 7.23 2.91243 7.5ZM12.2052 9C12.2052 9.44 12.0951 9.8475 11.8749 10.2225C11.6547 10.5975 11.357 10.895 10.9816 11.115C10.6063 11.335 10.1985 11.44 9.75813 11.43V12.555C10.1985 12.555 10.6063 12.665 10.9816 12.885C11.357 13.105 11.6522 13.4025 11.8674 13.7775C12.0826 14.1525 12.1902 14.56 12.1902 15H13.3311C13.3211 14.56 13.4262 14.1525 13.6464 13.7775C13.8665 13.4025 14.1643 13.105 14.5396 12.885C14.9149 12.665 15.3228 12.555 15.7631 12.555V11.43C15.3228 11.43 14.9149 11.3225 14.5396 11.1075C14.1643 10.8925 13.8665 10.5975 13.6464 10.2225C13.4262 9.8475 13.3211 9.44 13.3311 9H12.2052Z" fill="currentColor" />
  </svg>
);

const SecureLockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5998 8.33337H16.3998C16.6238 8.33337 16.8131 8.41393 16.9678 8.57504C17.1225 8.73615 17.1998 8.93337 17.1998 9.16671V17.5C17.1998 17.7334 17.1225 17.9306 16.9678 18.0917C16.8131 18.2528 16.6238 18.3334 16.3998 18.3334H3.5998C3.3758 18.3334 3.18647 18.2528 3.0318 18.0917C2.87714 17.9306 2.7998 17.7334 2.7998 17.5V9.16671C2.7998 8.93337 2.87714 8.73615 3.0318 8.57504C3.18647 8.41393 3.3758 8.33337 3.5998 8.33337H4.3998V7.50004C4.3998 6.44449 4.6558 5.46115 5.1678 4.55004C5.65847 3.67226 6.32514 2.97782 7.1678 2.46671C8.04247 1.93337 8.98647 1.66671 9.9998 1.66671C11.0131 1.66671 11.9571 1.93337 12.8318 2.46671C13.6745 2.97782 14.3411 3.67226 14.8318 4.55004C15.3438 5.46115 15.5998 6.44449 15.5998 7.50004V8.33337ZM4.3998 10V16.6667H15.5998V10H4.3998ZM9.1998 11.6667H10.7998V15H9.1998V11.6667ZM13.9998 8.33337V7.50004C13.9998 6.74449 13.8211 6.04726 13.4638 5.40837C13.1065 4.76949 12.6211 4.26393 12.0078 3.89171C11.3945 3.51949 10.7251 3.33337 9.9998 3.33337C9.27447 3.33337 8.60514 3.51949 7.9918 3.89171C7.37847 4.26393 6.89314 4.76949 6.5358 5.40837C6.17847 6.04726 5.9998 6.74449 5.9998 7.50004V8.33337H13.9998Z" fill="#0ED7B5" />
  </svg>
);

export default HairAssessmentFlow;
