"use client";
import { useState } from "react";

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (formData: Record<string, string>) => void;
  title: string;
  fields: string[];
}

const AddModal: React.FC<AddModalProps> = ({ isOpen, onClose, onSave, title, fields }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-1/2">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {fields.map((field) => (
          <div key={field} className="mb-4">
            <label className="block font-bold mb-2">{field}</label>
            <input
              type="text"
              className="w-full border px-2 py-1"
              onChange={(e) => handleChange(field, e.target.value)}
            />
          </div>
        ))}
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-500 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
