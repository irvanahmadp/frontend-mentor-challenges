import { useState } from "react"
import Filter from "./Filter"
import ListExtension from "./ListExtension"
import type { StatusFilter } from "./StatusFilter"

function Content() {
  const [filter, setFilter] = useState<StatusFilter>("all")

  const handleChangeFilter = (status: StatusFilter) => {
    setFilter(status)
  }

  return (
    <>
      <div className="flex justify-between mt-16 mb-8">
          <h1 className="text-2xl font-semibold">Extension List</h1>

          <Filter filter={filter} changeFilter={handleChangeFilter}/>
        </div>

        <ListExtension filter={filter}/>
    </>
  )
}

export default Content