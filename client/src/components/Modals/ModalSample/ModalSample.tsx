import { CustomButton, IconButton } from 'components/Buttons';
import { ForwardedRef, forwardRef } from 'react';
import { CircularProgress } from '@mui/material';
import { ReactComponent as CloseIcon } from 'assets/images/close.svg';
import './ModalSample.scss';

interface ModalSampleProps {
  onConfirm?: () => void;
  onCancel: () => void;
}

const ModalSample = forwardRef((
  { onConfirm, onCancel }: ModalSampleProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {

  return (
    <div
      className="modal-sample"
      ref={ref}
      tabIndex={-1}
    >
      <IconButton
        icon={<CloseIcon />}
        onClick={onCancel}
        size="sm"
        variant="ghost"
        colorScheme="secondary"
        // isLoading //TODO uncomment this line to see the loading state
        spinner={<CircularProgress size={14} color="inherit" />}
      />
      <h2 className="modal-sample__title">
        Do you know how it works?
      </h2>
      <div className="modal-sample__buttons">
        <CustomButton
          text="No, I don't"
          size="sm"
          variant="outline"
          colorScheme="warning"
          onClick={onConfirm}
        />
        <CustomButton
          text="Of course, I do"
          size="sm"
          variant="solid"
          colorScheme="primary"
          onClick={onConfirm}
        />
      </div>
    </div>
  );
});

export default ModalSample;
