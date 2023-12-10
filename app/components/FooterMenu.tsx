import React from "react";

export default function FooterMenu({
  title,
  list,
}: {
  title: string;
  list: string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-sm text-gray-400">{title}</h4>
      {list.map((item, index) => (
        <p key={index} className="text-xs text-gray-900">
          {item}
        </p>
      ))}
    </div>
  );
}
