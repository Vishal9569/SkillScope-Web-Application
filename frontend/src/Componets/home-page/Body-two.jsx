import { FaUserTie } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { MdOutlineAssessment } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { motion } from "framer-motion";

const steps = [
    {
        icon: <FaUserTie className="icon" />,
        title: "Step 1: Select Your Role",
        desc: "Choose a technical role — Frontend, Backend, or Fullstack — tailored to your expertise."
    },
    {
        icon: <BiTask className="icon" />,
        title: "Step 2: Solve Real-World Tasks",
        desc: "Complete a curated set of MCQs, coding challenges, and project tasks simulating on-the-job scenarios."
    },
    {
        icon: <MdOutlineAssessment className="icon" />,
        title: "Step 3: Submit for Evaluation",
        desc: "Your solutions are assessed for quality, logic, and clarity to ensure skill accuracy."
    },
    {
        icon: <RiDashboardLine className="icon" />,
        title: "Step 4: Receive Actionable Insights",
        desc: "Get clear feedback on your strengths and areas for growth aligned with industry standards."
    }
];

const BodyTwo = () => {
    return (
        <section className="how-it-works-simple">
            <h2 className="section-title-center">Your Path to Real-World Skill Validation</h2>
            <p className="section-subtitle-center">
                Our assessment process mirrors professional hiring challenges to give you meaningful feedback.
            </p>

            <div className="steps-list">
                {steps.map(({ icon, title, desc }, index) => (
                    <motion.div
                        className="step-row"
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <div className="step-icon">{icon}</div>
                        <div className="step-text">
                            <h3>{title}</h3>
                            <p>{desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default BodyTwo;
