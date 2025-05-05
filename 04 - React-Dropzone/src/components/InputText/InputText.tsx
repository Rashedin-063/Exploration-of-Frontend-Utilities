interface InputTextProps {
  className?: string;
  id?: string;
  name: string;
  type?: 'text' | 'email' | 'file';
}

const InputText = ({ id, className = '', type = 'text', name }: InputTextProps) => {
  return (
    <input
      id={id}
      className={`block w-full border-gray-400 rounded bg-slate-700 focus:border-indigo-300  ${className}`}
      type={type}
      name={name}
    />
  );
}

export default InputText;