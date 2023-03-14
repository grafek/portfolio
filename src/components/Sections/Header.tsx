import { SocialMedia } from '../../../types';
import Navbar from '../Navbar';
import { motion } from 'framer-motion';
import { ChangeThemeButton } from '../UI';
import {
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
  BsTelephoneFill,
} from 'react-icons/bs';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';

type HeaderProps = { socials: SocialMedia[]; phoneNumber: string };

const Header: React.FC<HeaderProps> = ({ socials, phoneNumber }) => {
  return (
    <header className={`fixed z-40 w-screen`}>
      <HeaderButtons socials={socials} phoneNumber={phoneNumber} />
      <Navbar />
    </header>
  );
};

export default Header;

type HeaderButtonProps = {
  phoneNumber: string;
  socials: SocialMedia[];
};

const HeaderButtons: React.FC<HeaderButtonProps> = ({
  phoneNumber,
  socials,
}) => {
  const themeCtx = useContext(ThemeContext);
  const headerIconClasses =
    'text-xl md:text-2xl xl:text-3xl cursor-pointer duration-300 hover:scale-110 cursor-pointer duration-300 hover:scale-110 opacity-70';

  const github = socials.find((social) => social.title === 'Github');
  const linkedin = socials.find((social) => social.title === 'LinkedIn');

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 right-0 z-20 flex gap-4 p-4 md:gap-6 md:px-6 "
    >
      <ChangeThemeButton />
      <a href={'#contact'} title={'mail'}>
        <BsEnvelopeFill
          className={`${headerIconClasses} ${themeCtx.themeClasses.text}`}
        />
      </a>
      <a href={`tel:${phoneNumber}`} title={`phone`}>
        <BsTelephoneFill
          className={`${headerIconClasses} ${themeCtx.themeClasses.text}`}
        />
      </a>
      <a
        href={github?.socialLink}
        rel="noreferrer"
        target={'_blank'}
        title={github?.title}
      >
        <BsGithub
          className={`${headerIconClasses} ${themeCtx.themeClasses.text} `}
        />
      </a>
      <a
        href={linkedin?.socialLink}
        rel="noreferrer"
        target={'_blank'}
        title={linkedin?.title}
      >
        <BsLinkedin
          className={`${headerIconClasses} ${themeCtx.themeClasses.text}`}
        />
      </a>
    </motion.div>
  );
};
