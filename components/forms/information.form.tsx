import { profileSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";


const InformationForm = () => {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      bio: "",
    },
  });
  const onSubmit = (data: z.infer<typeof profileSchema>) => {
    console.log(data);
    // Handle form submission logic here
  };
  return (
    <Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
				<FormField
					control={form.control}
					name='firstName'
					render={({ field }) => (
						<FormItem>
							<Label>First name</Label>
							<FormControl>
								<Input placeholder='Oman' className='bg-secondary'  {...field} />
							</FormControl>
							<FormMessage className='text-xs text-red-500' />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='lastName'
					render={({ field }) => (
						<FormItem>
							<Label>Last name</Label>
							<FormControl>
								<Input placeholder='Ali' className='bg-secondary'  {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='bio'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Bio</FormLabel>
							<FormControl>
								<Textarea placeholder='Enter anyhting about yourself' className='bg-secondary'  {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<Button type='submit' className='w-full bg-blue-500' variant={'outline'} >
					Submit
				</Button>
			</form>
		</Form>
  )
}

export default InformationForm