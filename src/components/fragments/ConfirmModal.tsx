import carImage from '../../assets/images/img-BeepBeep.png';
import Loading from '../elements/Loading';
interface ConfirmModalProps {
  id: string;
  title: string;
  message: string;
  loading: boolean;
}
const ConfirmModal = ({ title, message, loading, id }: ConfirmModalProps) => {
  return (
    <dialog
      id={id}
      className="modal modal-bottom sm:modal-middle"
      data-testid="dialog"
    >
      <div className="modal-box">
        <div className="modal-action flex flex-col gap-4 justify-center items-center p-6">
          <img src={carImage} alt="car" className="w-32 h-32" />
          <h4 id={`${id}-title`} className="font-bold text-lg">
            {title}
          </h4>
          <p id={`${id}-message`} className="text-gray-500">
            {message}
          </p>
          <div className="flex gap-4">
            <button className="btn btn-error text-white" disabled={loading} data-testid="confirm">
              {loading ? <Loading size="sm" /> : title}
            </button>
            <form method="dialog">
              <button className="btn btn-primary btn-outline">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ConfirmModal;
