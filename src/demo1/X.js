import './1.css'
function X() {
  return (
    <div className="x">
      <Y />
      <div className="x-c1">X</div>
    </div>
  )
}

function Y() {
  return <div className="y-c1 y-c2">Y</div>
}

export default X