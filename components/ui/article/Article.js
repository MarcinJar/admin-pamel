import Card from "@/components/card/Card";
import ArticleFooter from "./articleFooter/ArticleFooter";

export default function Article({title, author, date, children}) {
  return (
    <Card className="article">
      <h1 className="article-title">
        {title}
      </h1>

      <section className="article-data">
        {author}, {date}
      </section>

      <article className="article-content">
        {children}
      </article>

      <footer className="article-footer">
        <ArticleFooter
          views={Math.floor(Math.random() * 100)}
          words={452}
          chars={6378}
          sharing={Math.floor(Math.random() * 100)}/>
      </footer>
    </Card>
  )
}