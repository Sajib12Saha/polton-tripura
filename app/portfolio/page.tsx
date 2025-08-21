import { PortfolioCard } from "@/components/portfolio-card"
import Link from "next/link"
import { PORTFOLIO } from "@/data"   

interface PortfolioPageProps {
  searchParams?: Promise<{ page?: string }>
}

// how many items per page
const ITEMS_PER_PAGE = 6

const PortfolioPage = async ({ searchParams }: PortfolioPageProps) => {
  const params = await searchParams
  const currentPage = Number(params?.page || 1)

  // paginate portfolio
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const portfolios = PORTFOLIO.slice(startIndex, endIndex)
  const totalPages = Math.ceil(PORTFOLIO.length / ITEMS_PER_PAGE)

  return (
    <div className="mt-18 space-y-8">
      <div className="flex flex-col items-center">
        <p className="text-primary font-semibold text-lg md:text-xl">
          Visit my portfolio and keep your feedback
        </p>
        <h2 className="text-5xl md:text-6xl font-bold dark:text-gray-300">
          My Portfolio
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolios.map((image, index) => (
          <div key={index}>
            <PortfolioCard project={image} />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 pt-10">
    {currentPage > 1 ? (
  <Link
    href={`?page=${currentPage - 1}`}
    className="px-4 py-2 shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.8)]
               dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.16)]
               rounded hover:bg-primary transition"
  >
    Previous
  </Link>
) : (
  <span className="px-4 py-2 rounded opacity-50 pointer-events-none shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.8)]
                    dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.16)]">
    Previous
  </span>
)}

<span className="text-lg dark:text-gray-300 font-medium">
  Page {currentPage} of {totalPages}
</span>

{currentPage < totalPages ? (
  <Link
    href={`?page=${currentPage + 1}`}
    className="px-4 py-2 shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.8)]
               dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.16)]
               rounded hover:bg-primary transition"
  >
    Next
  </Link>
) : (
  <span className="px-4 py-2 rounded opacity-50 pointer-events-none shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.8)]
                    dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.16)]">
    Next
  </span>
)}


      </div>
    </div>
  )
}

export default PortfolioPage
