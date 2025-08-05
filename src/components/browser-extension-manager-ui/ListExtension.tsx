import { useRef, useState } from "react"
import type { StatusFilter } from "./StatusFilter"
import data from "../../assets/browser-extension-manager-ui/data.json"
import PublicImage from "../PublicImage"

interface ListExtensionProps {
  filter: StatusFilter
}

function ListExtension({filter}: ListExtensionProps) {
  const modalRef = useRef<HTMLDialogElement>(null)
  const [extensionToDelete, setExtensionToDelete] = useState("")
  const [extensions, setExtensions] = useState(data)

  const handleRemoveExtension = () => {
    setExtensions((prev) => (
      prev.filter((extension) => extension.name !== extensionToDelete)
    )
  )}

  const handleShowModal = (name: string) => {
    setExtensionToDelete(name)
    modalRef.current?.showModal()
  }

  const handleToggleIsActive = (name: string) => {
    setExtensions((prev) => {
      const extension = prev.find((p) => p.name === name)
      if (extension) {
        extension.isActive = !extension.isActive
      }

      return [...prev]
    })
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        { extensions.map((extension, i) => {
          if (filter === "active" && !extension.isActive) return
          if (filter === "inactive" && extension.isActive) return

          return (
            <Extension key={i} data={extension} showModal={handleShowModal} toggleIsActive={handleToggleIsActive}/>
          )
        })}
      </div>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete extension</h3>
          <p className="py-4">Are you sure want to delete <span className="font-bold text-red-500">{extensionToDelete}</span> extension?</p>

          <div className="modal-action">
            <form method="dialog" className="space-x-2">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn dark:bg-gray-700">Close</button>
              <button className="btn bg-red-500 text-primary-content" onClick={handleRemoveExtension}>Delete</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

interface ExtensionProps {
  showModal: (name: string) => void
  toggleIsActive: (name: string) => void
  data: {
    logo: string
    name: string
    description: string
    isActive: boolean
  }
}

function Extension({data, showModal, toggleIsActive}:ExtensionProps){
  return (
    <div className="card bg-white dark:bg-base-300">
      <div className="card-body flex flex-row gap-4">
        <PublicImage src={data.logo} alt={data.name} className="size-12"/>

        <div className="space-y-0.5">
          <p className="card-title">{ data.name }</p>
          {data.description}
        </div>
      </div>

      <div className="card-actions px-4 pb-4 flex justify-between items-center">
        <button
          onClick={() => showModal(data.name)}
          className="btn btn-sm btn-outline border-neutral-400 text-neutral-700 dark:text-neutral-300 rounded-2xl hover:bg-secondary hover:border-transparent hover:text-white"
        >
          Remove
        </button>

        <input type="checkbox" className="toggle toggle-secondary" checked={data.isActive} onChange={() => toggleIsActive(data.name)}/>
      </div>
    </div>
  )
}

export default ListExtension