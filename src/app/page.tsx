'use client'
import React, { useState } from 'react'
import Link from 'next/link'

// scss import
import styles from './page.module.scss'

// components import
import Personal from '@/components/personal/Personal'


export default function Home() {
  // formの切り替えボタン用
  const [ form, setForm ] = useState<'personal' | 'company'>('personal')

  return (
    <div className={styles.mainContent}>
      <h1>Contact</h1>
      <p>お問い合わせフォーム</p>
      <p>
        個人と法人の方でフォームが異なりますのでお気をつけください。<br />
        また、お問い合わせの内容によってはお返事にお時間をいただく場合がございます。ご了承ください。<br />
      </p>
      {/* formはここから */}
      <div className={styles.formBox}>
        <div className={styles.flexButtonBox}>
          <button
            className={`${styles.personalButton} ${form === 'personal' ? styles.active : ''}`}
            onClick={() => setForm('personal')}
          >
            個人の方
          </button>
          <button
            className={`${styles.companyButton} ${form === 'company' ? styles.active : ''}`}
            onClick={() => setForm('company')}
          >
            法人の方
          </button>
        </div>
        {/* formの内容 */}
        <div className={styles.formContent}>
          {form === 'personal' ? (
              <div className={styles.box}>
                <Personal />
              </div>
            ) : (
              <div className={styles.box}>
                <h1>company</h1>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}
