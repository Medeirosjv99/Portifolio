import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { profile, socials } from '../data/profile.js'

const initialForm = { name: '', email: '', message: '' }

// Sem backend: o formulário monta o e-mail e abre o aplicativo de e-mail do
// visitante já preenchido. Para receber mensagens direto, troque o handleSubmit
// por um serviço como Formspree ou uma API própria.
function buildMailto({ name, email, message }) {
  const subject = `Contato pelo portfólio — ${name}`
  const body = `${message}\n\n${name}\n${email}`
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function validate(form) {
  const errors = {}
  if (form.name.trim().length < 2) errors.name = 'Informe seu nome.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Informe um e-mail válido.'
  if (form.message.trim().length < 10) errors.message = 'Escreva uma mensagem com pelo menos 10 caracteres.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return undefined
    const timer = setTimeout(() => setCopied(false), 2200)
    return () => clearTimeout(timer)
  }, [copied])

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return
    window.location.href = buildMailto(form)
    setSent(true)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contato" className="section section--alt">
      <div className="container">
        <SectionHeading index="07" eyebrow="Vamos conversar" title="Vamos desenvolver algo juntos?">
          Estou aberto a conversas sobre oportunidades, projetos e trocas de experiência. Respondo o mais rápido
          possível.
        </SectionHeading>

        <div className="contact">
          <div className="contact__channels" data-reveal>
            <div className="email-card">
              <span className="email-card__label">E-mail</span>
              <a href={`mailto:${profile.email}`} className="email-card__value">
                {profile.email}
              </a>
              <button type="button" className="btn btn--ghost btn--sm" onClick={copyEmail}>
                <Icon name={copied ? 'check' : 'copy'} size={16} />
                {copied ? 'Copiado!' : 'Copiar e-mail'}
              </button>
              <span className="visually-hidden" role="status">
                {copied ? 'E-mail copiado para a área de transferência' : ''}
              </span>
            </div>

            <ul className="channel-list">
              {socials.map((social) => (
                <li key={social.id}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="channel">
                    <span className="channel__icon">
                      <Icon name={social.icon} size={20} />
                    </span>
                    <span className="channel__text">
                      <strong>{social.label}</strong>
                      <span>{social.handle}</span>
                    </span>
                    <Icon name="arrowUpRight" size={18} className="channel__arrow" />
                  </a>
                </li>
              ))}
            </ul>

            {profile.resumeUrl && (
              <a href={profile.resumeUrl} className="btn btn--primary btn--block" download>
                <Icon name="download" size={18} /> Baixar currículo (PDF)
              </a>
            )}
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate data-reveal>
            <div className="field">
              <label htmlFor="contact-name">Nome</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={update('name')}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
              />
              {errors.name && (
                <span id="contact-name-error" className="field__error">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="field">
              <label htmlFor="contact-email">E-mail</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={update('email')}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
              />
              {errors.email && (
                <span id="contact-email-error" className="field__error">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="field">
              <label htmlFor="contact-message">Mensagem</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={update('message')}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
              />
              {errors.message && (
                <span id="contact-message-error" className="field__error">
                  {errors.message}
                </span>
              )}
            </div>
            <button type="submit" className="btn btn--primary btn--block">
              <Icon name="send" size={18} /> Enviar mensagem
            </button>
            <p className="contact-form__hint" role="status">
              {sent
                ? 'Seu aplicativo de e-mail foi aberto com a mensagem pronta. É só enviar!'
                : 'Ao enviar, seu aplicativo de e-mail abre com a mensagem já preenchida.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
