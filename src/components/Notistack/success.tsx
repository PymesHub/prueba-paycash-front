import { enqueueSnackbar } from 'notistack';

const success = (title: string) => {
  enqueueSnackbar(
    <div className="flex w-full items-center justify-center gap-3">
      {/* Icono de éxito */}
      <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-white">
        <svg
          className="h-4 w-4 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2a10 10 0 1 1-10 10A10 10 0 0 1 12 2zm-1 14.59l-3.29-3.3 1.42-1.42L11 13.17l4.88-4.88 1.42 1.42z" />
        </svg>
      </div>
      {/* Mensaje de éxito */}
      <span className="text-white font-medium">{title}</span>
    </div>,
    {
      variant: 'success',
      autoHideDuration: 3000, // Mostrar el mensaje un poco más de tiempo
      hideIconVariant: true, // Oculta el ícono predeterminado de Notistack
      className:
        'bg-green-500 text-base items-center justify-center rounded-lg text-center shadow-lg shadow-green-300',
      anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
    },
  );
};

export { success };
