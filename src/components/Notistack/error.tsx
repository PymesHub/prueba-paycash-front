import { enqueueSnackbar } from 'notistack';

const errorNotistack = (title: string) => {
  enqueueSnackbar(
    <div className="flex w-full items-center justify-center gap-3">
      {/* Icono de error */}
      <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-white">
        <svg
          className="h-4 w-4 text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2a10 10 0 1 1-10 10A10 10 0 0 1 12 2zm0 18a8 8 0 1 0-8-8 8 8 0 0 0 8 8zm-1-11h2v5h-2zm0 6h2v2h-2z" />
        </svg>
      </div>
      {/* Mensaje de error */}
      <span className="text-white font-medium">{title}</span>
    </div>,
    {
      variant: 'error',
      autoHideDuration: 3000,
      hideIconVariant: true,
      className:
        'bg-red-200 text-base items-center justify-center rounded-lg text-center shadow-lg shadow-red-300',
      anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
    },
  );
};

export { errorNotistack };
