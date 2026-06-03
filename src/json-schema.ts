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
