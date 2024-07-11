import { Badge } from "../ui/badge";

export default function SkillBadge({ value }: { value: string }) {
  return (
    <Badge
      variant="outline"
      className="bg-muted text-foreground hover:shadow-lg hover:cursor-pointer transition-shadow duration-300 ease-in-out"
    >
      {value}
    </Badge>
  );
}
