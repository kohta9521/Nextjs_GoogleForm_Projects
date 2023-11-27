import React from 'react'
import { usePersonal } from '@/hooks/usePersonal';

export const Personal = () => {
    const { register, onSubmit, errors } = usePersonal();
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">名前</label>
                    <input
                        id="name"
                        type="text"
                        {...register('name')}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="email">メールアドレス</label>
                    <input
                        id="email"
                        type="text"
                        {...register('email')}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="tel">電話番号</label>
                    <input
                        id="tel"
                        type="text"
                        {...register('telephone')}
                    />
                    {errors.telephone && <p>{errors.telephone.message}</p>}
                </div>
                <div>
                    <label htmlFor="message">お問い合わせ内容</label>
                    <textarea
                        id="message"
                        {...register('message')}
                    />
                    {errors.message && <p>{errors.message.message}</p>}
                </div>
                <button type="submit">送信</button>
            </form>
        </div>
    )
}

export default Personal