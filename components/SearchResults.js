import PaginationButton from "./PaginationButton";

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full pl-3 pr-3 Sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md md-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} secounds)
      </p>

      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <a href={result.link} className="text-sml line-clamp-2">
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                {result.title}
              </h2>
            </a>
          </div>

          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}

      <PaginationButton />
    </div>
  );
}

export default SearchResults;
