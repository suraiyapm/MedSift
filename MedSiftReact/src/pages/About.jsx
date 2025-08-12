import medSiftLogo from '/MedSiftLogo1-SPM.png';
import pic1 from '/table-group.jpg';
import pic2 from '/laptop-stetho.jpg';
import pic3 from '/comp-scans.jpg';

function About() {
  return (
    <>
        <a href="https://github.com/mrDNA219/3140_Project" target="_blank">
          <img src={medSiftLogo} style={{height: '75px', width: '75px'}} className="logo rounded lighting" alt="Vite logo" />
        </a>
        <div className="card" style={{alignItems: 'center'}}>
            <h2>Welcome to MedSift!</h2>
            <p>
              We have an innovative idea and a mission to transform the way research can be organized.
              Keeping in mind the current insufficiencies in existing tools in the space,
              we're developing something new for use by medical students and researchers alike!
            </p>
            <img src={pic1} className="about-photos" id="pic1specific" alt="Sitting around a table, tablets out" />
            <p>
              There's a lacuna in the world of digital, medical tools.
              Authors have Scrivener, journalists have Zotero, but, when it comes to the
              organization of medical topic exploration, there isn't quite anything to tie it all together.
            </p>
              <img src={pic3} className="about-photos" id="pic3specific" alt="Three monitors, scans" />
            <p>
              So, we here at [Brooklyn College? 3140? MedSift crew?] have made a (timed) mission to fill this void.
              With an innovative idea and an ambitious deadline, we're striving to improve the accessibility
              and ease of access of convenient a convenient medical tool!
              As medical education is increasingly reliant on digital resources, students need smarter,
              centralized tools to stay ahead.
              MedSift is a web-based platform that allows students to search medical journals, create annotaions,
              save notes, and bookmark useful content all in one place.
              Users will be able to search journals, create notes, and return to saved content directly from a clean,
              accessible UI. With MedSift, we're aiming to become the go-to productivity hub for medical students, and
              save them time while also improving the quality of studies.
            </p>
              <img src={pic2} className="about-photos" id="pic2specific" alt="Laptop, stethoscope" />
        </div>
    </>
  )
}

export default About;