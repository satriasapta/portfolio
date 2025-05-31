import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'
const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Experience</motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) =>
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 1, }}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            className="w-full max-w-xl lg:w3/4">
                            <h6 className='mb-2 font-semibold'>
                                {experience.role} - {" "}
                                <span className='text-sm text-purple-100'>
                                    {experience.company}</span>
                            </h6>

                            {experience.description.split('\n').map((line, index) => (
                                <p key={index} className='mb-1 text-neutral-400'>
                                    {line}
                                </p>
                            ))}
                            {experience.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Experience