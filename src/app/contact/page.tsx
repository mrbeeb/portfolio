// src/app/contact/page.tsx
export default function Contact() {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold">📞 Contact Me</h2>
      <p className="text-gray-700">
        I’m always open to collaboration, opportunities, or just a quick tech chat. Feel free to reach out!
      </p>
      <ul className="space-y-2">
        <li>
          📧 Email:{" "}
          <a href="mailto:iammuneebali@gmail.com" className="text-blue-600">
            iammuneebali@gmail.com
          </a>
        </li>
        <li>
          💼 LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/iammuneebali"
            className="text-blue-600"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/iammuneebali
          </a>
        </li>
        <li>
          👨‍💻 GitHub:{" "}
          <a
            href="https://github.com/mrbeeb"
            className="text-blue-600"
            target="_blank"
            rel="noreferrer"
          >
            github.com/mrbeeb
          </a>
        </li>
        <li>📱 Phone: +92 311 6756808</li>
      </ul>
    </section>
  )
}
