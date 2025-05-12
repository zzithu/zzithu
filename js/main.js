const root = document.getElementById("projects-root");

for (const [semester, projects] of Object.entries(projectData)) {
    //Create respective elements for each item
    const section = document.createElement("div");
    section.className = "project-section";
  
    const header = document.createElement("button");
    header.className = "section-header";
    header.textContent = semester;
  
    const container = document.createElement("div");
    container.className = "project-container";
    container.style.display = "none"; // collapsed
  
    // Dropdown -- less overwhelming
    const select = document.createElement("select");
    select.className = "project-select";
  
    projects.forEach((project, idx) => {
      const option = document.createElement("option");
      option.value = idx;
      option.textContent = project.title;
      select.appendChild(option);
    });
  
    // Project card (initially first one)
    const card = document.createElement("div");
    card.className = "project-card";
  
    const renderProject = (project) => {
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-img" />
        <div class="project-info">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        </div>
      `;
    };
  
    renderProject(projects[0]);
  
    select.addEventListener("change", (e) => {
      renderProject(projects[e.target.value]);
    });
  
    // Toggle show/hide
    header.addEventListener("click", () => {
      container.style.display = container.style.display === "none" ? "block" : "none";
    });
  
    container.appendChild(select);
    container.appendChild(card);
    section.appendChild(header);
    section.appendChild(container);
    root.appendChild(section);
  }
  