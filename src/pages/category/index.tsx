import { QUERY_CATEGORY } from "@/graphql";
import { useQuery } from "@apollo/client";

export default function Home() {
    const { data, loading } = useQuery(QUERY_CATEGORY);
  
    if (loading) return <>Loading...</>;
  
    return (
      <>
        <p>Category</p>
        {data.categories.map((category: any) => {
          return (
            <>
              <li>{category.category_name}</li>
            </>
          );
        })}
      </>
    );
  }
  