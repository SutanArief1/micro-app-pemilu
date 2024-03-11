import { ReactNode, useEffect } from "react"

interface IModalProps {
  children: ReactNode
  onClose: () => void
}

function Modal({ children, onClose }: IModalProps): ReactNode {
  useEffect(() => {
    document.body.classList.add("overflow-hidden")

    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [])

  return (
    <div onClick={() => (onClose())} className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-black bg-opacity-65">
      <div onClick={(e) => (e.stopPropagation())} className="bg-white border-2 w-[450px] min-h-[500px] rounded-xl p-10 flex flex-col overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        {children}
      </div>
    </div>

  )
}

export default Modal