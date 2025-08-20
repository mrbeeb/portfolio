// src/app/experience/page.tsx
export default function Experience() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">💼 Work Experience</h2>

      {/* ICT Vision */}
      <div className="p-6 border rounded-lg shadow bg-white">
        <h3 className="text-xl font-semibold">DevOps Engineer — ICT Vision</h3>
        <p className="text-gray-600">06/2023 – Present | Multan, Pakistan</p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
          <li>
            🖥️ Deployed and managed high-availability clusters with load balancing and failover for critical applications.
          </li>
          <li>
            🔒 Applied Linux security best practices (SELinux, firewalls, access control) to harden infrastructure.
          </li>
          <li>
            🐳 Designed and optimized Dockerfiles to streamline software deployments.
          </li>
        </ul>
      </div>

      {/* Final Year Project */}
      <div className="p-6 border rounded-lg shadow bg-white">
        <h3 className="text-xl font-semibold">Cloud-Based Intrusion Detection & Lockdown System (FYP)</h3>
        <p className="text-gray-600">01/2025 – 05/2025 | Dept. of Computer Engineering, BZU</p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
          <li>
            📸 Built a security system with AWS Rekognition for facial verification and AWS SNS for OTP delivery.
          </li>
          <li>
            ⚡ Integrated ESP32-CAM with AWS APIs for real-time communication and automated responses.
          </li>
          <li>
            🔐 Triggered lockdown + underground mechanism + smoke machine for failed access attempts.
          </li>
          <li>
            🎥 <a href="https://lnkd.in/dNw2fHmC" target="_blank" className="text-blue-600 hover:underline">
              Project Demo
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
