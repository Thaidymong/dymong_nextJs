import { QUERY_ARTICLES } from "@/graphql";
import { useQuery } from "@apollo/client";
import Link from "next/link";

export default function ArticlesPage() {
  const { data, loading } = useQuery(QUERY_ARTICLES);

  if (loading) return <>Loading...</>;

  return (
    <>
      <h3 className="text-center text-bold">Article Page</h3>
      <ul>
        <div className="row p-4">
          {data.articles.map((article: any) => {
            console.log(data);
            return (
              <>
                <div className="col-lg-4 col-md-6 clo-sm-12 pt-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h2 className="card-title">{article.title}</h2>
                      <h5 className="card-title">{article.summary}</h5>
                      <img src={article.image} width="100%" />
                      <p className="card-text">{article.description}</p>
                    </div>
                    <div className="card-footer">
                      <Link
                        href={`/articles/${article.id}`}
                        className="btn btn-primary btn-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}{" "}
        </div>
      </ul>
    </>
  );
}
