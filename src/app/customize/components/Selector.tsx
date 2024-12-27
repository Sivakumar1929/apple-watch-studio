interface SelectorProps {
  title: string;
  options: { id: string; name: string }[];
  selected: string;
  onSelect: (value: string) => void;
}

export default function Selector({ title, options, selected, onSelect }: SelectorProps) {
  return (
    <div className="selector p-2">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="flex gap-2">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`px-4 py-2 rounded border ${
              selected === option.id
                ? 'bg-blue-500 text-white'
                : 'bg-white text-black'
            } transition-colors duration-200`}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
}
