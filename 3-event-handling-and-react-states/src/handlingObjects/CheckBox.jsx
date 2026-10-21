import { Check } from 'lucide-react'

const CheckBox = ({label, checked, onChange, id}) => {
  return (
      <label className="flex gap-4 items-center cursor-pointer">
          <input
              id={id}
              type="checkbox"
              checked={checked}
              onChange={onChange}
              className="hidden"
          />
          <div
              className={`shrink-0 size-6 flex items-center justify-center border-2 border-gray-400 rounded-md transition ${
                  checked ? "bg-accent border-none" : "bg-transparent"
              }`}
          >
              {checked && <Check className="text-black size-4" />}
          </div>
          <span
              className={`flex-1 w-full ${
                  checked ? "line-through text-secondary-text" : "text-white"
              }`}
          >
              {label}
          </span>
      </label>
  );
}

export default CheckBox