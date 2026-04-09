import React from "react";
import { useParams } from "react-router-dom";
import TestReport from "../features/test-report/report";
import { fetchFullResult } from "../features/hair-assessment/HairAssessmentApi";

/**
 * ReportPrintPage: Specialized route for backend PDF capture service.
 * Renders the full report without navigation, headers, or interactive overlays.
 */
export default function ReportPrintPage() {
    const { sessionId } = useParams();
    const [reportData, setReportData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const getReport = async () => {
            if (!sessionId) return;
            window.reportReady = false; // Initialize signal as false
            try {
                // Fetch full clinical results directly for the PDF generator
                const response = await fetchFullResult(sessionId);
                if (response.success) {
                    setReportData(response.data);
                    // PDF Signal is handled internally by the TestReport component 
                    // to ensure all charts and AI text blocks are fully painted.
                }
            } catch (err) {
                console.error("Error fetching report for print:", err);
            } finally {
                setLoading(false);
            }
        };
        getReport();
    }, [sessionId]);

    if (loading) {
        return (
            <div style={{ background: '#020617', color: '#fff', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p>Preparing clinical report for PDF capture...</p>
            </div>
        );
    }

    if (!reportData) {
        return (
            <div style={{ background: '#020617', color: '#fff', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p>Failed to load report data. Please check session ID.</p>
            </div>
        );
    }

    return (
        <div className="report-print-shell" style={{ background: '#020617' }}>
            {/* We force fullReportAccess true so no paywalls show up in the PDF */}
            <TestReport 
                sessionId={sessionId} 
                reportData={{ ...reportData, fullReportAccess: true }} 
                isPrintMode={true} 
            />
        </div>
    );
}
