import statusConfig from "../data/statusConfig.js";
const RecentApplications = (props) => {
  const recentSorted = [...props.applications].sort((a, b) => {
    return b.appliedDate.localeCompare(a.appliedDate);
  });

  const recentArray = recentSorted.slice(0, 5);
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      {props.applications.length === 0 ? (
        <div className="flex min-h-90 items-center justify-center">
          <div className="text-center">
            <p className="text-base text-zinc-300">No applications yet</p>
            <p className="mt-1 text-sm text-zinc-500">
              Add your first application to see it here.
            </p>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Recent Applications</h2>
            <h2 className="text-sm text-zinc-500">
              Your recent tracked applications
            </h2>
          </div>

          <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-x-6 border-b border-zinc-800 pb-3 text-xs font-medium uppercase tracking-wide text-zinc-500">
            <span>Company / Role</span>
            <span className="text-right">Date Applied</span>
            <span className="text-right">Location</span>
            <span className="text-right">Status</span>
          </div>
          <div className="">
            {recentArray.map((application) => (
              <div
                className="grid grid-cols-2 gap-x-4 gap-y-2 border-b border-zinc-800 py-4 last:border-0 hover:bg-zinc-800/40 transition-colors sm:grid-cols-[2fr_1fr_1fr_1fr] sm:gap-x-6"
                key={application.id}
              >
                <div className="col-start-1 row-start-1 sm:col-auto sm:row-auto">
                  <p className="text-sm font-medium text-zinc-200">
                    {application.company}
                  </p>
                  <p className="text-xs text-zinc-500">{application.role}</p>
                </div>
                <div className="col-start-1 row-start-2 sm:col-auto sm:row-auto">
                  <p className="text-sm text-zinc-400 sm:text-right">
                    {application.appliedDate}
                  </p>
                </div>
                <div className="col-start-2 row-start-2 sm:col-auto sm:row-auto">
                  <p className="text-sm text-zinc-400 text-right">
                    {application.location}
                  </p>
                </div>
                <div className="col-start-2 row-start-1 flex justify-end sm:col-auto sm:row-auto">
                  <p
                    className={`text-sm justify-self-end px-3 py-2 rounded-xl ${statusConfig[application.status].className}`}
                  >
                    {statusConfig[application.status].badge}{" "}
                    {application.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentApplications;
