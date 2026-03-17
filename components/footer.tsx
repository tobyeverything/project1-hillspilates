import Link from "next/link"
import { MapPin, Phone, Clock, MessageCircle, Instagram, Facebook } from "lucide-react"

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Book a Class", href: "#book" },
  { label: "New to Pilates?", href: "#new-to-pilates" },
]

const hours = [
  { day: "Monday – Friday", time: "7:00 AM – 9:00 PM" },
  { day: "Saturday", time: "8:00 AM – 6:00 PM" },
  { day: "Sunday", time: "9:00 AM – 3:00 PM" },
]

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted">
      <div className="px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold tracking-tight text-foreground">
              Hills <span className="text-primary">Pilates</span>
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Strength. Balance. Control. A studio where discipline meets flow —
              designed for anyone ready to invest in how their body feels.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary/20"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary/20"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="https://wa.me/message/QSXWVPUKQAUQN1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary/20"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Opening Hours
            </h3>
            <div className="flex flex-col gap-2.5">
              {hours.map((item) => (
                <div key={item.day} className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {item.day}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="size-3" />
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Location */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Find Us
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.google.com/maps/place/Hills+Pilates+-+Bukit+Jalil+City/@3.0518915,101.6710308,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <MapPin className="mt-0.5 size-4 shrink-0" />
                B-12-03, Bukit Jalil City Signature, Pusat Perdagangan Bandar,
                Jalil 7 217, Kuala Lumpur
              </a>
              <a
                href="tel:+60199823031"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4 shrink-0" />
                +60 19-982 3031
              </a>
              <a
                href="https://wa.me/message/QSXWVPUKQAUQN1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <MessageCircle className="size-4 shrink-0" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12 overflow-hidden rounded-xl border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.2!2d101.6710308!3d3.0518915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4bb8554d82a1%3A0x78cd7337f83dbd05!2sHills%20Pilates%20-%20Bukit%20Jalil%20City!5e0!3m2!1sen!2smy!4v1710000000000"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hills Pilates studio location"
          />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hills Pilates. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
