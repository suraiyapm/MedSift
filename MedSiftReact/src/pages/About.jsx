import medSiftLogo from '/MedSiftLogo.png';

function About() {
    return (
        <>
        <div className='main-content'> 
        <a href="https://github.com/mrDNA219/3140_Project" target="_blank">
          <img src={medSiftLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>About</h1>
      <div className="card">
        <p>
            Welcome to MedSift!
            We have an innovative idea and a mission to transform the way research can be organized.
            Keeping in mind the current insufficiencies in existing tools in the space,
            we're developing something new for use by medical students and researchers alike!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
        </>
    )
}

export default About;