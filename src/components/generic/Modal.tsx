import Button from './Button';

interface Props {
  isOpen: boolean
  onClose: () => void
  children: any
  title: string
}

const Modal = ({ isOpen, onClose, children, title } : Props) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white
        w-full h-full sm:w-1/2 sm:h-1/2 sm:rounded-xl 
        shadow-xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex flex-row p-2 justify-between shadow-sm text-black'>
          <h3 className='text-2xl'>{title}</h3>
          <Button onClick={onClose} variant={"flat"} className='bg-green-500'>add</Button>
        </div>
        <div className='p-2 overflow-auto'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
