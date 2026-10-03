const Stats = ({ applications }) => {
  const appliedValue = applications.filter(
    (application) => application.status === "Applied",
  ).length;
  const interview = applications.filter(
    (application) => application.status === "Interview",
  ).length;
  const offers = applications.filter(
    (application) => application.status === "Offer",
  ).length;

  const data = [
    {
      title: "Total Applications",
      value: applications.length,
      description: "All tracked applications",
      accent: "bg-violet-500",
    },
    {
      title: "Applied",
      value: appliedValue,
      description: "Applications currently applied",
      accent: "bg-blue-500",
    },
    {
      title: "Interviews",
      value: interview,
      description: "Applications in interview stage",
      accent: "bg-amber-500",
    },
    {
      title: "Offers",
      value: offers,
      description: "Offers received",
      accent: "bg-emerald-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 py-8">
      {data.map((item) => (
        <div
          className="flex flex-col gap-2 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl"
          key={item.title}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-sm text-zinc-400">{item.title}</h1>
            <span className={`h-2.5 w-2.5 rounded-full ${item.accent}`} />
          </div>
          <p className="text-4xl font-semibold">{item.value}</p>
          <p className="tezt-sm text-zinc-400">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
