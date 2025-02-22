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

// Updated projects array with unique IDs and added technologies
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
        description: "A different project with a modern UI and engaging experience.",
        technologies: ["React", "Node.js"],
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
        description: "Another exciting project that challenges the boundaries of creativity.",
        technologies: ["Python", "Django"],
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
        description: "A fantastic mobile-friendly project.",
        technologies: ["Vue", "Tailwind"],
        liveLink: "#",
        sourceLink: "https://github.com",
    }
];

// Event listener for all buttons
let btns = document.querySelectorAll(".card-button");
btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        const projectId = btn.id; // Get the ID of the clicked button
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
                <a onclick="closePopup()" href="#"><i class="fa-solid fa-xmark" id="x-mark"></i></a>
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
                <div class="popup-button">
                  <a href="${selectedProject.liveLink}" class="poppins-mid card-button" target="_blank" class="popup-button">Live Demo () </a>
                  <a href="${selectedProject.sourceLink}" class="poppins-mid card-button" target="_blank" class="popup-button">Source Code <i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    `;

    document.querySelector(".popup").style.display = "block";
}

// Function to close popup
function closePopup() {
    let popup = document.querySelector(".popup");
    if (popup) popup.style.display = "none";
}
