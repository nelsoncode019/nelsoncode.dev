import { useEffect, useState } from "react";
import Link from "next/link";

function Blog() {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://dev.to/api/articles?tag=nelsoncode"
      );
      const data = await response.json();

      setPosts(data);
    };
    getData();
  }, []);
  return (
    <>
      <div className="flex justify-center justify-items-center">
        <div className="grid p-5 sm:grid-cols-1 md:grid-cols-2 gap-3">
          {Posts.map(
            ({ title, description, url, cover_image, id, tag_list }) => {
              return (
                // eslint-disable-next-line @next/next/link-passhref
                <Link key={id} href={url}>
                  <div className="cursor-pointer max-w-sm mb-20 rounded overflow-hidden shadow-lg shadow-blue-500/30 border-2 border-violet-600">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full"
                      src={cover_image}
                      alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{title}</div>
                      <p className="text-gray-400 text-base">{description}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      {tag_list.map((tag) => {
                        return (
                          <span
                            key={tag}
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

export default Blog;
