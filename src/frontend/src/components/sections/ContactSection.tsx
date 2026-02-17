import SectionShell from './SectionShell';
import ContactForm from '../contact/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@websolutions.com',
    href: 'mailto:hello@websolutions.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: null,
  },
];

export default function ContactSection() {
  return (
    <SectionShell
      id="contact"
      title="Get in Touch"
      subtitle="Let's discuss your next project and bring your ideas to life"
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Let's Connect</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond
              as soon as possible.
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-lg text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg text-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </SectionShell>
  );
}
