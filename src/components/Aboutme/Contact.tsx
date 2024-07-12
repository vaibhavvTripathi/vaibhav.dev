import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

const services = [
  {
    title: "Expertise in Web Design",
    description: "I create visually stunning and user-friendly websites.",
  },
  {
    title: "Cutting-Edge Web Development",
    description: "I build modern, responsive, and high-performing websites.",
  },
  {
    title: "Effective Branding Solutions",
    description: "I help you establish a strong and memorable brand identity.",
  },
  {
    title: "Proven SEO Strategies",
    description: "I optimize your website to rank higher in search engines.",
  },
  {
    title: "Reliable Consulting Services",
    description:
      "I provide expert guidance to help your business succeed online.",
  },
];

export default function ContactUsForm() {
  return (
    <div className="mt-10 mx-auto grid md:grid-cols-2 gap-12 mb-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
          <CardDescription>
            Fill out the form below to send me a message.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="How can I help you?"
                rows={4}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="services">Services</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-design">Web Design</SelectItem>
                  <SelectItem value="web-development">
                    Web Development
                  </SelectItem>
                  <SelectItem value="branding">Branding</SelectItem>
                  <SelectItem value="seo">SEO</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
      <div>
        <h2 className="text-3xl font-bold mb-4">Why bother sending message?</h2>
        <p className="text-muted-foreground mb-6">
          {
            " I'm here to help with all your web design, development, branding, SEO, and consulting needs. Don't hesitate to reach out!"
          }
        </p>
        <ul className="grid gap-4 text-muted-foreground">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckIcon className="w-5 h-5 text-primary" />
              <div>
                <h3 className="text-lg">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
