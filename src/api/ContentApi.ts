const data: { page: string; id: string; text: string }[] = [
  {
    page: "landing_page",
    id: "title",
    text: "ARCU BIBENDUM AT VARIUS VEL PHARETRA",
  },
  {
    page: "landing_page",
    id: "paragraph_1",
    text: "Semper feugiat nibh sed pulvinar proin gravida. Quis imperdiet massa tincidunt nunc.",
  },
  {
    page: "landing_page",
    id: "paragraph_2",
    text: "Mi bibendum neque egestas congue. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Erat imperdiet sed euismod nisi. Velit dignissim sodales ut eu sem integer vitae justo eget.",
  },
  {
    page: "landing_page",
    id: "button_1",
    text: "Semper"
  },
  {
    page: "landing_page",
    id: "button_2",
    text: "Bibendum"
  },
];

export const getContent = (page: string, id: string): string => {
  return data.find((d) => d.page === page && d.id === id)?.text ?? "CONTENT NOT FOUND";
};
