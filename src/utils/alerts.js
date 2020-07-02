import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const saveSuccessful = () => {
  MySwal.fire({
    position: "center",
    type: "success",
    title: "Posting has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const dateRangeError = () => {
  MySwal.fire({
    type: "error",
    title: "Date Range Error",
    text: "Please fix your dates",
  });
};
