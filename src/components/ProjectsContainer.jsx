import ProjectCard from "./projectCard"
export default function ProjectContainer() {
    return (
        <div style={{ backgroundColor: "white", marginTop: "60px", marginBottom:"80px", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
            <ProjectCard
                Title="WanderLust(Full Stack)"
                url="./videos/wanderlust.png"
                description="This is the Wanderlust web project developed using front-end technologies, back-end technologies, and a database."
                learenMore="https://github.com/vaibhavrajput07/ApnaCollege_Project"
                href="https://apnacollege-project-0qiq.onrender.com/listing"
            />
            <ProjectCard
                Title="Investment_portfolio_Tracker"
                url="./videos/InvestmentTracker.png"
                description="This is an Investment Portfolio Tracker project developed using frontend technologies such as HTML, CSS & JavaScript."
                learenMore="https://github.com/vaibhavrajput07/InvetsmentPortfolio_Tracker"
                href="https://invetsment-portfolio-tracker.vercel.app"
            />

            <ProjectCard
                Title="Spotify Clone"
                url="./videos/Spotify.png"
                description="This is a Spotify clone made by me during my course learning.
                                In this project, I used HTML and CSS technologies."
                learenMore="https://github.com/vaibhavrajput07/Spotify"
                href="https://spotify-36ku97tyx-vaibhav-rajputs-projects-ee705101.vercel.app"                
            />
            <ProjectCard
                Title="CatFacts"
                url="./videos/CatFact.png"
                description="I created a CatFact project using HTML, CSS, and JavaScript (by calling an API). This project is responsive on all devices."
                learenMore="https://github.com/vaibhavrajput07/CatFact"
                href="https://cat-fact-chi.vercel.app"
            />
        </div>
    )
}
