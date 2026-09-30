import React, { useState } from "react";
import { X } from "lucide-react";

export default function AddMemoryModal({ open, onClose, onAdded }) {
  const [image, setImage] = useState("");
  const [note, setNote] = useState("");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image || !note) return;
    onAdded({ image, note });
    setImage("");
    setNote("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-3xl bg-cream p-6 soft-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading text-xl text-plum">Add a New Memory</h3>
          <button onClick={onClose} className="text-plum/70 hover:text-plum">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-plum/60 mb-1">
              Image URL
            </label>
            <input
              type="url"
              required
              placeholder="https://example.com/photo.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full rounded-xl border border-rosewood/20 bg-white px-4 py-2 text-plum text-sm focus:outline-none focus:ring-2 focus:ring-rosewood/40"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-plum/60 mb-1">
              Note / Caption
            </label>
            <textarea
              required
              rows={3}
              placeholder="Write a sweet memory..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full rounded-xl border border-rosewood/20 bg-white px-4 py-2 text-plum text-sm focus:outline-none focus:ring-2 focus:ring-rosewood/40"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-rosewood py-3 text-cream font-medium shadow transition-transform hover:-translate-y-0.5"
          >
            Save Memory
          </button>
        </form>
      </div>
    </div>
  );
}
