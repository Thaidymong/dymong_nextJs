import { QUERY_ARTICLE } from "@/graphql";
import { client } from "@/libs/apollo";

type ArticleProps={
    title: string
    description: string
    image: string
    summary: string
    created_at: string
    category: {
        category_name: string
    };
}
function ArticlesDetail({article}: {article: ArticleProps}){

    const {title,description,summary,created_at,image,category}= article
    const {category_name} = category;
    return (
      <>
          <div className="container mt-5">
            <div className="row">
                <div className="col-lg-8">
                    <article>
                        <header className="mb-4">
                            <h1 className="fw-bolder mb-1">{title}</h1>
                           
                            <div className="text-muted fst-italic mb-2">Posted on {created_at}</div>
                         
                            <a className="badge bg-secondary text-decoration-none link-light" href="#!">{category_name}</a>
                        </header>
                        <section className="mb-5">
                            <h4 className="fs-5 mb-4">{summary}</h4>
                        </section>
                        <figure className="mb-4"><img className="img-fluid rounded" src={image} alt="..." /></figure>
                     
                        <section className="mb-5">
                            <p className="fs-5 mb-4">{description}</p>
                        </section>
                    </article>
                    <section className="mb-5">
                        <div className="card bg-light">
                            <div className="card-body">
                                <form className="mb-4"><textarea className="form-control" placeholder="Join the discussion and leave a comment!"></textarea></form>
                                
                                <div className="d-flex mb-4">
                                   
                                    <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div className="ms-3">
                                        <div className="fw-bold">Commenter Name</div>
                                        If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                     
                                        <div className="d-flex mt-4">
                                            <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div className="ms-3">
                                                <div className="fw-bold">Commenter Name</div>
                                                And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
                                            </div>
                                        </div>
                                       
                                        <div className="d-flex mt-4">
                                            <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div className="ms-3">
                                                <div className="fw-bold">Commenter Name</div>
                                                When you put money directly to a problem, it makes a good headline.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div className="ms-3">
                                        <div className="fw-bold">Commenter Name</div>
                                        When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-header">Search</div>
                        <div className="card-body">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Categories</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">Web Design</a></li>
                                        <li><a href="#!">HTML</a></li>
                                        <li><a href="#!">Freebies</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">JavaScript</a></li>
                                        <li><a href="#!">CSS</a></li>
                                        <li><a href="#!">Tutorials</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Side Widget</div>
                        <div className="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export async function getServerSideProps({ params }: any) {
    const { id } = params;
    const { data } = await client.query({
      query: QUERY_ARTICLE,
      variables: {
        id: Number(id),

      },
      fetchPolicy: "no-cache"
    });
  
    return {
      props: {
        article: data.article,
      },
    };
  }
  
  export default ArticlesDetail;
