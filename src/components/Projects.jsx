import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Projects</motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <img src={project.image}
                                width={150}
                                height={150}
                                className='mb-6 rounded'
                                alt={project.title} />
                        </motion.div>
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <div className="mb-2 flex items-center gap-2">
                                <h6 className='font-semibold'>{project.title}</h6>
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/50 px-3 py-1 text-sm font-medium text-neutral-300 transition-all hover:bg-neutral-800 hover:text-white"
                                    >
                                        <FaGithub />
                                        <span>View on GitHub</span>
                                    </a>
                                )}
                            </div>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
