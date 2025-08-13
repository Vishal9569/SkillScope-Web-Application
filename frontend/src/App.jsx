import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Componets/Home';
import Signup from './Componets/login-sign-page/Signup';
import Login from './Componets/login-sign-page/login';
import Footer from './Componets/home-page/footer';
import Instructions from './Componets/instruction-assesment/instruction';
import AssessmentPage from './Componets/instruction-assesment/assesment';
import Header from './Componets/home-page/Header';
import Feedback from './Componets/instruction-assesment/feeback';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AssessmentProvider, useAssessment } from './context/AssessmentContext';

function AppWrapper() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { state } = useAssessment();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser(payload);
      } catch {
        localStorage.removeItem('token');
      }
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const hideHeaderFooter =
    (isFullscreen && location.pathname === '/mock-assesment') ||
    location.pathname === '/instructions';

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    toast.success('User logged out');
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const ProtectedAssessmentRoute = () => {
    const hasQuestions =
      state.questions.mcq.length ||
      state.questions.coding.length ||
      state.questions.project.length;

    if (!hasQuestions) {
      toast.error('Unauthorized access. Redirecting...');
      return <Navigate to="/" replace />;
    }

    return <AssessmentPage />;
  };

  return (
    <>
      {!hideHeaderFooter && <Header user={user} onLogout={handleLogout} />}

      <div style={{ paddingBottom: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/mock-assesment" element={<ProtectedAssessmentRoute />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <AssessmentProvider>
      <AppWrapper />
    </AssessmentProvider>
  );
}

export default App;
