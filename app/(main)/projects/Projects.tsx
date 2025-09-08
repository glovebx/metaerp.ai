import { ProjectCard } from '~/app/(main)/projects/ProjectCard'
import { getSettings } from '~/sanity/queries'
import { type Project } from '~/sanity/schemas/project'

export async function Projects() {
  let projects: Project[] = []
  
  try {
    const data = await getSettings()
    if (data && data.projects) {
      projects = data.projects
    }
  } catch (error) {
    console.error('Failed to parse JSON response:', error)
    // 返回一个空的JSX，而不是数组，以符合组件的返回类型
    return null 
  }

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard project={project} key={project._id} />
      ))}
    </ul>
  )
}
