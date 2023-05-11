import * as z from 'zod';
import { CustomButton, InputSample, ModalSample, ModalWrapper } from 'components';
import { CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { schemaUserForm } from 'data';
import { switchingPages } from 'assets/animation';
import { useBoolean } from 'usehooks-ts';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './MainPage.scss';

type UserForm = z.infer<typeof schemaUserForm>;

function MainPage() {
  const {
    value: isModal,
    setFalse: onCloseModal,
    setTrue: onOpenModal,
  } = useBoolean(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserForm>({
    resolver: zodResolver(schemaUserForm),
    mode: 'onChange',
    delayError: 500,
  });

  const onSubmit = (data: UserForm) => {
    alert(`Your data is valid: ${JSON.stringify(data, null, 2)}`);
    reset();
  };

  return (
    <motion.section
      className="main-page"
      variants={switchingPages}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ overflow: 'hidden' }}
    >
      <div className="main-page__container">
        <h1 className="main-page__title">This is the main page of the app</h1>
        <CustomButton
          type="button"
          text="Open Modal Sample"
          variant="link"
          colorScheme="primary"
          onClick={onOpenModal}
          // isLoading={!isModal} //TODO uncomment this line to see the loading state
          loadingText="Loading..."
          spinner={<CircularProgress size={16} color="inherit" />}
        />
        <form
          className="main-page__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputSample
            register={register}
            label="Name"
            registerName="name"
            errorMessage={errors.name?.message}
          />
          <InputSample
            register={register}
            label="Email"
            registerName="email"
            errorMessage={errors.email?.message}
          />
          <CustomButton type="submit" text="Submit" disabled={!isValid} />
        </form>
      </div>
      <ModalWrapper open={isModal} onClose={onCloseModal}>
        <ModalSample onCancel={onCloseModal} onConfirm={onCloseModal} />
      </ModalWrapper>
    </motion.section>
  );
}

export default MainPage;
