import Icon from "@common/components/Icon";
import IconClose from "@common/icons/Close";
import Manufacturing from "./Manufacturing";

// eslint-disable-next-line react/prop-types
const ModalManufacturing = ({ isOpen, onClose }:{isOpen: boolean,onClose: any}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 flex items-center justify-center bg-white z-[1041] overflow-x-auto h-full">
      <div className="bg-white p-5 rounded-lg w-full h-full z-[1042]">
        <button
          onClick={onClose}
          className="fixed flex justify-center items-center w-8 h-8 bg-[rgba(0,0,0,0.6)] rounded-full right-2 top-2"
        >
          <Icon src={IconClose} variant="white" size="" className="w-3 h-3" />
        </button>
        <Manufacturing />
      </div>
    </div>
  );
};

export default ModalManufacturing;