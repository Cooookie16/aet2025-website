// ===[ 首頁 Home ]===
"use client";

// 樣式
import styles from "../../styles/common/index.module.css";

// 組件：Header 已完成，僅引用
import Header from "../../components/header";

// Next 功能
import Image from "next/image";

// 動畫套件
import { motion } from "framer-motion";

// 圖片（暫以專案既有 PNG 示意左右英雄與 CTA 背景）
import heroLeft from "../../public/images/berry.png";
import heroRight from "../../public/images/jennet.png";

export default function Home() {
  return (
    <div className="global_wrapper">
      {/* Header：已完成，不重新製作 */}
      <div className={styles.header_container}>
        <Header />
      </div>

      <main className={styles.main}>
        {/* Hero 區塊 */}
        <section className={styles.hero}>
          <motion.div
            className={styles.heroLeft}
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <Image
              src={heroLeft}
              alt="左側英雄"
              className={styles.heroImage}
              priority
            />
          </motion.div>

          <motion.div
            className={styles.heroCenter}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className={styles.heroTitle}>AET 2025</h1>
            <p className={styles.heroSubtitle}>你準備好了嗎？</p>
            <motion.a
              href="#register"
              className={styles.ctaButton}
              whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(255,153,0,0.65)" }}
              whileTap={{ scale: 0.98 }}
            >
              報名比賽
            </motion.a>
          </motion.div>

          <motion.div
            className={styles.heroRight}
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <Image
              src={heroRight}
              alt="右側英雄"
              className={styles.heroImage}
              priority
            />
          </motion.div>
        </section>

        {/* 賽事介紹區 */}
        <section id="about" className={styles.about}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2>關於 AET 賽事</h2>
              <p>
                自 2021 年起，我們每年舉辦《荒野亂鬥》電競賽事，集結各路菁英玩家，以最熱血、最公平、最具觀賞性的賽制，打造屬於台灣玩家的頂尖舞台。AET
                不僅是實力的對決，更是戰術與團隊默契的角力場。從線上資格賽到總決賽，我們提供完善的賽制流程、專業賽評轉播與高規格舞台，讓每一位選手都能在聚光燈下發光。2025
                年，我們將以更高的獎金、更刺激的地圖與模式，邀請來自海內外的強者，與你一同改寫歷史！
              </p>
            </div>
            <div className={styles.aboutImage}>
              <Image src={heroLeft} alt="賽事宣傳圖" className={styles.aboutImg} />
            </div>
          </div>
        </section>

        {/* 賽事亮點區 */}
        <section id="highlights" className={styles.highlights}>
          <h2>本屆賽事亮點</h2>
          <div className={styles.highlightsGrid}>
            <motion.div
              className={styles.card}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
            >
              <div className={styles.cardIcon}>💰</div>
              <h3 className={styles.cardTitle}>更高獎金</h3>
              <p className={styles.cardDesc}>總獎金池全面升級，實力越強，榮耀與獎勵越豐厚！</p>
            </motion.div>

            <motion.div
              className={styles.card}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
            >
              <div className={styles.cardIcon}>🗺️</div>
              <h3 className={styles.cardTitle}>全新地圖與模式</h3>
              <p className={styles.cardDesc}>策略大洗牌，掌握版本趨勢，才能一路過關斬將。</p>
            </motion.div>

            <motion.div
              className={styles.card}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
            >
              <div className={styles.cardIcon}>🌍</div>
              <h3 className={styles.cardTitle}>國際頂尖選手參賽</h3>
              <p className={styles.cardDesc}>海內外強者雲集，與世界級對手正面交鋒！</p>
            </motion.div>

            <motion.div
              className={styles.card}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
            >
              <div className={styles.cardIcon}>📡</div>
              <h3 className={styles.cardTitle}>現場與線上同步直播</h3>
              <p className={styles.cardDesc}>高畫質轉播、專業賽評，無論身在何處都不錯過每一刻高潮！</p>
            </motion.div>
          </div>
        </section>

        {/* Call-to-Action 區 */}
        <section id="register" className={styles.cta}>
          <div className={styles.ctaInner}>
            <h2>別錯過年度最盛大的《荒野亂鬥》電競盛事！</h2>
            <p>立即加入我們的戰場！</p>
            <motion.a
              href="#register"
              className={styles.ctaButtonAlt}
              whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(0,153,255,0.65)" }}
              whileTap={{ scale: 0.98 }}
            >
              報名比賽
            </motion.a>
          </div>
        </section>
      </main>
    </div>
  );
}