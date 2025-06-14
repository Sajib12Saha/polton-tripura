import { useRef, useState } from "react";
import Image from "next/image";
import { X, FileText, FileImage, File } from "lucide-react";

interface Props {
  field: any;
}

export const FileUploader = ({ field }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const getFileType = (file: File) => {
    const type = file.type;
    const name = file.name.toLowerCase();

    if (type.startsWith("image/")) return "image";
    if (type === "application/pdf" || name.endsWith(".pdf")) return "pdf";
    if (type === "application/vnd.adobe.photoshop" || name.endsWith(".psd")) return "psd";
    if (type === "application/postscript" || name.endsWith(".ai")) return "ai";

    return "other";
  };

  const file = field.value;
  const fileType = file ? getFileType(file) : null;

  return (
    <div className="w-full space-y-2">
      <div
        onClick={() => !file && fileInputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          const droppedFile = e.dataTransfer.files[0];
          if (droppedFile) {
            field.onChange(droppedFile);
          }
        }}
        className={`relative w-full flex justify-center items-center px-4 py-6 border-2 border-dashed rounded-md cursor-pointer transition text-center ${
          dragActive ? "border-purple-500 bg-card" : "border-primary"
        }`}
      >
        <input
          type="file"
          accept="image/*,application/pdf,.psd,.ai"
          ref={fileInputRef}
          className="hidden"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) {
              field.onChange(selectedFile);
            }
          }}
        />

        {file ? (
          <div className="relative group flex flex-col items-center">
            {fileType === "image" && (
              <Image
                src={URL.createObjectURL(file)}
                alt="Preview"
                width={150}
                height={150}
                className="object-cover rounded-md"
              />
            )}

            {fileType === "pdf" && (
              <div className="flex flex-col items-center justify-center text-muted-foreground">
                <FileText size={48} />
                <span className="text-sm mt-1">PDF File</span>
              </div>
            )}

            {fileType === "psd" && (
              <div className="flex flex-col items-center justify-center text-muted-foreground">
                <FileImage size={48} />
                <span className="text-sm mt-1">Photoshop (.psd)</span>
              </div>
            )}

            {fileType === "ai" && (
              <div className="flex flex-col items-center justify-center text-muted-foreground">
                <FileImage size={48} />
                <span className="text-sm mt-1">Illustrator (.ai)</span>
              </div>
            )}

            {fileType === "other" && (
              <div className="flex flex-col items-center justify-center text-muted-foreground">
                <File size={48} />
                <span className="text-sm mt-1">{file.name}</span>
              </div>
            )}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                field.onChange(null);
              }}
              className="absolute top-1 right-1 p-1 rounded-full bg-foreground shadow hover:bg-foreground/80 transition cursor-pointer text-rose-700"
            >
              <X className="size-2.5" />
            </button>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            Drag & drop or click to upload image, PDF, PSD, or AI file
          </p>
        )}
      </div>
    </div>
  );
};
