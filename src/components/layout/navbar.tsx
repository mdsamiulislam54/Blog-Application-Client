"use client";

import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import SearchBox from "./SearchBox";
import GetUser from "@/hook/useSession/useSession";
import Image from "next/image";
import { ModeToggle } from "../Provider/Theme-Provider/DarkMode";



interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Blog",
      url: "/blog",
      // items: [
      //   {
      //     title: "Blog",
      //     description: "The latest industry news, updates, and info",
      //     icon: <Book className="size-5 shrink-0" />,
      //     url: "#",
      //   },
      //   {
      //     title: "Company",
      //     description: "Our mission is to innovate and empower the world",
      //     icon: <Trees className="size-5 shrink-0" />,
      //     url: "#",
      //   },
      //   {
      //     title: "Careers",
      //     description: "Browse job listing and discover our workspace",
      //     icon: <Sunset className="size-5 shrink-0" />,
      //     url: "#",
      //   },
      //   {
      //     title: "Support",
      //     description:
      //       "Get in touch with our support team or visit our community forums",
      //     icon: <Zap className="size-5 shrink-0" />,
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "About Us",
      url: "/about",
      // items: [
      //   {
      //     title: "Help Center",
      //     description: "Get all the answers you need right here",
      //     icon: <Zap className="size-5 shrink-0" />,
      //     url: "#",
      //   },
      //   {
      //     title: "Contact Us",
      //     description: "We are here to help you with any questions you have",
      //     icon: <Sunset className="size-5 shrink-0" />,
      //     url: "#",
      //   },
      //   {
      //     title: "Status",
      //     description: "Check the current status of our services and APIs",
      //     icon: <Trees className="size-5 shrink-0" />,
      //     url: "#",
      //   },
      //   {
      //     title: "Terms of Service",
      //     description: "Our terms and conditions for using our services",
      //     icon: <Book className="size-5 shrink-0" />,
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "Dashboard",
      url: "/dashboard",
    },

  ],
  auth = {
    login: { title: "Login", url: "/auth/login" },
    signup: { title: "Sign up", url: "/auth/signup" },
  },
  className,
}: Navbar1Props) => {

  const user = GetUser();
  return (
    <section className={cn("py-4 ", className)}>
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href={'/'} className="flex items-center gap-2">

              <h1 className="text-3xl font-bold">DL</h1>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>




          <div className="flex gap-10 items-center">
            <ModeToggle/>
            <SearchBox />
            {user ? (
              <button >
                <Image src={user?.image as string} alt="User Avatar" width={50} height={50} className="rounded-full border-2 border-blue-400" />

              </button>
            ) : (
              <>
                <Button asChild variant="outline">
                  <Link href={auth.login.url}>{auth.login.title}</Link>
                </Button>
                <Button asChild>
                  <Link href={auth.signup.url}>{auth.signup.title}</Link>
                </Button>
              </>
            )}

          </div>



        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={'/'} className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">DL</h1>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={'/'} className="flex items-center gap-2">
                      <h1 className="text-3xl font-bold">DL</h1>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <ModeToggle/>
                  <SearchBox />
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  {
                    user ? (
                      <div className="flex flex-col  gap-5">

                        <Link href="/profile" className="text-md font-semibold">
                          My  Profile
                        </Link>

                        <Button >
                          LogOut
                        </Button>
                      </div>
                    ) : (
                      <>
                        <Button asChild variant="outline">
                          <Link href={auth.login.url}>{auth.login.title}</Link>
                        </Button>
                        <Button asChild>
                          <Link href={auth.signup.url}>{auth.signup.title}</Link>
                        </Button>
                      </>
                    )
                  }
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        asChild
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-md font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        <Link href={item.url}> {item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar };
