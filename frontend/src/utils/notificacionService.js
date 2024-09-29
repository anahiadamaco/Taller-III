import { toast, Zoom } from 'react-toastify';

export const notify = (message, type = 'default') => {
  const options = {
    position: toast.POSITION.TOP_CENTER,
    transition: Zoom,
  };

  switch (type) {
    case 'success':
      toast.success(message, options);
      break;
    case 'error':
      options.position = toast.POSITION.TOP_LEFT;
      toast.error(message, options);
      break;
    case 'warning':
      options.position = toast.POSITION.BOTTOM_LEFT;
      toast.warning(message, options);
      break;
    case 'info':
      options.position = toast.POSITION.BOTTOM_RIGHT;
      toast.info(message, options);
      break;
    default:
      toast(message, {
        ...options,
        className: 'foo-bar',
        theme: 'light',
      });
      break;
  }
};
