import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-grid">
                {/* Upcoming Section */}
                <section className="footer-upcoming">
                    <h3>Coming Soon: SkillBattle</h3>
                    <p>
                        A real-time, competitive coding arena where users can challenge others in role-based assessments.
                        Compete against peers, solve timed tasks, and climb the leaderboard to prove your skills.
                    </p>
                    <ul className="battle-highlights">
                        <p>Multiplayer battles in real time</p>
                        <p>Countdown-based problem solving</p>
                        <p>Instant leaderboard and stats</p>
                        <p>Win rewards and showcase your rank</p>
                    </ul>
                    <p className="footer-note">
                        Stay tuned — your skills are about to face a thrilling challenge.
                    </p>
                </section>

                {/* Footer Bottom Section */}
                <section className="footer-right">
                    <div className="footer-social">
                        <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                    <div className="footer-links">
                        <a href="/privacy">Privacy</a>
                        <a href="/terms">Terms</a>
                    </div>
                    <div className="footer-copy">
                        &copy; {currentYear} SkillScope Private Limited
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
