import '../styles/containers/Blog.css'
import Card from "../components/Card"
import ContainerTitle from '../components/SectionTitle'

const Blog = () => {
  return (
    <div className="Blog">
      <ContainerTitle title="BLOG"/>
      <div className='posts-container'>
        <Card
        title="WHY"
        img="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
        description="¿Por que existe Elite Ruiz?"
        buttonText="Leer" 
        />
      </div>
    </div>
  )
}

export default Blog