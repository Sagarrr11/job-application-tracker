const DeleteModule = ({ deleteId, setDeleteId, handleDelete }) => {
  return (
    <div>
      {deleteId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-white shadow-2xl">
            <h2 className="text-xl font-semibold">Delete Application?</h2>

            <p className="mt-2 text-sm text-zinc-400">
              Are you sure you want to delete this application? This action
              cannot be undone.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                className="w-full rounded-xl border border-zinc-700 px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white sm:w-1/2"
                onClick={() => setDeleteId(null)}
              >
                Cancel
              </button>

              <button
                className="w-full rounded-xl border border-red-900/60 bg-red-950/30 px-4 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-950/60 hover:text-red-300 sm:w-1/2"
                onClick={() => handleDelete(deleteId)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteModule;
