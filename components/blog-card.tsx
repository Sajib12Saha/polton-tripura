"use client";

import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { BlogType } from "@/types/type";

interface Props {
  blog: BlogType;
}

export const BlogCard = ({ blog }: Props) => {
  const { id, title, description, date } = blog;

  // Short description preview
  const previewDescription =
    description.length > 120 ? description.slice(0, 120) + "..." : description;

  return (
    <Link
      href={`/blogs/${id}`}
      className="block hover:shadow-lg transition-shadow duration-300"
    >
      <Card className="w-full h-full flex flex-col justify-between overflow-hidden">
        <CardContent className="flex flex-col gap-4 p-4">
          {/* Title and Date */}
          <div className="flex items-center justify-between">
            <h4 className="text-lg md:text-xl font-semibold truncate max-w-[70%] dark:text-gray-300">
              {title}
            </h4>
      <span className="text-sm text-muted-foreground">
  {new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })}
</span>

          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-muted-foreground line-clamp-3">
            {previewDescription}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
