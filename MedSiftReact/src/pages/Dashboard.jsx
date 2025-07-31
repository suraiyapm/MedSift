import medSiftLogo from '/MedSiftLogo1-SPM.png';

function Dashboard() {
    return (
        <>
        <div className='main-content'> 
        <a href="https://github.com/mrDNA219/3140_Project" target="_blank">
          <img src={medSiftLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Dashboard</h1>
      <div className="card">
        <p>Placeholder for dashboard area: My Notes, Annotations, Followed Topics/Journals/Ongoing, Bookmarks</p>
        {/* Ignore this for now! It's very much still in the works so I'll paste this part a tiny bit later */}
      </div>
        </>
    )
}

export default Dashboard;