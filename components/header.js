// ===< Header組件 >===
"use client";

// 載入css
import styles from "../styles/components/header.module.css";

// 載入next功能
import Image from "next/image";
import Link from "next/link";

// 載入照片
import logo from "../public/images/test_bonnie_logo.png";
import matchrhino_logo from "../public/icons/matchrhino.png";


export default function Header() {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header}>
        {/* 左側 */}
        <div className={styles.header_left}>
          {/* 左側 Logo */}
          <Link href="/" className={styles.header_logo_clicker} draggable={false} title="~ 點我回到首頁 ~">
            <div className={styles.header_logo}>
              <Image className={styles.header_logo_img} src={logo} alt="aet_2025_logo" width={100} height={100} draggable={false}/>
            </div>
          </Link>
          {/* 左側 Logo End */}
        </div>
        {/* 左側 End */}
        {/* 右側 */}
        <div className={styles.header_right}>
          {/* 關於比賽 - Hover選單 */}
          <div className={styles.dropdown_container}>
            <div className={styles.dropdown_trigger}>
              <span>關於比賽</span>
              <span className={styles.dropdown_arrow}>▼</span>
            </div>
            <div className={styles.dropdown_menu}>
              <Link href="/about" className={styles.dropdown_item}>比賽介紹</Link>
              <Link href="/schedule" className={styles.dropdown_item}>比賽時程</Link>
              <Link href="/prizes" className={styles.dropdown_item}>獎項設置</Link>
            </div>
          </div>

          {/* 賽事規則 */}
          <Link href="/rules" className={styles.nav_link}>
            賽事規則
          </Link>

          {/* 前往MatchRhino按鈕 */}
          <a 
            href="https://matchrhino.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.matchrhino_button}
          >
            <div className={styles.button_icon}>
              <Image src={matchrhino_logo} alt="MatchRhino_logo" draggable={false} height={20} width={20} />
            </div>
            <span className={styles.button_text}>MatchRhino</span>
          </a>

          {/* 賽事Discord按鈕 */}
          <a 
            href="https://discord.gg/your-discord" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.discord_button}
          >
            <div className={styles.button_icon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </div>
            <span className={styles.button_text}>Discord</span>
          </a>
        </div>
      </div>
    </div>
  );
};