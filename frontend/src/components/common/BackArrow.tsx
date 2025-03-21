import { useNavigate } from 'react-router-dom';

interface BackArrowProps {
  label?: string;
}

const BackArrow = ({ label }: BackArrowProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('..')}
      className="block min-h-6 min-w-6 cursor-pointer bg-[url(/icons/left.svg)] bg-no-repeat"
    >
      {label && <div className="pl-[28px]">{label}</div>}
    </button>
  );
};

export default BackArrow;
