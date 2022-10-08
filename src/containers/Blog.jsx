import { useEffect } from 'react'
import '../styles/containers/Blog.css'
import { registerEvent } from '../firebase'
import EntriesList from '../components/EntriesList'
import ContainerTitle from '../components/SectionTitle'

const Blog = () => {

  useEffect(() => {
    registerEvent('blog')
    
  }, [])

  return (
    <div className="Blog">
      <ContainerTitle title="BLOG"/>
      <EntriesList/>
    </div>
  )
}

export default Blog