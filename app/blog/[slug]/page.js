export default function BlogPost({ params }) {
  return (
    <main>
      <h1>the posts {params.slug}</h1>
    </main>
  );
}
