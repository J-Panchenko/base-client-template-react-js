import { Backdrop, Fade, Modal } from '@mui/material';

// TODO POINT
// Prefer @mui/material or @chakra-ui/react
// This tamplate is for @mui/material
// https://mui.com/components/modal/#modal
// If you want to use @chakra-ui/react, you can use this template:
// https://chakra-ui.com/docs/overlay/modal

interface ModalWrapperProps {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
}

function ModalWrapper({
  open,
  onClose,
  children,
}: ModalWrapperProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          style: { backdropFilter: 'blur(1px)' },
        },
      }}
    >
      <Fade in={open}>
        {children}
      </Fade>
    </Modal>
  );
}

export default ModalWrapper;
