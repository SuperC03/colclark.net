export const home = () =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://colclark.net/#website",
        url: "https://colclark.net/",
        name: "Colin Clark",
        publisher: { "@id": "https://colclark.net/#person" },
      },
      {
        "@type": "WebPage",
        "@id": "https://colclark.net/#webpage",
        url: "https://colclark.net/",
        name: "Colin Clark | Engineering & Miscellany",
        description:
          "I build hardware and software, from circuit boards to the code that runs on them. I'm trying to write more about things I find interesting.",
        isPartOf: { "@id": "https://colclark.net/#website" },
        about: { "@id": "https://colclark.net/#person" },
      },
      {
        "@type": "Person",
        "@id": "https://colclark.net/#person",
        name: "Colin Clark",
        url: "https://colclark.net/about",
      },
    ],
  });

export const about = () =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://colclark.net/about#profilepage",
        url: "https://colclark.net/about",
        isPartOf: { "@id": "https://colclark.net/#website" },
        mainEntity: { "@id": "https://colclark.net/#person" },
        dateModified: "2026-06-03T00:00:00Z",
      },
      {
        "@type": "Person",
        "@id": "https://colclark.net/#person",
        name: "Colin Clark",
        url: "https://colclark.net/about",
        description:
          "MIT electrical engineer focused in the intersection of hardware and software, from power electronics and PCBs to web dev and functional programming, and everything in between.",
        image: "https://colclark.net/headshot.webp",
        sameAs: [
          "https://github.com/SuperC03/",
          "https://www.linkedin.com/in/superc03",
          "https://x.com/superc_03",
          "https://www.mit.edu/~colclark/",
        ],
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "Massachusetts Institute of Technology",
            url: "https://web.mit.edu/",
          },
        ],
        email: "contact@colclark.net",
        knowsLanguage: [
          { "@type": "Language", name: "English" },
          { "@type": "Language", name: "Japanese" },
        ],
        knowsAbout: [
          "Power Electronics",
          "Electrical Engineering",
          "FPGA Development",
          "Web Development",
          "PCB Design",
          "Energy",
        ],
      },
    ],
  });
