export default function Button({ key, className, handleClick, answer,text }) {
  return (
    <button
      key={key}
      className={className}
      onClick={() => handleClick(answer)}>
      {answer ? answer : text}
    </button>
  )
}
