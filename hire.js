const candidates = [
  {
    name: "John Doe",
    skills: ["JavaScript", "HTML", "CSS"],
    experience: "3 years",
    locality: "New York",
    description: "I am a frontend developer with expertise in JavaScript, HTML, and CSS. I have 3 years of experience building responsive and user-friendly web applications.",
    contact: {
      email: "johndoe@example.com",
      phone: "123-456-7890"
    }
  },
  {
    name: "Jane Smith",
    skills: ["Python", "Data Analysis"],
    experience: "5 years",
    locality: "San Francisco",
    description: "I am a data analyst with expertise in Python. I have 5 years of experience working with data and performing data analysis to derive meaningful insights.",
    contact: {
      email: "janesmith@example.com",
      phone: "987-654-3210"
    }
  },
  {
    name: "David Johnson",
    skills: ["Java", "Spring", "SQL"],
    experience: "4 years",
    locality: "Chicago",
    description: "I am a full-stack developer with expertise in Java, Spring, and SQL. I have 4 years of experience building scalable and robust web applications.",
    contact: {
      email: "davidjohnson@example.com",
      phone: "456-789-1230"
    }
  },
  {
    name: "Emily Brown",
    skills: ["C#", "ASP.NET", "MVC"],
    experience: "6 years",
    locality: "Boston",
    description: "I am a software engineer with expertise in C#, ASP.NET, and MVC. I have 6 years of experience developing enterprise-level applications.",
    contact: {
      email: "emilybrown@example.com",
      phone: "789-123-4560"
    }
  },
  {
    name: "Michael Wilson",
    skills: ["React", "Node.js", "MongoDB"],
    experience: "3 years",
    locality: "Seattle",
    description: "I am a full-stack developer with expertise in React, Node.js, and MongoDB. I have 3 years of experience building modern and scalable web applications.",
    contact: {
      email: "michaelwilson@example.com",
      phone: "321-654-0987"
    }
  }
  // Add more candidate data
];



const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");

function displayCandidates(candidates) {
  searchResults.innerHTML = "";
  candidates.forEach(candidate => {
    const candidateCard = document.createElement("div");
    candidateCard.className = "candidate-card";
    candidateCard.innerHTML = `
      <h3>${candidate.name}</h3>
      <p>Skills: ${candidate.skills.join(", ")}</p>
      <p>Experience: ${candidate.experience}</p>
      <p>Locality: ${candidate.locality}</p>
      <p>Description: ${candidate.description}</p>
      <p>Contact:</p>
      <ul>
        <li>Email: ${candidate.contact.email}</li>
        <li>Phone: ${candidate.contact.phone}</li>
      </ul>
    `;
    searchResults.appendChild(candidateCard);
  });
}

function searchCandidates() {
  const skillsQuery = document.getElementById("skills-input").value.toLowerCase();
  const experienceQuery = document.getElementById("experience-input").value.toLowerCase();
  const localityQuery = document.getElementById("locality-input").value.toLowerCase();

  const filteredCandidates = candidates.filter(candidate =>
    candidate.skills.some(skill => skill.toLowerCase().includes(skillsQuery)) &&
    candidate.experience.toLowerCase().includes(experienceQuery) &&
    candidate.locality.toLowerCase().includes(localityQuery)
  );
  displayCandidates(filteredCandidates);
}

searchButton.addEventListener("click", () => {
  searchCandidates();
});

// You can also consider adding an "input" event listener to trigger search while typing
// Uncomment the following code if you want to trigger search while typing
// const searchInputs = document.querySelectorAll(".search-input");
// searchInputs.forEach(input => {
//   input.addEventListener("input", () => {
//     searchCandidates();
//   });
// });

