import DangerZoneForm from "@/components/forms/danger.zone.form";
import EmailForm from "@/components/forms/email.form";
import InformationForm from "@/components/forms/information.form";
import NotificationForm from "@/components/forms/notification.form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import {
  LogIn,
  Menu,
  Moon,
  Settings2,
  Sun,
  Upload,
  UserPlus,
  VolumeOff,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const Settings = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button size={"icon"} variant="outline">
            <Menu />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-80 e dark:bg-popover">
          <h2 className="pt-2 pl-2 text-muted-foreground text-gray-300">
            Settings:{" "}
            <span className="text-white ">Bekzodmaxmudov131@gmail.com</span>
          </h2>
          <Separator className="bg-gray-400 my-2" />
          <div className="flex flex-col">
            <div
              className="flex justify-between items-center p-2 hover:bg-hsl(210, 40%, 96.1%) cursor-pointer"
              onClick={() => setIsProfileOpen(true)}
            >
              <div className="flex items-center gap-1 text-foreground">
                <Settings2 size={16} />
                <span className="text-sm text-white">Profile</span>
              </div>
            </div>
            <Separator className="bg-gray-400 my-2" />
            <div className="flex justify-between items-center p-2 hover:bg-hsl(210, 40%, 96.1%) cursor-pointer">
              <div className="flex items-center gap-1">
                <UserPlus size={16} fontVariant={"fontx"} />
                <span className="text-sm text-white">Create contact</span>
              </div>
            </div>
            <Separator className="bg-gray-400 my-2" />
            <div className="flex justify-between items-center p-2 hover:bg-black">
              <div className="flex items-center gap-1">
                <VolumeOff size={16} />
                <span className="text-sm text-white">Mute</span>
              </div>
              <Switch />
            </div>
            <Separator className="bg-gray-400 my-2" />
            <div className="flex justify-between items-center p-2 hover:bg-black 100%, 50%) cursor-pointer">
              <div className="flex items-center gap-1">
                {resolvedTheme === "dark" ? (
                  <Sun size={16} />
                ) : (
                  <Moon size={16} />
                )}
                <span className="text-sm text-white">
                  {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
                </span>
              </div>
              <Switch
                checked={resolvedTheme === "dark"}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
              />
            </div>
            <Separator className="bg-gray-400 my-2" />
            <div className="flex justify-between items-center p-2 cursor-pointer bg-red-500 ">
              <div className="flex items-center gap-1">
                <LogIn size={16} />
                <span className="text-sm text-white">Logout</span>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <Sheet open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <SheetContent side="left" className="w-80 p-2 bg-[#1e1e2f]">
          <SheetHeader>
            <SheetTitle className="text-2xl">My profile</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <Separator className="bg-gray-600 my-2" />
          <div className="mx-auto w-1/2  h-36 relative">
            <Avatar className="w-full h-36">
              <AvatarFallback className="text-6xl uppercase font-spaceGrotesk border-1 border-gray-600">
                MB
              </AvatarFallback>
            </Avatar>
            <Button
              size={"icon"}
              variant={"outline"}
              className="absolute bg-blue-600 right-0 bottom-0 rounded-full"
            >
              <Upload size={16} />
            </Button>
          </div>

          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-secondary px-2">
                Basic information
              </AccordionTrigger>
              <AccordionContent className="px-2 mt-2">
                <InformationForm />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="mt-2">
              <AccordionTrigger className="bg-secondary px-2">
                Email
              </AccordionTrigger>
              <AccordionContent className="px-2 mt-2">
                <EmailForm />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="mt-2">
              <AccordionTrigger className="bg-secondary px-2">
                Notification
              </AccordionTrigger>
              <AccordionContent className="mt-2">
                <NotificationForm />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="mt-2">
              <AccordionTrigger className="bg-secondary px-2">
                Danger zone
              </AccordionTrigger>
              <AccordionContent className="my-2 px-2">
                <DangerZoneForm />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Settings;
