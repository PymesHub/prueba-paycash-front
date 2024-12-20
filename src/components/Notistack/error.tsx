import { enqueueSnackbar } from "notistack";

const errorNotistack = (title: string) => {
  enqueueSnackbar(
    <div className="flex w-full items-center justify-center gap-3">
      <span className="text-white font-medium">{title}</span>
    </div>,
    {
      variant: "error",
      autoHideDuration: 3000,
      hideIconVariant: true,
      className:
        "bg-red-200 text-base items-center justify-center rounded-lg text-center shadow-lg shadow-red-300",
      anchorOrigin: { horizontal: "center", vertical: "bottom" },
    },
  );
};

export { errorNotistack };
