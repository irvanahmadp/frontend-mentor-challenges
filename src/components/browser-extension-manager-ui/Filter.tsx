import { cn } from "../../lib/utils"
import type { StatusFilter } from "./StatusFilter"

interface FilterProps {
  filter: StatusFilter
  changeFilter: (status: StatusFilter) => void
}

const STATUSES: StatusFilter[]= ['all', 'active', 'inactive']

function Filter({filter, changeFilter}: FilterProps){
  return (
    <div className="space-x-2">
      {STATUSES.map((status, i) => (
        <button
          key={i}
          onClick={() => changeFilter(status)}
          className={cn(
            "btn btn-sm rounded-3xl outline-secondary/75 focus:outline-2 focus:border-0",
            filter === status && "btn-secondary")}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default Filter