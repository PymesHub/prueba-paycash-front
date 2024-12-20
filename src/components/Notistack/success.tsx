import { enqueueSnackbar } from "notistack";

const success = (title: string) => {
  enqueueSnackbar(
    <div className="flex w-full items-center justify-center gap-3">
      <span className="text-white font-medium">{title}</span>
    </div>,
    {
      variant: "success",
      autoHideDuration: 1000,
      hideIconVariant: true,
      className:
        "bg-green-500 text-base items-center justify-center rounded-lg text-center shadow-lg shadow-green-300",
      anchorOrigin: { horizontal: "center", vertical: "bottom" },
    },
  );
};

export { success };
