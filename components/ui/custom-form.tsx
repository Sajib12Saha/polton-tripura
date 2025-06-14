import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "./input";
  import { Textarea } from "./textarea"; 
  import { GoStarFill } from "react-icons/go";
import { FileUploader } from "../file-uploader";

  
  interface Props {
    field: any;
    label: string;
    placeHolder?: string;
    fieldType: "input" | "textarea" | "attachment";
    inputType?: "number" | "text";
    important?:boolean;
  }
  
  export const CustomForm = ({
    field,
    placeHolder,
    label,
    fieldType,
    important,
    inputType = "text",
  }: Props) => {
    let FieldComponent;
  
    switch (fieldType) {
      case "textarea":
        FieldComponent = <Textarea placeholder={placeHolder} {...field} className="min-h-36"/>;
        break;
  
      case "attachment":
      FieldComponent = (
      <FileUploader field={field}/>
    )
      break;

      case "input":
      default:
        FieldComponent = <Input placeholder={placeHolder} type={inputType} {...field} />;
        break;
    }
  
    return (
      <FormItem>
        <FormLabel className="text-accent-foreground flex gap-x-2 items-start">
         {label} 
         {important && ( <div className="shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.8)] dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.16)] p-0.5 rounded-full"><GoStarFill className="size-1.5 text-rose-600 dark:text-rose-800"/></div>)}
     
    </FormLabel>
        <FormControl>
          {FieldComponent}
        </FormControl>
        <FormMessage />
      </FormItem>
    );
  };
  