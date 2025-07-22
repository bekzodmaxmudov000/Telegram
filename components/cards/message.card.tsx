import { cn } from "@/lib/utils"
import { FC } from "react"

interface Props{
    isReceived?: boolean
}

const MessageCard: FC<Props> = ({ isReceived })  => {
  return (
    <div className={cn('m-2.5 font-medium text-xs flex', isReceived ? 'justify-start' : 'justify-end')}>
        <div className={cn('relative inline p-2 pl-2.5 pr-12 max-w-full ', isReceived ? 'bg-blue-600/20' : 'bg-gray-400/20')}>
            <p className="text-sm text-white">This is a message</p>
            <span className='text-xs right-1 bottom-0 absolute opacity-60'>✓</span>

            
      </div>
    </div>
  )
}

export default MessageCard