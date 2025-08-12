
function Navigation({ navigate, userId, token }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <img
          src="/MedSiftLogo1-SPM.png"
          className="logo-icon"
          alt="Logo"
        />
      <ul className="nav-menu">
        <li className="nav-item"><a className='nav-link active'href="/">Home</a></li>
        <li className="nav-item"><a className='nav-link' href="/journals">Journals</a></li> 
        <li className="nav-item"><a className='nav-link' href="/journals_summaries">Summaries</a></li>
        <li className="nav-item"><a className='nav-link' href="/dashboard">Dashboard</a></li>
        <li className="nav-item"><a className='nav-link' href="/notes">Notes</a></li>
        <li className="nav-item"><a className='nav-link' href="/about">About</a></li>
        { 
          userId && token ? <li className="nav-item"><a className='btn btn-outline' href="/logout">Logout</a></li>: 
          <>
            <li className="nav-item"><a className='btn btn-outline' href="/login">Login</a></li>
            <li className="nav-item"><a className='nav-link' href="/register">Register</a></li>
          </>
        }
      </ul>
      </div>
    </nav>
  );
}

export default Navigation;