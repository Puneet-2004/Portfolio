"use client";
import Link from "next/link";

const RibbonBar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/certificates">Certificates</Link>
        <Link href="/achievements">Achievements</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/images">Images</Link>
      </div>
      <div className="flex gap-4">
        <button className="bg-blue-500 px-4 py-2 rounded">Add Certificate</button>
        <button className="bg-green-500 px-4 py-2 rounded">Add Image</button>
      </div>
    </div>
  );
};

export default RibbonBar;
