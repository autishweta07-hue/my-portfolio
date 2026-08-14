'use client'

import React from 'react'

type Project = {
  title: string
  description?: string
  technologies?: string[]
  github?: string
  demo?: string
}

type Props = {
  heading?: string
  projects?: Project[]
}

export const ProjectsBlockComponent: React.FC<Props> = ({
  heading,
  projects = [],
}) => {
  return (
    <section 
    id="project"
    className="w-full bg-white py-20">
      <div className="container mx-auto px-6">

        {/* Heading */}
        {heading && (
          <h2 className="mb-12 text-center text-4xl font-bold text-black">
            {heading}
          </h2>
        )}

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-orange-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
            >

              {/* Project Title */}
              <h3 className="mb-4 text-2xl font-bold text-black transition-colors group-hover:text-orange-500">
                {project.title}
              </h3>

              {/* Description */}
              {project.description && (
                <p className="mb-6 leading-relaxed text-gray-600">
                  {project.description}
                </p>
              )}

              {/* Technologies */}
              {project.technologies &&
                project.technologies.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">

                {/* GitHub */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-black px-5 py-2.5 font-medium text-white transition-all duration-300 hover:bg-orange-500"
                  >
                    GitHub
                  </a>
                )}

                {/* Live Demo */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border-2 border-orange-500 px-5 py-2.5 font-medium text-orange-600 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                  >
                    Live Demo
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}