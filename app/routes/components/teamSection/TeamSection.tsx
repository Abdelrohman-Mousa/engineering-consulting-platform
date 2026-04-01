import "./teamSection.scss";
import {ShinyButton} from "~/components/ui/shiny-button";
import {NumberTicker} from "~/components/ui/number-ticker";
import team from "public/assets/images/team.jpg";

const TeamSection = () => {
    return (
        <div className="teamSection">
            <div className="hero-bg-lines">
                <svg viewBox="0 0 1000 600" preserveAspectRatio="none">
                    <path d="M0 100 Q 300 200 600 100 T 1000 150" />
                    <path d="M0 200 Q 300 300 600 200 T 1000 250" />
                    <path d="M0 300 Q 300 400 600 300 T 1000 350" />
                </svg>
            </div>
            <div className="teamSection-left">
                <h1>
                    Building the Future with a Visionary Team
                </h1>
                <p>
                    Our talented team combines creativity, experience, and precision to deliver innovative engineering solutions.
                </p>
                <div className="teamSection-counter">
                    <div className="teamSection-export">
                        <p> <NumberTicker value={30} />+ </p>
                        <h2>Expert Engineers</h2>
                    </div>
                    <div className="teamSection-export">
                        <p> <NumberTicker value={3000} />+ </p>
                        <h2>Projects Completed</h2>
                    </div>
                </div>
                <div className="teamSection-btn">
                    <ShinyButton>
                       <h3 className="teamSection-button">Start Your Project</h3>
                    </ShinyButton>
                    <ShinyButton>
                        <h3 className="teamSection-button">Contact US</h3>
                    </ShinyButton>
                </div>
            </div>

            <div className="teamSection-center">
                <img src={team} alt="team" />
            </div>

            <div className="teamSection-reight">
                <h1>Meet Our Expert Team</h1>
                <p>
                    Our team consists of highly skilled engineers and specialists in architectural, structural, electrical, and mechanical design. Each member brings years of experience and a passion for innovation, ensuring that every project we handle meets the highest standards of quality and precision. Together, we combine expertise, creativity, and teamwork to transform ideas into real, successful projects.
                </p>
            </div>
        </div>
    )
}
export default TeamSection
