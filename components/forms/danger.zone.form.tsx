import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { confirmTextSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "../ui/separator";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const DangerZoneForm = () => {
  const form = useForm<z.infer<typeof confirmTextSchema>>({
		resolver: zodResolver(confirmTextSchema),
		defaultValues: { confirmText: '' },
	})
  const onSubmit = (values: z.infer<typeof confirmTextSchema>) => {
    // Handle the form submission logic here
    console.log(values);
  };
  return (
    <>
      <p className="text-xs text-muted-foreground text-center text-gray-500">
        Are you sure you want to delete your account? This action cannot be
        undone.
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <Button className='mt-2 w-full font-spaceGrotesk font-bold bg-red-500' >
						Delete permenantly
					</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <Separator className="my-2 bg-gray-600"/>
          <Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
							<FormField
								control={form.control}
								name='confirmText'
								render={({ field }) => (
									<FormItem>
										<FormDescription>
											Please type <span className='font-bold'>DELETE</span> to confirm.
										</FormDescription>
										<FormControl>
											<Input className='bg-secondary'  {...field} />
										</FormControl>
										<FormMessage className='text-xs text-red-500' />
									</FormItem>
								)}
							/>
							<Button className='w-full font-bold bg-blue-500' >
								Submit
							</Button>
						</form>
					</Form>Form
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DangerZoneForm;

// 3:25 qoldi. next lesson we will start backend components. thanks for all
