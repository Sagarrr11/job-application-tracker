import { useState } from "react";
import statusConfig from "../data/statusConfig.js";
import ApplicationForm from "./ApplicationForm.jsx";
import DeleteModule from "./DeleteModule.jsx";
import ApplicationToolbar from "./ApplicationToolbar.jsx";
const Application = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Status All");
  const [selectedSort, setSelectedSort] = useState("Sort");
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const filteredApplications = props.applications.filter(
    (application) =>
      (application.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        application.role.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedStatus === "Status All" ||
        application.status === selectedStatus),
  );

  const sortingArr = [...filteredApplications].sort((a, b) => {
    if (selectedSort === "Oldest") {
      return a.appliedDate.localeCompare(b.appliedDate);
    }
    if (selectedSort === "Newest") {
      return b.appliedDate.localeCompare(a.appliedDate);
    }
    if (selectedSort === "Company A-Z") {
      return a.company.localeCompare(b.company);
    }
    if (selectedSort === "Company Z-A") {
      return b.company.localeCompare(a.company);
    }
  });

  const handleAdd = (newApplication) => {
    props.setApplications((prev) => [...prev, newApplication]);
    setShowForm(false);
  };

  const handleDelete = (deleteId) => {
    props.setApplications((prev) =>
      prev.filter((application) => application.id !== deleteId),
    );
    setDeleteId(null);
  };

  const applicationToEdit = props.applications.find(
    (application) => application.id === selectedApplication,
  );

  const handleUpdate = (updatedApplication) => {
    props.setApplications((prev) =>
      prev.map((application) =>
        application.id === updatedApplication.id
          ? updatedApplication
          : application,
      ),
    );
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-8 text-white sm:px-8">
      <DeleteModule
        deleteId={deleteId}
        setDeleteId={setDeleteId}
        handleDelete={handleDelete}
      />

      {showForm && (
        <ApplicationForm
          handleUpdate={handleUpdate}
          application={applicationToEdit}
          onAdd={handleAdd}
          onClose={() => {
            setSelectedApplication(null);
            setShowForm(false);
          }}
        />
      )}

      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Applications</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Track and manage all your job applications.
          </p>
        </div>

        <ApplicationToolbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          setIsClicked={setIsClicked}
          isClicked={isClicked}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          setSelectedApplication={setSelectedApplication}
          setShowForm={setShowForm}
        />
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-x-6 border-b border-zinc-800 px-6 py-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
          <h2>Company/Role</h2>
          <h2 className="justify-self-end">Date Applied</h2>

          <h2 className="justify-self-end">Location</h2>

          <h2 className="justify-self-end">Status</h2>
          <h2 className="justify-self-end">Actions</h2>
        </div>
        <div className="mt-4">
          {props.applications.length === 0 ? (
            <div className="flex items-center justify-center min-h-96">
              <p className="text-center text-2xl">
                No applications yet. Add your first application.
              </p>
            </div>
          ) : sortingArr.length > 0 ? (
            sortingArr.map((application) => (
              <div
                className="grid grid-cols-2 gap-x-6 gap-y-4 border-b border-zinc-800 px-6 py-4 last:border-b-0 transition-colors hover:bg-zinc-800/40 sm:grid-cols-[2fr_1fr_1fr_1fr_1fr] sm:gap-x-6"
                key={application.id}
              >
                <div className="col-start-1 row-start-1 sm:col-auto sm:row-auto">
                  <p className="text-sm font-medium text-zinc-200">
                    {application.company}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    {application.role}
                  </p>
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
                  <h2
                    className={`text-sm px-3 py-1 rounded-xl   ${statusConfig[application.status].className}`}
                  >
                    {statusConfig[application.status].badge}{" "}
                    {application.status}
                  </h2>
                </div>
                <div className="col-span-2 row-start-3 flex justify-end gap-2 sm:col-auto sm:row-auto">
                  <button
                    className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                    onClick={() => {
                      setSelectedApplication(application.id);
                      setShowForm(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="rounded-lg border border-red-900/60 px-3 py-1.5 text-sm text-red-400 transition-colors hover:bg-red-950/50 hover:text-red-300"
                    onClick={() => setDeleteId(application.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center min-h-96">
              <p className="text-center text-2xl">
                No applications match your current search or filter
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Application;
