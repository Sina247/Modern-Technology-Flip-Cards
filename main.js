const cardsData = [
  { icon: "🌍", title: "HTML5", description: "HTML5 is the latest version of the markup language for structuring web pages. It supports advanced features like video, audio, and vector graphics" },
  { icon: "🎨", title: "CSS3", description: "CSS3 is the styling language for web pages that adds advanced features such as animations, gradients, and responsive design" },
  { icon: "📦", title: "Bootstrap", description: "Bootstrap is a popular CSS and JS framework with ready-made components and classes that make rapid and responsive development easy" },
  { icon: "📜", title: "JavaScript", description: "JavaScript is the main programming language of the web, enabling interactivity and dynamic behavior on web pages" },
  { icon: "⚛️", title: "React.js", description: "React is a popular JavaScript library for building component-based user interfaces, developed by Facebook" },
  { icon: "🚀", title: "Next.js", description: "Next.js is a React framework that provides server-side rendering and dynamic routing, perfect for fast and SEO-friendly websites" },
  { icon: "🧵", title: "Tailwind CSS", description: "Tailwind is a utility-first CSS framework that gives developers powerful tools for rapid and flexible design with small, composable classes" },
  { icon: "📈", title: "Redux Toolkit", description: "Redux Toolkit is the official and optimized toolset for managing React app state with less code and better structure" },
  { icon: "🔧", title: "Git", description: "Git is a distributed version control system that enables teams to track changes and collaborate efficiently on code" },
  { icon: "🐙", title: "GitHub", description: "GitHub is a hosting service for Git repositories that offers collaboration, code review, and project management features" },
];

const container = document.getElementById("cardsContainer");

cardsData.forEach(({ icon, title, description }) => {
  const card = document.createElement("div");
  card.className = "flip-card";
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `${title} flip card description`);

  card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="icon" aria-hidden="true">${icon}</div>

          <div class="title">${title}</div>

          <div class="subtitle">Click to see description</div>
        </div>

        <div class="flip-card-back" tabindex="0">
          <div class="title">${title}</div>

          <p class="text-sm mt-2 leading-relaxed text-end">${description}</p>
        </div>
      </div>
    `;

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  card.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      card.classList.toggle("flipped");
    }
  });

  container.appendChild(card);
});
