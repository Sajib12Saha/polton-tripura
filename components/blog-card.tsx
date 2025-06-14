'use client';

import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import { BlogType } from "@/types/type";

interface Props {
  blog: BlogType;
}

export const BlogCard = ({ blog }: Props) => {
  const { id, title, image, content, createdAt } = blog;

  // Create a clean HTML snippet and truncate (optional: strip tags manually)
  const cleanHTML = DOMPurify.sanitize(content, {
              ALLOWED_TAGS: [
    'p', 'br', 'b', 'strong', 'i', 'em', 'u', 's', 'ul', 'ol', 'li',
    'h1', 'h2', 'h3', 'blockquote', 'code', 'pre',
    'div', 'span', 'a'
  ],
  ALLOWED_ATTR: ['class', 'href', 'target', 'rel', 'style'],
  });
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = cleanHTML;
  const plainText = tempDiv.textContent || tempDiv.innerText || "";

  const previewText = plainText.split(" ").slice(0, 20).join(" ") + "...";

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div>
      <Link href={`/blogs/${id}`}>
        <Card>
          <CardContent className="space-y-3 flex flex-col items-start justify-center w-full p-4">
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              className="object-contain rounded-lg w-full shadow-md"
            />

            <div className="flex items-center justify-between w-full">
              <h4 className="text-lg font-semibold dark:text-gray-300">
                {title}
              </h4>
              <span className="text-sm text-muted-foreground">{formattedDate}</span>
            </div>

            <p
              className="text-sm text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(previewText) }}
            />
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};
