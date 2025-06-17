"use client";

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

  // Sanitize and extract preview
  const cleanHTML = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: [
      "p", "br", "b", "strong", "i", "em", "u", "s", "ul", "ol", "li",
      "h1", "h2", "h3", "blockquote", "code", "pre", "div", "span", "a"
    ],
    ALLOWED_ATTR: ["class", "href", "target", "rel", "style"],
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
    <Link href={`/blogs/${id}`} className="block hover:shadow-md transition-shadow duration-200">
      <Card className="w-full h-full overflow-hidden flex flex-col justify-between">
        <CardContent className="space-y-3 flex flex-col w-full p-4">
          <div className="relative w-full h-48 sm:h-56 md:h-64">
            <Image
              src={image}
              alt={title}
              fill
              className="rounded-md object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>

          <div className="flex items-center justify-between w-full mt-2">
            <h4 className="text-base md:text-lg font-semibold truncate max-w-[70%] dark:text-gray-300">
              {title}
            </h4>
            <span className="text-sm text-muted-foreground whitespace-nowrap">{formattedDate}</span>
          </div>

          <p
            className="text-sm text-muted-foreground line-clamp-3"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(previewText) }}
          />
        </CardContent>
      </Card>
    </Link>
  );
};
