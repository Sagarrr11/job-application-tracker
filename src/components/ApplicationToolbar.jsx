const ApplicationToolbar = ({
  searchTerm,
  setSearchTerm,
  setIsOpen,
  isOpen,
  selectedStatus,
  setSelectedStatus,
  setIsClicked,
  isClicked,
  selectedSort,
  setSelectedSort,
  setSelectedApplication,
  setShowForm,
}) => {
    
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Applications"
        className="w-full sm:w-[30vw] rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-zinc-600"
      />

      <div className="flex items-center gap-3">
        <div className="relative">
          <button
            className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {selectedStatus} ↓
          </button>
          {isOpen && (
            <ul className="absolute top-full z-50 mt-2 w-36 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 text-sm shadow-lg">
              <li className="w-full border-b border-zinc-800 last:border-b-0">
                <button
                  className="w-full px-4 py-2.5 text-left text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                  onClick={() => {
                    setSelectedStatus("Status All");
                    setIsOpen(false);
                  }}
                >
                  All
                </button>
              </li>
              <li className="w-full border-b border-zinc-800 last:border-b-0">
                <button
                  className="w-full px-4 py-2.5 text-left text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                  onClick={() => {
                    setSelectedStatus("Interview");
                    setIsOpen(false);
                  }}
                >
                  Interview
                </button>
              </li>
              <li className="w-full border-b border-zinc-800 last:border-b-0">
                <button
                  className="w-full px-4 py-2.5 text-left text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                  onClick={() => {
                    setSelectedStatus("Applied");
                    setIsOpen(false);
                  }}
                >
                  Applied
                </button>
              </li>
              <li className="w-full border-b border-zinc-800 last:border-b-0">
                <button
                  className="w-full px-4 py-2.5 text-left text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                  onClick={() => {
                    setSelectedStatus("Assessment");
                    setIsOpen(false);
                  }}
                >
                  Assessment
                </button>
              </li>
              <li className="w-full border-b border-zinc-800 last:border-b-0">
                <button
                  className="w-full px-4 py-2.5 text-left text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                  onClick={() => {
                    setSelectedStatus("Wishlist");
                    setIsOpen(false);
                  }}
                >
                  Wishlist
                </button>
              </li>
              <li className="w-full border-b border-zinc-800 last:border-b-0">
                <button
                  className="w-full px-4 py-2.5 text-left text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                  onClick={() => {
                    setSelectedStatus("Rejected");
                    setIsOpen(false);
                  }}
                >
                  Rejected
                </button>
              </li>
              <li className="w-full border-b border-zinc-800 last:border-b-0">
                <button
                  className="w-full px-4 py-2.5 text-left text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                  onClick={() => {
                    setSelectedStatus("Offer");
                    setIsOpen(false);
                  }}
                >
                  Offer
                </button>
              </li>
            </ul>
          )}
        </div>

        <div className="relative">
          <button
            className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-zinc-800
              "
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            {selectedSort} ↓
          </button>
          {isClicked && (
            <ul className="absolute top-full z-50 mt-2 w-24 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 text-sm shadow-lg">
              <li className="w-full border-b border-zinc-800 last:border-b-0">
                <button
                  className="w-full px-4 py-2.5 text-left text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                  onClick={() => {
                    setIsClicked(false);
                    setSelectedSort("Newest");
                  }}
                >
                  Newest
                </button>
              </li>
              <li className="w-full border-b border-zinc-800 last:border-b-0">
                <button
                  className="w-full px-4 py-2.5 text-left text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                  onClick={() => {
                    setIsClicked(false);
                    setSelectedSort("Oldest");
                  }}
                >
                  Oldest
                </button>
              </li>
              <li className="w-full border-b border-zinc-800 last:border-b-0">
                <button
                  className="w-full px-4 py-2.5 text-left text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                  onClick={() => {
                    setIsClicked(false);
                    setSelectedSort("Company A-Z");
                  }}
                >
                  Company A-Z
                </button>
              </li>
              <li className="w-full border-b border-zinc-800 last:border-b-0">
                <button
                  className="w-full px-4 py-2.5 text-left text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                  onClick={() => {
                    setIsClicked(false);
                    setSelectedSort("Company Z-A");
                  }}
                >
                  Company Z-A
                </button>
              </li>
            </ul>
          )}
        </div>

        <div className="relative">
          <button
            className="rounded-xl bg-violet-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-400"
            onClick={() => {
              setSelectedApplication(null);
              setShowForm(true);
            }}
          >
            + Add Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationToolbar;
