"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import CountUp from "@/components/count-up"

const topRow = [
  { name: "Daye Kwon", initials: "DK", company: "Google Review", text: "This is my first Pilates experience, and I'm loving every class with Valerie. From day one, she carefully checked my body and led me through exercises to strengthen my weaker areas." },
  { name: "Viv", initials: "V", company: "Google Review", text: "I enjoyed my first visit at Hills Pilates under the trial promo with Instructor Valerie. She was very patient and understanding of my abilities. She is also firm and will push you to your max." },
  { name: "phuini", initials: "P", company: "Google Review", text: "Have been coming here consistently and love the place! Place is private, very clean, and aesthetic. Cindy is a great instructor and always makes sure to get a good stretch/workout in for me." },
  { name: "Yong", initials: "Y", company: "Google Review", text: "Very good experience with Hills Pilates. Studio environment is clean and pleasant. Instructors are very patient even with beginner. Bookings are easy to make via app! Highly recommended!" },
  { name: "Cindy Koh", initials: "CK", company: "Google Review", text: "Attended Ann's lesson, sweet and gentle lady. Recommended." },
  { name: "Syafiqah Mazry", initials: "SM", company: "Google Review", text: "I signed up for a trial class. The coach was very technical, explaining all the equipment and my body posture. The coach has a lot of knowledge. Thanks, Hena, for your guidance." },
  { name: "Evelyn Lee", initials: "EL", company: "Google Review", text: "Clean space, good environment, amazing instructors, and a great workout every time." },
  { name: "Sherlyn Lim", initials: "SL", company: "Google Review", text: "Vaness is such a patient and thoughtful Pilates instructor. She takes the time to listen and customises the workouts based on my posture needs. Feeling hopeful about improving my body alignment." },
  { name: "Sophia Lee", initials: "SL", company: "Google Review", text: "I really love the environment here! My instructor Vaness is patient and motivating and she always gives me tips to improve my posture. Since starting Pilates, my posture has gotten so much better." },
  { name: "Nobel Yap", initials: "NY", company: "Google Review", text: "My Pilates instructor Vaness is incredibly professional and attentive. Every session is personalized to my needs, and I can really feel the improvement in my posture and strength. Highly recommended!" },
]

const bottomRow = [
  { name: "Demi Soh", initials: "DS", company: "Google Review", text: "Love the vibe and environment here in Bukit Jalil studio. Instructor is really patient and I have enjoyed the classes very much." },
  { name: "Cai Hua Soh", initials: "CS", company: "Google Review", text: "Professional instructor, great experience with Hills Pilates. I feel refreshed and relaxed after the session — definitely worth the try!" },
  { name: "Gladys Lim", initials: "GL", company: "Google Review", text: "First time visiting this studio with my friend and was coached by instructor Vaness. She guided us through different exercises with the reformer machine based on our fitness level. Class was very challenging but fun, lovely studio environment too!" },
  { name: "Lynn Ai", initials: "LA", company: "Google Review", text: "Wonderful experience at Hills Pilates Bukit Jalil, comfortable environments. My coach Cindy is very professional and friendly. I've been coaching by her around 1 year plus, and I really see the results — my body strength and flexibility improve." },
  { name: "Cassandra Seow", initials: "CS", company: "Google Review", text: "Been doing my sessions here with instructor Enice and my strength and posture has improved a lot. Recommend this place!" },
  { name: "Sylvia Seow", initials: "SS", company: "Google Review", text: "Been having my sessions here for almost a year with instructor Enice and I've seen improvements in my strength and posture. Really recommend this place if you want to experience quality Classical Pilates." },
  { name: "Lai Yee Wong", initials: "LW", company: "Google Review", text: "Patient and experienced instructor, clean and comfortable environment, well maintained equipments. Thank you Ann for a wonderful Pilates experience." },
  { name: "Shreen Hsn", initials: "SH", company: "Google Review", text: "Love my Pilates classes with Violet! She's patient, encouraging, and makes every session fun yet challenging. I always leave feeling stronger and more energised. Highly recommend!" },
  { name: "Amy Koo", initials: "AK", company: "Google Review", text: "Ever since I have found Cherish, me and my duet partner have enjoyed every single session with her. Great studio, aesthetically pleasing and puts you in a different world, quiet and peaceful." },
  { name: "Kee Jia Ying", initials: "KJ", company: "Google Review", text: "Patient and experienced instructor! The studio is so clean, muji style and makes me so relaxed during the class. Always looking forward for the next class." },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-primary text-primary" />
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: typeof topRow[number] }) {
  return (
    <Card className="w-[320px] shrink-0 md:w-[360px]">
      <CardContent className="flex flex-col gap-3">
        <Stars />
        <p className="text-sm leading-relaxed text-muted-foreground">
          &ldquo;{review.text}&rdquo;
        </p>
        <div className="flex items-center gap-3 pt-1">
          <Avatar>
            <AvatarFallback className="text-xs font-semibold">
              {review.initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold leading-tight text-foreground">
              {review.name}
            </p>
            <p className="text-xs text-muted-foreground">{review.company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function Marquee({
  reviews,
  direction = "left",
}: {
  reviews: typeof topRow
  direction?: "left" | "right"
}) {
  return (
    <div className="marquee-row group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div
        className={`flex shrink-0 gap-4 py-2 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>
      <div
        aria-hidden
        className={`flex shrink-0 gap-4 py-2 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>
    </div>
  )
}

function CelebrateFigureLeft() {
  return (
    <svg
      viewBox="0 0 120 300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-72 w-auto md:h-96 lg:h-[28rem]"
    >
      <circle cx="60" cy="30" r="14" />
      <path d="M60 44 L60 55" />
      <path d="M35 60 L85 60" />
      <path d="M48 60 C46 100, 48 140, 52 170" />
      <path d="M72 60 C74 100, 72 140, 62 170" />
      {/* Left arm — raised up */}
      <path d="M35 60 C28 45, 22 30, 18 10" />
      {/* Right arm — raised up */}
      <path d="M85 60 C88 45, 85 30, 80 10" />
      <path d="M52 170 C55 175, 59 175, 62 170" />
      <path d="M52 170 C48 205, 42 245, 38 280" />
      <path d="M38 280 L30 285" />
      <path d="M62 170 C66 205, 72 245, 78 280" />
      <path d="M78 280 L86 285" />
    </svg>
  )
}

function CelebrateFigureRight() {
  return (
    <svg
      viewBox="0 0 120 300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-72 w-auto md:h-96 lg:h-[28rem]"
    >
      <circle cx="60" cy="30" r="14" />
      <path d="M60 44 L60 55" />
      <path d="M35 60 L85 60" />
      <path d="M48 60 C46 100, 48 140, 52 170" />
      <path d="M72 60 C74 100, 72 140, 62 170" />
      {/* Left arm — raised up and out */}
      <path d="M35 60 C25 42, 15 25, 5 8" />
      {/* Right arm — raised up and out */}
      <path d="M85 60 C95 42, 105 25, 115 8" />
      <path d="M52 170 C55 175, 59 175, 62 170" />
      <path d="M52 170 C48 205, 42 245, 38 280" />
      <path d="M38 280 L30 285" />
      <path d="M62 170 C66 205, 72 245, 78 280" />
      <path d="M78 280 L86 285" />
    </svg>
  )
}

export function Reviews() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || !leftRef.current || !rightRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 95%",
        end: "top 40%",
        scrub: 1,
      },
    })

    tl.fromTo(
      leftRef.current,
      { xPercent: -200, opacity: 0 },
      { xPercent: 0, opacity: 1, ease: "none" },
      0
    )

    tl.fromTo(
      rightRef.current,
      { xPercent: 200, opacity: 0 },
      { xPercent: 0, opacity: 1, ease: "none" },
      0
    )

    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      )
    }

    if (marqueeRef.current) {
      const rows = marqueeRef.current.querySelectorAll(".marquee-row")
      gsap.fromTo(
        rows,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: marqueeRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      )
    }

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="reviews" className="relative w-full overflow-hidden">
      <div
        ref={leftRef}
        className="pointer-events-none absolute right-[14%] top-1/2 -translate-y-1/2 text-primary opacity-15"
        aria-hidden="true"
      >
        <CelebrateFigureLeft />
      </div>
      <div
        ref={rightRef}
        className="pointer-events-none absolute right-[3%] top-1/2 -translate-y-1/2 text-primary opacity-15"
        aria-hidden="true"
      >
        <CelebrateFigureRight />
      </div>

      <div className="relative z-10 px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <h2 ref={titleRef} className="font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground opacity-0 sm:text-5xl md:text-6xl">
          What Our Members Say
        </h2>
        <p className="mt-4 text-lg font-semibold text-primary md:text-xl">
          <CountUp to={180} duration={2.5} separator="," />+ five star reviews
        </p>
      </div>

      <div ref={marqueeRef} className="relative z-10 flex flex-col gap-4 pb-20 md:pb-28 lg:pb-32">
        <Marquee reviews={topRow} direction="left" />
        <Marquee reviews={bottomRow} direction="right" />
      </div>
    </section>
  )
}
