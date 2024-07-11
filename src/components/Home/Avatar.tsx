import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Item } from "@radix-ui/react-navigation-menu";

export function MyAvatar({
  url,
  alt,
  fallback,
}: {
  url?: string;
  alt?: string;
  fallback?: string;
}) {
  return (
    <Avatar>
      <AvatarImage src={url} alt={alt ?? "an-image"} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
