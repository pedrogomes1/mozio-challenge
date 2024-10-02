export function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row gap-1">
        <div className="w-2 h-2 rounded-full bg-black animate-bounce" />
        <div className="w-2 h-2 rounded-full bg-black animate-bounce [animation-delay:-.3s]" />
        <div className="w-2 h-2 rounded-full bg-black animate-bounce [animation-delay:-.5s]" />
      </div>
    </div>
  )
}
