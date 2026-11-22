import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { profile } from "@/content/portfolio";
import { ContactForm } from "./contact-form";
import { MotionEntrance } from "./motion-entrance";
import { Heading, Section } from "./section";

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-6">
        <div className="flex min-w-0 flex-col rounded-2xl bg-navy p-5 text-on-navy sm:p-8 lg:p-9">
          <Heading section="contact">Contact</Heading>
          <MotionEntrance revealOnScroll delay={0.08}>
            <p className="mt-3 max-w-sm text-on-navy/85">
              Get in touch about AI engineering roles, projects, or
              collaborations.
            </p>
            <ul className="mt-6 grid gap-2">
              {[
                {
                  title: "Email",
                  label: profile.email,
                  href: `mailto:${profile.email}`,
                  Icon: HiMail,
                },
                {
                  title: "Phone",
                  label: profile.phone,
                  href: `tel:${profile.phoneLink}`,
                  Icon: HiPhone,
                },
              ].map(({ title, label, href, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="flex min-h-14 items-center gap-3 rounded-xl border border-white/15 px-3 py-2.5 text-sm font-medium transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-base"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-white/10 text-accent-hover">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="min-w-0 [overflow-wrap:anywhere]">
                      <span className="block text-xs font-semibold text-on-navy/75">
                        {title}
                      </span>
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2">
              {[
                { label: "LinkedIn", href: profile.linkedin, Icon: FaLinkedin },
                { label: "GitHub", href: profile.github, Icon: FaGithub },
              ].map(({ label, href, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/25 px-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent-hover"
                  >
                    <Icon aria-hidden="true" className="size-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </MotionEntrance>
        </div>
        <MotionEntrance
          entrance="lift"
          revealOnScroll
          delay={0.14}
          className="min-w-0 rounded-2xl border border-line bg-surface p-5 shadow-sm sm:p-8 lg:p-9"
        >
          <h3 className="mb-5 text-2xl font-extrabold tracking-tight">
            Write a message
          </h3>
          <ContactForm email={profile.email} />
        </MotionEntrance>
      </div>
    </Section>
  );
}
