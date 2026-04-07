import axios from 'axios';
import BASE_URL from '../../Config';

// Helper to get headers with token
const getAuthHeaders = () => {
    const token = localStorage.getItem('hair_assessment_token');
    return token ? { Authorization: `Bearer ${token}` } : {};
};

/**
 * Fetch all hair assessment questions and sections
 * @returns {Promise<Object>} API response data
 */
export const getAssessmentQuestions = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/sessions/questions`);
        return response.data;
    } catch (error) {
        console.error("Error fetching assessment questions:", error);
        throw error;
    }
};

/**
 * Create a new assessment session
 * @returns {Promise<Object>} API response data
 */
export const createSession = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/sessions`);
        return response.data;
    } catch (error) {
        console.error("Error creating assessment session:", error);
        throw error;
    }
};

/**
 * Save user answers progressively
 * @param {string} sessionId 
 * @param {Object} answersData - { questionId, value }
 * @returns {Promise<Object>}
 */
export const updateAnswers = async (sessionId, answersData) => {
    // Format according to Roadmap v1.2.0: {"answers": [{"questionId": "...", "value": "..."}]}
    const payload = {
        answers: Array.isArray(answersData) ? answersData : [answersData]
    };
    try {
        const response = await axios.patch(`${BASE_URL}/sessions/${sessionId}/answers`, payload, {
            headers: getAuthHeaders()
        });
        return response.data;
    } catch (error) {
        console.error("Error updating answers:", error);
        throw error;
    }
};

/**
 * Mark questionnaire as complete
 * @param {string} sessionId 
 * @returns {Promise<Object>}
 */
export const finalizeQuiz = async (sessionId) => {
    try {
        const response = await axios.post(`${BASE_URL}/sessions/${sessionId}/questionnaire/complete`, {}, {
            headers: getAuthHeaders()
        });
        return response.data;
    } catch (error) {
        console.error("Error finalizing quiz:", error);
        throw error;
    }
};

/**
 * Upload diagnostic image
 * @param {string} sessionId 
 * @param {string} photoId (Front, Crown, Side)
 * @param {File} file 
 * @returns {Promise<Object>}
 */
export const uploadImage = async (sessionId, photoId, file) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
        const response = await axios.post(`${BASE_URL}/sessions/${sessionId}/images/${photoId}`, formData, {
            headers: {
                ...getAuthHeaders(),
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};

/**
 * Trigger AI analysis (Photo scan or fallback)
 * @param {string} sessionId 
 * @param {boolean} skipPhotos 
 * @returns {Promise<Object>}
 */
export const triggerAnalysis = async (sessionId, skipPhotos = false) => {
    try {
        const response = await axios.post(`${BASE_URL}/sessions/${sessionId}/trigger-analysis`, { skipPhotos }, {
            headers: getAuthHeaders()
        });
        return response.data;
    } catch (error) {
        console.error("Error triggering analysis:", error);
        throw error;
    }
};

/**
 * Check session status (Polling)
 * @param {string} sessionId 
 * @returns {Promise<Object>}
 */
export const checkSessionStatus = async (sessionId) => {
    try {
        const response = await axios.get(`${BASE_URL}/sessions/status/${sessionId}`, {
            headers: getAuthHeaders()
        });
        return response.data;
    } catch (error) {
        console.error("Error checking status:", error);
        throw error;
    }
};

/**
 * Create Lead (Compliance Gate)
 * @param {Object} leadData { name, email, phone, sessionId, ... }
 * @returns {Promise<Object>}
 */
export const createLead = async (leadData) => {
    try {
        const response = await axios.post(`${BASE_URL}/sessions/capture-lead`, leadData, {
            headers: getAuthHeaders()
        });
        return response.data;
    } catch (error) {
        console.error("Error capturing lead:", error);
        throw error;
    }
};

/**
 * Fetch Final Report S3 URL
 * @param {string} sessionId 
 * @returns {Promise<Object>}
 */
export const fetchReport = async (sessionId) => {
    try {
        const response = await axios.get(`${BASE_URL}/sessions/reports/${sessionId}`, {
            headers: getAuthHeaders()
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching report:", error);
        throw error;
    }
};
/**
 * Verify OTP for session
 * @param {string} sessionId 
 * @param {string} otp 
 * @returns {Promise<Object>}
 */
export const verifyOtp = async (sessionId, otp) => {
    try {
        const response = await axios.post(`${BASE_URL}/sessions/${sessionId}/verify-otp`, { otp }, {
            headers: getAuthHeaders()
        });
        return response.data;
    } catch (error) {
        console.error("Error verifying OTP:", error);
        throw error;
    }
};
