"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import TagList from "@/components/ui/TagList";

interface ProjectCardProps {
  title: string;
  page: string;
  img: string;
  tags: string[];
  description?: string;
  impact?: string;
  index: number;
}

export default function ProjectCard({
  title,
  page,
  img,
  tags,
  description,
  impact,
  index,
}: ProjectCardProps) {
  return (
    <Link href={page} className="group">
      <motion.article
        className="flex flex-col sm:flex-row gap-6 p-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--background))] transition-all duration-300"
        whileHover={{
          y: -8,
          boxShadow:
            "0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(var(--accent), 0.2)",
          borderColor: "rgba(var(--accent), 0.4)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="sm:w-48 lg:w-56 flex-shrink-0">
          <motion.div
            className="relative overflow-hidden rounded-lg w-full h-32 sm:h-36 bg-gray-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
            />
            <div className="absolute top-3 left-3 bg-[rgb(var(--background))] px-2 py-1 rounded text-xs font-medium z-10">
              0{index + 1}
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg sm:text-xl font-semibold leading-tight group-hover:text-[rgb(var(--accent))] transition-colors duration-200 tracking-tight">
              {title}
            </h3>
            <motion.div
              whileHover={{
                x: 4,
                y: -4,
                scale: 1.1,
              }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight
                size={18}
                className="text-[rgb(var(--foreground-secondary))] group-hover:text-[rgb(var(--accent))] transition-colors duration-200 flex-shrink-0"
              />
            </motion.div>
          </div>
          {description && (
            <p className="text-sm sm:text-base text-[rgb(var(--foreground-secondary))] leading-relaxed">
              {description}
            </p>
          )}
          <div className="flex items-center justify-between mt-auto">
            <TagList tags={tags} />
            {impact && (
              <span className="text-xs font-medium text-[rgb(var(--accent))] bg-[rgb(var(--accent))]/10 px-2 py-1 rounded">
                {impact}
              </span>
            )}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
