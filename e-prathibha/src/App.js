import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exam from "./Components/Exam";
import { ExamFeedback } from "./Components/ExamFeedback";
import { ExamResults } from "./Components/ExamResults";
import { ExamSummary } from "./Components/ExamSummary";
import { FreeExams } from "./Components/FreeExams";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { NavBar } from "./Components/NavBar";
import { Packages } from "./Components/Packages";
import { PageNotFound } from "./Components/PageNotFound";
import { Payment } from "./Components/payment";
import { PremiumExams } from "./Components/PremiumExams";
import { RegistrationPage } from "./Components/RegistrationPage";
import { VerifyEmail } from "./Components/VerifyEmail";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<RegistrationPage />} />
        <Route path="/signUp/verifyEmail" element={<VerifyEmail />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/freeExam" element={<FreeExams />} />
        <Route path="/premiumExam" element={<PremiumExams />} />
        <Route path="/exam/examId/:examid" element={<Exam />} />
        <Route path="/examFeedback" element={<ExamFeedback />} />
        <Route path="/examSummary" element={<ExamSummary />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/examResults/:examResultsId" element={<ExamResults />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
