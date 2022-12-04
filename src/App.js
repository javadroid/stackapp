import {
  LandingPage,
} from "./pages";
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LandingLayout,
  AppointmentLayout,
  RequestLayout,
  DashboardLayout,
} from "./components/Layout";
import "./index.css";
import { Toaster } from 'react-hot-toast';


const AboutUs = lazy(() => import('./components/LandingPage/AboutUs'));
const WhoCanDonate = lazy(() => import('./pages/WhoCanDonate'));
const BookAppointment = lazy(() => import('./pages/BookAppointment'));
const RequestBlood = lazy(() => import('./pages/RequestBlood'));

const MedicalsPage = lazy(() => import('./components/Dashboard/MedicalsPage'));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const History = lazy(() => import("./components/Dashboard/History"));
const Wallet = lazy(() => import("./components/Dashboard/Wallet/Wallet"));

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <>
          <Routes>
            {/* Landing Page Routes */}
            <Route path="/" element={<LandingLayout />}>
              <Route index element={<LandingPage />} />
                <Route path="about-us" element={<SuspenseWrapper><AboutUs /></SuspenseWrapper>} />
                <Route path="who-can-donate" element={<SuspenseWrapper><WhoCanDonate /></SuspenseWrapper>} />
            </Route>

            {/* Appointment Page Routes */}
            <Route path="/book-appointment" element={<AppointmentLayout />}>
              <Route index element={<SuspenseWrapper><BookAppointment /></SuspenseWrapper>} />
            </Route>
            {/* RequestBlood Page Routes */}
            <Route path="/request-blood" element={<RequestLayout />}>
              <Route index element={<SuspenseWrapper><RequestBlood /></SuspenseWrapper>} />
            </Route>
            {/* Dashboard Page Routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<SuspenseWrapper><Dashboard /></SuspenseWrapper>} />
              <Route path="/dashboard/main" element={<SuspenseWrapper><Dashboard /></SuspenseWrapper>} />
              <Route path="medicals" element={<SuspenseWrapper><MedicalsPage /></SuspenseWrapper>} />
              <Route path="history" element={<SuspenseWrapper><History /></SuspenseWrapper>} />
              <Route path="wallet" element={<SuspenseWrapper><Wallet /></SuspenseWrapper>} />
            </Route>
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;


const SuspenseWrapper = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  );
}