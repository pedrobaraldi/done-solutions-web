import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { PHONE_MAX_LENGTH, formatPhone, isValidPhone } from "@/lib/phone";

const offices = [
  {
    city: "Done São Paulo",
    address: "Rua Salem Bechara, 140 – Sala 908",
    region: "Centro, Osasco – SP",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [honeypot, setHoneypot] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    // Robôs preenchem o campo escondido: finge que enviou e descarta.
    if (honeypot) {
      toast.success("Mensagem enviada! Retornaremos em breve.");
      return;
    }

    if (!isValidPhone(formData.phone)) {
      toast.error("Telefone inválido. Use DDD (11) 99999-9999 ou o formato internacional +1 415 555 2671.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const emailConfigured = Boolean(serviceId && templateId && publicKey);
    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "Não informado",
      message: formData.message,
      reply_to: formData.email,
    };

    setSending(true);

    // A mensagem é guardada no Firebase e, se o EmailJS estiver configurado, também avisada por e-mail.
    // O envio conta como feito se pelo menos um dos dois funcionar.
    const [saved, emailed] = await Promise.allSettled([
      import("@/lib/messages").then((m) => m.saveContactMessage(formData)),
      emailConfigured
        ? emailjs.send(serviceId, templateId, emailParams, { publicKey })
        : Promise.reject(new Error("EmailJS não configurado (VITE_EMAILJS_* no .env)")),
    ]);

    // Resposta automática para quem enviou (template separado). Falhar aqui não cancela o envio.
    if (emailConfigured && autoReplyTemplateId) {
      emailjs
        .send(serviceId, autoReplyTemplateId, emailParams, { publicKey })
        .catch((error) => console.error("EmailJS (resposta automática):", error));
    }

    if (saved.status === "rejected") console.error("Firebase:", saved.reason);
    if (emailed.status === "rejected") console.error("EmailJS:", emailed.reason);

    if (saved.status === "fulfilled" || emailed.status === "fulfilled") {
      toast.success("Mensagem enviada! Retornaremos em breve.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      toast.error("Não foi possível enviar. Tente novamente ou fale conosco pelo WhatsApp.");
    }
    setSending(false);
  };

  return (
    <section id="contato" className="py-24 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground">
            Contato
          </h2>
        </motion.div>

        {/* Mobile Layout */}
        <div className="flex flex-col gap-6 lg:hidden">
          {/* Office Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-lg mb-1">{offices[0].city}</h4>
                  <p className="text-muted-foreground">{offices[0].address}</p>
                  <p className="text-muted-foreground">{offices[0].region}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm">Telefone</p>
                    <a href="tel:+551145565442" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                      (11) 4556-5442
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm">E-mail</p>
                    <a href="mailto:contato@donesolucoes.com.br" className="text-muted-foreground hover:text-accent transition-colors text-sm break-all">
                      contato@donesolucoes.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm">Horário</p>
                    <p className="text-muted-foreground text-sm">Seg - Sex: 08h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 shadow-card border border-border">
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                Envie sua Mensagem
              </h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name-mobile" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name-mobile"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="Seu nome"
                    maxLength={100}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email-mobile" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email-mobile"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone-mobile" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={PHONE_MAX_LENGTH}
                    id="phone-mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message-mobile" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message-mobile"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    maxLength={2000}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    placeholder="Como podemos ajudar?"
                    required
                  />
                </div>

                {/* Campo-armadilha contra robôs: pessoas não o veem nem preenchem. */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />

                <Button type="submit" variant="gold" size="lg" className="w-full" disabled={sending}>
                  <Send className="w-5 h-5" />
                  {sending ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Offices and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Office Card */}
            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-lg mb-1">{offices[0].city}</h4>
                  <p className="text-muted-foreground">{offices[0].address}</p>
                  <p className="text-muted-foreground">{offices[0].region}</p>
                </div>
              </div>
            </div>

            {/* Contact Details - flex-1 to fill remaining space */}
            <div className="bg-card rounded-xl p-8 shadow-card border border-border flex-1 flex flex-col">
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-5 flex-1 flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">Telefone</p>
                    <a href="tel:+551145565442" className="text-muted-foreground hover:text-accent transition-colors">
                      (11) 4556-5442
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">E-mail</p>
                    <a href="mailto:contato@donesolucoes.com.br" className="text-muted-foreground hover:text-accent transition-colors">
                      contato@donesolucoes.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">Horário</p>
                    <p className="text-muted-foreground">Seg - Sex: 08h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-card border border-border">
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                Envie sua Mensagem
              </h3>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="Seu nome"
                    maxLength={100}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={PHONE_MAX_LENGTH}
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    maxLength={2000}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    placeholder="Como podemos ajudar?"
                    required
                  />
                </div>

                {/* Campo-armadilha contra robôs: pessoas não o veem nem preenchem. */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />

                <Button type="submit" variant="gold" size="lg" className="w-full" disabled={sending}>
                  <Send className="w-5 h-5" />
                  {sending ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;