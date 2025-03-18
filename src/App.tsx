import React, { useState } from 'react';
import { Coffee, Heart, Calendar, Clock, Send } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { format } from 'date-fns';

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isDateSubmitted, setIsDateSubmitted] = useState(false);
  const [showComfortMessage, setShowComfortMessage] = useState(false);

  const compliments = [
    "Your smile brightens up my whole day ✨",
    "You make everything better just by being you 🌟",
    "Your presence makes my heart skip a beat 💖",
    "You're the sweetest person I know 🍯",
    "Every moment with you is magical ✨",
    "You're absolutely wonderful 🌸",
    "Your laugh is my favorite sound 🎵",
    "You have the most beautiful soul 🦋",
    "Your kindness touches hearts 💝",
    "You're simply irreplaceable 🌺",
    "Time stops when I'm with you ⭐",
    "You're the reason for my smile 🌈",
    "Your eyes hold the universe 🌌",
  ];

  const noTexts = [
    "No 😢",
    "Are you sure? 🥺",
    "Pretty please? ☕️",
    "Don't break my heart 💔",
    "I'll be very sad 😭",
    "I'll pay for coffee! 🎁",
    "But we'll have fun! 🎉",
    "Think again! 🤔",
    "Last chance! 🌟",
    "You're breaking my heart 💔"
  ];

  const yesHandler = () => {
    setYesPressed(true);
  };

  const noHandler = () => {
    setNoCount(noCount + 1);
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 100);
    setPosition({ x: newX, y: newY });
  };

  const getNoButtonText = () => {
    return noTexts[Math.min(noCount, noTexts.length - 1)];
  };

  const getYesButtonSize = () => {
    return noCount * 20 + 16;
  };

  const handleDateSubmit = async () => {
    if (!selectedDate) return;

    try {
      await emailjs.send(
        'service_9wm54o5',
        'template_hovkixn',
        {
          to_email: '11balkishan11@gmail.com',
          date: format(selectedDate, 'MMMM do, yyyy'),
          time: format(selectedDate, 'h:mm aaa'),
        },
        'Ju9casb8PGnStnFgp'
      );
      setIsDateSubmitted(true);
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  if (isDateSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen bg-pink-100 flex items-center justify-center"
      >
        <div className="text-center p-8 rounded-xl bg-white shadow-xl max-w-lg">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Heart className="w-20 h-20 text-pink-500 mx-auto" />
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold text-pink-600 mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Thank you for saying yes! 🎉
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4 text-gray-700"
          >
            <p className="text-xl">
              I'll be looking forward to seeing you on {format(selectedDate!, 'MMMM do')} at {format(selectedDate!, 'h:mm aaa')} 😊
            </p>
            <p className="text-lg text-pink-500 italic">
              "Every moment spent with you is a treasure I'll cherish forever 💝"
            </p>
            <motion.p 
              className="text-gray-600 mt-6"
              animate={{ 
                color: ['#EC4899', '#9D174D', '#EC4899'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Can't wait to share stories, laughs, and create beautiful memories together ✨
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (yesPressed) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-pink-100 flex items-center justify-center p-4"
      >
        <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-xl">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="text-center"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity
              }}
            >
              <Coffee className="w-16 h-16 text-pink-500 mx-auto mb-6" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Yay! Let's plan our coffee date! ☕️
            </h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-gray-600 mb-4">Pick a date and time that works for you:</p>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                minDate={new Date()}
                className="w-full p-3 border rounded-lg text-center"
                placeholderText="Select date and time"
              />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <motion.button
                onClick={() => setShowComfortMessage(!showComfortMessage)}
                className="text-pink-500 underline text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Feeling unsure? Click here 💭
              </motion.button>
              
              <AnimatePresence>
                {showComfortMessage && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-gray-600 text-sm bg-pink-50 p-4 rounded-lg"
                  >
                    <p>Hey, I completely understand if this feels too soon or if you need more time. 
                    There's absolutely no pressure! I really value you and your comfort matters most to me. 
                    Whether it's tomorrow or next month, I'm happy to wait until you feel completely comfortable. 
                    You can always come back to this page whenever you're ready! 🌸</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {selectedDate && (
                <motion.button
                  onClick={handleDateSubmit}
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 flex items-center justify-center gap-2 w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                  Confirm Date
                </motion.button>
              )}
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                transition: { 
                  repeat: Infinity,
                  duration: 2
                }
              }}
              className="text-pink-500 mt-6"
            >
              {compliments[Math.floor(Math.random() * compliments.length)]}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-pink-50 flex items-center justify-center p-4"
    >
      <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-xl">
        <motion.div 
          className="text-center"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <motion.div 
            className="flex justify-center mb-4"
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1],
              transition: { 
                repeat: Infinity,
                duration: 5
              }
            }}
          >
            <Coffee className="w-16 h-16 text-pink-500" />
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
          >
            Would you like to grab a coffee with me?
          </motion.h1>
          <motion.p 
            className="text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I know this amazing coffee place... 🌟
          </motion.p>
          <motion.div 
            className="flex flex-col gap-4"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            <motion.button
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
              style={{ fontSize: `${getYesButtonSize()}px` }}
              onClick={yesHandler}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Yes! <Heart className="inline animate-pulse" />
            </motion.button>
            <motion.button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-8 rounded-full transition-all duration-200"
              style={{
                position: noCount > 0 ? 'absolute' : 'relative',
                left: position.x,
                top: position.y,
              }}
              onMouseEnter={noCount > 0 ? noHandler : undefined}
              onClick={noHandler}
              whileHover={{ scale: noCount === 0 ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
            >
              {getNoButtonText()}
            </motion.button>
          </motion.div>
          <AnimatePresence>
            {noCount > 0 && (
              <motion.p
                className="mt-4 text-pink-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {compliments[noCount % compliments.length]}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default App;