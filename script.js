function showSidebar() {
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
    document.documentElement.classList.add("no-scroll");
}

function hideSidebar() {
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
    document.documentElement.classList.remove("no-scroll");
}


const projects = [
    {
        id: "mobile-project-1",
        name: "Tonic",
        company: "CANOPY",
        role: "Back End Dev",
        year: "2015",
        image: "card-1.png",
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "#",
        sourceLink: "#"
    },
    {
        id: "mobile-project-2",
        name: "Multi-Post Stories",
        company: "CANOPY",
        role: "Back End Dev",
        year: "2015",
        image: "card-2.png",
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        technologies: ["HTML", "CSS" , "JavaScript"],
        liveLink: "#",
        sourceLink: "#"
    },
    {
        id: "mobile-project-3",
        name: "Tonic",
        company: "CANOPY",
        role: "Back End Dev",
        year: "2015",
        image: "card-3.png",
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        technologies: ["HTML", "CSS" , "JavaScript"],
        liveLink: "#",
        sourceLink: "#"
    },
    {
        id: "mobile-project-4",
        name: "Multi-Post Stories",
        company: "CANOPY",
        role: "Back End Dev",
        year: "2015",
        image: "card-4.png",
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        technologies: ["HTML", "CSS" , "JavaScript"],
        liveLink: "#",
        sourceLink: "https://github.com",
    }
];

// Event listener for all buttons
let btns = document.querySelectorAll(".card-button");

btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        const projectId = btn.id;
        popUp(projectId);
    });
});


// Function to show project details
function popUp(id) {
    let selectedProject = projects.find(project => project.id === id);
    
    if (!selectedProject) {
        console.error("Project not found!");
        return;
    }

    let projectPopUp = document.createElement("div");
    projectPopUp.classList.add("mobile-project-popup");
    document.body.appendChild(projectPopUp)
    projectPopUp.innerHTML = `
        <div class="popup">
            <div class="popup-content">
                <a onclick="closePopup(event)" href="#"><i class="fa-solid fa-xmark" id="x-mark"></i></a>
                <h2 class="poppins-bold first-h1">${selectedProject.name}</h2>
                <div class="card-meta">
                   <div class="container">
                      <span class="poppins-600 company-name">${selectedProject.company}</span>
                      <span class="dot"></span>
                      <span class="poppins-600 role">${selectedProject.role}</span>
                      <span class="dot"></span>
                      <span class="poppins-600 year">${selectedProject.year}</span>
                   </div>
                 </div>
                <img src="${selectedProject.image}" alt="${selectedProject.name}" class="popup-image">
                <p class="poppins-regular para">${selectedProject.description}</p>
                <div class="poppins-mid card-tags">${selectedProject.technologies.map(tech => `<span class= "tag">${tech}</span>`).join('')}</div>
                <div class="hrr"></div>
                <div class="\
                ">
                  <a href="${selectedProject.liveLink}" class="poppins-mid card-button" target="_blank" class="popup-button">Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i> </a>
                  <a href="${selectedProject.sourceLink}" class="poppins-mid card-button" target="_blank" class="popup-button">Source Code <i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    `;

    document.querySelector(".mobile-project-popup").style.display = "block";
    document.documentElement.classList.add("no-scroll");

}

function closePopup() {
    event.preventDefault();
    let popup = document.querySelector(".mobile-project-popup");
    if (popup) popup.remove();
    document.documentElement.classList.remove("no-scroll"); 
}


// Desk
const diskProjects = [
    {
        id: "disk-project-1",
        name: "Tonic",
        company: "CANOPY",
        role: "Back End Dev",
        year: "2015",
        image: "card-1-disk.png",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illo quia vero fugiat atque iste error veritatis repudiandae, fuga beatae nulla, quidem quo consectetur nam amet, dolor consequatur repellendus! Eius. 
        <br> <br>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illo quia vero fugiat atque iste error veritatis repudiandae, fuga beatae nulla, quidem quo consectetur nam amet, dolor consequatur repellendus! Eius.`,        technologies: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstap"],
        technologies: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstap"],
        liveLink: "#",
        sourceLink: "#"
    },

    {
        id: "disk-project-2",
        name: "Multi-Post Stories",
        company: "FCAEBOOK",
        role: "Full Stack Dev",
        year: "2015",
        image: "card-2-disk.png",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illo quia vero fugiat atque iste error veritatis repudiandae, fuga beatae nulla, quidem quo consectetur nam amet, dolor consequatur repellendus! Eius. 
        <br> <br>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illo quia vero fugiat atque iste error veritatis repudiandae, fuga beatae nulla, quidem quo consectetur nam amet, dolor consequatur repellendus! Eius.`,        technologies: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstap"],
        technologies: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstap"],
        liveLink: "#",
        sourceLink: "#"
    },

    {
        id: "disk-project-1",
        name: "Facebook 360",
        company: "FACEBOOK",
        role: "Back End Dev",
        year: "2015",
        image: "card-3-disk.png",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illo quia vero fugiat atque iste error veritatis repudiandae, fuga beatae nulla, quidem quo consectetur nam amet, dolor consequatur repellendus! Eius. 
        <br> <br>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illo quia vero fugiat atque iste error veritatis repudiandae, fuga beatae nulla, quidem quo consectetur nam amet, dolor consequatur repellendus! Eius.`,        technologies: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstap"],
        technologies: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstap"],
        liveLink: "#",
        sourceLink: "#"
    },

    {
        id: "disk-project-4",
        name: "Uber Navigation",
        company: "Uber",
        role: "Lead Developer",
        year: "2018",
        image: "card-4-disk.png",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illo quia vero fugiat atque iste error veritatis repudiandae, fuga beatae nulla, quidem quo consectetur nam amet, dolor consequatur repellendus! Eius. 
        <br> <br>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illo quia vero fugiat atque iste error veritatis repudiandae, fuga beatae nulla, quidem quo consectetur nam amet, dolor consequatur repellendus! Eius.`,
        technologies: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstap"],
        liveLink: "#",
        sourceLink: "#"
    },
]


const btnsDesk = document.querySelectorAll(".card-btn-disk")
btnsDesk.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        const projectId = btn.id; 
        popUpDisk(projectId);
    });
});

function popUpDisk(id){
    console.log(id)
    let selectedProject = diskProjects.find(project => project.id === id);
    
    if (!selectedProject) {
        console.error("Project not found!");
        return;
    }
    let projectPopUp = document.createElement("div");
    projectPopUp.classList.add("disk-project-popup");
    document.body.appendChild(projectPopUp)
    projectPopUp.innerHTML = `
        <div class="popup">
            <div class="popup-content">
                <a onclick="hidePopup(event)" href="#"><i class="fa-solid fa-xmark" id="x-mark-disk"></i></a>
                <h2 class="poppins-bold first-h1-disk">${selectedProject.name}</h2>
                <div class="card-meta">
                   <div class="container-disk">
                      <span class="poppins-600 company-name-disk">${selectedProject.company}</span>
                      <span class="dot"></span>
                      <span class="poppins-600 role-disk">${selectedProject.role}</span>
                      <span class="dot"></span>
                      <span class="poppins-600 year-disk">${selectedProject.year}</span>
                   </div>
                 </div>
                <img src="${selectedProject.image}" alt="${selectedProject.name}" class="popup-image-disk">
                <div class= "container-body">
                    <div class= "description-disk">
                         <p class="poppins-regular paraa">${selectedProject.description}</p>

                    </div>
                    <div class= "description-disk-2">
                         <div class="poppins-mid card-tags-disk">${selectedProject.technologies.map(tech => `<span class= "tag-disk">${tech}</span>`).join('')}</div>
                         <div class="hrr"></div>
                         <div class="popup-button-disk">
                             <a href="${selectedProject.liveLink}" class="poppins-mid card-button" target="_blank">See Live <i class="fa-solid fa-arrow-up-right-from-square"></i> </a>
                             <a href="${selectedProject.sourceLink}" class="poppins-mid card-button" target="_blank" >Source Code <i class="fa-brands fa-github"></i></a>
                         </div>
                    </div>

                </div>
                  
            </div>
        </div>
    `;
    document.querySelector(".disk-project-popup").style.display = "block";
    document.documentElement.classList.add("no-scroll");
}
function hidePopup() {
    event.preventDefault();
    let popup = document.querySelector(".disk-project-popup");
    if (popup) popup.remove(); 
    document.documentElement.classList.remove("no-scroll");
}
