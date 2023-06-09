'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import {Tech} from '../sections';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-center flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white text-center">
          EMPIEZA A SER PROACTIVO HOY MISMO
        </h4>
        <a
          href="https://hackaton-2-0.vercel.app/"
          className="flex items-center h-fit py-4 px-6 bg-[#1c1917] rounded-[32px] gap-[12px]"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            LAUNCH WEB APP
          </span>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            Proactive Week
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2022 - 2023 ProactiveWeek. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href="https://twitter.com/proactiveweek">
                <img
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
