"use client";

interface EditButtonProps {
  onClick: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-gray-500 px-4 py-2 rounded mt-4"
      onClick={onClick}
    >
      Edit Info
    </button>
  );
};

export default EditButton;
