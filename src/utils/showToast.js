import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* import { useNavigate } from "react-router-dom"; */

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 900,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    closeButton: false,
    limit: 1,
  });
};
export const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 900,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    closeButton: false,
    limit: 1,
  });
};