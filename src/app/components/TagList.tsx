interface TagListProps {
  tags: string[];
}

export default function TagList({ tags }: TagListProps) {
  return (
    <div>
      {tags.map((tag, i) => (
        <div key={i} className="my-tag">
          {tag}
        </div>
      ))}
    </div>
  );
}
