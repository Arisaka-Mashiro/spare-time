/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rF7n3jfuvRc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CollapsibleTrigger, Collapsible } from "@/components/ui/collapsible"

export default function Component() {
  return (
    <div className="max-w-6xl mx-auto p-4 lg:px-6 sm:py-8 md:py-10">
      <header className="hidden sm:flex justify-between items-center pb-4 sm:pb-8">
        <h1 className="text-xl lg:text-3xl font-semibold tracking-tight">Michelin Star Restaurant Reservation</h1>
        <div className="flex items-center gap-1 sm:ml-auto">
          <Button className="rounded-md gap-1 underline underline-offset-2" size="sm" variant="ghost">
            <ShareIcon className="w-4 h-4" />
            Share
          </Button>
          <Button className="rounded-md gap-1 underline underline-offset-2" size="sm" variant="ghost">
            <HeartIcon className="w-4 h-4" />
            Favorite
          </Button>
        </div>
      </header>
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <div className="relative h-[400px] sm:h-[600px] rounded-xl overflow-hidden" />
          <div className="flex items-center justify-between pt-4">
            <div>
              <h2 className="text-2xl font-semibold">Grace Restaurant</h2>
              <p className="text-gray-500 dark:text-gray-400">123 Main St, Anytown USA</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
              <div className="text-lg font-semibold">4.8</div>
            </div>
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Reserve a Table</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button className="w-full flex-col h-auto items-start" variant="outline">
                          <span className="font-semibold uppercase text-[0.65rem]">Date</span>
                          <span className="font-normal">April 15, 2023</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 max-w-[276px]">
                        <Calendar />
                      </PopoverContent>
                    </Popover>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button className="w-full flex-col h-auto items-start" variant="outline">
                          <span className="font-semibold uppercase text-[0.65rem]">Time</span>
                          <span className="font-normal">7:00 PM</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 max-w-[276px]">
                        <div className="grid grid-cols-3 gap-2 p-4">
                          <Button className="rounded-md" size="sm" variant="ghost">
                            6:00 PM
                          </Button>
                          <Button className="rounded-md" size="sm" variant="ghost">
                            7:00 PM
                          </Button>
                          <Button className="rounded-md" size="sm" variant="ghost">
                            8:00 PM
                          </Button>
                          <Button className="rounded-md" size="sm" variant="ghost">
                            9:00 PM
                          </Button>
                          <Button className="rounded-md" size="sm" variant="ghost">
                            10:00 PM
                          </Button>
                          <Button className="rounded-md" size="sm" variant="ghost">
                            11:00 PM
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <Select>
                    <SelectTrigger className="h-auto">
                      <SelectValue
                        placeholder={
                          <div className="flex flex-col items-start">
                            <span className="font-semibold uppercase text-[0.65rem]">Guests</span>
                            <span className="font-normal">2 people</span>
                          </div>
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 person</SelectItem>
                      <SelectItem value="2">2 people</SelectItem>
                      <SelectItem value="3">3 people</SelectItem>
                      <SelectItem value="4">4 people</SelectItem>
                      <SelectItem value="5">5 people</SelectItem>
                      <SelectItem value="6">6 people</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full h-12" size="lg">
                    Reserve
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <section className="py-8 grid md:grid-cols-2 lg:grid-cols-[400px_1fr] gap-8 sm:gap-12 md:gap-16 items-start">
        <div className="grid gap-4 row-start-1 md:row-start-auto">
          <Card>
            <CardHeader>
              <CardTitle>Reserve a Table</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button className="w-full flex-col h-auto items-start" variant="outline">
                          <span className="font-semibold uppercase text-[0.65rem]">Date</span>
                          <span className="font-normal">April 15, 2023</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 max-w-[276px]">
                        <Calendar />
                      </PopoverContent>
                    </Popover>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button className="w-full flex-col h-auto items-start" variant="outline">
                          <span className="font-semibold uppercase text-[0.65rem]">Time</span>
                          <span className="font-normal">7:00 PM</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 max-w-[276px]">
                        <div className="grid grid-cols-3 gap-2 p-4">
                          <Button className="rounded-md" size="sm" variant="ghost">
                            6:00 PM
                          </Button>
                          <Button className="rounded-md" size="sm" variant="ghost">
                            7:00 PM
                          </Button>
                          <Button className="rounded-md" size="sm" variant="ghost">
                            8:00 PM
                          </Button>
                          <Button className="rounded-md" size="sm" variant="ghost">
                            9:00 PM
                          </Button>
                          <Button className="rounded-md" size="sm" variant="ghost">
                            10:00 PM
                          </Button>
                          <Button className="rounded-md" size="sm" variant="ghost">
                            11:00 PM
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <Select>
                    <SelectTrigger className="h-auto">
                      <SelectValue
                        placeholder={
                          <div className="flex flex-col items-start">
                            <span className="font-semibold uppercase text-[0.65rem]">Guests</span>
                            <span className="font-normal">2 people</span>
                          </div>
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 person</SelectItem>
                      <SelectItem value="2">2 people</SelectItem>
                      <SelectItem value="3">3 people</SelectItem>
                      <SelectItem value="4">4 people</SelectItem>
                      <SelectItem value="5">5 people</SelectItem>
                      <SelectItem value="6">6 people</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full h-12" size="lg">
                    Reserve
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-8 row-start-2 md:row-start-auto">
          <div className="hidden md:flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Grace Restaurant, Anytown USA</h2>
            <p className="text-gray-500 dark:text-gray-400">Michelin Star Restaurant · Reservations Required</p>
          </div>
          <Card>
            <CardContent className="p-4 sm:p-6 flex items-center gap-6 relative">
              <AwardIcon className="w-10 h-10" />
              <div className="flex-1 font-semibold max-w-[16rem] hidden sm:flex md:hidden lg:flex">
                One of the most prestigious restaurants in the country, according to Michelin.
              </div>
              <div className="flex items-center gap-6 ml-auto">
                <div className="flex flex-col gap-1 text-center">
                  <div className="text-2xl font-semibold tracking-tighter">4.9</div>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                  </div>
                </div>
                <Separator className="h-9" orientation="vertical" />
                <div className="flex flex-col gap-0.5 text-center">
                  <div className="text-2xl font-semibold tracking-tighter">1,245</div>
                  <div className="text-xs underline font-semibold">Reviews</div>
                </div>
              </div>
              <Link className="absolute inset-0" href="#">
                <span className="sr-only">View reviews</span>
              </Link>
            </CardContent>
          </Card>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <Avatar className="w-10 h-10 border">
                <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Chef John Doe</div>
              <div className="text-gray-500 text-sm dark:text-gray-400">Head Chef · Michelin Star Recipient</div>
            </div>
          </div>
          <Separator />
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <CalendarCheckIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Reservations Required</div>
              <div className="text-gray-500 text-sm dark:text-gray-400">
                Reservations are required to dine at Grace Restaurant.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <MedalIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Michelin Star Restaurant</div>
              <div className="text-gray-500 text-sm dark:text-gray-400">
                Grace Restaurant has been awarded the prestigious Michelin Star.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <MapPinIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Convenient Location</div>
              <div className="text-gray-500 text-sm dark:text-gray-400">
                Grace Restaurant is located in the heart of downtown Anytown.
              </div>
            </div>
          </div>
          <Separator />
          <div className="prose">
            <p>
              Welcome to Grace Restaurant, a Michelin Star dining experience in the heart of Anytown. Our award-winning
              chef, John Doe, has crafted a menu that showcases the finest local and seasonal ingredients, creating a
              truly unforgettable culinary journey.
            </p>
            <p>
              Reservations are required to dine at Grace Restaurant, as we maintain a limited seating capacity to ensure
              an intimate and personalized experience for our guests. We invite you to explore our available reservation
              slots and secure your table today.
            </p>
            <Collapsible>
              <CollapsibleTrigger className="font-semibold flex items-center gap-1 [&[data-state=open]>svg]:-rotate-90">
                Show more
                <ChevronRightIcon className="w-4 h-4 translate-y-px transition-all" />
              </CollapsibleTrigger>
            </Collapsible>
          </div>
        </div>
      </section>
    </div>
  )
}

function AwardIcon(props) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}


function CalendarCheckIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  )
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function MedalIcon(props) {
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
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  )
}


function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}