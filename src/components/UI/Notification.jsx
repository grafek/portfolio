import { AnimatePresence, motion } from "framer-motion";

const notificationsVariants = {
  initial: { opacity: 0, y: 50, scale: 0.3 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: [1, 0.3], y: 50, transition: { duration: 0.2 } },
};

function Notification({ notification }) {
  const { message, isSuccessful, isShown } = notification;
  const stateClasses = isSuccessful ? "bg-green-500" : "bg-red-500";

  return (
    <div
      title="notification"
      className="w-full fixed flex items-end bottom-5 right-0 "
    >
      <AnimatePresence initial={false}>
        {isShown ? (
          <motion.div
            className={`flex flex-col justify-center  sm:ml-auto sm:mr-5 mx-auto items-center w-3/4 md:w-[300px] h-10 md:h-20 rounded-xl ${stateClasses}`}
            positionTransition
            variants={notificationsVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <p className={`font-semibold`}>{message}</p>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
}

export default Notification;
