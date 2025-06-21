'use client'

import { z } from "zod"
import { Card, CardContent } from "./ui/card"
import { Form, FormField} from "./ui/form"
import { Button } from "./ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CustomForm } from "./ui/custom-form"
import { contactSchema } from "@/lib/zod-schema"
import { useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { sendMailAction } from "@/actions/send-mail"
import { Loader2 } from "lucide-react"



export const FormCard = () =>{

  const [pending, setPending] = useState(false)
  const router = useRouter()
      const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
          name: "",
          email:"",
          subject:"",
          message:"",
          attachment:null,

        },
      })

const onSubmit = async (data: z.infer<typeof contactSchema>) => {
  try {
    setPending(true);

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("name", data.name);
    formData.append("subject", data.subject as string);
    formData.append("message", data.message);

    if (data.attachment instanceof File) {
      formData.append("file", data.attachment);
    }

    const response = await sendMailAction(formData);

    if (!response.success) throw new Error(response.message);

    toast.success(response.message);
    form.reset();
    router.refresh();
  } catch (error: any) {
    console.error("Submission error:", error);
    toast.error(error.message || "Submission error");
  } finally {
    setPending(false);
  }
};
       
    return (
        <Card>
            <CardContent>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <CustomForm field={field} fieldType="input" label="YOUR NAME" placeHolder="your name" important/>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <CustomForm field={field} fieldType="input" label="EMAIL" placeHolder="example@gmail.com" important/>
          )}
        />
            <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <CustomForm field={field} fieldType="input" label="SUBJECT" placeHolder="subject for your email"/>
          )}
        />
             <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <CustomForm field={field} fieldType="textarea" label="YOUR MESSAGE" placeHolder="Write your message..." important/>
          )}
        />
     
          <FormField
         control={form.control}
         name="attachment"
        render={({ field }) => (
        <CustomForm
        field={field}
        fieldType="attachment"
        label="Attachment"
     
    />
  )}
/>

        <Button type="submit" className="w-full hover:bg-primary hover:text-white">{pending ? <Loader2 className="size-4 animate-spin"/> : " SEND MESSAGE"}</Button>
      </form>
    </Form>
            </CardContent>
        </Card>
    )
}
