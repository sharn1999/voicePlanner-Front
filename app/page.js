'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTelegram, FaMicrophone, FaListUl, FaBell } from 'react-icons/fa'

export default function Home() {
  const [isRussian, setIsRussian] = useState(true)

  useEffect(() => {
    // Yandex Metrika code would go here
  }, [])

  const content = {
    ru: {
      title: 'VoicePlanner - Ваш голосовой планировщик дня',
      description: 'Планируйте свой день с помощью голоса и получайте уведомления через Telegram',
      features: [
        'Голосовое планирование',
        'Генерация плана на день',
        'Уведомления в Telegram',
        'Простой и удобный интерфейс'
      ],
      cta: 'Начать планировать',
      team: [
        { name: 'Олжас Ахметов', role: 'CEO & Основатель' },
      ],
      contact: {
        email: 'o_akhmetov@kbtu.kz',
        phone: '+7 (707) 768 89-88',
        address: 'Казахстан, г. Алматы, ул. Толе Би 59'
      },
      teamTitle: 'Наша команда',
      contactTitle: 'Контакты',
      copyright: 'Все права защищены.'
    },
    en: {
      title: 'VoicePlanner - Your Voice-Activated Day Planner',
      description: 'Plan your day using voice and receive notifications via Telegram',
      features: [
        'Voice planning',
        'Daily plan generation',
        'Telegram notifications',
        'Simple and user-friendly interface'
      ],
      cta: 'Start Planning',
      team: [
        { name: 'Olzhas Akhmetov', role: 'CEO & Founder' },
      ],
      contact: {
        email: 'o_akhmetov@kbtu.kz',
        phone: '+7 (707) 768 89-88',
        address: 'Kazakhstan, Almaty, 59 Tole Bi Street'
      },
      teamTitle: 'Our Team',
      contactTitle: 'Contact Us',
      copyright: 'All rights reserved.'
    }
  }

  const currentLang = isRussian ? content.ru : content.en

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const linkHover = {
    scale: 1.05,
    color: "#3B82F6", // text-blue-500
    transition: { duration: 0.2 }
  }

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>{currentLang.title}</title>
        <meta name="description" content={currentLang.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={currentLang.title} />
        <meta property="og:description" content={currentLang.description} />
        <meta property="og:image" content="https://voiceplanner.kbtu.us/og-image.jpg" />
        <meta property="og:url" content="https://voiceplanner.kbtu.us" />
      </Head>

      <motion.nav 
        className="p-4"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.button 
          onClick={() => setIsRussian(!isRussian)} 
          className="bg-white px-4 py-2 rounded-full shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isRussian ? 'English' : 'Русский'}
        </motion.button>
      </motion.nav>

      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.h1 
            key={currentLang.title}
            className="text-4xl md:text-6xl font-bold text-center mb-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {currentLang.title}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p 
            key={currentLang.description}
            className="text-xl text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {currentLang.description}
          </motion.p>
        </AnimatePresence>

        <motion.div 
          className="flex justify-center mb-16"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {[FaTelegram, FaMicrophone, FaListUl, FaBell].map((Icon, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Icon className={`text-6xl ${['text-blue-500', 'text-red-500', 'text-green-500', 'text-yellow-500'][index]} mr-4`} />
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={isRussian ? 'ru' : 'en'}
            className="grid md:grid-cols-2 gap-8 mb-16"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {currentLang.features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.a 
          href="https://t.me/VoiceDayPlannerBot"
          target="_blank"
          className="block mx-auto bg-blue-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg no-underline text-center w-80"
          whileHover={{ scale: 1.1, boxShadow: "0px 15px 25px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          {currentLang.cta}
        </motion.a>

        <AnimatePresence mode="wait">
          <motion.section 
            key={currentLang.teamTitle}
            className="mt-20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 1 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">{currentLang.teamTitle}</h2>
            <motion.div 
              className="flex justify-center space-x-8"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              {currentLang.team.map((member, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1 }}
                >
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.section 
            key={currentLang.contactTitle}
            className="mt-20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">{currentLang.contactTitle}</h2>
            <motion.div 
              className="text-center"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              <motion.p variants={fadeInUp}>
                Email: <motion.a href={`mailto:${currentLang.contact.email}`} className="text-blue-500" whileHover={linkHover}>{currentLang.contact.email}</motion.a>
              </motion.p>
              <motion.p variants={fadeInUp}>
                Phone: <motion.a href={`tel:${currentLang.contact.phone}`} className="text-blue-500" whileHover={linkHover}>{currentLang.contact.phone}</motion.a>
              </motion.p>
              <motion.p variants={fadeInUp}>{currentLang.contact.address}</motion.p>
            </motion.div>
          </motion.section>
        </AnimatePresence>
      </main>

      <AnimatePresence mode="wait">
        <motion.footer 
          key={currentLang.copyright}
          className="mt-20 bg-gray-100 py-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <p>&copy; 2024 VoicePlanner. {currentLang.copyright}</p>
          {/* AddThis sharing buttons would go here */}
        </motion.footer>
      </AnimatePresence>
    </motion.div>
  )
}