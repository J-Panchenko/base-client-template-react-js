
import { CustomButton } from 'components';
import { ReactComponent as Google } from 'assets/images/welcomePage/logoGoogle.svg';
import { motion } from 'framer-motion';
import { switchingPages } from 'assets/animation';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.scss';

function WelcomePage() {
  const navigate = useNavigate();

  //TODO POINT
  //use this function to join with Google
  const onJoinWithGoogle = () =>
    (window.location.href = process.env.REACT_APP_API_AUTH || '');

  return (
    <motion.section
      className="welcome-page"
      variants={switchingPages}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ overflow: 'hidden' }}
    >
      <div className="welcome-page__container">
        <h1 className="welcome-page__title">
          Welcome to App Template
        </h1>
        <p className="welcome-page__subtitle">
          created by Yuliia Panchenko
        </p>
        <CustomButton
          type="button"
          text="Continue"
          size="lg"
          variant="solid"
          colorScheme="success"
          style={{ width: '320px' }}
          onClick={() => navigate('/main-page')}
        />
        <div className="welcome-page__separator">
          <div className="welcome-page__separator-line" />
          <span className="welcome-page__separator-text">or</span>
          <div className="welcome-page__separator-line" />
        </div>
        <CustomButton
          leftIcon={<Google />}
          text="Join with Google"
          colorScheme="success"
          variant="outline"
          style={{ width: '320px' }}
          onClick={onJoinWithGoogle}
          disabled //TODO delete this line
        />
      </div>
    </motion.section>
  );
}

export default WelcomePage;
