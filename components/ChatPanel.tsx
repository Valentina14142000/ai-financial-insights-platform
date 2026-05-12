"use client";

import { useState } from "react";

export default function ChatPanel() {
  const [message, setMessage] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow p-5 h-[600px] flex flex-col">
      <h2 className="text-xl font-semibold mb-4">AI Finance Assistant</h2>

      <div className="flex-1 space-y-3 text-sm text-gray-700 overflow-auto">
        <div className="bg-slate-100 p-3 rounded-lg">
          Ask me about your spending trends.
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Why did expenses rise?"
          className="border p-3 rounded w-full"
        />

        <button className="bg-indigo-700 text-white px-4 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
