import { AnimatePresence, motion } from 'framer-motion';
import { type Notification } from '../../../types';

const notificationsVariants = {
  initial: { opacity: 0, y: 50, scale: 0.3 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: [1, 0.3], y: 50, transition: { duration: 0.2 } },
};

type NotificationProps = { notification: Notification };

const Notification: React.FC<NotificationProps> = ({ notification }) => {
  const { message, isSuccessful, isShown } = notification;
  const stateClasses = isSuccessful ? 'bg-green-500' : 'bg-red-500';

  return (
    <div
      title="notification"
      className="fixed bottom-5 right-0 z-50 flex w-full items-end"
    >
      <AnimatePresence initial={false}>
        {isShown ? (
          <motion.div
            className={`mx-auto flex h-10 w-3/4 flex-col items-center justify-center rounded-xl sm:ml-auto sm:mr-5 md:h-20 md:w-[300px] ${stateClasses}`}
            variants={notificationsVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <p className={`font-semibold text-slate-100`}>{message}</p>
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notification;
