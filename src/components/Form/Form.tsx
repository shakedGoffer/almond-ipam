
interface FormProps extends React.InputHTMLAttributes<HTMLFormElement>{
  children: React.ReactNode;
  rootError?: string;
}

const Form = ({ children, rootError, ...props}:FormProps) => {

  return (
    <form className='flex flex-col gap-4' {...props}>
      {children}
      {rootError && (
        <div className='text-center text-sm text-red-500'>{rootError}</div>
      )}
    </form>
  );
};

export default Form;
