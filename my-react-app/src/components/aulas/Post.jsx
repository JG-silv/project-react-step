
import { useParams } from 'react-router-dom';

const posts = [
  { id: 1, titulo: 'React é incrível', conteudo: 'React é uma biblioteca para construir interfaces...' },
  { id: 2, titulo: 'Aprendendo React Router', conteudo: 'React Router permite navegação SPA...' },
  { id: 3, titulo: 'Hooks na prática', conteudo: 'Hooks como useState e useEffect são essenciais...' },
];

const Post = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) return <h2>Post não encontrado</h2>;

  return (
    <div>
      <h1>{post.titulo}</h1>
      <p>{post.conteudo}</p>
    </div>
  );
};

export default Post;
                