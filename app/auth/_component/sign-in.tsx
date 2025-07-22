import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/use-auth";
import { emailSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignIn = () => {
  const { setEmail, setStep,  } = useAuth();
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof emailSchema>) {
    // Api call to send verification email
    setStep("verify");
    setEmail(values.email);
  }
  return (
    <div className="w-full">
      <p className="text-muted-foreground text-center text-sm">
        Telegram is a fast and secure messaging app that lets you connect and
        share with people around the world.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label>Email</Label>
                <FormControl>
                  <Input placeholder="Enter email Adress" className=" h-10 bg-secondary "{...field} />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
          <Button variant={"outline"} type="submit" className="w-full bg-blue-500" size={'lg'}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignIn;

