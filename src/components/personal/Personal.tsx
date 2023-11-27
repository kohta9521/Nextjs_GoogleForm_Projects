'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

// scss import
import styles from './Personal.module.scss'

// components import

// zod
import { ContactPersonalSchema, ContactPersonalType } from '@/schema/personal'
import { zodResolver } from '@hookform/resolvers/zod'

const Personal = () => {
    return (
        <div className={styles.personal}>

        </div>
    )
}

export default Personal