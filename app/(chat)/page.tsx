"use client";
import { Contact, Loader2 } from "lucide-react";
import ContactList from "./_components/contact-list";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AddContact from "./_components/add-contact";
import { useCurrentContact } from "@/hooks/use-current";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { emailSchema, messageSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import TopChat from "./_components/top-chat";
import Chat from "./_components/chat";

const HomePage = () => {
  const { currentContact } = useCurrentContact();
  const router = useRouter();

  const contactForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });
  const messageForm = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      text: "",
      image: "",
    },
  });

  useEffect(() => {
    router.replace("/");
    console.log("log");
  }, []);

  const onCreateContact = (values: z.infer<typeof emailSchema>) => {
    // Api call to create contact
    console.log(values);
  }
  const onSendMessage = (values: z.infer<typeof messageSchema>) => {
    // Api call to send message
    console.log(values);
  }
  return (
    <>
      {/* sidebar */}
      <div className="w-80 h-screen border-r fixed inset-0 z-50">
        {/* <div className="w-full h-200 flex justify-center items-center">
          <Loader2 size={50} className="animate-spin "/>
        </div> */}

        {/* Contact list */}
        <ContactList contacts={Contacts} />
      </div>
      {/* chat area */}
      <div className="pl-80 w-full">
        {/* Add contact */}
        {!currentContact?._id && <AddContact contactForm={contactForm} onCreateContact={onCreateContact} />}
        {/* chat */}
        {currentContact?._id && <div className="w-full relative">
            {/* Top Chat */}
            <TopChat/>

            {/* Chat messages */}
            <Chat messageForm={messageForm} onSendMessage={onSendMessage}/>
          </div>}
      </div>
    </>
  );
};

const Contacts = [
  {
    email: "john@gmail.com",
    _id: "1",
    avatar: "https://github.com/shadcn.png",
    firstName: 'John',
    lastName: 'Doe',
    bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti enim asperiores illo perspiciatis maxime dignissimos perferendis similique, praesentium amet rem, laborum eveniet cumque cupiditate optio eos vitae autem harum quia porro, assumenda fuga. Pariatur, iste molestias architecto porro ex dicta ut quam repudiandae. Nostrum ea deserunt quod sit provident dolore.'
  }, 
  { email: "Doe@gmail.com", _id: "2" },
  { email: "alex@gmail.com", _id: "3" },
  { email: "Lincelin@gmail.com", _id: "4" },
  { email: "Self@gmail.com", _id: "5" },
];

export default HomePage;
