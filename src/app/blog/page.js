import Header from "../components/Header";

export default async function Page() {
  let data = await fetch(
    "https://rest-api-2c5f8-default-rtdb.firebaseio.com/blog.json?auth=TJGhOLFW6kWlEc9pAbXlkbh0VBwSr37lsA5I95mV"
  );
  let blogs = await data.json();
  return (
    <div className="bg-white">
      <Header>Blog</Header>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {Object.values(blogs).map((blog, index) => (
            <article
              key={index}
              className="flex max-w-xl flex-col items-start justify-between border p-6 rounded-lg shadow"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <div className="text-gray-500">{blog.date}</div>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 capitalize">
                  <a href="">
                    <span className="absolute inset-0" />
                    {blog.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 normal-case">
                  {blog.body}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900 capitalize">
                    <span className="absolute inset-0" />
                    {blog.author}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
