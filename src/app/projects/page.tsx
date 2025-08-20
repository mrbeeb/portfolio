"use client";

import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Three-tier Netflix Clone with CI/CD & Zero-Downtime Deployment",
      description:
        "Architected a fault-tolerant three-tier web application on AWS with CI/CD pipelines, auto scaling, load balancing, and distributed infrastructure to ensure zero-downtime deployments.",
      link: "https://github.com/mrbeeb", // replace with repo if available
    },
    {
      title: "Java Web Application Deployment on AWS",
      description:
        "Deployed a Java-based application using Docker, Amazon ECR, and Kubernetes. Gained hands-on experience with modern deployment practices and seamless integration.",
      link: "https://github.com/mrbeeb", // replace with repo if available
    },
    {
      title: "Dockerfile Deployment",
      description:
        "Designed Dockerfiles that improved software deployment processes for client sites, boosting both speed and reliability.",
      link: "https://github.com/mrbeeb", // replace with repo if available
    },
    {
      title: "Cloud-Based Intrusion Detection & Lockdown System (FYP)",
      description:
        "Developed a building security system using AWS Rekognition for face verification and AWS SNS for OTP delivery. Integrated ESP32-CAM with AWS APIs to automate multi-layered responses against unauthorized access.",
      link: "https://lnkd.in/dNw2fHmC", // demo link from resume
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">🚀 My Projects</h1>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition bg-white"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 my-2">{project.description}</p>
            <Link
              href={project.link}
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              🔗 View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
