export default function UploadBox() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-3">Upload Transactions CSV</h2>

      <input
        type="file"
        className="border p-3 rounded w-full"
      />

      <button className="mt-4 bg-indigo-700 text-white px-5 py-2 rounded-lg">
        Upload File
      </button>
    </div>
  );
}
