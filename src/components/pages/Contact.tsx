import ContactHero from "../Contact/ContactHero";
import ContactInfo from "../Contact/ContactInfo";
import ContactForm from "../Contact/ContactForm";

export default function Contact() {
  return (
    <main className="bg-[#FCFCFA] pb-24">
      <ContactHero />

      <section className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}