import { useEffect, useState } from "react";

const ApplicationForm = ({ handleUpdate, application, onAdd, onClose }) => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    location: "",
    status: "Applied",
    appliedDate: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (application) {
      const updatedApplication = {
        id: application.id,
        ...formData,
      };

      handleUpdate(updatedApplication);
      return;
    }
    const newApplication = {
      id: crypto.randomUUID(),
      company: formData.company,
      role: formData.role,
      appliedDate: formData.appliedDate,
      status: formData.status,
      location: formData.location,
    };
    onAdd(newApplication);
  };

  useEffect(() => {
    if (application) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(application);
    }
  }, [application]);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 p-4">
      <form
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl space-y-2 border border-zinc-800 bg-zinc-900 p-6 text-white shadow-2xl sm:p-7"
        onSubmit={handleSubmit}
      >
        <h1 className="border-b border-zinc-800 pb-4 text-xl font-semibold">
          {application ? "Edit Application" : "Add Application"}
        </h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-sm text-zinc-400">
            Company
          </label>
          <input
            id="company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-violet-500"
            placeholder="Company Name"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="role" className="text-sm text-zinc-400">
            Role
          </label>
          <input
            id="role"
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-violet-500"
            placeholder="Role"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="appliedDate" className="text-sm text-zinc-400">
            Date
          </label>
          <input
            type="date"
            id="appliedDate"
            name="appliedDate"
            value={formData.appliedDate}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white 
                placeholder:text-zinc-600 outline-none transition-colors focus:border-violet-500"
            placeholder="Applied date"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="location" className="text-sm text-zinc-400">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-white text-sm placeholder:text-zinc-600 outline-none transition-colors focus:border-violet-500"
            placeholder="Location"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="status" className="text-sm text-zinc-400">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-white text-sm outline-none transition-colors focus:border-violet-500"
          >
            <option value="Applied">Applied</option>
            <option value="Wishlist">Wishlist</option>
            <option value="Assessment">Assessment</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div className="flex gap-3">
          <button
            className="w-1/2 rounded-xl border border-zinc-700 px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-1/2 rounded-xl bg-violet-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-400"
            type="submit"
          >
            {application ? "Update Application" : "Add Application"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
