"use client"
import { Iuser } from '@/types'
import React, { FC } from 'react'
import Settings from './settings'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useCurrentContact } from '@/hooks/use-current'

interface Props{
    contacts: Iuser[]
}
const ContactList: FC<Props> = ({contacts}) => {
    const router = useRouter()
    const {setCurrentContact, currentContact} = useCurrentContact()
    const renderContact = (contact: Iuser) => {
        const onChat = () => {
            if (currentContact?._id === contact._id) return
            console.log('chatting with', contact.email)
            setCurrentContact(contact)
            router.push(`/?chat=${contact._id}`)
        }
        return (
            <div key={contact._id} className={cn('flex justify-between items-center cursor-pointer hover:bg-secondary/50 p-2', currentContact?._id === contact._id && 'bg-gray-600')} onClick={onChat}>
                <div className='flex items-center gap-2'>
                    <div className='relative'>
                        <Avatar className='w-10 h-10 rounded-full z-40' >
                            <AvatarImage src={contact.avatar} alt={contact.email} className='object-cover' />
                            <AvatarFallback className='uppercase'>
                               {contact.email[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className='size-3 bg-green-500 absolute rounded-full bottom-0 right-0 !z-50'></div>
                    </div>
                    <div>
                        <h2 className='capitalize line-clamp-1 text-sm'>{contact.email.split('@')[0]}</h2>
                        <p className='text-xs line-clamp-1 text-muted-foreground'>No messages yet</p>
                    </div>
                    
                </div>
                <div className='self-end'>
                    <p className='text-xs text-muted-foreground line-clamp-1'>10:30 AM</p>
                </div>
            </div>
        )
    }
  return (
    <>
        {/* Top bar */}
        <div className='flex items-center bg-background pl-2 sticky top-0'>
            <Settings />
            <div className='m-2 w-full'>
                <Input className='bg-secondary' type='text' placeholder='Search...' />
            </div>
        </div>
        {/* Contact list */}
        {contacts.length === 0 && (
            <div className='w-full h-200 flex justify-center items-center text-center text-muted-foreground'>
                <p className='text-lg'>Contact list is empty</p>
            </div>
        )}
        {contacts.map((contact) => renderContact(contact))}
    </>
  )
}

export default ContactList

// 1:42:49 qoldi dars vaqti 