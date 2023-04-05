import { AnimatePresence, motion } from 'framer-motion';
import { type Notification } from '../../../types';
import { notificationVariants } from '../../utils/framer';

type NotificationProps = { notification: Notification };

const Notification: React.FC<NotificationProps> = ({ notification }) => {
  const { message, isSuccessful, isShown } = notification;
  const stateClasses = isSuccessful ? 'bg-green-600' : 'bg-red-600';

  return (
    <div
      title="notification"
      className="fixed inset-x-0 top-4 z-50 text-white transition-all duration-700"
    >
      <AnimatePresence initial={false}>
        {isShown ? (
          <motion.div
            className={`${stateClasses} mx-auto flex w-1/2 min-w-fit flex-col items-center justify-center rounded-md px-8 py-2 md:w-72`}
            variants={notificationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <p className={`font-semibold text-slate-100`}>{message}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Notification;
