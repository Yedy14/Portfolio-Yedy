export default function manifest() {
  return {
    name:             "Yédydia — Expert informatique & technologies",
    short_name:       "Yédydia",
    description:      "Portfolio de Yédydia (Innov'Yed Solutions, Bénin) : concevoir, construire, sécuriser, automatiser.",
    start_url:        "/",
    display:          "standalone",
    background_color: "#040B18",
    theme_color:      "#00F5FF",
    lang:             "fr",
    icons: [
      { src: "/photo/yedydia-mark.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
