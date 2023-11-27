import { useForm } from 'react-hook-form'

// zod
import { ContactPersonalSchema, ContactPersonalType } from '@/schema/personal'
import { zodResolver } from '@hookform/resolvers/zod'

export const usePersonal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactPersonalType>({
        resolver: zodResolver(ContactPersonalSchema),
    });

    const onSubmit = (data: ContactPersonalType) => {
        console.log(data);

    }
    return {
        register,
        onSubmit: handleSubmit(onSubmit),
        errors,
    }
}