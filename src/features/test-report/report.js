import React from "react";
import "./report.css";
import { FiCalendar } from "react-icons/fi";

const recommendationRows = [
  {
    title: "Minoxidil 5% Advanced Formula",
    tag: "High Priority",
    tagTone: "high-priority",
    desc: "Clinically proven to halt hair loss and stimulate regrowth",
    purpose: "For Hair Fall",
    purposeTone: "purpose-amber",
    price: "$34.99",
    thumbClass: "thumb-1",
  },
  {
    title: "DHT Blocker Complex",
    tag: "Recommended",
    tagTone: "recommended",
    desc: "Blocks genetic hair thinning at the root",
    purpose: "For Genetics",
    purposeTone: "purpose-cyan",
    price: "$29.99",
    thumbClass: "thumb-2",
  },
  {
    title: "Scalp Revive Serum",
    tag: "Recommended",
    tagTone: "recommended",
    desc: "Restores scalp microbiome and hydration",
    purpose: "For Scalp Health",
    purposeTone: "purpose-cyan",
    price: "$24.99",
    thumbClass: "thumb-3",
  },
  {
    title: "Biotin + Keratin Formula",
    tag: "Adjunct",
    tagTone: "adjunct",
    desc: "Strengthens hair shaft and improves density",
    purpose: "For Density",
    purposeTone: "purpose-amber",
    price: "$19.99",
    thumbClass: "thumb-4",
  },
  {
    title: "Anti-Stress Hair Tonic",
    tag: "Adjunct",
    tagTone: "adjunct",
    desc: "Counteracts stress-induced shedding",
    purpose: "For Stress Loss",
    purposeTone: "purpose-gray",
    price: "$22.99",
    thumbClass: "thumb-5",
  },
];

const freebiesRows = [
  {
    title: "Free Hair Consultation",
    desc: "Get expert guidance tailored to your report",
  },
  {
    title: "Personalized Diet Plan",
    desc: "Custom nutrition plan for hair recovery",
  },
  {
    title: "Weekly Hair Care Routine PDF",
    desc: "Step-by-step routine designed for your condition",
  },
  {
    title: "Progress Tracking Support",
    desc: "Track improvements with expert follow-ups",
  },
  {
    title: "Priority Support Access",
    desc: "Direct chat with specialist",
  },
];

const clinicalDimensions = [
  {
    title: "Hair Density",
    status: "Mild",
    tone: "mild",
    score: 52,
    scoreLabel: "Mild Thinning",
    note: "Early-stage density reduction observed",
    dashArray: "84.95 163.36",
  },
  {
    title: "Hair Strength",
    status: "Mild",
    tone: "mild",
    score: 61,
    scoreLabel: "Moderate Resilience",
    note: "Tensile strength within normal range",
    dashArray: "99.67 163.36",
  },
  {
    title: "Fall Control",
    status: "High Risk",
    tone: "high-risk",
    score: 38,
    scoreLabel: "Active Shedding",
    note: "Above-normal daily shedding detected",
    dashArray: "62.08 163.36",
  },
  {
    title: "Scalp Health",
    status: "Healthy",
    tone: "healthy",
    score: 74,
    scoreLabel: "Balanced Scalp",
    note: "Sebum & microbiome within healthy limits",
    dashArray: "120.89 163.36",
  },
  {
    title: "Recovery",
    status: "Mild",
    tone: "mild",
    score: 67,
    scoreLabel: "Moderate Potential",
    note: "Moderate follicle regrowth viability",
    dashArray: "109.45 163.36",
  },
  {
    title: "Lifestyle",
    status: "Mild",
    tone: "mild",
    score: 55,
    scoreLabel: "Needs Attention",
    note: "Stress & habit factors moderately impacting health",
    dashArray: "89.85 163.36",
  },
];

const deepMetricRows = [
  {
    title: "Hair Health Index",
    tone: "cyan",
    score: 91,
    scoreStand: "Top 25%",
    scoreNote: "Above average for your age group",
    benchmarkTitle: "AGE BENCHMARK (30-40)",
    benchmarkLines: [
      "For someone aged 30-40, the typical Hair Health Index is around 56.",
      "Your score of 91 places you in the Top 15% for your age group.",
    ],
    meaning:
      "Your overall hair health is in good shape. Think of this like a car with minor wear - it runs well, but regular maintenance prevents future problems.",
    progress: 91,
  },
  {
    title: "Hair Density",
    tone: "green",
    score: 91,
    scoreStand: "Top 25%",
    scoreNote: "Above average for your age group",
    benchmarkTitle: "AGE BENCHMARK (30-40)",
    benchmarkLines: [
      "Average density score for age 30-40 is 56.",
      "Scores above 70 are considered healthy for your age.",
    ],
    meaning:
      "Your hair density is good. Most people would not notice any significant thinning when looking at your hair.",
    progress: 91,
  },
  {
    title: "Recovery Potential",
    tone: "purple",
    score: 84,
    scoreStand: "Top 25%",
    scoreNote: "Above average for your age group",
    benchmarkTitle: "AGE BENCHMARK (30-40)",
    benchmarkLines: [
      "This score is independent of age - it reflects biological follicle health.",
      "Scores above 65 indicate responsive follicles.",
    ],
    meaning:
      "Excellent recovery potential. Your follicles are likely still active and responsive to both medical and lifestyle interventions.",
    progress: 84,
  },
  {
    title: "Scalp Health",
    tone: "amber",
    score: 94,
    blurb:
      "The condition of your scalp environment - including oiliness, inflammation, dandruff, and water quality. A healthy scalp is the foundation of hair growth.",
    scoreStand: "Top 25%",
    scoreNote: "Above average for your age group",
    benchmarkTitle: "AGE BENCHMARK (30-40)",
    benchmarkLines: [
      "Scalp health is highly improvable - unlike genetic factors, this score can change significantly within 4-8 weeks of targeted treatment.",
      "A score below 40 should be addressed before starting hair regrowth treatments.",
    ],
    meaning:
      "Your scalp environment is healthy. This is a strong foundation for hair recovery - hair follicles have the best chance of growth when the scalp is well-balanced.",
    progress: 94,
  },
  {
    title: "Hair Fall Control",
    tone: "sky",
    score: 92,
    blurb:
      "How controlled your current shedding is. Higher is better - 100 means no abnormal shedding; lower means active, concerning hair fall.",
    scoreStand: "Top 25%",
    scoreNote: "Above average for your age group",
    benchmarkTitle: "AGE BENCHMARK (30-40)",
    benchmarkLines: [
      "Normal daily hair fall is 50-100 strands.",
      "Your pull test and self-reported fall count suggest you are in the mild category.",
    ],
    meaning:
      "Hair fall is within normal range (50-100 strands/day is normal). You are not in an active shedding phase.",
    progress: 92,
  },
];

const regionalZones = [
  {
    name: "Frontal Zone",
    percent: 52,
    note: "Hairline and forehead region - mild diffuse thinning noted",
    status: "Moderate",
  },
  {
    name: "Mid-Scalp",
    percent: 68,
    note: "Top of head central region - manageable with treatment",
    status: "Moderate",
  },
  {
    name: "Crown",
    percent: 58,
    note: "Back-top region - minor involvement detected",
    status: "Moderate",
  },
];

const rootCausePrimary = [
  {
    rank: 1,
    title: "Stress-Induced (Telogen Effluvium)",
    tag: "Primary Cause",
    score: 82,
    tone: "cyan",
    summary:
      "Elevated cortisol disrupting hair growth cycle. Chronic stress pushing follicles into premature resting phase causing diffuse shedding - the primary driver of your Diffuse Thinning pattern.",
  },
  {
    rank: 2,
    title: "Nutritional Deficiency",
    tag: "Primary Cause",
    score: 74,
    tone: "cyan",
    summary:
      "Iron, Vitamin D, and Biotin levels below optimal thresholds. These micronutrients are essential for follicle cell synthesis and keratin production.",
  },
  {
    rank: 3,
    title: "Hormonal Imbalance",
    tag: "Primary Cause",
    score: 61,
    tone: "amber",
    summary:
      "Elevated DHT-to-testosterone ratio detected. Thyroid markers require assessment - subclinical hypothyroidism is a secondary driver in your profile causing diffuse effluvium.",
  },
];

const additionalContributingFactors = [
  {
    rank: 4,
    title: "Genetic / Androgenetic (DHT Sensitivity)",
    tag: "Contributing",
    score: 34,
    summary:
      "Low-moderate androgen receptor sensitivity detected. Genetic component is present but not the dominant factor - environmental drivers are more significant in your case.",
  },
  {
    rank: 5,
    title: "Scalp Condition",
    tag: "Minor",
    score: 28,
    summary:
      "Mild sebum imbalance and minor scalp inflammation are present. This is a secondary contributing factor that can be managed with topical scalp care.",
  },
  {
    rank: 6,
    title: "Chemical / Heat Damage",
    tag: "Minor",
    score: 22,
    summary:
      "Past or current use of heat styling contributing to shaft breakage and cuticle damage. Impact is low - correctable with habit changes.",
  },
  {
    rank: 7,
    title: "Post-Illness / Medication",
    tag: "Low",
    score: 15,
    summary:
      "Residual telogen effluvium from prior illness or medication use. Hair loss typically delayed 2-3 months post-event and self-resolving.",
  },
];

const scalpRecoveryCards = [
  {
    title: "Seborrheic Risk",
    score: 35,
    scoreLabel: "Low-Moderate",
    note: "Scalp fungal / inflammatory condition probability",
    tone: "amber",
    dashArray: "80.22 229.21",
    levels: ["Low", "Moderate", "Good", "Excellent"],
    activeLevel: "Moderate",
  },
  {
    title: "Growth Potential",
    score: 72,
    scoreLabel: "Good Recovery",
    note: "Follicle viability and recovery probability",
    tone: "cyan",
    dashArray: "165.03 229.21",
    levels: ["Low", "Moderate", "Good", "Excellent"],
    activeLevel: "Good",
    hasFloatBadge: true,
  },
];

const improvementPredictionCards = [
  {
    period: "3 Months",
    phase: "Stabilisation Phase",
    tone: "cyan",
    metrics: [
      { label: "Density Gain", value: "+14%", progress: 14 },
      { label: "Fall Reduction", value: "+40%", progress: 40 },
      { label: "Shaft Quality", value: "+20%", progress: 20 },
    ],
  },
  {
    period: "6 Months",
    phase: "Active Growth Phase",
    tone: "amber",
    metrics: [
      { label: "Density Gain", value: "+32%", progress: 32 },
      { label: "Fall Reduction", value: "+65%", progress: 65 },
      { label: "Shaft Quality", value: "+38%", progress: 38 },
    ],
  },
  {
    period: "12 Months",
    phase: "Consolidation Phase",
    tone: "green",
    metrics: [
      { label: "Density Gain", value: "+55%", progress: 55 },
      { label: "Fall Reduction", value: "+82%", progress: 82 },
      { label: "Shaft Quality", value: "+62%", progress: 62 },
    ],
  },
];

const treatmentRecommendationRows = [
  {
    title: "Topical Minoxidil (5% / 10%)",
    desc: "FDA-approved vasodilator - stimulates follicle activity",
    priority: "HIGH",
    priorityTone: "high",
    markerTone: "high",
    timeFrame: "1-3 mo",
    duration: "Lifelong - ongoing daily application",
    showImage: true,
  },
  {
    title: "Anti-DHT Therapy (Finasteride / Dutasteride)",
    desc: "Blocks DHT - prevents further miniaturisation",
    priority: "HIGH",
    priorityTone: "high",
    markerTone: "high",
    timeFrame: "1-3 mo",
    duration: "Lifelong - discontinuing reverses gains within 12 months",
    showImage: true,
  },
  {
    title: "Nutraceuticals (Biotin, Iron, Zinc, Vit D)",
    desc: "Corrects micronutrient deficiencies at follicle level",
    priority: "MEDIUM",
    priorityTone: "medium",
    markerTone: "medium",
    timeFrame: "1-6 mo",
    duration: "Minimum 3-6 months, assess bloods at 3 months",
    showImage: true,
  },
  {
    title: "Low Level Laser Therapy (LLLT / 650nm)",
    desc: "Photobiomodulation - cellular energy boost at follicle",
    priority: "ADJUNCT",
    priorityTone: "adjunct",
    markerTone: "adjunct",
    timeFrame: "2-12 mo",
    duration: "3x per week minimum for 5 months to see results",
    showImage: false,
  },
  {
    title: "Stress Management Protocol",
    desc: "Cortisol reduction via MBSR, sleep therapy, adaptogens",
    priority: "MEDIUM",
    priorityTone: "medium",
    markerTone: "medium",
    timeFrame: "Ongoing",
    duration: "Ongoing lifestyle change - minimum 90 days to impact cortisol",
    showImage: false,
  },
  {
    title: "Hormonal Panel & Endocrine Therapy",
    desc: "Thyroid / DHEA / testosterone / estrogen correction",
    priority: "HIGH",
    priorityTone: "high",
    markerTone: "high",
    timeFrame: "1-2 mo",
    duration: "2-6 month correction phase, ongoing monitoring",
    showImage: false,
  },
];

const personalisedTreatmentPhases = [
  {
    phase: "Phase I",
    monthRange: "Month 1-3",
    subtitle: "Foundation & Activation",
    tone: "cyan",
    icon: "shield",
    bullets: [
      "Topical Minoxidil 5% - twice daily on dry scalp",
      "Anti-DHT oral therapy if androgenetic pattern confirmed",
      "Medicated shampoo protocol (ketoconazole 2%) - 3x weekly",
      "Nutraceuticals: Biotin / Iron / Zinc / Vitamin D3",
      "Baseline scalp photography for progress tracking",
      "Blood panel: Ferritin, Thyroid (T3/T4), Vitamin D, DHT",
    ],
  },
  {
    phase: "Phase II",
    monthRange: "Month 3-6",
    subtitle: "Acceleration & Growth",
    tone: "amber",
    icon: "sprout",
    bullets: [
      "PRP therapy - 3 sessions (4-6 weeks apart)",
      "Microneedling (1.5mm dermaroller weekly)",
      "Low-Level Laser Therapy (LLLT) - 3x weekly sessions",
      "Adaptogen protocol: Ashwagandha + Rhodiola Rosea daily",
      "Month 3 trichoscopy - compare vs. baseline",
      "Reassess blood panel for nutritional correction outcomes",
    ],
  },
  {
    phase: "Phase III",
    monthRange: "Month 6-12",
    subtitle: "Consolidation & Evaluation",
    tone: "green",
    icon: "star",
    bullets: [
      "LLLT maintenance - 2x weekly (consolidation dose)",
      "Continued adaptogen cycling: 8 weeks on, 2 weeks off",
      "Scalp pH-balanced shampoo - ongoing maintenance",
      "Month 6 full diagnostic retest vs. baseline",
      "Month 12 comparative analysis - determine success metrics",
      "Decision on ongoing vs. tapering treatment protocol",
    ],
  },
];

export default function TestReport() {
  const sharedThumbImage = `${process.env.PUBLIC_URL}/report-image/IMG-4004.png`;
  const scalpRepresentativeImage = `${process.env.PUBLIC_URL}/report-image/IMG-840.png`;

  return (
    <section className="test-report-page container">
      <div className="report-content-grid">
        <div className="left-report-column">
          {/* Section: report summary */}
          <article className="main-report-card">
            <div className="main-card-top">
              <div className="main-card-title-wrap">
                <h3>
                  <span className="header-title-icon" aria-hidden="true">
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.37339 1.45834V2.625H3.20714V4.95834C3.20714 5.37834 3.31211 5.76723 3.52203 6.12501C3.73196 6.48278 4.01574 6.76667 4.37339 6.97667C4.73104 7.18667 5.11979 7.29167 5.53964 7.29167C5.95949 7.29167 6.34824 7.18667 6.70589 6.97667C7.06354 6.76667 7.34733 6.48278 7.55726 6.12501C7.76718 5.76723 7.87214 5.37834 7.87214 4.95834V2.625H6.70589V1.45834H8.45527C8.61854 1.45834 8.75655 1.51473 8.86929 1.62751C8.98202 1.74028 9.03839 1.87834 9.03839 2.04167V4.95834C9.03839 5.52612 8.91011 6.05889 8.65353 6.55667C8.40473 7.04667 8.0568 7.45501 7.60974 7.78167C7.16267 8.10834 6.66702 8.31834 6.12277 8.41167V9.33334C6.12277 9.70667 6.21412 10.0489 6.39684 10.36C6.57955 10.6711 6.82641 10.9181 7.13741 11.1008C7.44841 11.2836 7.79051 11.375 8.16371 11.375C8.59133 11.375 8.98008 11.2525 9.32996 11.0075C9.67983 10.7625 9.92863 10.4456 10.0764 10.0567C9.76536 9.91667 9.51461 9.70278 9.32412 9.415C9.13364 9.12723 9.03839 8.80834 9.03839 8.45834C9.03839 8.13945 9.11614 7.84584 9.27164 7.57751C9.42714 7.30917 9.63901 7.09723 9.90725 6.94167C10.1755 6.78612 10.469 6.70834 10.7878 6.70834C11.1065 6.70834 11.4001 6.78612 11.6683 6.94167C11.9365 7.09723 12.1484 7.30917 12.3039 7.57751C12.4594 7.84584 12.5371 8.13945 12.5371 8.45834C12.5371 8.85501 12.4186 9.20889 12.1814 9.52C11.9443 9.83112 11.6391 10.0372 11.2659 10.1383C11.1493 10.5972 10.9394 11.0094 10.6362 11.375C10.3329 11.7406 9.96751 12.0264 9.53988 12.2325C9.11226 12.4386 8.65353 12.5417 8.16371 12.5417C7.58058 12.5417 7.04411 12.3978 6.55428 12.11C6.06446 11.8222 5.67571 11.4333 5.38803 10.9433C5.10036 10.4533 4.95652 9.91667 4.95652 9.33334V8.41167C4.41227 8.31834 3.91661 8.10834 3.46955 7.78167C3.02249 7.45501 2.67456 7.04667 2.42576 6.55667C2.16918 6.05889 2.04089 5.52612 2.04089 4.95834V2.04167C2.04089 1.87834 2.09726 1.74028 2.21 1.62751C2.32274 1.51473 2.46074 1.45834 2.62402 1.45834H4.37339ZM10.7878 7.87501C10.6245 7.87501 10.4865 7.93139 10.3737 8.04417C10.261 8.15695 10.2046 8.295 10.2046 8.45834C10.2046 8.62167 10.261 8.75973 10.3737 8.87251C10.4865 8.98528 10.6245 9.04167 10.7878 9.04167C10.951 9.04167 11.089 8.98528 11.2018 8.87251C11.3145 8.75973 11.3709 8.62167 11.3709 8.45834C11.3709 8.295 11.3145 8.15695 11.2018 8.04417C11.089 7.93139 10.951 7.87501 10.7878 7.87501Z"
                        fill="#00E5FF"
                      />
                    </svg>
                  </span>
                  Report 1 - Hair Health Assessment
                </h3>
              </div>
              <button type="button" className="questionnaire-chip">
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3Z"
                    fill="#00E5FF"
                  />
                </svg>
                Questionnaire Report
              </button>
            </div>

            <div className="main-card-meta-row">
              <span className="meta-pill success-pill">
                <span className="meta-chip-icon" aria-hidden="true">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.25 11C5.57 11 4.92 10.87 4.3 10.61C3.70667 10.3567 3.17833 9.99833 2.715 9.535C2.25167 9.07167 1.89333 8.54333 1.64 7.95C1.38 7.33 1.25 6.68 1.25 6C1.25 5.32 1.38 4.67 1.64 4.05C1.89333 3.45667 2.25167 2.92833 2.715 2.465C3.17833 2.00167 3.70667 1.64333 4.3 1.39C4.92 1.13 5.57 1 6.25 1C6.93 1 7.58 1.13 8.2 1.39C8.79333 1.64333 9.32167 2.00167 9.785 2.465C10.2483 2.92833 10.6067 3.45667 10.86 4.05C11.12 4.67 11.25 5.32 11.25 6C11.25 6.68 11.12 7.33 10.86 7.95C10.6067 8.54333 10.2483 9.07167 9.785 9.535C9.32167 9.99833 8.79333 10.3567 8.2 10.61C7.58 10.87 6.93 11 6.25 11ZM6.25 10C6.97667 10 7.65 9.81667 8.27 9.45C8.87 9.09667 9.34667 8.62 9.7 8.02C10.0667 7.4 10.25 6.72667 10.25 6C10.25 5.27333 10.0667 4.6 9.7 3.98C9.34667 3.38 8.87 2.90333 8.27 2.55C7.65 2.18333 6.97667 2 6.25 2C5.52333 2 4.85 2.18333 4.23 2.55C3.63 2.90333 3.15333 3.38 2.8 3.98C2.43333 4.6 2.25 5.27333 2.25 6C2.25 6.72667 2.43333 7.4 2.8 8.02C3.15333 8.62 3.63 9.09667 4.23 9.45C4.85 9.81667 5.52333 10 6.25 10ZM5.75 8L3.63 5.88L4.34 5.17L5.75 6.59L8.58 3.76L9.29 4.46L5.75 8Z"
                      fill="#10B981"
                    />
                  </svg>
                </span>
                Assessment Complete
              </span>
              <span className="meta-pill muted-pill report-id-chip">
                <span className="meta-chip-icon" aria-hidden="true">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.90997 6.43001V6.93001C8.90997 7.62334 8.82997 8.30001 8.66997 8.96001C8.50997 9.62001 8.2733 10.2533 7.95997 10.86L7.83997 11.07L6.96997 10.58C7.55663 9.52001 7.86997 8.38001 7.90997 7.16001V6.43001H8.90997ZM5.90997 4.93001H6.90997V7.12001C6.88997 7.81334 6.76497 8.48167 6.53497 9.12501C6.30497 9.76834 5.97997 10.36 5.55997 10.9L5.44997 11.04L4.66997 10.41C5.05663 9.94334 5.35497 9.43001 5.56497 8.87001C5.77497 8.31001 5.88997 7.72667 5.90997 7.12001V4.93001ZM6.40997 2.93001C6.8633 2.93001 7.28163 3.04334 7.66497 3.27001C8.0483 3.49667 8.35163 3.80001 8.57497 4.18001C8.7983 4.56001 8.90997 4.97667 8.90997 5.43001H7.90997C7.90997 5.16334 7.8433 4.91501 7.70997 4.68501C7.57663 4.45501 7.39497 4.27167 7.16497 4.13501C6.93497 3.99834 6.68497 3.93001 6.41497 3.93001C6.14497 3.93001 5.89497 3.99834 5.66497 4.13501C5.43497 4.27167 5.25163 4.45501 5.11497 4.68501C4.9783 4.91501 4.90997 5.16334 4.90997 5.43001V6.93001C4.90997 7.49001 4.81163 8.02667 4.61497 8.54001C4.4183 9.05334 4.13997 9.51334 3.77997 9.92001L3.66997 10.04L2.94997 9.35001C3.2433 9.04334 3.47163 8.69501 3.63497 8.30501C3.7983 7.91501 3.88997 7.50667 3.90997 7.08001V5.43001C3.90997 4.97667 4.0233 4.56001 4.24997 4.18001C4.47663 3.80001 4.77997 3.49667 5.15997 3.27001C5.53997 3.04334 5.95663 2.93001 6.40997 2.93001ZM6.40997 0.930007C7.22997 0.930007 7.98663 1.13667 8.67997 1.55001C9.35997 1.94334 9.89997 2.48001 10.3 3.16001C10.7066 3.86001 10.91 4.61667 10.91 5.43001V6.93001C10.91 7.77667 10.81 8.61001 10.61 9.43001L10.54 9.70001L9.57997 9.44001C9.77997 8.71334 9.88997 7.97334 9.90997 7.22001V6.93001V5.43001C9.90997 4.79667 9.74997 4.21001 9.42997 3.67001C9.1233 3.14334 8.70663 2.72334 8.17997 2.41001C7.6333 2.09001 7.0433 1.93001 6.40997 1.93001C6.0233 1.93001 5.65163 1.99167 5.29497 2.11501C4.9383 2.23834 4.6133 2.41001 4.31997 2.63001L3.59997 1.92001C3.9933 1.60667 4.42663 1.36334 4.89997 1.19001C5.38663 1.01667 5.88997 0.930007 6.40997 0.930007ZM2.89997 2.62001L3.60997 3.34001C3.39663 3.62001 3.22997 3.92834 3.10997 4.26501C2.98997 4.60167 2.9233 4.95001 2.90997 5.31001V6.43001C2.90997 6.99667 2.7833 7.52667 2.52997 8.02001L2.45997 8.17001L1.58997 7.67001C1.7833 7.33001 1.88997 6.96667 1.90997 6.58001V6.43001V5.43001C1.90997 4.91001 1.99663 4.40667 2.16997 3.92001C2.3433 3.44667 2.58663 3.01334 2.89997 2.62001Z"
                      fill="#9FB4D0"
                    />
                  </svg>
                </span>
                <span className="report-id-label">Report ID:</span>
                <span className="report-id-value">TS-2026-A483921</span>
              </span>
              <span className="meta-pill muted-pill date-chip">
                <FiCalendar /> Mar 31, 2026
              </span>
            </div>

            <div className="report-hero-wrap">
              <div className="avatar-panel"></div>
              <div className="hero-copy">
                <h1>Hair Intelligence Report</h1>
                <p>
                  AI-generated clinical assessment based on your questionnaire
                  inputs. Results indicate hair health status and contributing
                  factors. This is not a medical diagnosis - consult a qualified
                  trichologist for clinical confirmation.
                </p>
              </div>
            </div>

            <div className="insight-grid">
              <div className="insight-card amber-card">
                <p className="insight-title">
                  <span className="insight-icon" aria-hidden="true">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.25 0.810042H10.25C10.39 0.810042 10.5083 0.858375 10.605 0.955041C10.7017 1.05171 10.75 1.17004 10.75 1.31004V10.94C10.75 11.0134 10.725 11.0734 10.675 11.12C10.625 11.1667 10.5667 11.19 10.5 11.19C10.4667 11.19 10.4333 11.1834 10.4 11.17L6.25 9.32004L2.1 11.17C2.04 11.1967 1.97667 11.1984 1.91 11.175C1.84333 11.1517 1.79667 11.11 1.77 11.05C1.75667 11.0167 1.75 10.98 1.75 10.94V1.31004C1.75 1.17004 1.79833 1.05171 1.895 0.955041C1.99167 0.858375 2.11 0.810042 2.25 0.810042ZM9.75 9.79004V1.81004H2.75V9.79004L6.25 8.23004L9.75 9.79004ZM6.25 6.56004L4.78 7.33004L5.06 5.69004L3.87 4.53004L5.52 4.29004L6.25 2.81004L6.98 4.29004L8.63 4.53004L7.44 5.69004L7.72 7.33004L6.25 6.56004Z"
                        fill="#F4C430"
                      />
                    </svg>
                  </span>
                  Assessment Category
                </p>
                <h4>Category 1 - Androgenetic Alopecia (Pattern Baldness)</h4>
                <span>Alopecia Classification</span>
              </div>
              <div className="insight-card blue-card">
                <p className="insight-title">
                  <span className="insight-icon" aria-hidden="true">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.8 7.61C4.08 7.71667 4.30833 7.89667 4.485 8.15C4.66167 8.40333 4.75 8.68667 4.75 9C4.75 9.27333 4.68333 9.525 4.55 9.755C4.41667 9.985 4.235 10.1667 4.005 10.3C3.775 10.4333 3.52333 10.5 3.25 10.5C2.97667 10.5 2.725 10.4333 2.495 10.3C2.265 10.1667 2.08333 9.985 1.95 9.755C1.81667 9.525 1.75 9.27333 1.75 9C1.75 8.68 1.84333 8.39 2.03 8.13C2.21667 7.87 2.45667 7.69 2.75 7.59V4.41C2.45667 4.31 2.21667 4.13 2.03 3.87C1.84333 3.61 1.75 3.32 1.75 3C1.75 2.72667 1.81667 2.475 1.95 2.245C2.08333 2.015 2.265 1.83333 2.495 1.7C2.725 1.56667 2.97667 1.5 3.25 1.5C3.52333 1.5 3.775 1.56667 4.005 1.7C4.235 1.83333 4.41667 2.015 4.55 2.245C4.68333 2.475 4.75 2.72667 4.75 3C4.75 3.32 4.65667 3.61 4.47 3.87C4.28333 4.13 4.04333 4.31 3.75 4.41V6C3.96333 5.84 4.19667 5.71667 4.45 5.63C4.70333 5.54333 4.97 5.5 5.25 5.5H7.25C7.59 5.5 7.895 5.39667 8.165 5.19C8.435 4.98333 8.61333 4.71667 8.7 4.39C8.42 4.28333 8.19167 4.10333 8.015 3.85C7.83833 3.59667 7.75 3.31333 7.75 3C7.75 2.72667 7.81667 2.475 7.95 2.245C8.08333 2.015 8.265 1.83333 8.495 1.7C8.725 1.56667 8.97667 1.5 9.25 1.5C9.52333 1.5 9.775 1.56667 10.005 1.7C10.235 1.83333 10.4167 2.015 10.55 2.245C10.6833 2.475 10.75 2.72667 10.75 3C10.75 3.32667 10.6533 3.62167 10.46 3.885C10.2667 4.14833 10.0167 4.33 9.71 4.43C9.64333 4.81667 9.49333 5.16833 9.26 5.485C9.02667 5.80167 8.735 6.05 8.385 6.23C8.035 6.41 7.65667 6.5 7.25 6.5H5.25C4.91 6.5 4.605 6.60333 4.335 6.81C4.065 7.01667 3.88667 7.28333 3.8 7.61ZM3.25 8.5C3.11 8.5 2.99167 8.54833 2.895 8.645C2.79833 8.74167 2.75 8.86 2.75 9C2.75 9.14 2.79833 9.25833 2.895 9.355C2.99167 9.45167 3.11 9.5 3.25 9.5C3.39 9.5 3.50833 9.45167 3.605 9.355C3.70167 9.25833 3.75 9.14 3.75 9C3.75 8.86 3.70167 8.74167 3.605 8.645C3.50833 8.54833 3.39 8.5 3.25 8.5ZM3.25 2.5C3.11 2.5 2.99167 2.54833 2.895 2.645C2.79833 2.74167 2.75 2.86 2.75 3C2.75 3.14 2.79833 3.25833 2.895 3.355C2.99167 3.45167 3.11 3.5 3.25 3.5C3.39 3.5 3.50833 3.45167 3.605 3.355C3.70167 3.25833 3.75 3.14 3.75 3C3.75 2.86 3.70167 2.74167 3.605 2.645C3.50833 2.54833 3.39 2.5 3.25 2.5ZM9.25 2.5C9.11 2.5 8.99167 2.54833 8.895 2.645C8.79833 2.74167 8.75 2.86 8.75 3C8.75 3.14 8.79833 3.25833 8.895 3.355C8.99167 3.45167 9.11 3.5 9.25 3.5C9.39 3.5 9.50833 3.45167 9.605 3.355C9.70167 3.25833 9.75 3.14 9.75 3C9.75 2.86 9.70167 2.74167 9.605 2.645C9.50833 2.54833 9.39 2.5 9.25 2.5Z"
                        fill="#00E5FF"
                      />
                    </svg>
                  </span>
                  Trichological Assessment
                </p>
                <h4>Male Pattern Baldness - Norwood Stage II</h4>
                <span>
                  <svg
                    width="6"
                    height="7"
                    viewBox="0 0 6 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3V3.12C6 4.77685 4.65685 6.12 3 6.12C1.34315 6.12 0 4.77685 0 3.12V3Z"
                      fill="#00E5FF"
                    />
                  </svg>
                  Primary Finding
                </span>
              </div>
              <div className="insight-card green-card">
                <p className="insight-title">
                  <span className="insight-icon" aria-hidden="true">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_261_723)">
                        <path
                          d="M6.25 0.5L10.36 1.41C10.4733 1.43667 10.5667 1.49667 10.64 1.59C10.7133 1.68333 10.75 1.78667 10.75 1.9V6.89C10.75 7.39667 10.6317 7.87 10.395 8.31C10.1583 8.75 9.83 9.11 9.41 9.39L6.25 11.5L3.09 9.39C2.67 9.11 2.34167 8.75 2.105 8.31C1.86833 7.87 1.75 7.39667 1.75 6.89V1.9C1.75 1.78667 1.78667 1.68333 1.86 1.59C1.93333 1.49667 2.02667 1.43667 2.14 1.41L6.25 0.5ZM6.25 1.52L2.75 2.3V6.89C2.75 7.23 2.82833 7.54667 2.985 7.84C3.14167 8.13333 3.36 8.37333 3.64 8.56L6.25 10.3L8.86 8.56C9.14 8.37333 9.35833 8.13333 9.515 7.84C9.67167 7.54667 9.75 7.23 9.75 6.89V2.3L6.25 1.52ZM8.48 4.11L9.18 4.82L6 8L3.88 5.88L4.59 5.17L6 6.59L8.48 4.11Z"
                          fill="#10B981"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_261_723">
                          <rect width="12.5" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Risk Level
                </p>
                <h4>Low Risk</h4>
                <div className="risk-meter">
                  <div className="risk-fill" />
                  <span>22 / 100</span>
                </div>
                <span>Progressive Loss Risk</span>
              </div>
            </div>
          </article>

          {/* Section: medical verification */}
          <article className="medical-review-card">
            <div className="medical-card-head">
              <span className="medical-card-head-left">
                <span className="medical-head-icon" aria-hidden="true">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.28902 0.583354L12.0823 1.64502C12.2145 1.67613 12.3233 1.74613 12.4089 1.85502C12.4944 1.96391 12.5371 2.08447 12.5371 2.21669V8.03835C12.5371 8.62946 12.3991 9.18169 12.1231 9.69502C11.8471 10.2084 11.4642 10.6284 10.9744 10.955L7.28902 13.4167L3.60367 10.955C3.11384 10.6284 2.73092 10.2084 2.45491 9.69502C2.1789 9.18169 2.04089 8.62946 2.04089 8.03835V2.21669C2.04089 2.08447 2.08366 1.96391 2.16918 1.85502C2.25471 1.74613 2.36356 1.67613 2.49573 1.64502L7.28902 0.583354ZM9.88976 4.79502L6.99746 7.68835L5.35304 6.03169L4.52501 6.86002L6.99746 9.33335L10.7061 5.62335L9.88976 4.79502Z"
                      fill="#10B981"
                    />
                  </svg>
                </span>
                Medical Review & Verification
              </span>
              <span className="verified-pill">
                <span className="verified-pill-dot" aria-hidden="true" />
                Medically Reviewed & Verified
              </span>
            </div>
            <div className="medical-card-body">
              <div className="doctor-side">
                <div className="doctor-photo-wrap">
                  <div className="doctor-photo" />
                  <span className="doctor-online-dot">
                    {" "}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1Z"
                        fill="#10B981"
                      />
                      <path
                        d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1Z"
                        stroke="#061A2E"
                        stroke-width="2"
                      />
                      <path
                        d="M11.1098 13.325L14.9393 9.49169L15.522 10.0834L11.1098 14.5084L8.4624 11.85L9.04515 11.2667L11.1098 13.325Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <h4>Dr. Amit Sharma</h4>
                <p className="doctor-role">MD Dermatology</p>
                <p className="doctor-cert">Certified Trichologist</p>
              </div>
              <div className="review-side">
                <h5>
                  <span className="review-title-icon" aria-hidden="true">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.75 7.71993V11.1499C8.75 11.2233 8.725 11.2833 8.675 11.3299C8.625 11.3766 8.56667 11.3999 8.5 11.3999C8.45333 11.3999 8.41 11.3899 8.37 11.3699L6.25 10.0999L4.13 11.3699C4.07 11.4033 4.00667 11.4116 3.94 11.3949C3.87333 11.3783 3.82333 11.3399 3.79 11.2799C3.76333 11.2399 3.75 11.1966 3.75 11.1499V7.71993C3.28333 7.34659 2.92 6.89326 2.66 6.35993C2.38667 5.80659 2.25 5.21993 2.25 4.59993C2.25 3.87326 2.43333 3.19993 2.8 2.57993C3.15333 1.97326 3.63 1.49326 4.23 1.13993C4.85 0.779925 5.52333 0.599926 6.25 0.599926C6.97667 0.599926 7.65 0.779925 8.27 1.13993C8.87 1.49326 9.34667 1.97326 9.7 2.57993C10.0667 3.19993 10.25 3.87326 10.25 4.59993C10.25 5.21993 10.1133 5.80659 9.84 6.35993C9.58 6.89326 9.21667 7.34659 8.75 7.71993ZM6.25 7.59993C6.79 7.59993 7.29333 7.46326 7.76 7.18993C8.21333 6.92326 8.57333 6.56326 8.84 6.10993C9.11333 5.64326 9.25 5.13826 9.25 4.59493C9.25 4.05159 9.11333 3.54659 8.84 3.07993C8.57333 2.62659 8.21333 2.26993 7.76 2.00993C7.29333 1.73659 6.79 1.59993 6.25 1.59993C5.71 1.59993 5.20667 1.73659 4.74 2.00993C4.28667 2.26993 3.92667 2.62659 3.66 3.07993C3.38667 3.54659 3.25 4.05159 3.25 4.59493C3.25 5.13826 3.38667 5.64326 3.66 6.10993C3.92667 6.56326 4.28667 6.92326 4.74 7.18993C5.20667 7.46326 5.71 7.59993 6.25 7.59993ZM6.25 6.59993C5.89 6.59993 5.55667 6.50993 5.25 6.32993C4.94333 6.14993 4.7 5.90659 4.52 5.59993C4.34 5.29326 4.25 4.95826 4.25 4.59493C4.25 4.23159 4.34 3.89659 4.52 3.58993C4.7 3.28326 4.94333 3.04159 5.25 2.86493C5.55667 2.68826 5.89 2.59993 6.25 2.59993C6.61 2.59993 6.94333 2.68826 7.25 2.86493C7.55667 3.04159 7.8 3.28326 7.98 3.58993C8.16 3.89659 8.25 4.23159 8.25 4.59493C8.25 4.95826 8.16 5.29326 7.98 5.59993C7.8 5.90659 7.55667 6.14993 7.25 6.32993C6.94333 6.50993 6.61 6.59993 6.25 6.59993Z"
                        fill="#F4C430"
                      />
                    </svg>
                  </span>
                  15+ Years Experience in Hair & Scalp Disorders
                </h5>
                <p className="review-body-copy">
                  This assessment report is programmatically generated using
                  advanced AI algorithms and has been thoroughly validated by
                  certified trichologists and dermatologists to ensure clinical
                  accuracy and treatment relevance. All findings are carefully
                  cross-referenced with established dermatological literature
                  and evidence-based medical guidelines to maintain the highest
                  standards of reliability and precision.
                </p>
                <div className="review-stats-row">
                  <div className="review-stat-box">
                    <div className="review-stat-icon" aria-hidden="true">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.99691 1.66665V2.99998H3.66441V5.66665C3.66441 6.14665 3.78433 6.59109 4.02418 6.99998C4.26403 7.40887 4.58828 7.73331 4.99691 7.97331C5.40554 8.21331 5.84971 8.33331 6.32941 8.33331C6.80911 8.33331 7.25328 8.21331 7.66191 7.97331C8.07054 7.73331 8.39478 7.40887 8.63463 6.99998C8.87448 6.59109 8.99441 6.14665 8.99441 5.66665V2.99998H7.66191V1.66665H9.66066C9.84721 1.66665 10.0049 1.73109 10.1337 1.85998C10.2625 1.98887 10.3269 2.14665 10.3269 2.33331V5.66665C10.3269 6.31553 10.1803 6.92442 9.88718 7.49331C9.60292 8.05331 9.20539 8.51998 8.6946 8.89331C8.1838 9.26665 7.61749 9.50665 6.99566 9.61331V10.6666C6.99566 11.0933 7.10004 11.4844 7.3088 11.84C7.51756 12.1955 7.7996 12.4778 8.15493 12.6866C8.51027 12.8955 8.90113 13 9.32753 13C9.81612 13 10.2603 12.86 10.66 12.58C11.0598 12.3 11.3441 11.9378 11.5128 11.4933C11.1575 11.3333 10.871 11.0889 10.6534 10.76C10.4357 10.4311 10.3269 10.0666 10.3269 9.66665C10.3269 9.3022 10.4157 8.96665 10.5934 8.65998C10.7711 8.35331 11.0131 8.11109 11.3196 7.93331C11.6261 7.75554 11.9614 7.66665 12.3257 7.66665C12.6899 7.66665 13.0252 7.75554 13.3317 7.93331C13.6382 8.11109 13.8802 8.35331 14.0579 8.65998C14.2356 8.96665 14.3244 9.3022 14.3244 9.66665C14.3244 10.12 14.1889 10.5244 13.918 10.88C13.6471 11.2355 13.2984 11.4711 12.872 11.5866C12.7387 12.1111 12.4989 12.5822 12.1524 13C11.806 13.4178 11.3885 13.7444 10.8999 13.98C10.4113 14.2155 9.88718 14.3333 9.32753 14.3333C8.66128 14.3333 8.04833 14.1689 7.48868 13.84C6.92903 13.5111 6.48487 13.0666 6.15618 12.5066C5.8275 11.9466 5.66316 11.3333 5.66316 10.6666V9.61331C5.04133 9.50665 4.47501 9.26665 3.96422 8.89331C3.45343 8.51998 3.0559 8.05331 2.77163 7.49331C2.47848 6.92442 2.33191 6.31553 2.33191 5.66665V2.33331C2.33191 2.14665 2.39631 1.98887 2.52512 1.85998C2.65393 1.73109 2.81161 1.66665 2.99816 1.66665H4.99691ZM12.3257 8.99998C12.1391 8.99998 11.9814 9.06442 11.8526 9.19331C11.7238 9.3222 11.6594 9.47998 11.6594 9.66665C11.6594 9.85331 11.7238 10.0111 11.8526 10.14C11.9814 10.2689 12.1391 10.3333 12.3257 10.3333C12.5122 10.3333 12.6699 10.2689 12.7987 10.14C12.9275 10.0111 12.9919 9.85331 12.9919 9.66665C12.9919 9.47998 12.9275 9.3222 12.7987 9.19331C12.6699 9.06442 12.5122 8.99998 12.3257 8.99998Z"
                          fill="#00E5FF"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong>2,400+</strong>
                      <span>Cases Reviewed</span>
                    </div>
                  </div>
                  <div className="review-stat-box">
                    <div className="review-stat-icon" aria-hidden="true">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.32803 14.6667C7.42193 14.6667 6.5558 14.4934 5.72965 14.1467C4.93904 13.8089 4.23503 13.3311 3.61764 12.7134C3.00025 12.0956 2.52277 11.3911 2.1852 10.6C1.83875 9.77335 1.66553 8.90669 1.66553 8.00002C1.66553 7.09335 1.83875 6.22669 2.1852 5.40002C2.52277 4.60891 3.00025 3.90447 3.61764 3.28669C4.23503 2.66891 4.93904 2.19113 5.72965 1.85335C6.5558 1.50669 7.42193 1.33335 8.32803 1.33335C9.23413 1.33335 10.1003 1.50669 10.9264 1.85335C11.717 2.19113 12.421 2.66891 13.0384 3.28669C13.6558 3.90447 14.1333 4.60891 14.4709 5.40002C14.8173 6.22669 14.9905 7.09335 14.9905 8.00002C14.9905 8.90669 14.8173 9.77335 14.4709 10.6C14.1333 11.3911 13.6558 12.0956 13.0384 12.7134C12.421 13.3311 11.717 13.8089 10.9264 14.1467C10.1003 14.4934 9.23413 14.6667 8.32803 14.6667ZM8.32803 13.3334C9.29631 13.3334 10.1935 13.0889 11.0197 12.6C11.8192 12.1289 12.4543 11.4934 12.9252 10.6934C13.4137 9.86669 13.658 8.96891 13.658 8.00002C13.658 7.03113 13.4137 6.13335 12.9252 5.30669C12.4543 4.50669 11.8192 3.87113 11.0197 3.40002C10.1935 2.91113 9.29631 2.66669 8.32803 2.66669C7.35974 2.66669 6.46253 2.91113 5.63638 3.40002C4.83688 3.87113 4.20172 4.50669 3.7309 5.30669C3.24232 6.13335 2.99803 7.03113 2.99803 8.00002C2.99803 8.96891 3.24232 9.86669 3.7309 10.6934C4.20172 11.4934 4.83688 12.1289 5.63638 12.6C6.46253 13.0889 7.35974 13.3334 8.32803 13.3334ZM8.99428 8.00002H11.6593V9.33335H7.66178V4.66669H8.99428V8.00002Z"
                          fill="#00E5FF"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong>15+</strong>
                      <span>Years Experience</span>
                    </div>
                  </div>
                  <div className="review-stat-box">
                    <div className="review-stat-icon" aria-hidden="true">
                      <svg
                        width="12"
                        height="15"
                        viewBox="0 0 12 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.99625 2.00272e-05L11.4728 1.21335C11.6238 1.24891 11.7482 1.32891 11.8459 1.45335C11.9436 1.5778 11.9925 1.71558 11.9925 1.86669V8.52002C11.9925 9.19558 11.8348 9.82669 11.5195 10.4134C11.2041 11 10.7666 11.48 10.207 11.8534L5.99625 14.6667L1.78555 11.8534C1.2259 11.48 0.788396 11 0.473038 10.4134C0.157679 9.82669 0 9.19558 0 8.52002V1.86669C0 1.71558 0.0488583 1.5778 0.146575 1.45335C0.244292 1.32891 0.368658 1.24891 0.519675 1.21335L5.99625 2.00272e-05ZM5.99625 1.36002L1.3325 2.40002V8.52002C1.3325 8.97335 1.43688 9.39558 1.64564 9.78669C1.8544 10.1778 2.14532 10.4978 2.51842 10.7467L5.99625 13.0667L9.47408 10.7467C9.84718 10.4978 10.1381 10.1778 10.3469 9.78669C10.5556 9.39558 10.66 8.97335 10.66 8.52002V2.40002L5.99625 1.36002ZM8.96772 4.81335L9.90048 5.76002L5.66313 10L2.83823 7.17335L3.7843 6.22669L5.66313 8.12002L8.96772 4.81335Z"
                          fill="#00E5FF"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong>ISO</strong>
                      <span>Certified Process</span>
                    </div>
                  </div>
                </div>
                <div className="review-foot-note">
                  For educational purposes only - consult a qualified
                  trichologist or dermatologist for prescription-based
                  treatment.
                </div>
              </div>
            </div>
          </article>

          {/* Section: hair score dashboard */}
          <section
            className="score-dashboard-wrap"
            aria-label="Hair score dashboard"
          >
            <article className="score-main-card">
              <h3>Overall Hair Health Index</h3>
              <p className="score-main-subtitle">
                Composite score across all clinical dimensions
              </p>

              <div className="health-ring-wrap" aria-hidden="true">
                <svg
                  className="health-ring-svg"
                  width="192"
                  height="192"
                  viewBox="0 0 192 192"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M179.478 96C179.478 49.8962 142.104 12.5218 96 12.5218C49.8962 12.5218 12.5217 49.8962 12.5217 96C12.5217 142.104 49.8962 179.478 96 179.478C142.104 179.478 179.478 142.104 179.478 96Z"
                    stroke="#10B981"
                    strokeOpacity="0.16"
                    strokeWidth="14"
                  />
                  <path
                    d="M179.478 96C179.478 49.8962 142.104 12.5218 96 12.5218C49.8962 12.5218 12.5217 49.8962 12.5217 96C12.5217 142.104 49.8962 179.478 96 179.478C142.104 179.478 179.478 142.104 179.478 96Z"
                    stroke="#072936"
                    strokeWidth="14"
                    strokeDasharray="376.99 125.66"
                  />
                  <path
                    d="M179.478 96C179.478 49.8962 142.104 12.5218 96 12.5218C49.8962 12.5218 12.5217 49.8962 12.5217 96C12.5217 142.104 49.8962 179.478 96 179.478C142.104 179.478 179.478 142.104 179.478 96Z"
                    stroke="#10B981"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray="271.43 502.65"
                  />
                </svg>
                <div className="health-ring-center">
                  <strong>72</strong>
                  <span>/ 100</span>
                  <p>HAIR HEALTH INDEX</p>
                </div>
              </div>

              <div className="health-pill">Good Hair Health</div>
              <p className="health-note">
                Comprehensive diagnostic complete. Review recommendations below.
              </p>

              <div className="health-bands">
                <div className="health-band">
                  <span
                    className="band-dot band-dot-green"
                    aria-hidden="true"
                  />
                  <h4>Low Risk</h4>
                  <span>75-100</span>
                </div>
                <div className="health-band health-band-active">
                  <span
                    className="band-dot band-dot-amber"
                    aria-hidden="true"
                  />
                  <h4>Moderate</h4>
                  <span>40-74</span>
                </div>
                <div className="health-band">
                  <span className="band-dot band-dot-red" aria-hidden="true" />
                  <h4>High Risk</h4>
                  <span>0-39</span>
                </div>
              </div>
            </article>

            <div className="score-side-col">
              <article className="score-side-card">
                <h3>Hair Loss Risk Score</h3>
                <p className="score-side-sub">
                  Probability of progressive loss
                </p>

                <div className="score-mini-row">
                  <div className="mini-ring" aria-hidden="true">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M73 40C73 21.7746 58.2254 7 40 7C21.7746 7 7 21.7746 7 40C7 58.2254 21.7746 73 40 73C58.2254 73 73 58.2254 73 40Z"
                        stroke="#10B981"
                        strokeOpacity="0.22"
                        strokeWidth="8"
                      />
                      <path
                        d="M73 40C73 21.7746 58.2254 7 40 7C21.7746 7 7 21.7746 7 40C7 58.2254 21.7746 73 40 73C58.2254 73 73 58.2254 73 40Z"
                        stroke="#10B981"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="70.48 207.3"
                      />
                    </svg>
                    <div className="mini-ring-center">
                      <strong>28</strong>
                      <span>/ 100</span>
                    </div>
                  </div>

                  <div className="score-mini-copy">
                    <div className="risk-line">
                      <strong>Low Risk</strong>
                      <span>Stable</span>
                    </div>
                    <p>
                      Lower risk - maintenance protocol recommended.
                      Environmental and lifestyle factors are primary drivers.
                    </p>
                  </div>
                </div>

                <div className="health-bands side-bands">
                  <div className="health-band health-band-green-active health-band-right">
                    <h4>Low</h4>
                    <span>0-30</span>
                  </div>
                  <div className="health-band health-band-right">
                    <h4>Moderate</h4>
                    <span>31-70</span>
                  </div>
                  <div className="health-band health-band-right">
                    <h4>High</h4>
                    <span>71-100</span>
                  </div>
                </div>
              </article>

              <article className="score-side-card">
                <h3>Genetic Predisposition Score</h3>
                <p className="score-side-sub">
                  Hereditary androgen sensitivity index
                </p>

                <div className="score-mini-row">
                  <div className="mini-ring" aria-hidden="true">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M73 40C73 21.7746 58.2254 7 40 7C21.7746 7 7 21.7746 7 40C7 58.2254 21.7746 73 40 73C58.2254 73 73 58.2254 73 40Z"
                        stroke="#F4C430"
                        strokeOpacity="0.22"
                        strokeWidth="8"
                      />
                      <path
                        d="M73 40C73 21.7746 58.2254 7 40 7C21.7746 7 7 21.7746 7 40C7 58.2254 21.7746 73 40 73C58.2254 73 73 58.2254 73 40Z"
                        stroke="#F4C430"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="70.48 207.3"
                      />
                    </svg>
                    <div className="mini-ring-center">
                      <strong>34</strong>
                      <span>/ 100</span>
                    </div>
                  </div>

                  <div className="score-mini-copy score-mini-copy-amber">
                    <div className="risk-line">
                      <strong>Low-Moderate</strong>
                    </div>
                    <p>
                      Environmental / lifestyle factors likely dominant. Genetic
                      androgen sensitivity present but not the primary driver.
                    </p>
                  </div>
                </div>

                <div className="health-bands side-bands">
                  <div className="health-band health-band-right">
                    <h4>Low</h4>
                    <span>0-30</span>
                  </div>
                  <div className="health-band health-band-active health-band-right">
                    <h4>Moderate</h4>
                    <span>31-60</span>
                  </div>
                  <div className="health-band health-band-right">
                    <h4>High</h4>
                    <span>61-100</span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Section: clinical score dashboard */}
          <section
            className="clinical-dashboard"
            aria-label="Clinical score dashboard"
          >
            <div className="clinical-dashboard-header">
              <h3>
                <span className="clinical-header-icon" aria-hidden="true">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.875 9.75H6.375V15.75H1.875V9.75ZM12.375 6H16.875V15.75H12.375V6ZM7.125 2.25H11.625V15.75H7.125V2.25ZM3.375 11.25V14.25H4.875V11.25H3.375ZM8.625 3.75V14.25H10.125V3.75H8.625ZM13.875 7.5V14.25H15.375V7.5H13.875Z"
                      fill="#10B981"
                    />
                  </svg>
                </span>
                Clinical Score Dashboard
              </h3>
              <p>6 independent hair health dimensions scored 0-100</p>
            </div>

            <div className="clinical-dimension-grid">
              {clinicalDimensions.map((item) => (
                <article className="clinical-dimension-card" key={item.title}>
                  <div className="clinical-dimension-top">
                    <h4>{item.title}</h4>
                    <span
                      className={`clinical-status-pill clinical-status-${item.tone}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="clinical-ring-wrap" aria-hidden="true">
                    <svg
                      width="68"
                      height="68"
                      viewBox="0 0 68 68"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M60 34C60 19.6406 48.3594 8 34 8C19.6406 8 8 19.6406 8 34C8 48.3594 19.6406 60 34 60C48.3594 60 60 48.3594 60 34Z"
                        stroke="white"
                        strokeOpacity="0.06"
                        strokeWidth="5"
                      />
                      <path
                        d="M60 34C60 19.6406 48.3594 8 34 8C19.6406 8 8 19.6406 8 34C8 48.3594 19.6406 60 34 60C48.3594 60 60 48.3594 60 34Z"
                        className={`clinical-ring-progress clinical-ring-${item.tone}`}
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray={item.dashArray}
                      />
                    </svg>
                    <div className="clinical-ring-center">
                      <strong
                        className={`clinical-score clinical-score-${item.tone}`}
                      >
                        {item.score}
                      </strong>
                      <span>/100</span>
                    </div>
                  </div>

                  <p
                    className={`clinical-score-label clinical-score-label-${item.tone}`}
                  >
                    {item.scoreLabel}
                  </p>
                  <p className="clinical-score-note">{item.note}</p>
                </article>
              ))}
            </div>

            <article
              className="clinical-severity-row"
              aria-label="Hair fall severity index"
            >
              <span className="clinical-severity-icon-wrap" aria-hidden="true">
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.62407 11.6667V8.16671C2.62407 7.31893 2.83788 6.53337 3.2655 5.81004C3.67758 5.11004 4.23349 4.55393 4.93324 4.14171C5.65632 3.71393 6.44159 3.50004 7.28907 3.50004C8.13654 3.50004 8.92182 3.71393 9.64489 4.14171C10.3446 4.55393 10.9006 5.11004 11.3126 5.81004C11.7403 6.53337 11.9541 7.31893 11.9541 8.16671V11.6667H12.5372V12.8334H2.04094V11.6667H2.62407ZM3.79032 11.6667H10.7878V8.16671C10.7878 7.53671 10.6284 6.94949 10.3097 6.40504C9.99865 5.87615 9.5788 5.45615 9.0501 5.14504C8.50585 4.82615 7.91884 4.66671 7.28907 4.66671C6.65929 4.66671 6.07228 4.82615 5.52803 5.14504C4.99933 5.45615 4.57948 5.87615 4.26848 6.40504C3.9497 6.94949 3.79032 7.53671 3.79032 8.16671V11.6667ZM6.70594 1.16671H7.87219V2.91671H6.70594V1.16671ZM11.8258 2.80004L12.6538 3.62837L11.4176 4.86504L10.5896 4.03671L11.8258 2.80004ZM1.92432 3.62837L2.75235 2.80004L3.98858 4.03671L3.16054 4.86504L1.92432 3.62837ZM4.37344 8.16671C4.37344 7.63782 4.50367 7.14976 4.76414 6.70254C5.0246 6.25532 5.37836 5.90143 5.82542 5.64087C6.27249 5.38032 6.76037 5.25004 7.28907 5.25004V6.41671C6.97029 6.41671 6.67678 6.49448 6.40855 6.65004C6.14031 6.8056 5.92844 7.01754 5.77294 7.28587C5.61744 7.55421 5.53969 7.84782 5.53969 8.16671H4.37344Z"
                    fill="#EF4444"
                  />
                </svg>
              </span>

              <div className="clinical-severity-copy">
                <p className="clinical-severity-kicker">
                  Hair Fall Severity Index
                </p>
                <p className="clinical-severity-title">
                  Active Shedding - 50-70 strands/day detected
                </p>
              </div>

              <span className="clinical-severity-pill">High Risk</span>
            </article>
          </section>

          {/* Section: clinical score dashboard */}
          <section
            className="deep-metric-section"
            aria-label="Deep metric insights"
          >
            <div className="deep-metric-header">
              <h3>
                <span className="deep-metric-header-icon" aria-hidden="true">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.275 1.98002L12.705 6.19502C12.815 6.37502 12.8425 6.56502 12.7875 6.76502C12.7325 6.96502 12.615 7.11502 12.435 7.21502L11.46 7.78502L12.21 9.09002L10.905 9.84002L10.155 8.53502L9.195 9.09002C9.015 9.20002 8.825 9.22752 8.625 9.17252C8.425 9.11752 8.27 9.00002 8.16 8.82002L6.78 6.43502C6.27 6.59502 5.815 6.85002 5.415 7.20002C5.015 7.55002 4.7 7.97002 4.47 8.46002C4.24 8.95002 4.125 9.47002 4.125 10.02C4.125 10.48 4.205 10.925 4.365 11.355C4.975 10.965 5.645 10.77 6.375 10.77C6.995 10.77 7.5725 10.9125 8.1075 11.1975C8.6425 11.4825 9.085 11.87 9.435 12.36L15.195 9.03002L15.945 10.32L10.035 13.74C10.095 14 10.125 14.26 10.125 14.52C10.125 14.78 10.1 15.03 10.05 15.27H16.125V16.77H3.375C3.135 16.45 2.95 16.1 2.82 15.72C2.69 15.34 2.625 14.94 2.625 14.52C2.625 13.78 2.83 13.1 3.24 12.48C2.83 11.71 2.625 10.89 2.625 10.02C2.625 9.29002 2.77 8.59002 3.06 7.92002C3.35 7.27002 3.75 6.70252 4.26 6.21752C4.77 5.73252 5.355 5.36502 6.015 5.11502L5.73 4.60502C5.59 4.36502 5.52 4.11252 5.52 3.84752C5.52 3.58252 5.5875 3.33502 5.7225 3.10502C5.8575 2.87502 6.04 2.69002 6.27 2.55002L8.22 1.42502C8.46 1.28502 8.7125 1.21752 8.9775 1.22252C9.2425 1.22752 9.49 1.29502 9.72 1.42502C9.95 1.55502 10.135 1.74002 10.275 1.98002ZM6.375 12.27C5.965 12.27 5.5875 12.3725 5.2425 12.5775C4.8975 12.7825 4.625 13.0575 4.425 13.4025C4.225 13.7475 4.125 14.12 4.125 14.52C4.125 14.78 4.17 15.03 4.26 15.27H8.49C8.58 15.03 8.625 14.78 8.625 14.52C8.625 14.12 8.525 13.7475 8.325 13.4025C8.125 13.0575 7.8525 12.7825 7.5075 12.5775C7.1625 12.3725 6.785 12.27 6.375 12.27ZM8.97 2.73002L7.02 3.85502L9.09 7.42502L11.04 6.30002L8.97 2.73002Z"
                      fill="#00E5FF"
                    />
                  </svg>
                </span>
                Deep Metric Insights
              </h3>
              <p>
                Personalised benchmarks and clinical interpretation for your key
                scores
              </p>
            </div>

            <div className="deep-metric-list">
              {deepMetricRows.map((metric) => (
                <article className="deep-metric-card" key={metric.title}>
                  <div className="deep-metric-card-head">
                    <h4>
                      <span
                        className={`deep-metric-dot deep-metric-dot-${metric.tone}`}
                        aria-hidden="true"
                      />
                      {metric.title}
                    </h4>
                    <p>
                      <strong
                        className={`deep-metric-score deep-metric-score-${metric.tone}`}
                      >
                        {metric.score}
                      </strong>
                      <span>/ 100</span>
                    </p>
                  </div>

                  {metric.blurb && (
                    <p className="deep-metric-card-blurb">{metric.blurb}</p>
                  )}

                  <div
                    className="deep-metric-progress-track"
                    aria-hidden="true"
                  >
                    <span
                      className={`deep-metric-progress-fill deep-metric-progress-fill-${metric.tone}`}
                      style={{ width: `${metric.progress}%` }}
                    />
                  </div>

                  <div className="deep-metric-panels">
                    <div
                      className={`deep-metric-panel deep-metric-panel-stand deep-metric-panel-stand-${metric.tone}`}
                    >
                      <h5>WHERE YOU STAND</h5>
                      <strong>{metric.scoreStand}</strong>
                      <p>{metric.scoreNote}</p>
                    </div>
                    <div className="deep-metric-panel deep-metric-panel-benchmark">
                      <h5>{metric.benchmarkTitle}</h5>
                      {metric.benchmarkLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`deep-metric-meaning-row deep-metric-meaning-row-${metric.tone}`}
                  >
                    <span
                      className="deep-metric-meaning-icon"
                      aria-hidden="true"
                    >
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.28901 12.8333C6.49596 12.8333 5.7379 12.6816 5.01483 12.3783C4.32285 12.0827 3.70668 11.6646 3.16632 11.1241C2.62596 10.5835 2.20805 9.96714 1.9126 9.27492C1.60938 8.55159 1.45776 7.79325 1.45776 6.99992C1.45776 6.20659 1.60938 5.44825 1.9126 4.72492C2.20805 4.0327 2.62596 3.41631 3.16632 2.87575C3.70668 2.3352 4.32285 1.91714 5.01483 1.62158C5.7379 1.31825 6.49596 1.16658 7.28901 1.16658C8.08206 1.16658 8.84013 1.31825 9.5632 1.62158C10.2552 1.91714 10.8713 2.3352 11.4117 2.87575C11.9521 3.41631 12.37 4.0327 12.6654 4.72492C12.9687 5.44825 13.1203 6.20659 13.1203 6.99992C13.1203 7.79325 12.9687 8.55159 12.6654 9.27492C12.37 9.96714 11.9521 10.5835 11.4117 11.1241C10.8713 11.6646 10.2552 12.0827 9.5632 12.3783C8.84013 12.6816 8.08206 12.8333 7.28901 12.8333ZM7.28901 11.6666C8.13649 11.6666 8.92176 11.4527 9.64484 11.0249C10.3446 10.6127 10.9005 10.0566 11.3126 9.35659C11.7402 8.63325 11.954 7.8477 11.954 6.99992C11.954 6.15214 11.7402 5.36659 11.3126 4.64325C10.9005 3.94325 10.3446 3.38714 9.64484 2.97492C8.92176 2.54714 8.13649 2.33325 7.28901 2.33325C6.44154 2.33325 5.65626 2.54714 4.93319 2.97492C4.23344 3.38714 3.67753 3.94325 3.26545 4.64325C2.83783 5.36659 2.62401 6.15214 2.62401 6.99992C2.62401 7.8477 2.83783 8.63325 3.26545 9.35659C3.67753 10.0566 4.23344 10.6127 4.93319 11.0249C5.65626 11.4527 6.44154 11.6666 7.28901 11.6666ZM6.70589 4.08325H7.87214V5.24992H6.70589V4.08325ZM6.70589 6.41659H7.87214V9.91659H6.70589V6.41659Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <p>
                      <strong>What this means for you:</strong> {metric.meaning}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section: clinical score dashboard */}
          <section
            className="regional-analysis-section"
            aria-label="Regional analysis"
          >
            <article className="regional-analysis-card">
              <div className="regional-analysis-header">
                <span
                  className="regional-analysis-icon-wrap"
                  aria-hidden="true"
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.414 19.05L5.11534 13.75C4.14892 12.7945 3.49908 11.6612 3.16583 10.35C2.83258 9.08338 2.83258 7.81672 3.16583 6.55005C3.49908 5.23894 4.14614 4.10283 5.10701 3.14172C6.06788 2.1806 7.20371 1.52783 8.51449 1.18338C9.78084 0.861158 11.0472 0.861158 12.3135 1.18338C13.6243 1.52783 14.7602 2.1806 15.721 3.14172C16.6819 4.10283 17.329 5.23894 17.6622 6.55005C17.9955 7.81672 17.9955 9.08338 17.6622 10.35C17.329 11.6612 16.6791 12.7945 15.7127 13.75L10.414 19.05ZM14.5297 12.5667C15.285 11.8223 15.796 10.9445 16.0626 9.93338C16.3181 8.94449 16.3181 7.9556 16.0626 6.96671C15.796 5.9556 15.2878 5.07505 14.538 4.32505C13.7882 3.57505 12.9078 3.06671 11.897 2.80005C10.9083 2.54449 9.9197 2.54449 8.93106 2.80005C7.9202 3.06671 7.03986 3.57505 6.29005 4.32505C5.54024 5.07505 5.03203 5.9556 4.76543 6.96671C4.50994 7.9556 4.50994 8.94449 4.76543 9.93338C5.03203 10.9445 5.54301 11.8223 6.29838 12.5667L10.414 16.7L14.5297 12.5667ZM10.414 10.1167C10.1141 10.1167 9.83639 10.0417 9.58089 9.89172C9.3254 9.74172 9.12267 9.53894 8.97271 9.28338C8.82275 9.02783 8.74777 8.75005 8.74777 8.45005C8.74777 8.15005 8.82275 7.87227 8.97271 7.61671C9.12267 7.36116 9.3254 7.15838 9.58089 7.00838C9.83639 6.85838 10.1141 6.78338 10.414 6.78338C10.7139 6.78338 10.9917 6.85838 11.2471 7.00838C11.5026 7.15838 11.7054 7.36116 11.8553 7.61671C12.0053 7.87227 12.0803 8.15005 12.0803 8.45005C12.0803 8.75005 12.0053 9.02783 11.8553 9.28338C11.7054 9.53894 11.5026 9.74172 11.2471 9.89172C10.9917 10.0417 10.7139 10.1167 10.414 10.1167Z"
                      fill="#00E5FF"
                    />
                  </svg>
                </span>
                <div>
                  <p className="regional-analysis-kicker">Regional Analysis</p>
                  <h3>Scalp Density Map</h3>
                  <p className="regional-analysis-subtitle">
                    Zone-by-zone follicular coverage analysis
                  </p>
                </div>
              </div>

              <div className="regional-analysis-body">
                <div className="regional-analysis-left">
                  <svg
                    className="regional-scalp-map"
                    width="160"
                    height="208"
                    viewBox="0 0 160 208"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M80.0001 193.818C114.578 193.818 142.609 153.605 142.609 104C142.609 54.3949 114.578 14.1819 80.0001 14.1819C45.4222 14.1819 17.3914 54.3949 17.3914 104C17.3914 153.605 45.4222 193.818 80.0001 193.818Z"
                      fill="#041126"
                      fillOpacity="0.8"
                      stroke="#00E5FF"
                      strokeOpacity="0.15"
                    />
                    <path
                      d="M80 81.309C93.447 81.309 104.348 69.4567 104.348 54.8363C104.348 40.2158 93.447 28.3635 80 28.3635C66.5531 28.3635 55.6522 40.2158 55.6522 54.8363C55.6522 69.4567 66.5531 81.309 80 81.309Z"
                      fill="#F4C430"
                      fillOpacity="0.0941176"
                      stroke="#F4C430"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M80.0001 66.749C86.0512 66.749 90.9566 61.4155 90.9566 54.8363C90.9566 48.2571 86.0512 42.9236 80.0001 42.9236C73.949 42.9236 69.0436 48.2571 69.0436 54.8363C69.0436 61.4155 73.949 66.749 80.0001 66.749Z"
                      fill="#F4C430"
                      fillOpacity="0.25098"
                    />
                    <path
                      d="M80.0001 57.6727C81.4408 57.6727 82.6087 56.4028 82.6087 54.8364C82.6087 53.2699 81.4408 52 80.0001 52C78.5593 52 77.3914 53.2699 77.3914 54.8364C77.3914 56.4028 78.5593 57.6727 80.0001 57.6727Z"
                      fill="#F4C430"
                    />
                    <path
                      d="M80.0001 121.964C91.526 121.964 100.87 111.805 100.87 99.2727C100.87 86.7409 91.526 76.5818 80.0001 76.5818C68.4741 76.5818 59.1305 86.7409 59.1305 99.2727C59.1305 111.805 68.4741 121.964 80.0001 121.964Z"
                      fill="#F4C430"
                      fillOpacity="0.0941176"
                      stroke="#F4C430"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M80.0001 109.484C85.1867 109.484 89.3914 104.912 89.3914 99.2727C89.3914 93.6333 85.1867 89.0618 80.0001 89.0618C74.8134 89.0618 70.6088 93.6333 70.6088 99.2727C70.6088 104.912 74.8134 109.484 80.0001 109.484Z"
                      fill="#F4C430"
                      fillOpacity="0.25098"
                    />
                    <path
                      d="M80.0001 102.109C81.4408 102.109 82.6087 100.839 82.6087 99.2726C82.6087 97.7062 81.4408 96.4363 80.0001 96.4363C78.5593 96.4363 77.3914 97.7062 77.3914 99.2726C77.3914 100.839 78.5593 102.109 80.0001 102.109Z"
                      fill="#F4C430"
                    />
                    <path
                      d="M79.9999 160.727C89.6049 160.727 97.3913 152.261 97.3913 141.818C97.3913 131.375 89.6049 122.909 79.9999 122.909C70.395 122.909 62.6086 131.375 62.6086 141.818C62.6086 152.261 70.395 160.727 79.9999 160.727Z"
                      fill="#F4C430"
                      fillOpacity="0.0941176"
                      stroke="#F4C430"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M79.9999 150.327C84.3221 150.327 87.826 146.518 87.826 141.818C87.826 137.119 84.3221 133.309 79.9999 133.309C75.6777 133.309 72.1738 137.119 72.1738 141.818C72.1738 146.518 75.6777 150.327 79.9999 150.327Z"
                      fill="#F4C430"
                      fillOpacity="0.25098"
                    />
                    <path
                      d="M79.9999 144.655C81.4407 144.655 82.6086 143.385 82.6086 141.818C82.6086 140.252 81.4407 138.982 79.9999 138.982C78.5592 138.982 77.3912 140.252 77.3912 141.818C77.3912 143.385 78.5592 144.655 79.9999 144.655Z"
                      fill="#F4C430"
                    />
                  </svg>
                  <span className="regional-scalp-label">SCALP</span>

                  <div className="regional-representative-wrap">
                    <div
                      className="regional-representative-image"
                      style={{
                        backgroundImage: `url(${scalpRepresentativeImage})`,
                      }}
                    />
                    <p>Representative image</p>
                  </div>
                </div>

                <div className="regional-analysis-right">
                  {regionalZones.map((zone) => (
                    <article className="regional-zone-row" key={zone.name}>
                      <div className="regional-zone-head">
                        <h4>{zone.name}</h4>
                        <span>{zone.percent}%</span>
                      </div>
                      <p>{zone.note}</p>
                      <div className="regional-zone-track" aria-hidden="true">
                        <span
                          className="regional-zone-fill"
                          style={{ width: `${zone.percent}%` }}
                        />
                      </div>
                      <em>{zone.status}</em>
                    </article>
                  ))}
                </div>
              </div>

              <div className="regional-overall-wrap">
                <div className="regional-overall-head">
                  <h4>Overall Scalp Coverage</h4>
                  <p>65% - Moderate</p>
                </div>

                <div className="regional-overall-track" aria-hidden="true">
                  <span
                    className="regional-overall-fill"
                    style={{ width: "65%" }}
                  />
                </div>

                <div className="regional-overall-legend">
                  <div className="regional-legend-item">
                    <span
                      className="regional-legend-swatch regional-legend-red"
                      aria-hidden="true"
                    />
                    <p>
                      Poor <small>0-49%</small>
                    </p>
                  </div>
                  <div className="regional-legend-item">
                    <span
                      className="regional-legend-swatch regional-legend-amber"
                      aria-hidden="true"
                    />
                    <p>
                      Moderate <small>50-74%</small>
                    </p>
                  </div>
                  <div className="regional-legend-item">
                    <span
                      className="regional-legend-swatch regional-legend-green"
                      aria-hidden="true"
                    />
                    <p>
                      Good <small>75-100%</small>
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Section: clinical score dashboard */}
          <section
            className="root-cause-section"
            aria-label="Root cause analysis"
          >
            <div className="root-cause-header">
              <h3>
                <span className="root-cause-title-icon" aria-hidden="true">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.785 12.3451L16.995 15.5551L15.93 16.6201L12.72 13.4101C12.13 13.8801 11.485 14.2401 10.785 14.4901C10.045 14.7501 9.285 14.8801 8.505 14.8801C7.285 14.8801 6.15 14.5751 5.1 13.9651C4.08 13.3651 3.275 12.5551 2.685 11.5351C2.065 10.4851 1.755 9.35012 1.755 8.13012C1.755 6.91012 2.065 5.77512 2.685 4.72512C3.275 3.70512 4.08 2.90012 5.1 2.31012C6.15 1.69012 7.285 1.38012 8.505 1.38012C9.725 1.38012 10.86 1.69012 11.91 2.31012C12.93 2.90012 13.74 3.70512 14.34 4.72512C14.95 5.77512 15.255 6.91012 15.255 8.13012C15.255 8.91012 15.125 9.67012 14.865 10.4101C14.615 11.1101 14.255 11.7551 13.785 12.3451ZM12.27 11.7901C12.74 11.3101 13.105 10.7601 13.365 10.1401C13.625 9.50012 13.755 8.83012 13.755 8.13012C13.755 7.18012 13.515 6.29512 13.035 5.47512C12.575 4.68512 11.95 4.06012 11.16 3.60012C10.34 3.12012 9.455 2.88012 8.505 2.88012C7.555 2.88012 6.67 3.12012 5.85 3.60012C5.06 4.06012 4.435 4.68512 3.975 5.47512C3.495 6.29512 3.255 7.18012 3.255 8.13012C3.255 9.08012 3.495 9.96512 3.975 10.7851C4.435 11.5751 5.06 12.2001 5.85 12.6601C6.67 13.1401 7.555 13.3801 8.505 13.3801C9.205 13.3801 9.875 13.2501 10.515 12.9901C11.135 12.7301 11.685 12.3651 12.165 11.8951L12.27 11.7901ZM9.39 5.26512C9.13 5.38512 8.9175 5.56762 8.7525 5.81262C8.5875 6.05762 8.505 6.33012 8.505 6.63012C8.505 6.90012 8.5725 7.15012 8.7075 7.38012C8.8425 7.61012 9.025 7.79262 9.255 7.92762C9.485 8.06262 9.735 8.13012 10.005 8.13012C10.305 8.13012 10.5775 8.05012 10.8225 7.89012C11.0675 7.73012 11.25 7.51512 11.37 7.24512C11.46 7.53512 11.505 7.83012 11.505 8.13012C11.505 8.67012 11.37 9.17012 11.1 9.63012C10.83 10.0901 10.465 10.4551 10.005 10.7251C9.545 10.9951 9.045 11.1301 8.505 11.1301C7.965 11.1301 7.465 10.9951 7.005 10.7251C6.545 10.4551 6.18 10.0901 5.91 9.63012C5.64 9.17012 5.505 8.67012 5.505 8.13012C5.505 7.59012 5.64 7.09012 5.91 6.63012C6.18 6.17012 6.545 5.80512 7.005 5.53512C7.465 5.26512 7.965 5.13012 8.505 5.13012C8.805 5.13012 9.1 5.17512 9.39 5.26512Z"
                      fill="#00E5FF"
                    />
                  </svg>
                </span>
                Root Cause Analysis
              </h3>
              <span className="root-cause-engine-chip">
                AI Assessment Engine
              </span>
            </div>

            <p className="root-cause-subtitle">
              Probability-weighted causal attribution model
            </p>

            <div className="root-cause-top-title">
              <span className="root-cause-top-marker" aria-hidden="true" />
              <p>Top 3 Primary Causes Ranked</p>
            </div>

            <div className="root-cause-primary-list">
              {rootCausePrimary.map((cause) => (
                <article
                  className={`root-cause-card root-cause-card-${cause.tone}`}
                  key={cause.rank}
                >
                  <div className="root-cause-card-head">
                    <div className="root-cause-rank-wrap">
                      <span
                        className={`root-cause-rank root-cause-rank-${cause.tone}`}
                      >
                        #{cause.rank}
                      </span>
                      <h4>{cause.title}</h4>
                    </div>
                    <span
                      className={`root-cause-tag root-cause-tag-${cause.tone}`}
                    >
                      {cause.tag}
                    </span>
                  </div>

                  <p className="root-cause-summary">{cause.summary}</p>

                  <div className="root-cause-score-row">
                    <div className="root-cause-track" aria-hidden="true">
                      <span
                        className={`root-cause-fill root-cause-fill-${cause.tone}`}
                        style={{ width: `${cause.score}%` }}
                      />
                    </div>
                    <p>
                      <strong
                        className={`root-cause-score root-cause-score-${cause.tone}`}
                      >
                        {cause.score}%
                      </strong>
                      <span>Impact Score</span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section: Additional Contributing Factors */}
          <section
            className="additional-factors-section"
            aria-label="Additional contributing factors"
          >
            <div className="additional-factors-title-row">
              <span
                className="additional-factors-title-icon"
                aria-hidden="true"
              >
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2V14C4 15.1046 3.10457 16 2 16C0.895431 16 0 15.1046 0 14V2Z"
                    fill="#4A6080"
                  />
                </svg>
              </span>
              <h3>Additional Contributing Factors</h3>
            </div>

            <div className="additional-factors-list">
              {additionalContributingFactors.map((factor) => (
                <article className="additional-factor-card" key={factor.rank}>
                  <div className="additional-factor-head">
                    <div className="additional-factor-rank-title">
                      <span className="additional-factor-rank">
                        #{factor.rank}
                      </span>
                      <h4>{factor.title}</h4>
                    </div>
                    <span className="additional-factor-tag">{factor.tag}</span>
                  </div>

                  <p className="additional-factor-summary">{factor.summary}</p>

                  <div className="additional-factor-progress-row">
                    <div className="additional-factor-track" aria-hidden="true">
                      <span
                        className="additional-factor-fill"
                        style={{ width: `${factor.score}%` }}
                      />
                    </div>
                    <span className="additional-factor-score">
                      {factor.score}%
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section: Scalp Condition & Recovery */}
          <section
            className="scalp-recovery-section"
            aria-label="Scalp condition and recovery"
          >
            <div className="scalp-recovery-header">
              <h3>
                <span className="scalp-recovery-icon" aria-hidden="true">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.275 1.98002L12.705 6.19502C12.815 6.37502 12.8425 6.56502 12.7875 6.76502C12.7325 6.96502 12.615 7.11502 12.435 7.21502L11.46 7.78502L12.21 9.09002L10.905 9.84002L10.155 8.53502L9.195 9.09002C9.015 9.20002 8.825 9.22752 8.625 9.17252C8.425 9.11752 8.27 9.00002 8.16 8.82002L6.78 6.43502C6.27 6.59502 5.815 6.85002 5.415 7.20002C5.015 7.55002 4.7 7.97002 4.47 8.46002C4.24 8.95002 4.125 9.47002 4.125 10.02C4.125 10.48 4.205 10.925 4.365 11.355C4.975 10.965 5.645 10.77 6.375 10.77C6.995 10.77 7.5725 10.9125 8.1075 11.1975C8.6425 11.4825 9.085 11.87 9.435 12.36L15.195 9.03002L15.945 10.32L10.035 13.74C10.095 14 10.125 14.26 10.125 14.52C10.125 14.78 10.1 15.03 10.05 15.27H16.125V16.77H3.375C3.135 16.45 2.95 16.1 2.82 15.72C2.69 15.34 2.625 14.94 2.625 14.52C2.625 13.78 2.83 13.1 3.24 12.48C2.83 11.71 2.625 10.89 2.625 10.02C2.625 9.29002 2.77 8.59002 3.06 7.92002C3.35 7.27002 3.75 6.70252 4.26 6.21752C4.77 5.73252 5.355 5.36502 6.015 5.11502L5.73 4.60502C5.59 4.36502 5.52 4.11252 5.52 3.84752C5.52 3.58252 5.5875 3.33502 5.7225 3.10502C5.8575 2.87502 6.04 2.69002 6.27 2.55002L8.22 1.42502C8.46 1.28502 8.7125 1.21752 8.9775 1.22252C9.2425 1.22752 9.49 1.29502 9.72 1.42502C9.95 1.55502 10.135 1.74002 10.275 1.98002ZM6.375 12.27C5.965 12.27 5.5875 12.3725 5.2425 12.5775C4.8975 12.7825 4.625 13.0575 4.425 13.4025C4.225 13.7475 4.125 14.12 4.125 14.52C4.125 14.78 4.17 15.03 4.26 15.27H8.49C8.58 15.03 8.625 14.78 8.625 14.52C8.625 14.12 8.525 13.7475 8.325 13.4025C8.125 13.0575 7.8525 12.7825 7.5075 12.5775C7.1625 12.3725 6.785 12.27 6.375 12.27ZM8.97 2.73002L7.02 3.85502L9.09 7.42502L11.04 6.30002L8.97 2.73002Z"
                      fill="#00E5FF"
                    />
                  </svg>
                </span>
                Scalp Condition & Recovery
              </h3>
              <p>Scalp health and follicle recovery assessment</p>
            </div>

            <div className="scalp-recovery-grid">
              {scalpRecoveryCards.map((card) => (
                <article
                  className="scalp-recovery-card"
                  key={card.title}
                >
                  

                  <p className="scalp-recovery-card-title">{card.title}</p>

                  <div className="scalp-recovery-ring-wrap" aria-hidden="true">
                    <svg
                      width="96"
                      height="96"
                      viewBox="0 0 96 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M84.48 48C84.48 27.8526 68.1474 11.52 48 11.52C27.8527 11.52 11.52 27.8526 11.52 48C11.52 68.1473 27.8527 84.48 48 84.48C68.1474 84.48 84.48 68.1473 84.48 48Z"
                        stroke="white"
                        strokeOpacity="0.06"
                        strokeWidth="7"
                      />
                      <path
                        d="M84.48 48C84.48 27.8526 68.1474 11.52 48 11.52C27.8527 11.52 11.52 27.8526 11.52 48C11.52 68.1473 27.8527 84.48 48 84.48C68.1474 84.48 84.48 68.1473 84.48 48Z"
                        className={`scalp-recovery-ring-progress scalp-recovery-ring-progress-${card.tone}`}
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeDasharray={card.dashArray}
                      />
                    </svg>
                    <div className="scalp-recovery-ring-center">
                      <strong>{card.score}</strong>
                      <span>/100</span>
                    </div>
                  </div>

                  <p
                    className={`scalp-recovery-score-label scalp-recovery-score-label-${card.tone}`}
                  >
                    {card.scoreLabel}
                  </p>
                  <p className="scalp-recovery-note">{card.note}</p>

                  <div className="scalp-recovery-levels" role="presentation">
                    {card.levels.map((level) => {
                      const isActive = card.activeLevel === level;
                      return (
                        <span
                          key={level}
                          className={`scalp-recovery-level-pill ${
                            isActive
                              ? `scalp-recovery-level-pill-active scalp-recovery-level-pill-active-${card.tone}`
                              : ""
                          }`}
                        >
                          {level}
                        </span>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </section>

              {/* Section: Before / After Improvement Prediction */}
              <section
                className="improvement-prediction-section"
                aria-label="Before and after improvement prediction"
              >
                <div className="improvement-prediction-header">
                  <h3>
                    <span className="improvement-prediction-icon" aria-hidden="true">
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 0V12H13.5V13.5H0V0H1.5ZM12.975 2.475L14.04 3.525L9.75 7.815L7.5 5.565L4.29 8.775L3.225 7.725L7.5 3.435L9.75 5.685L12.975 2.475Z"
                          fill="#00E5FF"
                        />
                      </svg>
                    </span>
                    Before / After Improvement Prediction
                  </h3>
                  <p>AI-projected outcomes with consistent treatment adherence</p>
                </div>

                <div className="improvement-prediction-grid">
                  {improvementPredictionCards.map((card) => (
                    <article
                      className="improvement-prediction-card"
                      key={card.period}
                    >
                      <header
                        className={`improvement-prediction-card-head improvement-prediction-card-head-${card.tone}`}
                      >
                        <h4>{card.period}</h4>
                        <span
                          className={`improvement-prediction-phase-chip improvement-prediction-phase-chip-${card.tone}`}
                        >
                          {card.phase}
                        </span>
                      </header>

                      <div className="improvement-prediction-metrics">
                        {card.metrics.map((metric) => (
                          <div className="improvement-metric-row" key={metric.label}>
                            <div className="improvement-metric-head">
                              <p>{metric.label}</p>
                              <strong
                                className={`improvement-metric-value improvement-metric-value-${card.tone}`}
                              >
                                {metric.value}
                              </strong>
                            </div>
                            <div className="improvement-metric-track" aria-hidden="true">
                              <span
                                className={`improvement-metric-fill improvement-metric-fill-${card.tone}`}
                                style={{ width: `${metric.progress}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>

                <div className="improvement-prediction-disclaimer">
                  <span className="improvement-prediction-disclaimer-icon" aria-hidden="true">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.69358 2.09326L14.767 12.6133C15.0773 13.151 14.6891 13.8232 14.0686 13.8232H1.92175C1.30125 13.8232 0.913015 13.151 1.22328 12.6133L7.29674 2.09326C7.607 1.55554 8.38332 1.55554 8.69358 2.09326Z" fill="#FACC15"/>
                      <path d="M8.00016 5.36548C8.39157 5.36548 8.7085 5.68241 8.7085 6.07381V9.13631C8.7085 9.52772 8.39157 9.84465 8.00016 9.84465C7.60876 9.84465 7.29183 9.52772 7.29183 9.13631V6.07381C7.29183 5.68241 7.60876 5.36548 8.00016 5.36548Z" fill="#111827"/>
                      <path d="M8.00016 11.6777C8.41437 11.6777 8.75016 11.3419 8.75016 10.9277C8.75016 10.5135 8.41437 10.1777 8.00016 10.1777C7.58595 10.1777 7.25016 10.5135 7.25016 10.9277C7.25016 11.3419 7.58595 11.6777 8.00016 11.6777Z" fill="#111827"/>
                    </svg>
                  </span>
                  <p>
                    Predictions are AI-estimated projections based on your inputs. Actual
                    results vary. Consult a trichologist for clinical guidance.
                  </p>
                </div>
              </section>

              {/* Section: Treatment Recommendation Engine */}
              <section
                className="treatment-engine-section"
                aria-label="Treatment recommendation engine"
              >
                <div className="treatment-engine-header">
                  <div className="treatment-engine-title-row">
                    <span className="treatment-engine-title-icon" aria-hidden="true">
                      <svg
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.625 1.875V3.375H4.125V6.375C4.125 6.915 4.26 7.415 4.53 7.875C4.8 8.335 5.165 8.7 5.625 8.97C6.085 9.24 6.585 9.375 7.125 9.375C7.665 9.375 8.165 9.24 8.625 8.97C9.085 8.7 9.45 8.335 9.72 7.875C9.99 7.415 10.125 6.915 10.125 6.375V3.375H8.625V1.875H10.875C11.085 1.875 11.2625 1.9475 11.4075 2.0925C11.5525 2.2375 11.625 2.415 11.625 2.625V6.375C11.625 7.105 11.46 7.79 11.13 8.43C10.81 9.06 10.3625 9.585 9.7875 10.005C9.2125 10.425 8.575 10.695 7.875 10.815V12C7.875 12.48 7.9925 12.92 8.2275 13.32C8.4625 13.72 8.78 14.0375 9.18 14.2725C9.58 14.5075 10.02 14.625 10.5 14.625C11.05 14.625 11.55 14.4675 12 14.1525C12.45 13.8375 12.77 13.43 12.96 12.93C12.56 12.75 12.2375 12.475 11.9925 12.105C11.7475 11.735 11.625 11.325 11.625 10.875C11.625 10.465 11.725 10.0875 11.925 9.7425C12.125 9.3975 12.3975 9.125 12.7425 8.925C13.0875 8.725 13.465 8.625 13.875 8.625C14.285 8.625 14.6625 8.725 15.0075 8.925C15.3525 9.125 15.625 9.3975 15.825 9.7425C16.025 10.0875 16.125 10.465 16.125 10.875C16.125 11.385 15.9725 11.84 15.6675 12.24C15.3625 12.64 14.97 12.905 14.49 13.035C14.34 13.625 14.07 14.155 13.68 14.625C13.29 15.095 12.82 15.4625 12.27 15.7275C11.72 15.9925 11.13 16.125 10.5 16.125C9.75 16.125 9.06 15.94 8.43 15.57C7.8 15.2 7.3 14.7 6.93 14.07C6.56 13.44 6.375 12.75 6.375 12V10.815C5.675 10.695 5.0375 10.425 4.4625 10.005C3.8875 9.585 3.44 9.06 3.12 8.43C2.79 7.79 2.625 7.105 2.625 6.375V2.625C2.625 2.415 2.6975 2.2375 2.8425 2.0925C2.9875 1.9475 3.165 1.875 3.375 1.875H5.625ZM13.875 10.125C13.665 10.125 13.4875 10.1975 13.3425 10.3425C13.1975 10.4875 13.125 10.665 13.125 10.875C13.125 11.085 13.1975 11.2625 13.3425 11.4075C13.4875 11.5525 13.665 11.625 13.875 11.625C14.085 11.625 14.2625 11.5525 14.4075 11.4075C14.5525 11.2625 14.625 11.085 14.625 10.875C14.625 10.665 14.5525 10.4875 14.4075 10.3425C14.2625 10.1975 14.085 10.125 13.875 10.125Z"
                          fill="#00E5FF"
                        />
                      </svg>
                    </span>
                    <h3>Treatment Recommendation Engine</h3>
                    <span className="treatment-engine-plan-chip">TREATMENT PLAN</span>
                  </div>
                  <p>Priority-ranked interventions with duration of treatment</p>
                </div>

                <div className="treatment-engine-list">
                  {treatmentRecommendationRows.map((item) => (
                    <article className="treatment-engine-card" key={item.title}>
                      <div className="treatment-engine-card-top">
                        <div className="treatment-engine-copy">
                          <h4>
                            <span
                              className={`treatment-engine-dot treatment-engine-dot-${item.markerTone}`}
                              aria-hidden="true"
                            />
                            {item.title}
                          </h4>
                          <p>{item.desc}</p>
                        </div>

                        <div className="treatment-engine-side">
                          {item.showImage && (
                            <div
                              className="treatment-engine-image"
                              style={{ backgroundImage: `url(${scalpRepresentativeImage})` }}
                              aria-hidden="true"
                            />
                          )}
                          <span
                            className={`treatment-engine-priority treatment-engine-priority-${item.priorityTone}`}
                          >
                            {item.priority}
                          </span>
                        </div>
                      </div>

                      <div className="treatment-engine-meta-grid">
                        <div className="treatment-engine-meta-card treatment-engine-meta-card-time">
                          <p>TIME FRAME</p>
                          <h5>{item.timeFrame}</h5>
                        </div>
                        <div className="treatment-engine-meta-card-nobg treatment-engine-meta-card-duration ">
                          <p>DURATION</p>
                          <h5>{item.duration}</h5>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
              
                  {/* Section: Personalised 12-Month Treatment Plan */}
                  <section
                    className="personalised-plan-section"
                    aria-label="Personalised 12 month treatment plan"
                  >
                    <div className="personalised-plan-header">
                      <p className="personalised-plan-kicker">Section 9</p>
                      <h3>
                        <span className="personalised-plan-title-icon" aria-hidden="true">
                          <svg
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.625 1.5V3H13.125V5.25C13.535 5.25 13.9125 5.35 14.2575 5.55C14.6025 5.75 14.875 6.0225 15.075 6.3675C15.275 6.7125 15.375 7.09 15.375 7.5V15.75C15.375 15.96 15.3025 16.1375 15.1575 16.2825C15.0125 16.4275 14.835 16.5 14.625 16.5H4.125C3.915 16.5 3.7375 16.4275 3.5925 16.2825C3.4475 16.1375 3.375 15.96 3.375 15.75V7.5C3.375 7.09 3.475 6.7125 3.675 6.3675C3.875 6.0225 4.1475 5.75 4.4925 5.55C4.8375 5.35 5.215 5.25 5.625 5.25V3H4.125V1.5H14.625ZM13.125 6.75H5.625C5.415 6.75 5.2375 6.8225 5.0925 6.9675C4.9475 7.1125 4.875 7.29 4.875 7.5V15H13.875V7.5C13.875 7.29 13.8025 7.1125 13.6575 6.9675C13.5125 6.8225 13.335 6.75 13.125 6.75ZM10.125 8.25V9.75H11.625V11.25H10.125V12.75H8.625V11.25H7.125V9.75H8.625V8.25H10.125ZM11.625 3H7.125V5.25H11.625V3Z"
                              fill="#00E5FF"
                            />
                          </svg>
                        </span>
                        Personalised 12-Month Treatment Plan
                      </h3>
                      <p className="personalised-plan-subtitle">Phase-wise treatment roadmap</p>
                    </div>

                    <div className="personalised-plan-wrap">
                      {personalisedTreatmentPhases.map((phaseItem) => (
                        <article className={`personalised-phase-card personalised-phase-card-${phaseItem.tone}`} key={phaseItem.phase}>
                          <div className="personalised-phase-top">
                            <div className="personalised-phase-headline-wrap">
                              <span className={`personalised-phase-icon personalised-phase-icon-${phaseItem.tone}`} aria-hidden="true">
                                {phaseItem.icon === "shield" && (
                                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.85158 1.88016L8.32816 0.666829L13.8047 1.88016C13.9558 1.91572 14.0801 1.99572 14.1778 2.12016C14.2756 2.24461 14.3244 2.38238 14.3244 2.5335V9.18683C14.3244 9.86238 14.1667 10.4935 13.8514 11.0802C13.536 11.6668 13.0985 12.1468 12.5389 12.5202L8.32816 15.3335L4.11746 12.5202C3.55781 12.1468 3.12031 11.6668 2.80495 11.0802C2.48959 10.4935 2.33191 9.86238 2.33191 9.18683V2.5335C2.33191 2.38238 2.38077 2.24461 2.47848 2.12016C2.5762 1.99572 2.70057 1.91572 2.85158 1.88016ZM3.66441 3.06683V9.18683C3.66441 9.64016 3.76879 10.0624 3.97755 10.4535C4.18631 10.8446 4.47723 11.1646 4.85033 11.4135L8.32816 13.7335L11.806 11.4135C12.1791 11.1646 12.47 10.8446 12.6788 10.4535C12.8875 10.0624 12.9919 9.64016 12.9919 9.18683V3.06683L8.32816 2.02683L3.66441 3.06683ZM8.99441 6.66683H10.9932L7.66191 11.3335V8.00016H5.66316L8.99441 3.3335V6.66683Z" fill="currentColor"/>
                                  </svg>
                                )}
                                {phaseItem.icon === "sprout" && (
                                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.33065 2C5.09462 2 5.80972 2.17333 6.47597 2.52C7.12446 2.85778 7.66856 3.32667 8.10829 3.92667C8.54801 4.52667 8.82562 5.19556 8.9411 5.93333C9.34085 5.53333 9.79834 5.22222 10.3136 5C10.8466 4.77778 11.4062 4.66667 11.9925 4.66667H14.9906V6.33333C14.9906 7.11556 14.7952 7.84444 14.4043 8.52C14.0224 9.17778 13.5027 9.69778 12.8453 10.08C12.1702 10.4711 11.4418 10.6667 10.66 10.6667H8.9944V14H7.6619V8.66667H6.3294C5.48548 8.66667 4.69931 8.45333 3.97087 8.02667C3.26909 7.61778 2.71388 7.06222 2.30525 6.36C1.87885 5.63111 1.66565 4.84444 1.66565 4V2H4.33065ZM13.6581 6H11.9925C11.4506 6 10.951 6.13556 10.4935 6.40667C10.036 6.67778 9.67175 7.04222 9.40081 7.5C9.12987 7.95778 8.9944 8.45778 8.9944 9V9.33333H10.66C11.2019 9.33333 11.7016 9.19778 12.1591 8.92667C12.6166 8.65556 12.9808 8.29111 13.2517 7.83333C13.5227 7.37556 13.6581 6.87556 13.6581 6.33333V6ZM4.33065 3.33333H2.99815V4C2.99815 4.60444 3.14695 5.16222 3.44454 5.67333C3.74213 6.18444 4.14632 6.58889 4.65711 6.88667C5.1679 7.18444 5.72533 7.33333 6.3294 7.33333H7.6619V6.66667C7.6619 6.06222 7.5131 5.50444 7.21551 4.99333C6.91792 4.48222 6.51373 4.07778 6.00294 3.78C5.49215 3.48222 4.93472 3.33333 4.33065 3.33333Z" fill="currentColor"/>
                                  </svg>
                                )}
                                {phaseItem.icon === "star" && (
                                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.32818 12.6002L3.62445 15.2402L4.67713 9.9469L0.719604 6.29357L6.07625 5.65357L8.32818 0.760235L10.5801 5.65357L15.9368 6.29357L11.9792 9.9469L13.0319 15.2402L8.32818 12.6002ZM8.32818 11.0802L11.1531 12.6669L10.5268 9.48023L12.912 7.28023L9.68733 6.89357L8.32818 3.9469L6.96903 6.89357L3.74438 7.28023L6.12955 9.48023L5.50328 12.6669L8.32818 11.0802Z" fill="currentColor"/>
                                  </svg>
                                )}
                              </span>
                              <h4>
                                {phaseItem.phase} - {phaseItem.monthRange}
                                <span>{phaseItem.subtitle}</span>
                              </h4>
                            </div>

                            <div
                              className="personalised-phase-image"
                              style={{ backgroundImage: `url(${scalpRepresentativeImage})` }}
                              aria-hidden="true"
                            />
                          </div>

                          <ul className={`personalised-phase-list personalised-phase-list-${phaseItem.tone}`}>
                            {phaseItem.bullets.map((bullet) => (
                              <li key={bullet}>
                                <span className="personalised-phase-bullet" aria-hidden="true" />
                                <p>{bullet}</p>
                              </li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  </section>

        </div>

        {/* Section: recommendation sidebar */}
        <aside className="aside-container">
          <div className="recommendation-panel">
            <h3>
              <span className="sidebar-title-icon" aria-hidden="true">
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4992 5.61167L11.3476 5.95001C11.3165 6.02778 11.264 6.08028 11.1902 6.1075C11.1163 6.13473 11.0425 6.13473 10.9686 6.1075C10.8947 6.08028 10.8422 6.02778 10.8111 5.95001L10.6595 5.61167C10.5351 5.32389 10.3602 5.06528 10.1347 4.83584C9.90925 4.60639 9.65267 4.42945 9.365 4.30501L8.92182 4.10667C8.84407 4.07556 8.79159 4.02112 8.76438 3.94334C8.73717 3.86556 8.73717 3.78778 8.76438 3.71C8.79159 3.63223 8.84407 3.57778 8.92182 3.54667L9.34167 3.36001C9.63712 3.22778 9.89953 3.045 10.1289 2.81167C10.3583 2.57834 10.5351 2.31001 10.6595 2.00667L10.7995 1.64501C10.8384 1.56723 10.8947 1.51278 10.9686 1.48167C11.0425 1.45056 11.1163 1.45056 11.1902 1.48167C11.264 1.51278 11.3204 1.56723 11.3593 1.64501L11.4992 2.00667C11.6236 2.31001 11.8005 2.57834 12.0299 2.81167C12.2592 3.045 12.5216 3.22778 12.8171 3.36001L13.2369 3.54667C13.3147 3.57778 13.3672 3.63223 13.3944 3.71C13.4216 3.78778 13.4216 3.86556 13.3944 3.94334C13.3672 4.02112 13.3147 4.07556 13.2369 4.10667L12.7938 4.30501C12.5061 4.42945 12.2495 4.60639 12.024 4.83584C11.7986 5.06528 11.6236 5.32389 11.4992 5.61167ZM3.49876 3.20834C3.28883 3.20834 3.09446 3.26084 2.91563 3.36584C2.73681 3.47084 2.59492 3.61278 2.48995 3.79167C2.38499 3.97056 2.33251 4.165 2.33251 4.375V10.2083C2.33251 10.4183 2.38499 10.6128 2.48995 10.7917C2.59492 10.9706 2.73681 11.1125 2.91563 11.2175C3.09446 11.3225 3.28883 11.375 3.49876 11.375H10.4963C10.7062 11.375 10.9006 11.3225 11.0794 11.2175C11.2582 11.1125 11.4001 10.9706 11.5051 10.7917C11.61 10.6128 11.6625 10.4183 11.6625 10.2083V7.29167H12.8288V10.2083C12.8288 10.6283 12.7238 11.0172 12.5139 11.375C12.3039 11.7328 12.0202 12.0167 11.6625 12.2267C11.3049 12.4367 10.9161 12.5417 10.4963 12.5417H3.49876C3.07891 12.5417 2.69016 12.4367 2.33251 12.2267C1.97486 12.0167 1.69107 11.7328 1.48115 11.375C1.27122 11.0172 1.16626 10.6283 1.16626 10.2083V4.375C1.16626 3.955 1.27122 3.56612 1.48115 3.20834C1.69107 2.85056 1.97486 2.56667 2.33251 2.35667C2.69016 2.14667 3.07891 2.04167 3.49876 2.04167H7.58063V3.20834H3.49876Z"
                    fill="#00E5FF"
                  />
                </svg>
              </span>
              Recommended for Your Hair Condition
            </h3>
            <p className="side-subtitle">
              Based on your diagnosis and root causes
            </p>
            <div className="match-card">
              <span className="match-icon" aria-hidden="true">
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.75 2C4.93 2 5.09667 2.045 5.25 2.135C5.40333 2.225 5.525 2.34667 5.615 2.5C5.705 2.65333 5.75 2.82 5.75 3V6.41C5.33 6.09 4.77333 5.87333 4.08 5.76L3.92 6.74C4.56667 6.85333 5.03333 7.065 5.32 7.375C5.60667 7.685 5.75 8.14333 5.75 8.75C5.75 8.97667 5.69333 9.185 5.58 9.375C5.46667 9.565 5.315 9.71667 5.125 9.83C4.935 9.94333 4.72667 10 4.5 10C4.27333 10 4.065 9.94333 3.875 9.83C3.685 9.71667 3.53333 9.565 3.42 9.375C3.30667 9.185 3.25 8.97667 3.25 8.75V8.57C3.47667 8.65 3.7 8.70667 3.92 8.74L4.08 7.76C3.74667 7.7 3.37333 7.57333 2.96 7.38C2.74667 7.28 2.575 7.12833 2.445 6.925C2.315 6.72167 2.25 6.49667 2.25 6.25C2.25 5.85 2.34333 5.52167 2.53 5.265C2.71667 5.00833 2.99667 4.83333 3.37 4.74L3.75 4.64V3C3.75 2.82 3.795 2.65333 3.885 2.5C3.975 2.34667 4.09667 2.225 4.25 2.135C4.40333 2.045 4.57 2 4.75 2ZM6.25 1.68C6.06333 1.46667 5.84 1.3 5.58 1.18C5.32 1.06 5.04333 1 4.75 1C4.39 1 4.05667 1.09 3.75 1.27C3.44333 1.45 3.2 1.69333 3.02 2C2.84 2.30667 2.75 2.64 2.75 3V3.89C2.31667 4.06333 1.97333 4.32333 1.72 4.67C1.40667 5.10333 1.25 5.63 1.25 6.25C1.25 6.63667 1.34 6.99333 1.52 7.32C1.7 7.64667 1.94333 7.91333 2.25 8.12V8.75C2.25 9.15667 2.35167 9.53167 2.555 9.875C2.75833 10.2183 3.03167 10.4917 3.375 10.695C3.71833 10.8983 4.09333 11 4.5 11C4.84667 11 5.17167 10.925 5.475 10.775C5.77833 10.625 6.03667 10.42 6.25 10.16C6.46333 10.42 6.72167 10.625 7.025 10.775C7.32833 10.925 7.65333 11 8 11C8.40667 11 8.78167 10.8983 9.125 10.695C9.46833 10.4917 9.74167 10.2183 9.945 9.875C10.1483 9.53167 10.25 9.15667 10.25 8.75V8.12C10.5567 7.91333 10.8 7.64667 10.98 7.32C11.16 6.99333 11.25 6.63667 11.25 6.25C11.25 5.63 11.0933 5.10333 10.78 4.67C10.5267 4.32333 10.1833 4.06333 9.75 3.89V3C9.75 2.64 9.66 2.30667 9.48 2C9.3 1.69333 9.05667 1.45 8.75 1.27C8.44333 1.09 8.11 1 7.75 1C7.45667 1 7.18 1.06 6.92 1.18C6.66 1.3 6.43667 1.46667 6.25 1.68ZM9.25 8.57V8.75C9.25 8.97667 9.19333 9.185 9.08 9.375C8.96667 9.565 8.815 9.71667 8.625 9.83C8.435 9.94333 8.22667 10 8 10C7.77333 10 7.565 9.94333 7.375 9.83C7.185 9.71667 7.03333 9.565 6.92 9.375C6.80667 9.185 6.75 8.97667 6.75 8.75C6.75 8.14333 6.89333 7.685 7.18 7.375C7.46667 7.065 7.93333 6.85333 8.58 6.74L8.42 5.76C7.72667 5.87333 7.17 6.09 6.75 6.41V3C6.75 2.82 6.795 2.65333 6.885 2.5C6.975 2.34667 7.09667 2.225 7.25 2.135C7.40333 2.045 7.57 2 7.75 2C7.93 2 8.09667 2.045 8.25 2.135C8.40333 2.225 8.525 2.34667 8.615 2.5C8.705 2.65333 8.75 2.82 8.75 3V4.64L9.13 4.74C9.50333 4.83333 9.78333 5.00833 9.97 5.265C10.1567 5.52167 10.25 5.85 10.25 6.25C10.25 6.49667 10.185 6.72167 10.055 6.925C9.925 7.12833 9.75333 7.28 9.54 7.38C9.12667 7.57333 8.75333 7.7 8.42 7.76L8.58 8.74C8.8 8.70667 9.02333 8.65 9.25 8.57Z"
                    fill="#00E5FF"
                  />
                </svg>
              </span>
              <span>
                AI matched <b>5 products</b> to your Norwood II + genetic risk
                profile
              </span>
            </div>
            <div className="side-product-list">
              {recommendationRows.map((item) => (
                <article className="side-product-card" key={item.title}>
                  <div
                    className={`product-thumb ${item.thumbClass}`}
                    style={{ backgroundImage: `url(${sharedThumbImage})` }}
                  />
                  <div className="product-copy">
                    <h4>{item.title}</h4>
                    <span className={`product-tag ${item.tagTone}`}>
                      {item.tag}
                    </span>
                    <p>{item.desc}</p>
                    <div className="product-bottom-row">
                      <span className={item.purposeTone}>{item.purpose}</span>
                      <strong>{item.price}</strong>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="go-btn"
                    aria-label="View product"
                  >
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.90725 6.99999L5.02661 4.11832L5.84299 3.28999L9.55166 6.99999L5.84299 10.71L5.02661 9.88166L7.90725 6.99999Z"
                        fill="#9FB4D0"
                      />
                    </svg>
                  </button>
                </article>
              ))}
            </div>
            <div className="cta-card">
              <div className="cta-icon-wrap">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2459 1.66665V3.33331H14.5796V5.83331C15.0351 5.83331 15.4544 5.94442 15.8377 6.16665C16.2209 6.38887 16.5236 6.69165 16.7458 7.07498C16.9679 7.45831 17.079 7.87776 17.079 8.33331V17.5C17.079 17.7333 16.9985 17.9305 16.8374 18.0916C16.6763 18.2528 16.4792 18.3333 16.2459 18.3333H4.58215C4.34887 18.3333 4.1517 18.2528 3.99063 18.0916C3.82956 17.9305 3.74902 17.7333 3.74902 17.5V8.33331C3.74902 7.87776 3.86011 7.45831 4.08227 7.07498C4.30444 6.69165 4.60714 6.38887 4.99038 6.16665C5.37362 5.94442 5.79296 5.83331 6.2484 5.83331V3.33331H4.58215V1.66665H16.2459ZM14.5796 7.49998H6.2484C6.01512 7.49998 5.81795 7.58054 5.65688 7.74165C5.49581 7.90276 5.41527 8.09998 5.41527 8.33331V16.6666H15.4128V8.33331C15.4128 8.09998 15.3322 7.90276 15.1712 7.74165C15.0101 7.58054 14.8129 7.49998 14.5796 7.49998ZM11.2471 9.16665V10.8333H12.9134V12.5H11.2471V14.1666H9.5809V12.5H7.91465V10.8333H9.5809V9.16665H11.2471ZM12.9134 3.33331H7.91465V5.83331H12.9134V3.33331Z"
                    fill="#F4C430"
                  />
                </svg>
              </div>
              <h4>Get a Personalized Treatment Kit</h4>
              <p>
                Our trichologist will curate the exact products for your
                condition and stage.
              </p>
              <button type="button" className="cta-btn">
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.65999 8.02999L8.74999 8.11999L8.83999 8.02999C8.97999 7.88332 9.14666 7.78499 9.33999 7.73499C9.53332 7.68499 9.72666 7.68499 9.91999 7.73499C10.1133 7.78499 10.2833 7.88332 10.43 8.02999C10.5767 8.17665 10.675 8.34665 10.725 8.53999C10.775 8.73332 10.775 8.92499 10.725 9.11499C10.675 9.30499 10.5767 9.47332 10.43 9.61999L8.74999 11.3L7.06999 9.61999C6.92332 9.47332 6.82499 9.30499 6.77499 9.11499C6.72499 8.92499 6.72499 8.73332 6.77499 8.53999C6.82499 8.34665 6.92332 8.17665 7.06999 8.02999C7.21666 7.88332 7.38666 7.78499 7.57999 7.73499C7.77332 7.68499 7.96666 7.68499 8.15999 7.73499C8.35332 7.78499 8.51999 7.88332 8.65999 8.02999ZM5.73999 7.19999V8.19999C5.19999 8.19999 4.69666 8.33665 4.22999 8.60999C3.77666 8.87665 3.41666 9.23665 3.14999 9.68999C2.87666 10.1567 2.73999 10.66 2.73999 11.2H1.73999C1.73999 10.4867 1.91666 9.82332 2.26999 9.20999C2.60999 8.61665 3.07332 8.14332 3.65999 7.78999C4.25999 7.41665 4.91332 7.21999 5.61999 7.19999H5.73999ZM5.73999 0.699987C6.28666 0.699987 6.79332 0.836654 7.25999 1.10999C7.70666 1.37665 8.06332 1.73665 8.32999 2.18999C8.60332 2.64999 8.73999 3.14999 8.73999 3.68999C8.73999 4.22999 8.60999 4.72665 8.34999 5.17999C8.09666 5.62665 7.74832 5.98665 7.30499 6.25999C6.86166 6.53332 6.37666 6.67999 5.84999 6.69999H5.73999C5.19999 6.69999 4.69666 6.56332 4.22999 6.28999C3.77666 6.02332 3.41666 5.66332 3.14999 5.20999C2.87666 4.74999 2.73999 4.24999 2.73999 3.70999C2.73999 3.16999 2.86999 2.67332 3.12999 2.21999C3.38332 1.77332 3.73166 1.41332 4.17499 1.13999C4.61832 0.866653 5.10332 0.719987 5.62999 0.699987H5.73999ZM5.73999 1.69999C5.37999 1.69999 5.04666 1.78999 4.73999 1.96999C4.43332 2.14999 4.18999 2.39332 4.00999 2.69999C3.82999 3.00665 3.73999 3.33999 3.73999 3.69999C3.73999 4.05999 3.82999 4.39332 4.00999 4.69999C4.18999 5.00665 4.43332 5.24999 4.73999 5.42999C5.04666 5.60999 5.37999 5.69999 5.73999 5.69999C6.09999 5.69999 6.43332 5.60999 6.73999 5.42999C7.04666 5.24999 7.28999 5.00665 7.46999 4.69999C7.64999 4.39332 7.73999 4.05999 7.73999 3.69999C7.73999 3.33999 7.64999 3.00665 7.46999 2.69999C7.28999 2.39332 7.04666 2.14999 6.73999 1.96999C6.43332 1.78999 6.09999 1.69999 5.73999 1.69999Z"
                    fill="#020617"
                  />
                </svg>
                Talk to Expert
              </button>
            </div>
          </div>
          <article
            className="freebies-card"
            aria-label="Freebies with your order"
          >
            <div className="freebies-header">
              <div className="freebies-title-wrap">
                <span className="freebies-title-icon" aria-hidden="true">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.03851 1.45829C9.45836 1.45829 9.84711 1.56329 10.2048 1.77329C10.5624 1.98329 10.8462 2.26718 11.0561 2.62496C11.266 2.98274 11.371 3.37163 11.371 3.79163C11.371 4.21163 11.266 4.60051 11.0561 4.95829H13.7035V6.12496H12.5373V11.9583C12.5373 12.1216 12.4809 12.2597 12.3681 12.3725C12.2554 12.4852 12.1174 12.5416 11.9541 12.5416H2.62413C2.46086 12.5416 2.32285 12.4852 2.21011 12.3725C2.09737 12.2597 2.04101 12.1216 2.04101 11.9583V6.12496H0.874756V4.95829H3.52214C3.31222 4.60051 3.20726 4.21163 3.20726 3.79163C3.20726 3.37163 3.31222 2.98274 3.52214 2.62496C3.73207 2.26718 4.01586 1.98329 4.37351 1.77329C4.73116 1.56329 5.11991 1.45829 5.53976 1.45829C5.88186 1.45829 6.20452 1.52829 6.50774 1.66829C6.81097 1.80829 7.07143 2.00274 7.28913 2.25163C7.50683 2.00274 7.76729 1.80829 8.07052 1.66829C8.37374 1.52829 8.69641 1.45829 9.03851 1.45829ZM6.70601 6.12496H3.20726V11.375H6.70601V6.12496ZM11.371 6.12496H7.87226V11.375H11.371V6.12496ZM5.53976 2.62496C5.32983 2.62496 5.13546 2.67746 4.95663 2.78246C4.77781 2.88746 4.63591 3.0294 4.53095 3.20829C4.42599 3.38718 4.37351 3.58163 4.37351 3.79163C4.37351 4.09496 4.47847 4.3594 4.68839 4.58496C4.89832 4.81051 5.15489 4.93496 5.45812 4.95829H6.70601V3.79163C6.70601 3.50385 6.61076 3.25107 6.42027 3.03329C6.22979 2.81551 5.99459 2.68329 5.71469 2.63663L5.53976 2.62496ZM9.03851 2.62496C8.73528 2.62496 8.47093 2.72996 8.24546 2.93996C8.01998 3.14996 7.89558 3.40663 7.87226 3.70996V4.95829H9.03851C9.34173 4.95829 9.60608 4.85329 9.83156 4.64329C10.057 4.43329 10.1814 4.17663 10.2048 3.87329V3.79163C10.2048 3.58163 10.1523 3.38718 10.0473 3.20829C9.94235 3.0294 9.80046 2.88746 9.62163 2.78246C9.44281 2.67746 9.24843 2.62496 9.03851 2.62496Z"
                      fill="#F4C430"
                    />
                  </svg>
                </span>
                <div>
                  <h3>Freebies with Your Order</h3>
                  <p>Exclusive benefits included with your purchase</p>
                </div>
              </div>
              <span className="freebies-chip">FREE WITH PURCHASE</span>
            </div>

            <div className="freebies-list">
              {freebiesRows.map((freebie) => (
                <article className="freebies-item" key={freebie.title}>
                  <div
                    className="freebies-thumb"
                    style={{ backgroundImage: `url(${sharedThumbImage})` }}
                  />
                  <div className="freebies-copy">
                    <h4>{freebie.title}</h4>
                    <p>{freebie.desc}</p>
                  </div>
                  <span className="freebies-check" aria-hidden="true">
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.28901 12.8334C6.49596 12.8334 5.7379 12.6817 5.01483 12.3784C4.32285 12.0828 3.70668 11.6648 3.16632 11.1242C2.62596 10.5837 2.20805 9.96726 1.9126 9.27504C1.60938 8.55171 1.45776 7.79337 1.45776 7.00004C1.45776 6.20671 1.60938 5.44837 1.9126 4.72504C2.20805 4.03282 2.62596 3.41643 3.16632 2.87587C3.70668 2.33532 4.32285 1.91726 5.01483 1.62171C5.7379 1.31837 6.49596 1.16671 7.28901 1.16671C8.08206 1.16671 8.84013 1.31837 9.5632 1.62171C10.2552 1.91726 10.8713 2.33532 11.4117 2.87587C11.9521 3.41643 12.37 4.03282 12.6654 4.72504C12.9687 5.44837 13.1203 6.20671 13.1203 7.00004C13.1203 7.79337 12.9687 8.55171 12.6654 9.27504C12.37 9.96726 11.9521 10.5837 11.4117 11.1242C10.8713 11.6648 10.2552 12.0828 9.5632 12.3784C8.84013 12.6817 8.08206 12.8334 7.28901 12.8334ZM6.70589 9.33337L10.8344 5.20337L10.0064 4.38671L6.70589 7.68837L5.06148 6.03171L4.23344 6.86004L6.70589 9.33337Z"
                        fill="#10B981"
                      />
                    </svg>
                  </span>
                </article>
              ))}
            </div>

            <div className="freebies-unlock-strip">
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 2.22C7.72 2.22 7.92333 2.165 8.11 2.055C8.29667 1.945 8.445 1.79667 8.555 1.61C8.665 1.42333 8.72 1.22 8.72 1H9.28C9.28 1.22 9.335 1.42333 9.445 1.61C9.555 1.79667 9.70333 1.945 9.89 2.055C10.0767 2.165 10.28 2.22 10.5 2.22V2.78C10.28 2.78 10.0767 2.835 9.89 2.945C9.70333 3.055 9.555 3.20333 9.445 3.39C9.335 3.57667 9.28 3.78 9.28 4H8.72C8.72 3.78 8.665 3.57667 8.555 3.39C8.445 3.20333 8.29667 3.055 8.11 2.945C7.92333 2.835 7.72 2.78 7.5 2.78V2.22ZM1 5.5C1.54 5.5 2.04333 5.36333 2.51 5.09C2.96333 4.82333 3.32333 4.46333 3.59 4.01C3.86333 3.54333 4 3.04 4 2.5H5C5 3.04 5.13667 3.54333 5.41 4.01C5.67667 4.46333 6.03667 4.82333 6.49 5.09C6.95667 5.36333 7.46 5.5 8 5.5V6.5C7.46 6.5 6.95667 6.63667 6.49 6.91C6.03667 7.17667 5.67667 7.53667 5.41 7.99C5.13667 8.45667 5 8.96 5 9.5H4C4 8.96 3.86333 8.45667 3.59 7.99C3.32333 7.53667 2.96333 7.17667 2.51 6.91C2.04333 6.63667 1.54 6.5 1 6.5V5.5ZM2.94 6C3.26667 6.18 3.56333 6.40333 3.83 6.67C4.09667 6.93667 4.32 7.23333 4.5 7.56C4.68 7.23333 4.90333 6.93667 5.17 6.67C5.43667 6.40333 5.73333 6.18 6.06 6C5.73333 5.82 5.43667 5.59667 5.17 5.33C4.90333 5.06333 4.68 4.76667 4.5 4.44C4.32 4.76667 4.09667 5.06333 3.83 5.33C3.56333 5.59667 3.26667 5.82 2.94 6ZM9.13 7C9.13 7.29333 9.05667 7.565 8.91 7.815C8.76333 8.065 8.565 8.26333 8.315 8.41C8.065 8.55667 7.79333 8.62667 7.5 8.62V9.37C7.79333 9.37 8.065 9.44333 8.315 9.59C8.565 9.73667 8.76167 9.935 8.905 10.185C9.04833 10.435 9.12 10.7067 9.12 11H9.88C9.87333 10.7067 9.94333 10.435 10.09 10.185C10.2367 9.935 10.435 9.73667 10.685 9.59C10.935 9.44333 11.2067 9.37 11.5 9.37V8.62C11.2067 8.62 10.935 8.54833 10.685 8.405C10.435 8.26167 10.2367 8.065 10.09 7.815C9.94333 7.565 9.87333 7.29333 9.88 7H9.13Z"
                  fill="#F4C430"
                />
              </svg>
              <span>
                <b>5 freebies unlocked</b>
                <em> - add your kit to claim them</em>
              </span>
            </div>

            <button type="button" className="freebies-cta-btn">
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.25 5.5V4L8.25 6L6.25 8V6.5H4.25V5.5H6.25ZM6.25 1C6.93 1 7.58 1.13 8.2 1.39C8.79333 1.64333 9.32167 2.00167 9.785 2.465C10.2483 2.92833 10.6067 3.45667 10.86 4.05C11.12 4.67 11.25 5.32 11.25 6C11.25 6.68 11.12 7.33 10.86 7.95C10.6067 8.54333 10.2483 9.07167 9.785 9.535C9.32167 9.99833 8.79333 10.3567 8.2 10.61C7.58 10.87 6.93 11 6.25 11C5.57 11 4.92 10.87 4.3 10.61C3.70667 10.3567 3.17833 9.99833 2.715 9.535C2.25167 9.07167 1.89333 8.54333 1.64 7.95C1.38 7.33 1.25 6.68 1.25 6C1.25 5.32 1.38 4.67 1.64 4.05C1.89333 3.45667 2.25167 2.92833 2.715 2.465C3.17833 2.00167 3.70667 1.64333 4.3 1.39C4.92 1.13 5.57 1 6.25 1ZM6.25 10C6.97667 10 7.65 9.81667 8.27 9.45C8.87 9.09667 9.34667 8.62 9.7 8.02C10.0667 7.4 10.25 6.72667 10.25 6C10.25 5.27333 10.0667 4.6 9.7 3.98C9.34667 3.38 8.87 2.90333 8.27 2.55C7.65 2.18333 6.97667 2 6.25 2C5.52333 2 4.85 2.18333 4.23 2.55C3.63 2.90333 3.15333 3.38 2.8 3.98C2.43333 4.6 2.25 5.27333 2.25 6C2.25 6.72667 2.43333 7.4 2.8 8.02C3.15333 8.62 3.63 9.09667 4.23 9.45C4.85 9.81667 5.52333 10 6.25 10Z"
                  fill="#020617"
                />
              </svg>
              Proceed with Recommended Kit
            </button>
          </article>
        </aside>
      </div>
    </section>
  );
}
