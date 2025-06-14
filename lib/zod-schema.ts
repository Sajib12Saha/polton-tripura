import { z } from "zod";


export  const contactSchema = z.object({
        name: z.string().min(2, "Name must be at least 2 characters long"),
        phone: z.string().regex(/^\+?[0-9]\d{1,14}$/, "Invalid phone number").optional(),
        email: z.string().email("Invalid email address"),
        subject:z.string().optional(),
        message: z.string().min(3, "Message must be at least 3 characters long"),
        attachment:z.custom<File | null | undefined>()
  .refine(
    (file) =>
      !file ||
      [
        // Images
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/webp",
        // PDF
        "application/pdf",
        // Videos
        "video/mp4",
        "video/quicktime",
        "video/x-msvideo", // AVI
        "video/x-matroska", // MKV
        "video/webm",
        // Photoshop & Illustrator
        "application/vnd.adobe.photoshop",
        "application/postscript",
      ].includes(file.type),
    { message: "Unsupported file type." }
  )
  .refine(
    (file) => !file || file.size <= 30 * 1024 * 1024,
    { message: "File size maximum 30MB." }
  ).nullable()

      });
