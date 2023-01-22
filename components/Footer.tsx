import email from '@/constants/email'

export default function Footer() {
  const href = `mailto:${email}`

  return (
    <>
      <a href={href}>{email}</a>
    </>
  )
}
